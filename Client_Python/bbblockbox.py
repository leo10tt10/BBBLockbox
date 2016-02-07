import paramiko
from time import sleep
from matplotlib import pyplot
import math
import numpy

#to be done:
#implement communication with AD5689BRUZ
#and with farnell#1789517 (MICROCHIP - MCP4361-103E/ST. - IC, DIGITAL POT 10KOHM 257 QUAD 20-TSSOP)


class BBBLockbox(object):
    
    def __init__(self,hostname='192.168.7.2',user='root',password='test',verbose=True,autostart=True,nxmax=4096):
        self.verbose = verbose
        self.delay=0.05
        self.apprunning=False
        self.hostname=hostname
        self.user=user
        self.password=password
        self.port=22
        self.nxmax=nxmax
        self.ssh = paramiko.SSHClient()
        self.ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        self.ssh.connect(hostname,username=self.user,password=self.password,port=self.port)
        self.channel = self.ssh.invoke_shell()

        if not self.loadlockbox():
            print "Error: Lockbox device tree overlay not loaded!"
        self.ask('cd lb/lockbox')
        sleep(0.2)

        if autostart:
            self.startapp()

    def setPID(self,nxmax=-1,divisorshift=0,xcoeff=[1,0,0,0,0,0,0,0],ycoeff=[0,0,0,0,0,0,0,0],zcoeff=[0,0],xoffset=0,yoffset=0):
        coefficients = xcoeff+ycoeff+zcoeff+[xoffset]+[yoffset]
        if nxmax > 0:
            self.nxmax = nxmax
        #data=[statusword(loop type),nxmax(number of x to remember),]
        self.writemem(memory=2, offset=0, data=[0,self.nxmax,divisorshift])
        self.writemem(memory=2, offset=16, data=coefficients)
        #launch PID by setting statusword to 'filter', 
        #such that the new filter parameters are loaded into the PRU registers
        self.writemem(memory=2, offset=0, data=[4])
    
    def setTriangle(self):
        self.writemem(memory=2, offset=0, data=[3])
        
    def setDFilter(self):
        self.writemem(memory=2, offset=0, data=[4])
        
    def setIdle(self):
        self.writemem(memory=2, offset=0, data=[0])

    def setEcho(self):
        self.writemem(memory=2, offset=0, data=[6])

    def pause(self):
        self.laststatus = self.readmem(memory=2, offset=0, length=1)
        self.setIdle()
        return self.laststatus
    
    def resume(self):
        self.writemem(memory=2, offset=0, data=self.laststatus)
        return self.laststatus
    
    def clearFIFOcount(self):
        status=self.readmem(memory=2, offset=0, length=1)
        self.writemem(memory=2, offset=0, data=[5])
        sleep(self.delay)
        diagnostics = self.readmem(memory=2, offset=0, length=64)
        diagnostics[0]=status[0]
        self.writemem(memory=2, offset=0, data=status)
        return diagnostics
    
    def printstatus(self):
        states=['Idle','PID','unknown','triangle','digital filter changed','clearFIFO','Echo']
        state = self.clearFIFOcount()
        print "Loop type: "+str(state[0])+" (" + states[state[0]]+")"
        print "Number of points in record: "+str(state[1])
        print "Buffer count before cleanup: "+str(state[8])
        print "Buffer count after cleanup: "+str(state[9])
        print "Buffer IRQ status before cleanup: "+str(state[10])
        print "Buffer IRQ after cleanup: "+str(state[11])
        print "X-Coefficients [GX0,GX1,GX2,GX3]: "+str(state[16:24])
        print "Y-Coefficients [GY1,GY2,GY3,GY4]: "+str(state[24:32])
        print "Z-Coefficient (global): "+str(state[32])
        print "X-Offset: "+str(state[33])
        print "Y-Offset: "+str(state[34])
        #return state
    
    def getData(self,length=-1):
        self.pause()
        if length<=0:
            length=self.nxmax
        data=self.readmem(memory=1, offset=0, length=length)
        self.resume()
        return data
    
    def getOutData(self,length=-1):
        self.pause()
        if length<=0:
            length=self.nxmax
        data=self.readmem(memory=0, offset=0, length=length)
        self.resume()
        return data

    def plotData(self,length=-1):
        data=self.getData(length=length)
        pyplot.plot(data)

    def plotOutData(self,length=-1):
        data=self.getOutData(length=length)
        pyplot.plot(data)
    
    def isapprunning(self):
        if self.ask("H").endswith("Hello Master\r\n"):
            self.apprunning = True
        else:
            self.apprunning = False
        return self.apprunning
        
    def startapp(self):
        if not self.isapprunning():
            self.ask('make')
            sleep(4)
            self.ask()
            data = self.ask('./lockbox')
            sleep(self.delay*3)
            buf = self.ask()
            if buf:
                data += buf
        running = self.isapprunning()
        if not running:
            sleep(self.delay*30)
            running = self.isapprunning()
        self.setdefaults()
        return running
    
    def setdefaults(self):
        self.out_slow = 2**15
        self.out_offset = 2**15
        self.in_offset = 2**15
        self.in_gain = 2**8
        self.out_amp = 6000

    def recompile(self):
        self.endapp()
        self.startapp()
        self.setPID()
    
    def endapp(self):
        if self.isapprunning():
            self.writemem(memory=2,offset=0,data=[2])
            self.ask("T")
        sleep(self.delay)
        buf = self.ask()
        #if not buf.find("root")==-1:
        #    self.apprunning=False
        #return not self.apprunning
        return not self.isapprunning()
    
    def writemem(self,memory=2,offset=0,data=[0]):
        if self.apprunning:
            r=self.ask("W")
            if r.endswith("Memory?\r\n"):
                r=self.ask(str(memory))
                if r.endswith("Offset?\r\n"):
                    r=self.ask(str(offset))
                    if r.endswith("Length?\r\n"):
                        r=self.ask(str(len(data)))
                        if r.endswith("Data?\r\n"):
                            for d in data:
                                self.write(str(d)+'\n')
            sleep(self.delay*math.ceil(len(data)/100))
            r=self.ask()
            if "Success!" in r:
                self.log("[Master]: Data successfully written!")
                return True
            else:
                self.log("[Master]: Data transfer failed!")
                self.read()
                return False
            
    #C code which corresponds
    #unsigned short* memories[] = {pru0Mem_int,pru1Mem_int,sharedMem_int};
    #for(i=0;i<length;i++)
    #    printf("%d\n",memories[mem][i]);

    def writeSPI(self,memory=0,data=[0]):
        if self.apprunning:
            r=self.ask("P")
            if r.endswith("SPI?\r\n"):
                r=self.ask(str(memory))
                if r.endswith("Length?\r\n"):
                    r=self.ask(str(len(data)))
                    if r.endswith("Data?\r\n"):
                        for d in data:
                            self.write(str(d)+'\n')
            sleep(self.delay*math.ceil(len(data)/100))
            r=self.ask()
            if "Success!" in r:
                self.log("[Master]: Data successfully written!")
                return True
            else:
                self.log("[Master]: Data transfer failed!")
                self.read()
                return False

    def setDAC(self,value,dac="1A"):
        self.writeSPI(memory=0, data=[128,0,1])
        #self.writeSPI(memory=0,data=[16*5+0,0,9])
        sleep(0.1)
        coms={"A1":[0,49],"A2":[49,0],"B1":[0,56],"B2":[56,0]}
        com = coms[dac]
        self.writeSPI(memory=0, data=[com[0],self.highbyte(value),self.lowbyte(value),com[1],self.highbyte(value),self.lowbyte(value)])

    def setPotentiometer0(self,value):
        wvalue = value % 257
        self.writeSPI(memory=1, data=[self.highbyte(wvalue)+0, self.lowbyte(wvalue)])

    def setPotentiometer1(self,value):
        wvalue = value % 257
        self.writeSPI(memory=1, data=[self.highbyte(wvalue)+16, self.lowbyte(wvalue)])

    def setPotentiometer2(self,value):
        wvalue = value % 257
        self.writeSPI(memory=1, data=[self.highbyte(wvalue)+96, self.lowbyte(wvalue)])

    def setPotentiometer3(self,value):
        wvalue = value % 257
        self.writeSPI(memory=1, data=[self.highbyte(wvalue)+112, self.lowbyte(wvalue)])

    def readmem(self,memory=2,offset=0,length=1):
        data=list()
        if self.apprunning:
            r=self.ask("R")
            if r.endswith("Memory?\r\n"):
                r=self.ask(str(memory))
                if r.endswith("Offset?\r\n"):
                    r=self.ask(str(offset))
                    if r.endswith("Length?\r\n"):
                        r=self.write(str(length)+'\n')
                        sleep(self.delay*math.ceil(length/100))
                        buf=self.read()
                        data=[numpy.int16(d) for d in buf.split('\r\n')[1:length+1]]
            r=self.ask()
            if "Success!" in buf+r and len(data)==length:
                self.log("[Master]: Data successfully read!")
                return data
            else:
                self.log("[Master]: Data transfer failed!")
                self.read()
                data = [numpy.int16(d) for d in (buf+r).split('\r\n')[1:length+1]]
                #data=numpy.frombuffer(raw,dtype = numpy.int16,offset = 0)
                return data

    def write(self,text):
        if self.channel.send_ready() and not text=="":
            return self.channel.send(text)
        else:
            return -1

    def read_nbytes(self,nbytes):
        if self.channel.recv_ready():
            return self.channel.recv(nbytes)
        else:
            return ""
    
    def read(self):
        sumstring=""
        string = "1"
        while string != "":
            string = self.read_nbytes(1024)
            sumstring += string
        self.log(sumstring)
        return sumstring
    
    def askraw(self,question=""):
        self.write(question)
        sleep(self.delay)
        return self.read()
  
    def ask(self,question=""):
        return self.askraw(question+'\n')

    def __del__(self):
        #send a termination command to the app
        self.endapp()
        self.channel.close()
        self.ssh.close()

    def loadlockbox(self):
        string = self.ask("cat $SLOTS")
        sleep(1)
        string += self.ask()
        if string.find("ff:P-O-L Override Board Name,00A0,Override Manuf,lockbox") == -1:
            string = self.ask("echo BB-SPI0-01 > $SLOTS")
            string += self.ask("echo lockbox > $SLOTS")
            sleep(1)
            string += self.ask("echo BB-SPI1-01 > $SLOTS")
            sleep(1)
            string += self.ask()
        if string.find("ff:P-O-L Override Board Name,00A0,Override Manuf,lockbox") == -1:
            return False
        else:
            return True
    
    def reboot(self):
        self.endapp()
        self.ask("shutdown -r now")
        self.__del__()

    def shutdown(self):
        self.endapp()
        self.ask("shutdown now")
        self.__del__()
    
    def highbyte(self,value):
        return (value-(value%256))/256

    def lowbyte(self,value):
        return value%256

    def log(self,text):
        if self.verbose:
            print text

    @property
    def in_gain(self):
        return self._in_gain
    @in_gain.setter
    def in_gain(self,val):
        self._in_gain = val
        self.setPotentiometer0(val)

    #scale: 0==-10V @1MOhm (half on 50 Ohms), max==0V
    @property
    def out_offset(self):
        return self._out_offset
    @out_offset.setter
    def out_offset(self,val):
        self._out_offset = val
        self.setDAC(val, 'A1')

    #raw effect: 0-5V at negative Opamp entry
    @property
    def in_offset(self):
        return self._in_offset
    @in_offset.setter
    def in_offset(self,val):
        self._in_offset = val
        self.setDAC(val, 'A2')

    #output amplitude maximally +-5V around offset
    @property
    def out_amp(self):
        return self._out_amp
    @out_amp.setter
    def out_amp(self,val):
        self._out_amp = val
        self.setDAC(val, 'B1')

#scale: 0==0V, 2**16-1 == 10V
    @property
    def out_slow(self):
        return self._out_slow
    @out_slow.setter
    def out_slow(self,val):
        self._out_slow = val
        self.setDAC(val, 'B2')

    def softresetDAC(self):
        self.writeSPI(memory=0,data=[16*6,0,0,16*6,0,0])
    
    def initDAC(self):
        #reset
        self.writeSPI(memory=0,data=[16*6,0,0,16*6,0,0])
        #init daisy chains
        self.writeSPI(memory=0,data=[16*8+0,0,1])
        self.writeSPI(memory=0,data=[16*8+0,0,1,0,0,0])
        #init ignore LDAC
        self.writeSPI(memory=0,data=[16*5+0,0,9])
        self.writeSPI(memory=0,data=[16*5+0,0,9,0,0,0])
        
        
#final executions
#b = BBBLockbox()
