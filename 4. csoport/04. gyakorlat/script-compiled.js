"use strict";

var _math = require("./math.js");
var _cowsay = _interopRequireDefault(require("cowsay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log('Haliiii!!');
console.log((0, _math.add)(3, 5));
console.log(_cowsay["default"].say({
  text: 'Hello world!',
  e: '^^',
  // eyes
  T: 'U',
  r: true // random mode - use a random cow.
}));
