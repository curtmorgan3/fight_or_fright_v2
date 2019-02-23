"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseCharacter = chooseCharacter;

var Helper = require('./helper.js');

var Render = require('./render.js');

var Character = require('./character.js');

var helper = new Helper();
var render = new Render();
var player;
render.playArea();
render.welcome();

function chooseCharacter(type) {
  player = new Character(type);
  console.log(player);
}