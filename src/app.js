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

// TODO: Chance for item drop between levels
// TODO: Replace weapons
// TODO: Resize Monster Sprites
// TODO: Escape

export function chooseCharacter(type){
	player = new Character(type);
	render.name(player.type);
}

export function chooseName(name){
	player.name = name;
	render.prepare(player, floor);
}

export function startFloor(){
	battleField = new BattleField(turnOrder, monsters, floor);
	monsters = Helper.generateMonsters(player);
	turnOrder = Helper.determineTurnOrder(player, monsters);
	battleField.monsters = monsters;
	battleField.turnOrder = turnOrder;
	console.log('player', player);
	console.log('monster', monsters);
	render.populateFloor(player, turnOrder, monsters);
	attackTurn();
}

export function endFloor(){
	let overlay = dom.findByClass('.overlay');
	dom.destroyEl(overlay);
	let newLevels = Helper.checkLevelUp(0);
	battleField.floor = battleField.floor + 1;
	floor = battleField.floor;
	render.endFloor(newLevels);
}

export function resetFloor(){
	let overlay = dom.findByClass('.overlay');
	dom.destroyEl(overlay);
	if(player.hp < (player.maxHP / 2)){
		player.hp = (player.maxHP / 2);
	};
	render.resetFloor();
}

export function gameOver(){
	let overlay = dom.findByClass('.overlay');
	dom.destroyEl(overlay);
	render.gameOver(player);
}

export function playAgain(){
	battleField.floor = 1;
	floor = battleField.floor;
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
