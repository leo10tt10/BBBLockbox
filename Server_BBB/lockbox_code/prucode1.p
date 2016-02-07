// prucode1.p
// Code for PRU1

.setcallreg r0.w2
.origin 0
.entrypoint START

//This is the first instruction that will be executed. For convenience, the START section appears only after several definitions
FIRSTINSTRUCTION: 
	JMP START

//Many definitions: Register names, Constants, Macros etc.
#include "prucode.hp"

/////////////////////CALL routines////////////

//empty FIFO0 buffer so that zero values are in the 'pipeline'
EMPTYFIFOBUFFER:
	//get IRQ status before emptying
	READFIFOIRQ VALUE1.w0

	EMPTYFIFOBUFFERLOOP:
		//read a value
		READFIFO VALUE0.w0
		//check buffer count
		READFIFOCNT VALUE0.w2
		//read more values until the buffer is empty
		QBNE EMPTYFIFOBUFFER,VALUE.w2,0x0000

	//clear and read out the status of the buffer
	CLEARFIFOIRQ VALUE1.w2
	RET

//Init the whole program
INIT:
	//global config settings    
    LBCO    VALUE, CONST_PRUCFG, 4, 4
    CLR     VALUE, VALUE, 4   	// Clear SYSCFG[STANDBY_INIT] to enable OCP master port
	CLR		VALUE, VALUE, 3		// set no-standby mode
    SET		VALUE, VALUE, 2		// set no-standby mode
    CLR		VALUE, VALUE, 1		// enable no-idle mode
    SET		VALUE, VALUE, 0		// enable no-idle mode
    SBCO    VALUE, CONST_PRUCFG, 4, 4
	
    LBCO    VALUE, CONST_PRUCFG, 0x34, 4
    CLR     VALUE, VALUE, 1   	// Disable XIN/XOUT shift functinality, where shift is defined by bits R0[4:0]
    CLR     VALUE, VALUE, 0   	// PRU0 has highest priority over common scratch pad access (gets first access)
    SBCO    VALUE, CONST_PRUCFG, 0x34, 4
	
    // Configure the programmable pointer registers
    //Configs for PRU1 at offset 0x000024000, for PRU0 at offset 0x00022000
    MOV     ADDR, 0x00024000  
    //CONST_PRU01DRAM (C24) and CONST_PRU10DRAM (C25) offset (bits 11-8) config with bits 0-7 resp. 16-23
    MOV     VALUE, 0x00000000
    SBBO    VALUE,ADDR,0x20,4
    //CONST_PRUSHAREDRAM (C28) bits 23-8 are given by bits 15:0 of VALUE
    MOV     VALUE, 0x00010000>>8
    SBBO    VALUE,ADDR,0x28,4
    //CONST_DDR (C31) bits 23-8 are given by bits 31:16 of VALUE
    MOV     VALUE, 0x00000000
    SBBO    VALUE,ADDR,0x2C,4

	// setup address and other constant registers
	//Output mask needed to ensure proper behaviour of DAC (i.e. to make sure that data does not set control bits)
	MOV OUTMASK,0x0FFF
	
	//set output to mid-position
	MOV VALUE,0x00000800
	WRITEOUT VALUE
	
	// Initialize Pru Ram to zero
	MOV VALUE,0x00000000
	FILLDRAM VALUE
	FILLSHAREDRAM VALUE

	RET
	
