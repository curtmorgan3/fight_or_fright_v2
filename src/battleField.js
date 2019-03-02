

export default class BattleField{
	constructor(turnOrder, monsters, floor){
		this.turnOrder = turnOrder;
		this.monsters = monsters;
		this.floor = floor;
		this.checkedForWeapon = false;
	}
}
