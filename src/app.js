import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';

let render = new Render();
let dom = new Dom();
let player;
let level = 1;
let turnOrder = [];

render.playArea();
render.welcome();

export function chooseCharacter(type){
	player = new Character(type);
	render.name(player.type);
}

export function chooseName(name){
	player.name = name;
	render.prepare(player, level);
}

export function startFloor(){
	// generate monsters
	// determine turn order
	// pass player, turn order array with monsters
	render.populateFloor(player, turnOrder);
}
