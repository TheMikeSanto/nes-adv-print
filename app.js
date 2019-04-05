var gamepad = require("gamepad");

// Initialize the library
gamepad.init()

// List the state of all currently attached devices
for (var i = 0, l = gamepad.numDevices(); i < l; i++) {
  console.log(i, gamepad.deviceAtIndex());
}

// Create a game loop and poll for events
setInterval(gamepad.processEvents, 16);
// Scan for new gamepads as a slower rate
setInterval(gamepad.detectDevices, 500);

// Octoprint API payloads for x/y jogging
// move x right { 'command': 'jog', 'x': 10 }
// move x left { 'command': 'jog', 'x': -10 }
// move y up { 'command': 'jog', 'y': 10 }
// move y down { 'command': 'jog', 'y': -10 }
// Listen for move events on all gamepads
const Y_AXIS_ID = 1;
const HOME_VALUE = -0.003921568393707275;
const X_AXIS_ID = 0;
gamepad.on("move", function (id, axis, value) {
  const translatedAxis = (() =>{
    switch (axis) {
      case X_AXIS_ID:
        return 'X';
        break;
      case Y_AXIS_ID:
        return 'Y';
        break;
    }
  })();
  let direction;
  switch (value) {
    case -1:
      direction = translatedAxis === 'Y' ? 'up' : 'left';
      console.log(`Move ${translatedAxis} ${direction}`);
      break;
    case HOME_VALUE:
      console.log(`Stop moving ${translatedAxis}`);
      break;
    case 1:
      direction = translatedAxis === 'Y' ? 'down' : 'right';
      console.log(`Move ${translatedAxis} ${direction}`);
      break;
  }
  // console.log("move", {
  //   id: id,
  //   axis: axis,
  //   value: value,
  // });
});

// * B button: #1
// * A button: #0
// * Start button: #3
// * Select button: #2
const buttonMap = {
  0: 'A',
  1: 'B',
  2: 'Select',
  3: 'Start',
};
// Listen for button up events on all gamepads
gamepad.on("up", function (id, num) {
  console.log(`${buttonMap[num]} released`);
});

// Listen for button down events on all gamepads
gamepad.on("down", function (id, num) {
  console.log(`${buttonMap[num]} pressed`);
});