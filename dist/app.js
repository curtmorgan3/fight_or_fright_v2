import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
var render = new Render();
var dom = new Dom();
var player;
var floor = 1;
var turnOrder = [];
export function chooseCharacter(type) {
  player = new Character(type);
  render.name(player.type);
}
export function chooseName(name) {
  player.name = name;
  render.prepare(player, floor);
}
export function startFloor() {
  var monsters = Helper.generateMonsters(floor, player);
  var turnOrder = Helper.determineTurnOrder(player, monsters);
  render.populateFloor(player, turnOrder, monsters);
}
export function endFloor() {
  floor++;
  render.endFloor(player, floor);
}
export function gameOver() {
  render.gameOver(player, floor);
}
export function playAgain() {
  floor = 1;
  player = {};
  turnOrder = [];
  render.clearFloor();
  render.clearField();
  render.playArea();
  render.welcome();
}

function startGame() {
  render.floor();
  render.playArea();
  render.welcome();
}

startGame();
export { player };