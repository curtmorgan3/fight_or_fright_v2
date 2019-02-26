import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
var render = new Render();
var dom = new Dom();
var player;
var floor = 5;
var turnOrder = [];
render.playArea();
render.welcome();
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
  var turnOrder = Helper.determineTurnOrder(player, monsters); // pass player, turn order array with monsters

  render.populateFloor(player, turnOrder, monsters);
}