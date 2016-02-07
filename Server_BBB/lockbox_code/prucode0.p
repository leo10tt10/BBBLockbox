// prucode0.p
// Code for PRU0

.setcallreg r0.w2
.origin 0
.entrypoint START

FIRSTINSTRUCTION: 
	JMP START
	
#define MAINLOOPS 250

#include "prucode.hp"

//Initialise the program

START:
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

    //Zero all registers to avoid ambiguity
    ZERO &r0,124

	MOV VALUE,0x00000000    
    
    //Initialise memory and registers
	MOV Z0, 0x00000000

//infinite loop, will be ended by host program automatically
//the loop instruction count should be constantly at 250 such that the sampling frequency is 800kHz
//that way the sampling of the ADC is done at a harmonic of its clock frequency, such that phase gliches
//due to imperfect clock synchronisation are completely random due to clock fluctuations
//(have not yet tried what a mismatch will cause, probably a noise peak at the beating frequency)
//(that is one extra cycle should cause a peak near 96kHz)

//loop duration changed to 200 cycles == 1MHz

MAINLOOP:    
	
	//COMPLETE with 198 PAUSE instructions to make a 250 Cycle-Delay
	PAUSE
	PAUSE
	PAUSE

	PAUSE
	PAUSE
	PAUSE
	PAUSE
	PAUSE

	PAUSE10
	PAUSE10
	PAUSE10
	PAUSE10

	PAUSE10
	PAUSE10
	PAUSE10
	PAUSE10
	PAUSE10

	PAUSE100

	//complete the transfer
	XOUT 14, Z0, 4 //synchronise PRU1 to PRU0 and transfer the last computed value
	
	JMP MAINLOOP
	
ENDPROGRAM:	
    // Halt the processor
    HALT
