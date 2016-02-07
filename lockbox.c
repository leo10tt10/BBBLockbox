/*
 * lockbox.c
 */

/************
SPI definitions:
with the current device tree overlay, we define always D0 to be input and D1 to be output pin
************/
/******************************************************************************
* Include Files                                                               *
******************************************************************************/

// Standard header files
#include <stdio.h>
#include <sys/mman.h>
#include <fcntl.h>
#include <errno.h>
#include <unistd.h>
#include <string.h>

// Driver header file
#include "prussdrv.h"
#include <pruss_intc_mapping.h>	 

//SPI0 definitions
#include <linux/types.h>
void spi_transfer(int fd, unsigned char *data, unsigned short length, unsigned char mode);
int spi_init(const char *device, unsigned char mode);
int spi_close(int fd);

/******************************************************************************
* Explicit External Declarations                                              *
******************************************************************************/

/******************************************************************************
* Local Macro Declarations                                                    *
******************************************************************************/

#define PRU_NUM			1

#define DDR_BASEADDR     0x80000000
#define OFFSET_DDR		 0x00000000 
#define OFFSET_SHAREDRAM 0x00000000

#define PRUSS0_PRU0_DATARAM 0
#define PRUSS0_PRU1_DATARAM 1
#define PRUSS0_PRU0_IRAM 2
#define PRUSS0_PRU1_IRAM 3
#define PRUSS0_SHARED_DATARAM    4

/******************************************************************************
* Local Typedef Declarations                                                  *
******************************************************************************/


/******************************************************************************
* Local Function Declarations                                                 *
******************************************************************************/

static int LOCAL_exampleInit ( );
static unsigned short LOCAL_examplePassed ( unsigned short pruNum );
static void mainloop();

/******************************************************************************
* Local Variable Definitions                                                  *
******************************************************************************/


/******************************************************************************
* Intertupt Service Routines                                                  *
******************************************************************************/


/******************************************************************************
* Global Variable Definitions                                                 *
******************************************************************************/

static int mem_fd;
static void *ddrMem, *sharedMem, *pru0Mem, *pru1Mem;

static unsigned short *sharedMem_int;
static unsigned short *pru0Mem_int;
static unsigned short *pru1Mem_int;

int spi0_fd;
int spi1_fd;

/******************************************************************************
* Global Function Definitions                                                 *
******************************************************************************/

int main (void)
{
    unsigned int ret;
    tpruss_intc_initdata pruss_intc_initdata = PRUSS_INTC_INITDATA;
    
    printf("\nINFO: Starting %s application.\r\n", "Lockbox");
    /* Initialize the PRU */
    prussdrv_init ();		
    
    /* Open PRU Interrupt */
    ret = prussdrv_open(PRU_EVTOUT_0);
    if (ret)
    {
        printf("prussdrv_open open failed\n");
        return (ret);
    }
    
    /* Get the interrupt initialized */
    prussdrv_pruintc_init(&pruss_intc_initdata);

    /* Initialize example */
    printf("\tINFO: Initializing application.\r\n");
    LOCAL_exampleInit(PRU_NUM);
    
    /* Execute code on PRU 1 */
    printf("\tINFO: Executing PRU1 code.\r\n");
    prussdrv_exec_program (1, "./prucode1.bin");

    /* Execute code on PRU 1 */
    printf("\tINFO: Executing PRU0 code.\r\n");
    prussdrv_exec_program (0, "./prucode0.bin");

	/* Set up SPI0  */
	spi0_fd = spi_init("/dev/spidev1.0",2);
	//daisy-chain setup
//	unsigned char spi00init[3]={128,0,1};
//	spi_transfer(spi0_fd,spi00init,3,2);
//	spi_close(spi0_fd);
//	unsigned char spi01init[6]={128,0,0,128,0,0};
//	spi_transfer(spi0_fd,spi01init,6,2);
//	spi0_fd = spi_init("/dev/spidev1.0",0);
	
	/* Set up SPI1 */
	spi1_fd = spi_init("/dev/spidev2.0",0);
	//make sure all pins are connected
	unsigned char spi10init[3]={64,255};
	spi_transfer(spi0_fd,spi10init,2,0);

	/* Execute main loop which communicates with both PRU and host computer */
    mainloop();
    
    /* Wait until PRU0 has finished execution */
    printf("\tINFO: Waiting for HALT command.\r\n");

    prussdrv_pru_wait_event (PRU_EVTOUT_0);
    printf("\tINFO: PRU1 completed transfer.\r\n");
    prussdrv_pru_clear_event (PRU0_ARM_INTERRUPT);
    
    /* Disable PRUs and close memory mapping*/
    prussdrv_pru_disable(0);  //PRU0 off 
    prussdrv_pru_disable(1);  //PRU1 off
    prussdrv_exit();
    munmap(ddrMem, 0x0FFFFFFF);
    close(mem_fd);
	
	spi_close(spi0_fd);
	spi_close(spi1_fd);
	
    return(0);
}

/*****************************************************************************
* Local Function Definitions                                                 *
*****************************************************************************/

