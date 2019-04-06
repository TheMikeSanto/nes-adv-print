# nes-adv-print
App for controlling 3D printers using an NES Advantage joystick controller via the Octoprint API. Device info shown below was gathered using [this NES to USB adapter](https://www.amazon.com/Tomee-NES-USB-Controller-Adapter-pc/dp/B00HM3QCN2).
# Dependencies
I had to install the following to be able to compile the native bindings required for [node-gamepad](https://github.com/creationix/node-gamepad) on my Raspberry Pi:
```
sudo apt-get install -y build-essential gcc-4.8 g++-4.8 libudev1 libudev-dev libusb-1.0-0 libusb-1.0-0-dev
```
I also had to set my shell's default compiler to `g++-4.8`:
```
export CXX=g++-4.8
```
# NES Advantage USB device info
* From `lsusb`:
```
Bus 001 Device 005: ID 1d57:0021 Xenta
```
* From `sudo cat /sys/kernel/debug/usb/devices | grep -E "^([TSPD]:.*|)$"`
```
T:  Bus=01 Lev=02 Prnt=02 Port=04 Cnt=02 Dev#=  5 Spd=1.5  MxCh= 0
D:  Ver= 1.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS= 8 #Cfgs=  1
P:  Vendor=1d57 ProdID=0021 Rev= 0.21
S:  Manufacturer= NES PC Game Pad
S:  Product= NES PC Game Pad
```
* From `node-hid`
```
{ 
  vendorId: 7511,
  productId: 33,
  path: '/dev/hidraw0',
  serialNumber: '',
  manufacturer: ' NES PC Game Pad   ',
  product: ' NES PC Game Pad   ',
  release: 33,
  interface: 0
}
```
# Button mappings from node-gamepad
* Joystick
  * Y-axis: axis 1
  * X-axis: axis 0
* Buttons
  * B button: #1
  * A button: #0
  * Start button: #3
  * Select button: #2