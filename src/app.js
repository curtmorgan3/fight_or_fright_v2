import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';

let render = new Render();
let dom = new Dom();
let player;
let floor = 5;
let turnOrder = [];

render.playArea();
render.welcome();

export function chooseCharacter(type){
	player = new Character(type);
	render.name(player.type);
}

export function chooseName(name){
	player.name = name;
	render.prepare(player, floor);
}

export function startFloor(){
	let monsters = Helper.generateMonsters(floor, player);
	let turnOrder = Helper.determineTurnOrder(player, monsters);
	// pass player, turn order array with monsters
	render.populateFloor(player, turnOrder, monsters);
}
