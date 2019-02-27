import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';

let render = new Render();
let dom = new Dom();
let player;
let floor = 4;
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
	turnOrder = Helper.determineTurnOrder(player, monsters);
	render.populateFloor(player, turnOrder, monsters);
	attackTurn();
}

export function endFloor(){
	floor++;
	render.endFloor(player, floor);
}

export function gameOver(){
	render.gameOver(player, floor);
}

// Not sure if I need this one yet
//
// function playerInMiddle(){
// 	let n = findPlayerPosition();
// 	if(n != 0 && n != (turnOrder.length - 1)){
// 		console.log('player is in middle');
// 		return true;
// 	}else {
// 		console.log('player not in middle');
// 		return false;
// 	}
// }

function findPlayerPosition(){
	let n = 0;
	for(let i = 0; i<turnOrder.length; i++){
		if(turnOrder[i].id === 'player'){
			n = i;
		};
	}
	return n;
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

export async function attackTurn(n){
	if(player.went){
		n = findPlayerPosition() + 1;
		player.went = false;
	}else{
		n = 0;
	}
	for(let i = n; i<turnOrder.length; i++){
		if(turnOrder[i].id === 'player'){
			player.attacking = true;
			i = turnOrder.length + 1;
		}else {
			player.attacking = false;
			await turnOrder[i].attack(turnOrder[i].id, player);
			if(i === turnOrder.length - 1){
				console.log('start again');
				attackTurn();
			}
		}
	}

}

startGame();

export {
	player
}
