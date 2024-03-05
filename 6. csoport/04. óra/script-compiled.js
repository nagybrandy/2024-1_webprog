"use strict";

var _cowsay = require("cowsay");
var _math = _interopRequireDefault(require("./math.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log(cowsay.say({
  text: "asd",
  r: true // random mode - use a random cow.
}));
console.log((0, _math["default"])(3, 5));
