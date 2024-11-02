CC = arm-none-eabi-gcc
CFLAGS = -std=c99 -Os -mcpu=cortex-m3 -mthumb -I. -DUECC_PLATFORM=uECC_arm_thumb2 -fshort-wchar

# Source files
SRC = uECC.c

# Target binary name
TARGET = libecc.a

all: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(CFLAGS) -c $(SRC) -o uECC.o
	ar rcs $@ uECC.o

clean:
	rm -f *.o $(TARGET)
