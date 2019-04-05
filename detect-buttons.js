const _ = require('lodash');
const HID = require('node-hid');

const devices = HID.devices();
if (devices.length) {
  const device = devices[0]
  const hid = new HID.HID(device.vendorId, device.productId);
  hid.on("data", _.throttle(function (data) {
    console.log(data);
  }), 10000);
}
