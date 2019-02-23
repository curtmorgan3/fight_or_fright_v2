"use strict";

var Helper = require('./helper.js');

var Render = require('./render.js');

var helper = new Helper();
var render = new Render(); // render.playArea();
// render.welcome();

var arr = [1, 2, 3];

function logThem(n) {
  console.log(n);
}

arr.forEach(logThem);
arr.forEach(function (num) {
  console.log(num);
});