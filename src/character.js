import Helper from './helper.js';
import {render, dom, player, attackTurn, battleField, endFloor, resetFloor, gameOver} from './app.js';

export default class Character{
	constructor(type){
		this.type = type;
		this.id = 'player';
		this.level = 1;
		this.xp = 0;
		this.attributes = this.attributes(type);
		this.inventory = ['potion', 'potion'];
		this.weaponType = 'Wooden Sword';
		this.weapon = 6;
		this.weaponQual = 'Poor';
		this.hp = this.attributes.maxHP;
		this.name = '';
		this.attacking = false;
		this.went = false;
	}

	// Static Methods

	setAtt(){
  	let sum = 0;
  	let score = 0;
  	for(let i = 0; i<4; i++){
    	sum += Math.floor(Helper.randNumber(5));
  	}
		if (score  < 2){
			score = 2;
		}
  	score =  Math.floor( sum / 4 );
  	return score;
	}

	getModifier(n){
		let mod = 0;
  	for (let i = 1; i<n; i+= 2){
    	mod += 1;
	  }
  	return mod;
	}

	attributes(type){
		let attrs = ['str', 'dex', 'speed', 'fort', 'luck', 'maxHP'];
		let attributes = {
			str: 0,
			dex: 0,
			speed: 0,
			fort: 0,
			luck: 0,
			ac: 0,
			maxHP: 0,
			initiative: 0
		}
		attrs.forEach(att => {
			attributes[att] = this.setAtt();
		});
		switch(type){
			case 'knight':
      attributes.str += 2;
      attributes.speed -= 2;
    break;
    case 'rogue':
      attributes.speed += 2;
      attributes.dex -= 2;
    break;
    case 'ninja':
      attributes.dex += 2;
      attributes.fort -= 2;
    break;
    case 'priest':
      attributes.fort += 2;
      attributes.str -= 2;
    break;
    case 'gambler':
      attributes.luck += 4;
    break;
		}

		attributes.ac = this.getModifier(attributes.speed) + 10;
		attributes.initiative = this.getModifier(attributes.speed) + 3;
		attributes.maxHP = attributes.maxHP + 5 + this.getModifier(attributes.fort);

		return attributes;
	}

	// Instance Methods

	takePotion(id){
		this.hp = this.attributes.maxHP;
		if(player.inventory.length === 2){
			player.inventory = ['potion'];
		}else if (player.inventory.length > 2){
			player.inventory = player.inventory.pop();
		}else {
			player.inventory = [];
		}
		render.removePotion(id, player);
	}

	async attackMonster(id){
		let defenderContainer = dom.findById(id);
		let defenderBanner = defenderContainer.querySelector('.monsterBanner');
		let defenderHP = defenderContainer.querySelector('.monsterHP');
		let floor = dom.findByClass('.floor');
		let overlay = dom.createEl();
		dom.setClass(overlay, 'overlay');

		if(player.attacking){
			dom.addChild(floor, overlay);
			let defenderPos = Helper.findPosition(id, battleField.turnOrder);
			let defender = battleField.turnOrder[defenderPos];

			dom.setText(defenderBanner, `${player.name} attacks!`);
			await Helper.sleep(2000);

			let hit = Helper.determineHit(player, defender);
			if(hit){
				let damage = Helper.determineDamage(player, defender);
				dom.setText(defenderBanner, `Hit! ${damage} damage.`);
				defender.hp -= damage;
				dom.setText(defenderHP, `${defender.hp}/${defender.attributes.maxHP}`);
				await Helper.sleep(2000);
				dom.setText(defenderBanner, ``);
				if(defender.hp < 1){
					let xp = Helper.xp(player, defender.level);
					player.xp += xp;
					battleField.turnOrder = battleField.turnOrder.filter(monster => monster.id !== id);
					if(battleField.turnOrder.length === 1){
						endFloor();
					}else {
						render.populateTurnOrder(battleField.turnOrder);
						battleField.monsters = battleField.monsters.filter(monster => monster.id !== id);
						render.populateBackdrop(battleField.monsters, player);
					}
				}
			}else{
				dom.setText(defenderBanner, `Miss!`);
				await Helper.sleep(2000);
				dom.setText(defenderBanner, ``);
			}
			dom.setText(attackButton, 'Wait');
			player.went = true;
			player.attacking = false;
			attackTurn();
		}else {
			console.log('Not players turn');
		}
		dom.destroyEl(overlay);
	}

	async escape(){
		if(player.attacking){
			let overlay = dom.createEl();
			let floor = dom.findByClass('.floor');
			dom.setClass(overlay, 'overlay');
			dom.addChild(floor, overlay);

			let escapeButton = dom.findById('escapeButton');
			let didEscape = Helper.tryToEscape();
			dom.setText(escapeButton, 'Trying to escape...');
			await Helper.sleep(3000);
			if(didEscape){
				dom.setText(escapeButton, 'Made it!');
				await Helper.sleep(2000);
				resetFloor();
			}else{
				dom.setText(escapeButton, 'Oh no!!!');
				await Helper.sleep(2000);
				gameOver();
			}
		}else{
			console.log('Not players turn');
		}
	}
}