static int LOCAL_exampleInit (  )
{
    void *DDR_regaddr1, *DDR_regaddr2, *DDR_regaddr3;	

    /* open the device */
    mem_fd = open("/dev/mem", O_RDWR);
    if (mem_fd < 0) {
        printf("Failed to open /dev/mem (%s)\n", strerror(errno));
        return -1;
    }	

    /* map the DDR memory */
    ddrMem = mmap(0, 0x0FFFFFFF, PROT_WRITE | PROT_READ, MAP_SHARED, mem_fd, DDR_BASEADDR);
    if (ddrMem == NULL) {
        printf("Failed to map the device (%s)\n", strerror(errno));
        close(mem_fd);
        return -1;
    }
    
    /* Store Addends in DDR memory location */
    DDR_regaddr1 = ddrMem + OFFSET_DDR;
    DDR_regaddr2 = ddrMem + OFFSET_DDR + 0x00000004;
    DDR_regaddr3 = ddrMem + OFFSET_DDR + 0x00000008;

//    *(unsigned long*) DDR_regaddr1 = ADDEND1;
//    *(unsigned long*) DDR_regaddr2 = ADDEND2;
//    *(unsigned long*) DDR_regaddr3 = ADDEND3;

    return(0);
}

static unsigned short LOCAL_examplePassed ( unsigned short pruNum )
{
     /* Allocate Shared PRU memory. */

	int max = 12*1024+1;
    int i=0;
//uncomment here if runtime is to be measured
//	return 0;
	printf("PRU0 Dataram\n");
    prussdrv_map_prumem(PRUSS0_PRU0_DATARAM, &sharedMem);
	sharedMem_int = (unsigned short*) sharedMem;

	float sum=0;
	for(i=0;i<1024;i+=1)
		sum+=sharedMem_int[4*i+3];
	printf("\nTotal delay for 1024 values: %f; average: %f\n\n",sum,sum/1024);

    for(i=0;i<4096+1;i+=4)
//    	printf("Offset %d:\t%04X\t %04X\t %04X\t %04X\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);
    	printf("Offset %d:\t%d\t %d\t %d\t %d\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);

	printf("PRU1 Dataram\n");
    prussdrv_map_prumem(PRUSS0_PRU1_DATARAM, &sharedMem);
	sharedMem_int = (unsigned short*) sharedMem;
    for(i=0;i<4096+1;i+=4)
//    	printf("Offset %d:\t%04X\t %04X\t %04X\t %04X\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);
    	printf("Offset %d:\t%d\t %d\t %d\t %d\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);

	printf("Shared DRAM\n");
    prussdrv_map_prumem(PRUSS0_SHARED_DATARAM, &sharedMem);
	sharedMem_int = (unsigned short*) sharedMem;
    for(i=0;i<6*1024+1;i+=4)
//    	printf("Offset %d:\t%04X\t %04X\t %04X\t %04X\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);
    	printf("Offset %d:\t%d\t %d\t %d\t %d\n",2*i,sharedMem_int[i],sharedMem_int[i+1],sharedMem_int[i+2],sharedMem_int[i+3]);
		
    return 0;
	}

	
static void mainloop(void) 
	{
	int i;
	char c=0;
	char string[1024];
	int mem,offset,length,data;
	unsigned short int rambuffer[12288];
	unsigned char spidata[256];
	
	prussdrv_map_prumem(PRUSS0_PRU0_DATARAM, &pru0Mem);
	pru0Mem_int = (unsigned short*) pru0Mem;
	prussdrv_map_prumem(PRUSS0_PRU1_DATARAM, &pru1Mem);
	pru1Mem_int = (unsigned short*) pru1Mem;
	prussdrv_map_prumem(PRUSS0_SHARED_DATARAM, &sharedMem);
	sharedMem_int = (unsigned short*) sharedMem;
	
	unsigned short* memories[] = {pru0Mem_int,pru1Mem_int,sharedMem_int};
	
	while(1)
			{
			
			c=getchar();
			switch(c)
				{
				//Say hello, test is the program is still alive
				case 'H':
				case 'h':
					printf("Hello Master\n");
					break;

				//Write to memory
				case 'W':
				case 'w':
					printf("Memory?\n");
					scanf("%d",&mem);
					
					printf("Offset?\n");
					scanf("%d",&offset);
					
					printf("Length?\n");
					scanf("%d",&length);
					
					printf("Data?\n");
					for(i=offset;i<length+offset;i++)
						{
						scanf("%d",&data);
						memories[mem][i] = data;
						}
					
					printf("Write operation complete: %d words written to memory location %d:%X!\nSuccess!\n",length,mem,offset);
					break;
				
				//Read from memory
				case 'R':
				case 'r':
					printf("Memory?\n");
					scanf("%d",&mem);
					
					printf("Offset?\n");
					scanf("%d",&offset);
					
					printf("Length?\n");
					scanf("%d",&length);
					
					for(i=offset;i<length+offset;i++)
						printf("%d\n",memories[mem][i]);
					
					printf("Read operation complete: %d words transferred from memory location %d:%X!\nSuccess!\n",length,mem,offset);
					break;
				
				//Periperal - control SPI DAC's and / or digital potentiometers
				case 'P':
				case 'p':
					printf("SPI?\n");
					scanf("%d",&mem);
										
					printf("Length?\n");
					scanf("%d",&length);
					if (length > 256)
						length=256;						
					
					printf("Data?\n");
					for(i=0;i<length;i++)
						{
						scanf("%d",&data);
						spidata[i]=data;
						}
					
					if (mem==0)
						{
						//daisy chain preparation
						unsigned char daisy[]={128,0,1};						
						//spi_transfer(spi0_fd, daisy, 3, 2);
						//data transfer
						spi_transfer(spi0_fd, spidata, length, 2);
						}
					else if (mem==1)
						{
						spi_transfer(spi1_fd, spidata, length, 0);
						}
					else 
						{
						printf("SPI write failed: No device at given SPI number");
						break;
						}
						
					printf("SPI write operation complete: %d words transferred from memory location %d:%X!\nSuccess!\n",length,mem,offset);
					break;

				//Terminate the program
				case 'T':
				case 't':
					//send('T');
					return;					

				default:
					break;
				}
		}
	return;
	}

