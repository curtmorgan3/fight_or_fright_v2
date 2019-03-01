import Monster from './monster.js';
import {player, render} from './app.js';

export default class Helper{

	static randNumber(n){
		return Math.floor(Math.random() * Math.floor(n) + 1);
	};

	static d20(){
		return this.randNumber(20);
	}

	static generateMonsters(floor, player){
		let monsterTypes = ['ghost', 'skeleton', 'vampire', 'werewolf', 'zombie'];
		let monsters = [];
		let coinToss = this.randNumber(2);

		// Determine how many monsters to create and push them to monsters
		if(floor === 1){
			let monster = new Monster(player.level, monsterTypes[this.randNumber(5)-1]);
			monsters.push(monster);
		}else{
			let n;
			if(coinToss === 1){
				n = floor + 1;
			}else{
				n = floor - 1;
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
		console.log(attacker);
		console.log(defender);
		let attackRoll = this.d20() + attacker.getModifier(attacker.attributes.dex);
		if(attackRoll > defender.attributes.ac){
			console.log(`${attackRoll} > ${defender.attributes.ac}. Hit`);
			return true;
		}else{
			console.log('Miss');
			return false;
		}
	};

	static determineDamage(attacker, defender){
		let damage = this.randNumber(attacker.weapon) + attacker.getModifier(attacker.attributes.str);
		if (damage < 1){
			damage = 1;
		};
		return damage;
	};

	static xp(player, monster){
		let xp = (monster.level * this.randNumber(300)) + (this.randNumber(100) * player.getModifier(player.attributes.luck));
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
	}

	static increaseSkill(skill, newLevels, floor){
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
		render.endFloor(floor, newLevels);
	}

}