SETUPADC:
	// SETUP ADDRESS REGISTERS
	MOV ADC_ADDR,ADC_TSC
	
	//because Immediate value addressing only goes up to 255 and 
	//because we need an offset of 256 for accessing the FIFO, increase the base address by 1
	//this means, that all other offsets need to be reduced by 1 in the following w.r.t. their offsets from the TRM
	ADD ADC_ADDR,ADC_ADDR,1
	
	//disable TSC_ADC_SS module,dont write channel id into FIFO 
	//and disprotect step config registers    	
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000004    //as above said already: disprotect and disable...
    SBBO VALUE,ADDR,0x40,4  //write value to CTRL register
	
    //ADC_CLKDIV
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000   //the 24MHz-clock rate is divided by VALUE+1 to yield ADC_CLOCK 
    SBBO VALUE,ADDR,0x4C,4 //important to write all 4 bytes even though only the first 2 count - if this is not done, the change doesnt take effect for some reason  
    
    //TS_CHARGE_STEPCONFIG
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000    //no unnecessary delay, do nothing here
    SBBO VALUE,ADDR,0x5C,4   
	
    //TS_CHARGE_DELAY
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000001    //value must be greater than 0
    SBBO VALUE,ADDR,0x60,4   
    
	//STEPCONFIG1: SW continuous and no averages
	//bits 22-19: AINx; bit1-0 = 01 for continuous
    //bits 4-2 averaging: 100=16avg,000no avg
    MOV ADDR,ADC_TSC
    //MOV VALUE,0x00080001 //continuous mode
    MOV VALUE,0x00080000 //sw one-shot mode for AIN1
    //MOV VALUE,0x00300000 //sw one-shot mode for AIN6
    SBBO VALUE,ADDR,0x64,4   
	
    //STEPDELAY1 - add highest two bytes any value if the sampling need to be slowed down
    //integrate signal at analog input over 1 analog sample cycles
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000    //bits 31-24: SampleDelay; bits 17-0: OpenDelay
    SBBO VALUE,ADDR,0x68,4   //STEPDELAY1  

	//for future implementations of averaging etc., we also configure steps 2 and 3 although they are never used here
	
	//STEPCONFIG2: SW continuous and no averages
	//bits 22-19: AINx; bit1-0 = 01 for continuous
    //bits 4-2 averaging: 100=16avg,000no avg
    MOV ADDR,ADC_TSC
    //MOV VALUE,0x00080001 //continuous mode
    MOV VALUE,0x00080000 //one-shot mode
    SBBO VALUE,ADDR,0x6C,4   
	
    //STEPDELAY2
    //integrate signal at analog input over 1 analog sample cycles
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000    //bits 31-24: SampleDelay; bits 17-0: OpenDelay
    SBBO VALUE,ADDR,0x70,4   //STEPDELAY2  
	
	//STEPCONFIG3: SW continuous and no averages
	//bits 22-19: AINx; bit1-0 = 01 for continuous
    //bits 4-2 averaging: 100=16avg,000no avg
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00080001    
    SBBO VALUE,ADDR,0x74,4   

    //STEPDELAY3
    //integrate signal at analog input over 1 analog sample cycles
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000  //bits 31-24: SampleDelay; bits 17-0: OpenDelay
    SBBO VALUE,ADDR,0x78,4   //STEPDELAY2  
	
	//STEPENABLE:    
	//enable only STEP1 a.k.a. bit 1
    //here: disable all steps for now
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000 
    SBBO VALUE,ADDR,0x54,4
	
	//FIFO0THRESHOLD
    MOV ADDR,ADC_TSC
    MOV VALUE,0x000000FF //bits 5:0  = Value-1 for FIFO Threshold interrupt generation
    SBBO VALUE,ADDR,0xE8,4
	
	//SYSCONFIG
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000000 //bits 3:2  00=force idle, 01=no idle, 10=smart idle, 11=smart idle+wakeup
    SBBO VALUE,ADDR,0x10,4
	
    //enable TSC_ADC_SS module,dont write channel id 
	//and write-protect step config registers
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000001 	
    SBBO VALUE,ADDR,0x40,4

	RET

START:
    //Zero all registers to avoid ambiguity
    ZERO &r0,124
    //Initialise memory and registers
    CALL INIT
	
    //Setup ADC
    CALL SETUPADC
	
	//empty FIFO0 buffer in case it is not clean
	CALL EMPTYFIFOBUFFER
	//re-zero the buffer variables used by EMPTYFIFOBUFFER
    MOV VALUE0,0x00000000
    MOV VALUE1,0x00000000
    
    //clear DAC output to zero
    MOV VALUE,0x00000000
	WRITEOUT VALUE
	
	//initiate the Multiply-and-accumulate mode
	ENABLEMAC
	
    //Launch main routine
	JMP MAINLOOP
	
MAINLOOP:
    //GET the status word from the host program to find out which loop type we are in
    LBCO statusword,CONST_PRUSHAREDRAM,0,2
	
 	//CASES: 0 = idle/maintenance, 1=PID, 2=undefined, 3=triangle, 4=digital filter settings changed, 5=clean FIFO buffer and output status
 	QBEQ INITPID,statusword.w0,1
 	QBEQ FILTER,statusword.w0,4
 	QBEQ TRIANGLE,statusword.w0,3
 	QBEQ ENDPROGRAM,statusword.w0,2
	QBEQ MAINTENANCE,statusword.w0,0
	QBEQ CLEARFIFOBUFFER,statusword.w0,5
	QBEQ ECHO,statusword.w0,6
	
