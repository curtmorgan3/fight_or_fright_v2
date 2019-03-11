import Monster from './monster.js';
import {player, render, battleField} from './app.js';

export default class Helper{

	static randNumber(n){
		return Math.floor(Math.random() * Math.floor(n) + 1);
	};

	static d20(){
		return this.randNumber(20);
	}

	static generateMonsters(player){
		let monsterTypes = ['ghost', 'skeleton', 'vampire', 'werewolf', 'zombie'];
		let monsters = [];
		let coinToss = this.randNumber(2);

		// Determine how many monsters to create and push them to monsters
		if(battleField.floor === 1){
			let monster = new Monster(player.level, monsterTypes[this.randNumber(5)-1]);
			monsters.push(monster);
		}else{
			let n;
			if(coinToss === 1){
				n = battleField.floor + 1;
			}else{
				n = battleField.floor - 1;
			}
			for(let i = 0; i<n; i++){
				let monster = new Monster(player.level, monsterTypes[this.randNumber(5)-1]);
				monsters.push(monster);
			}
		}

		return monsters;
	}

	static determineTurnOrder(player, monsters){
		let turnOrder = [];
		turnOrder.push(player);
		monsters.forEach(monster => {
			turnOrder.push(monster);
		});
		turnOrder = turnOrder.sort((a, b) => {
			return b.attributes.initiative - a.attributes.initiative;
		});
		return turnOrder;
	};

	static async sleep(milliseconds){
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	};

	static findPosition(id, array){
		let n = 0;
		for(let i = 0; i<array.length; i++){
			if(array[i].id === id){
				n = i;
			};
		}
		return n;
	}

	static determineHit(attacker, defender){
		let attackRoll = this.d20() + attacker.getModifier(attacker.attributes.dex);
		if(attackRoll > defender.attributes.ac){
			return true;
		}else{
			return false;
		}
	};

	static determineDamage(attacker, defender){
		let damage = this.randNumber(attacker.weapon) + attacker.getModifier(attacker.attributes.str);
		if (damage < 1){
			damage = 1;
		};
		let coin = this.randNumber(2);
		if(coin > 1){
			damage ++;
		}
		return damage;
	};

	static xp(player, monsterLevel){
		let xp = (monsterLevel * this.randNumber(10) * 10 ) + (this.randNumber(10) * player.getModifier(player.attributes.luck));
		if(xp < 1){
			xp = 1;
		}
		return xp;
	};

	static checkLevelUp(n){
		let xp = player.xp;
  	let currentLevel = player.level;
  	let nextLevel = currentLevel + 1;

  	let requiredXP = ( ( ( (nextLevel * nextLevel) + nextLevel) / 2) * 100) - (nextLevel * 100);

  	if (xp >= requiredXP){
    	let canLevel = n;
			canLevel ++;
    	player.level ++;
    	return this.checkLevelUp(canLevel);
  	}else{
			return n;
		}
	};

	static increaseSkill(skill, newLevels){
		switch(skill){
			case 'Strength':
				if(player.type === 'knight'){
					player.attributes.str += 2;
				}else{
					player.attributes.str ++;
				}
			break;
			case 'Dexterity':
			if(player.type === 'ninja'){
				player.attributes.dex += 2;
			}else{
				player.attributes.dex ++;
			}
			break;
			case 'Speed':
			if(player.type === 'rogue'){
				player.attributes.speed += 2;
			}else{
				player.attributes.speed ++;
			}
			break;
			case 'Fortitude':
			if(player.type === 'priest'){
				player.attributes.fort += 2;
			}else{
				player.attributes.fort ++;
			}
			break;
			case 'Luck':
			if(player.type === 'gambler'){
				player.attributes.luck += 2;
			}else{
				player.attributes.luck ++;
			}
			break;
		}
		player.attributes.maxHP = player.attributes.maxHP + player.getModifier(player.attributes.fort);
		player.hp = player.attributes.maxHP;
		player.attributes.initiative = player.getModifier(player.attributes.speed) + 3;
		render.endFloor(newLevels);
	};

	static tryToEscape(){
		let roll = this.d20();
		if(roll === 1){
			return false;
		}else if (roll === 20){
			return true;
		}else{
			roll = roll + player.getModifier(player.attributes.speed);
			let monsterSpeedAverage = 0;
			battleField.monsters.forEach(monster => {
				monsterSpeedAverage += monster.attributes.speed;
			})
			monsterSpeedAverage = monsterSpeedAverage / battleField.monsters.length;
			if(roll > monsterSpeedAverage){
				return true;
			}else{
				return false;
			}
		}
	};

	static chanceFoundWeapon(){
		let chance = this.randNumber(100) + player.getModifier(player.attributes.luck);
		if(chance > 50){
			return true;
		}else{
			return false;
		}
	};

	static newWeapon(){
		let chance = this.randNumber(100) + player.getModifier(player.attributes.luck);
		if(chance > 95){
			return 20;
		}else if (chance > 85 && chance < 95){
			return 16;
		}else if (chance > 70 && chance < 85){
			return 12;
		}else if (chance > 50 && chance < 70){
			return 8;
		}else if (chance < 50){
			return 6;
		}
	}

	static chanceFoundPotion(){
		let chance = this.randNumber(100) + player.getModifier(player.attributes.luck);
		if(chance > 50){
			return true;
		}else{
			return false;
		}
	};



}
