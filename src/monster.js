import Helper from './helper.js';
import { battleField, player, gameOver, render, dom } from './app.js';


export default class Monster{
	constructor(playerLevel, type){
		this.level = this.selectLevel(playerLevel);
		this.type = type;
		this.attributes = this.setMonsterAttributes(type, playerLevel);
		this.weapon = this.setWeapon();
		this.hp = this.attributes.maxHP;
		this.id = Helper.randNumber(10000);
	}


	selectLevel(playerLevel){
		let coinToss = Helper.randNumber(2);
		if(playerLevel === 1){
			return playerLevel
		}else if(coinToss === 1){
			return playerLevel + 1;
		}else if(coinToss === 2){
			return playerLevel - 1;
		}
	}

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
		let mod = -5;
  	for (let i = 1; i<n; i+= 2){
    	mod += 1;
	  }
  	return mod;
	}

	setMonsterAttributes(type, playerLevel){
		let attrs = ['str', 'dex', 'speed', 'fort', 'maxHP'];
		let attributes = {str: 0, dex: 0, speed: 0, fort: 0, maxHP: 0};

		attrs.forEach(att => {
			attributes[att] = this.setAtt();
		});

		switch(type){
			case 'skeleton':
	    break;
			case 'ghost':
	      attributes.speed += 3;
	    break;
			case 'werewolf':
	      attributes.dex += 3;
	    break;
			case 'vampire':
	      attributes.fort += 3;
	    break;
			case 'zombie':
	      attributes.str += 3;
	    break;
		}
		let diff = this.level - playerLevel;
		attributes.ac = this.getModifier(attributes.speed) + 10 + diff;
		attributes.initiative = this.getModifier(attributes.speed) + 5 + diff;
		attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort) + diff;

		return attributes;
	}

	setWeapon(){
		return Math.ceil(Helper.randNumber(this.attributes.str) / 2);
	}

	async attack(){
		console.log(`Monster ${this.id} attacks`);
		let sprite = dom.findById(this.id);
		dom.setClass(sprite, 'attackingSprite');

		let hit = Helper.determineHit(this, player);
		if(hit){
			let damage = Helper.determineDamage(this, player);
			player.hp -= damage;
			render.populatePlayerRow(player);
			if(player.hp < 1){
				gameOver();
			}
		}

		await Helper.sleep(2000);
	}


}