//remain in maintenance mode until status word is changed by host program
MAINTENANCE:
	//get number of digital values to be iterated about 
	LBCO NXMAX,CONST_PRUSHAREDRAM,2,2
	
	//get all coefficients and offsets
	LBCO GX0,CONST_PRUSHAREDRAM,32,40

	//Wait a little, and go back to the main loop to see if a status change is required
	//XIN 14,VALUE1,4 //wait for PRU0 to give timing signal - not here	
	JMP MAINLOOP 	


//quickly implement new filter settings and return to the PID loop without inducing too much latency
FILTER:
	//get number of digital values to be iterated about (first word)
	LBCO NXMAX,CONST_PRUSHAREDRAM,2,2

	//get the divisorshift parameter from the fifth byte
	LBCO DIVISORSHIFT,CONST_PRUSHAREDRAM,4,1
	
	//get all coefficients and offsets
	LBCO GX0,CONST_PRUSHAREDRAM,32,40

    //set state to idle so the buffer remains untouched by any other loop type until the host program wants to continue
    MOV statusword,0x0001
    SBCO statusword,CONST_PRUSHAREDRAM,0,2
	
	JMP INITPID


//clear the FIFO buffer, and transfer some diagnostic data to shared memory for host program access
//for temporarily storing data, the statusword register can be (ab)used, because it is set to zero at the end of this step anyway
CLEARFIFOBUFFER:
    //get buffer count before
    READFIFOCNT statusword.w0
	//empty the buffer
	CALL EMPTYFIFOBUFFER
    //get buffer count after cleaning
    READFIFOCNT statusword.w2
    //store buffer counts in shared memory
    SBCO statusword,CONST_PRUSHAREDRAM,16,4
    //store status of FIFO IRQ (in VALUE1 from EMPTYFIFOBUFFER) in shared memory
    SBCO VALUE1,CONST_PRUSHAREDRAM,20,4
    
    //set state to idle so the buffer remains untouched by any other loop type until the host program wants to continue
    MOV statusword,0x00000000
    SBCO statusword,CONST_PRUSHAREDRAM,0,2
	JMP MAINLOOP

//Initiate the triangle at its highest value
TRIANGLE:
	MOV VALUE0,4096
//decrease the triangle value, timing by PRU0
TRIANGLELOOP:		//20 cycles per loop == 100 ns; triangle period == 409.6 microseconds (with XIN 239.45)
	XIN 14,Z0,4 //wait for PRU0 to give timing signal
	SUB VALUE0,VALUE0,1		//1
	WRITEOUT VALUE0			//4
	QBEQ MAINLOOP,VALUE0,0
   	JMP TRIANGLELOOP
	
ECHO:
	CALL EMPTYFIFOBUFFER
	ENABLESTEP1 													//3 cycles
	XIN 14,Z0,4 //wait for PRU0 to give timing signal
	XIN 14,Z0,4 //wait for PRU0 to give timing signal
    MOV X0,0x00000000
ECHOLOOP:
	WRITEOUT X0
	XIN 14,Z0,4 //wait for PRU0 to give timing signal
	ENABLESTEP1 													//3 cycles
	READFIFO X0
	//make sure we need not to go to the mainloop
	LBCO statusword,CONST_PRUSHAREDRAM,0,2
 	//i.e. if statusword is other than PID, go to mainloop
 	QBNE EXITECHO,statusword.w0,6
	JMP ECHOLOOP 		
EXITECHO:
	XIN 14,Z0,4 //wait for PRU0 to give timing signal
	READFIFO X0
	JMP MAINLOOP

//PID / recursive filter / finite time response filter all-in-one, controlled by various gain parameters	
INITPID:
	MOV X0,0x00000000
	MOV Y0,0x00000000

	ENABLESTEP1
	
	//start the loop of PRU0 here, such that we PRU1 will always be waiting for PRU0 and not the other way around
	XIN 14,Z0,4
	XIN 14,Z0,4
	
PID:
	//reset the data point counter to its maximum value
	LSL NX,NXMAX,1
	
	//we have one extra cycle for some other operation if necessary
	PAUSE

