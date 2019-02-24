import Helper from './helper.js';
import Render from './render.js';
import Character from './character.js';
var helper = new Helper();
var render = new Render();
render.playArea();
render.welcome();
var player;
export function chooseCharacter(type) {
  console.log('choose character');
  player = new Character(type); // render.name();

  console.log(player);
}