let Dom = require('./dom.js');
let dom = new Dom();

class Render{

	// Play Area
	floor(){
		let field = dom.findByClass('.field');
		let floor = dom.createEl();
		dom.setClass(floor, 'floor');
		dom.setBackground(floor, 'floor')
		dom.addChild(field, floor);
	}

	backdrop(){
		let floor = dom.findByClass('.floor');
		let backdrop = dom.createEl();
		dom.setClass(backdrop, 'backdrop');
		dom.addChild(floor, backdrop);
	}

	playerRow(){
		let floor = dom.findByClass('.floor');
		let playerRow = dom.createEl();
		dom.setClass(playerRow, 'playerRow');
		dom.addChild(floor, playerRow);
	}

	actions(){
		let floor = dom.findByClass('.floor');
		let actions = dom.createEl();
		dom.setClass(actions, 'actions');
		dom.addChild(floor, actions);
	}

	inventory(){
		let floor = dom.findByClass('.floor');
		let inventory = dom.createEl();
		dom.setClass(inventory, 'inventory');
		dom.addChild(floor, inventory);
	}

	order(){
		let floor = dom.findByClass('.floor');
		let order = dom.createEl();
		dom.setClass(order, 'order');
		dom.addChild(floor, order);
	}

	playArea(){
		this.floor();
		this.backdrop();
		this.playerRow();
		this.actions();
		this.inventory();
		this.order();
	}

	// Welcome

	welcome(){
		let backdrop = dom.findByClass('.backdrop');
		let welcome = dom.createEl();
		dom.setClass(welcome, 'welcome');
		dom.addChild(backdrop, welcome);
		dom.setHTML(welcome,
			`<h2>Fight or Fright</h2>
			 <h3>Choose your character</h3>
			`
		)
	}

}

module.exports = Render
