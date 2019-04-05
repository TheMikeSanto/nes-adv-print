# Device info
* From `lsusb`:
```
Bus 001 Device 005: ID 1d57:0021 Xenta
```
* From `discover --vendor-id --model-id usb`
```
1d57 0021 unknown unknown or
0424 ec00 unknown unknown or
0424 9514 unknown unknown
```
* From `sudo cat /sys/kernel/debug/usb/devices | grep -E "^([TSPD]:.*|)$"`
```
T:  Bus=01 Lev=02 Prnt=02 Port=04 Cnt=02 Dev#=  5 Spd=1.5  MxCh= 0
D:  Ver= 1.10 Cls=00(>ifc ) Sub=00 Prot=00 MxPS= 8 #Cfgs=  1
P:  Vendor=1d57 ProdID=0021 Rev= 0.21
S:  Manufacturer= NES PC Game Pad
S:  Product= NES PC Game Pad
```
* From node-hid
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
# node-gamepad info
* Joystick
  * Y-axis: axis 1
  * X-axis: axis 0
* Buttons
  * B button: #1
  * A button: #0
  * Start button: #3
  * Select button: #2