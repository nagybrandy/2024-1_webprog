"use strict";

var _math = _interopRequireDefault(require("./math.js"));
var _cowsay = _interopRequireDefault(require("cowsay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log('Hello!!!!');
console.log((0, _math["default"])(3, 4));
console.log(_cowsay["default"].say({
  text: 'Hello world!',
  e: 'xx',
  // eyes
  r: true // random mode - use a random cow.
}));
