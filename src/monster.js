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
		let mod = -2;
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
		attributes.initiative = this.getModifier(attributes.speed) + 5;
		attributes.maxHP = attributes.maxHP + 2 + this.getModifier(attributes.fort) + diff;
		if(attributes.maxHP < 2){
			attributes.maxHP = 2;
		}

		return attributes;
	}

	setWeapon(){
		let highMargin = 0;
		if(this.level < 3){
			highMargin = 4;
		}else if (this.level > 3 && this.level < 8){
			highMargin = 7;
		}else if (this.level > 8 && this.level < 12){
			highMargin = 10;
		}else if (this.level > 12 && this.level < 15){
			highMargin = 13;
		}else{
			highMargin = 16;
		}
		return Helper.randNumber(highMargin);
	}

	async attack(){
		let monsterContainer = dom.findById(this.id);
		let sprite = monsterContainer.querySelector('.portraitMonster');
		let banner = monsterContainer.querySelector('.monsterBanner');
		dom.setText(banner, `${this.type} attacks!`);

		let hit = Helper.determineHit(this, player);
		if(hit){
			let damage = Helper.determineDamage(this, player);
			player.hp -= damage;
			await Helper.sleep(2000);
			render.populatePlayerRow(player);
			dom.setText(banner, `Hit! ${damage} damage.`);
			if(player.hp < 1){
				await Helper.sleep(2000);
				gameOver();
			}
		}else{
			await Helper.sleep(2000);
			dom.setText(banner, 'Miss!');
		}

		await Helper.sleep(1000);
		dom.setText(banner, '');
	}


}