PIDLOOP:
    //wait for PRU0 to give timing signal
    //at the same time this operation transfers the value of the scalar product
    //which was calculated by PRU0. To save latency time, PRU0 actually transfers the value which will be output in the next loop iteration
	XIN 14,Z0,4

	//perform pure multiplication
	DISABLEMAC
	//prepare for the multiplication of the fresh X0 value
	SUB MAC_A,X0,XOFFSET
	//MOV MAC_A,X0
	MOV MAC_B,GX0
	PUSHFACTORS
	GETPRODUCT
	
	ADD MAC_LSP,MAC_LSP,Y0
    LSR Y0,MAC_LSP,DIVISORSHIFT
    ADD Y0,Y0,YOFFSET
    WRITEOUT Y0

    //shift data registers
	MOV Y4,Y3
	MOV Y3,Y2
	MOV Y2,Y1
	//store the zero-centered version of Y0 - well after total bitshift
	SUB Y1,Y0,YOFFSET
	
	MOV X3,X2
	MOV X2,X1
	//store the zero-centered version of x
	SUB X1,X0,XOFFSET

    //now get the multiplication over with as quickly as possible, so that the XIN/XOUT port can be used by the other PRU     	
	//reset the accumulator
	//use multiplier for two-complement signed numbers, i.e. only lower 16 bits of the productb.
	ENABLEMAC
	CLRMAC
 	MOV MAC_A,Y4
 	MOV MAC_B,GY4
	MAC
	MOV MAC_A,Y3
 	MOV MAC_B,GY3
	MAC
 	MOV MAC_A,Y2
 	MOV MAC_B,GY2
	MAC
 	MOV MAC_A,Y1
 	MOV MAC_B,GY1
	MAC
 	MOV MAC_A,X3
 	MOV MAC_B,GX3
	MAC
 	MOV MAC_A,X2
 	MOV MAC_B,GX2
	MAC
 	MOV MAC_A,X1
 	MOV MAC_B,GX1
	MAC
	MOV MAC_A,Z0
 	MOV MAC_B,GZ0
	MAC
	
	//store the intermediate product in Y0
	GETPRODUCT
	MOV Y0,MAC_LSP
	
    //decrease data point counter   
    SUB NX,NX,2	

	//save the last datapoint in the PRU memory as fast as possible such that the other PRU will be able to operate on it
    //PRU memory 1 for acquired values
    //SBCO X1,CONST_PRU01DRAM,NX,2  //zero-centered X0
    SBCO X0,CONST_PRU01DRAM,NX,2  //raw value X0
    //PRU memory 0 for output signal (for now, it is only used for diagnostics)
    SUB Y1,Y1,YOFFSET
    //SBCO Y1,CONST_PRU10DRAM,NX,2  //zero-centered version of last output value
    ADD Y1,Y1,YOFFSET
    //SBCO Y1,CONST_PRU10DRAM,NX,2  //intermediate zero-centered version of next output value
    
	//already here retrieve the status word, so that later we can make sure that we need not to go to the mainloop
	LBCO statusword,CONST_PRUSHAREDRAM,0,2

	//remaining delay
	//the delay is useful in order to trigger the next acquisition in the last possible moment, thereby reducing latency
	//make sure it is not so much that it delays the entire loop (overall loop instruction count should be below 200)!
	PAUSE10
		
    //arm the trigger for the next analog-to-digital conversion 
    // - important: arm it before reading out the last value to keep the sampling 
    // frequency determined by the loop freyquency and avoid nondeterministic 
    // time jitter due to OCP master port access by READFIFO
    ENABLESTEP1 													//3 cycles
    //let the ADC do its work (should take 125 cycles but is closer to 190 cycles since recently for some reason...)
    
	//retrieve sampled analog data (attention: this sample's age is now exactly one loop cycle plus some readout delay (+42-44 cycles))
	READFIFO X0

	//go for the next cycle
	//i.e. reset counter if necessary
	QBEQ PID,NX,0

 	//i.e. if statusword is other than PID, go to mainloop
 	QBNE GOTOMAINLOOP,statusword.w0,1

	//otherwise go back to the loop
	JMP PIDLOOP

//cleanly go to the mainloop
GOTOMAINLOOP:
	//wait two loop cycles to be sure that the analog value in the pipeline is ready to be read out
	XIN 14,Z0,4
	XIN 14,Z0,4
	
	//do the same as in PID-Loop without sending Enablestep
    //retrieve sampled analog data
    READFIFO X0
	
	//..and very finally go to the main loop
	JMP MAINLOOP

	
ENDPROGRAM:
	//clear output to zero
    MOV VALUE,0x00000000
	WRITEOUT VALUE

	//disable TSC_ADC_SS module,dont write channel id into FIFO 
	//and disprotect step config registers    	
    MOV ADDR,ADC_TSC
    MOV VALUE,0x00000004   //as above said already: disprotect and disable...
    SBBO VALUE,ADDR,0x40,4 //write value to CTRL register
	
	//empty FIFO0 buffer after waiting the sufficient time
	PAUSE100
	PAUSE100
	PAUSE100
	CALL EMPTYFIFOBUFFER
	
	// Send notification to Host for program completion
    MOV  r31.b0, PRU0_ARM_INTERRUPT+16
    // Halt the processor
    HALT
