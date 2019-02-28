import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
import BattleField from './battleField.js';

let render = new Render();
let dom = new Dom();
let floor = 1;
let player = {};
let monsters = [];
let turnOrder = [];
let battleField = {};

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
	battleField = new BattleField(turnOrder, monsters);
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
	render.playArea();
	render.welcome();
}

export function resetMonsterSprites(){
	console.log('sprite reset');
	turnOrder.forEach(character => {
		if(character.id !== 'player'){
			let sprite = dom.findById(character.id);
			dom.setClass(sprite, 'portraitMonster');
		}
	});
}

export async function attackTurn(n){
	let attackButton = dom.findById('attackButton');
	let escapeButton = dom.findById('escapeButton');
	if(player.went && Helper.findPosition(player.id, battleField.turnOrder) !== battleField.turnOrder.length -1){
		n = Helper.findPosition(player.id, battleField.turnOrder) + 1;
		player.went = false;
	}else{
		n = 0;
	}
	for(let i = n; i<battleField.turnOrder.length; i++){
		if(battleField.turnOrder[i].id === 'player'){
			dom.setText(attackButton, 'Select a Target');
			dom.setText(escapeButton, 'Escape');
			player.attacking = true;
			i = battleField.turnOrder.length + 1;
		}else {
			player.attacking = false;
			dom.setText(attackButton, 'Wait');
			dom.setText(escapeButton, 'Wait');
			await battleField.turnOrder[i].attack(battleField.turnOrder[i].id, player);
			if(i === battleField.turnOrder.length - 1){
				console.log('start again');
				resetMonsterSprites();
				attackTurn();
			}
		}
	}

}

startGame();

export {
	render,
	dom,
	player,
	battleField
}
