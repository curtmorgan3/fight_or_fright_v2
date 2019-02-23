import Helper from './helper.js';
let helper = new Helper();

class Character{
	constructor(type){
		this.type = type;
		this.level = 1;
		this.xp = 0;
		this.attributes = this.attributes(type);
		this.inventory = [];
		this.weaponType = 'Wooden Sword';
		this.weapon = 6;
		this.weaponQual = 'Poor';
		this.hp = this.attributes.maxHP;
		this.name = '';
	}

	setAtt(){
  	let sum = 0;
  	let score = 0;
  	for(let i = 0; i<4; i++){
    	sum += Math.floor(helper.randNumber(5));
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
		attributes.initiative = this.getModifier(attributes.speed) + 5;
		attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort);

		return attributes;
	}

}

module.exports = Character;
