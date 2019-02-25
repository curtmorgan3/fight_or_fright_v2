import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
var render = new Render();
var dom = new Dom();
var player;
var level = 1;
render.playArea();
render.welcome();
export function chooseCharacter(type) {
  player = new Character(type);
  render.name(player.type);
}
export function chooseName(name) {
  player.name = name;
  render.prepare(player, level);
}
export function startGame() {
  console.log('Start Game');
}