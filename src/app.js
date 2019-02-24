import Helper from './helper.js';
import Render from './render.js';
import Character from './character.js';

let helper = new Helper();
let render = new Render();

render.playArea();
render.welcome();

let player;

export function chooseCharacter(type){
	console.log('choose character');
	player = new Character(type);
	// render.name();
	console.log(player);
}
