import Monster from './monster.js';

export default class Helper{

	static randNumber(n){
		return Math.floor(Math.random() * Math.floor(n) + 1);
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


}
