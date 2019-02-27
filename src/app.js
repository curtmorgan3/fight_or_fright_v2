import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';

let render = new Render();
let dom = new Dom();
let player;
let floor = 1;
let turnOrder = [];

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
	render.populateFloor(player, turnOrder, monsters);
}

export function endFloor(){
	floor++;
	render.endFloor(player, floor);
}

export function gameOver(){
	render.gameOver(player, floor);
}

export function playAgain(){
	floor = 1;
	player = {};
	turnOrder = [];
	render.clearFloor();
	render.clearField();
	render.playArea();
	render.welcome();
}

function startGame(){
	render.floor();
	render.playArea();
	render.welcome();
}

startGame();

export {
	player
}
