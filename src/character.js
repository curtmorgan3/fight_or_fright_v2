class Character{
	constructor(type){
		this.type = type;
		this.level = this.level();
	}

	level(){
		return 1;
	}

}

module.exports = Character;
