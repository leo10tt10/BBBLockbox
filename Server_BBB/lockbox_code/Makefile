#
# Execute 'make' to create prucode.bin and mytest
# Other options:
# make clean
# make all
# make pru
# make project
# make prucode
# make clean
#

pru0 = prucode0
pru1 = prucode1
project = lockbox

LIB_PATH = .
LIBRARIES = pthread prussdrv
INCLUDES = -I. ${LIB_PATH}

SOURCES = lockbox.c

EXTRA_DEFINE =
CCCFLAGS = $(EXTRA_DEFINE)
CC = gcc
CFLAGS = $(EXTRA_DEFINE)
PASM = pasm -V3

all : $(pru0) $(pru1) $(project)
pru0 : $(pru0)
pru1 : $(pru1)
project: $(project)

$(project) : $(project:%=%.c)
	$(CC) $(CFLAGS) -c -o spidev.o spidev.c
	$(CC) $(CFLAGS) -c -o $@.o $@.c
	$(CC) $@.o spidev.o $(LIB_PATH:%=-L%) $(LIBRARIES:%=-l%) -o $@

clean :
	rm -rf *.o *.bin $(project) core *~

$(pru0) : $(pru0:%=%.p)
	$(PASM) -b $@.p

$(pru1) : $(pru1:%=%.p)
	$(PASM) -b $@.p

.SUFFIXES: .c.d

%.d: %.c
	$(SHELL) -ec "$(CC) -M $(CPPFLAGS) $< | sed 's/$*\\.o[ :]*/$@ &/g' > $@" -include $(SOURCES:.c=.d)

