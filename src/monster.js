import Helper from './helper.js';
import Dom from './dom.js';
let dom = new Dom();

export default class Monster{
	constructor(playerLevel, type){
		this.level = this.selectLevel(playerLevel);
		this.type = type;
		this.attributes = this.setMonsterAttributes(type, playerLevel);
		this.weapon = this.setWeapon();
		this.hp = this.attributes.maxHP;
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
		attributes.ac = this.getModifier(attributes.speed) + 5 + diff;
		attributes.initiative = this.getModifier(attributes.speed) + 5 + diff;
		attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort) + diff;

		return attributes;
	}

	setWeapon(){
		return Math.ceil(Helper.randNumber(this.attributes.str) / 2);
	}

	attacked(player){
		if(player.attacking){
			console.log('monster attacked');
			player.attacking = false;
			let attackButton = dom.findById('attackButton');
			dom.setText(attackButton, 'Attack');
		}else{
			console.log('player not attacking');

		}
		console.log(player);
	}

}
