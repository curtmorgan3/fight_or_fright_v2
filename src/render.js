let Dom = require('./dom.js');
import {chooseCharacter} from './app.js';

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
		dom.setBackgroundColor(backdrop, '#423A41');
		let welcome = dom.createEl();
		dom.setClass(welcome, 'welcome');
		dom.addChild(backdrop, welcome);

		let title = dom.createEl();
		dom.setClass(title, 'welcomeTitle');
		dom.addChild(welcome, title);
		dom.setHTML(title,
			`<h2>Fight or Fright!</h2>
			 <h3>Choose your character</h3>
			`
		);

		let characters = dom.createEl();
		dom.setClass(characters, 'welcomeCharacters');
		dom.addChild(welcome, characters);

		let description = dom.createEl();
		dom.setClass(description, 'welcomeDescription');
		dom.addChild(welcome, description);

		this.characterSelect();

	}

	characterSelect(){
		let welcomeCharacters = dom.findByClass('.welcomeCharacters');
		let costumes = ['knight', 'rogue', 'priest', 'ninja', 'gambler'];
		costumes.forEach(costume =>{
			let sprite = dom.createEl();
			dom.setBackground(sprite, costume);
			dom.setClass(sprite, 'portrait');
			sprite.id = costume;
			dom.addChild(welcomeCharacters, sprite);
			dom.addListener(sprite, 'mouseover', ()=> this.describeCostume(costume));
			dom.addListener(sprite, 'mouseout', this.deleteDescription);
			dom.addListener(sprite, 'click', ()=> this.select(costume));
		})
	}

	select(costume){
		chooseCharacter(costume);
	}

	deleteDescription(){
		let description = dom.findByClass('.welcomeDescription');
		dom.setText(description, '');
	}

	describeCostume(costume){
		let description = dom.findByClass('.welcomeDescription');
		switch(costume){
			case 'knight':
				dom.setText(description,
					`Knights are strong, but all that armor makes them slow! \n +4 Strength, -2 Speed`
				);
			break;
			case 'rogue':
				dom.setText(description,
					`Rogues are sneaky, but aren't the best at hitting their targets. \n +4 Speed, -2 Dexterity`
				);
			break;
			case 'priest':
				dom.setText(description,
					`Priests channel a lot of energy from...somewhere. \n +4 Fortitude, -2 Strength`
				);
			break;
			case 'ninja':
				dom.setText(description,
					`Ninjas almost always hit their target, but they don't like to wear armor.\n +4 Dexterity, -2 Fortitude`
				);
			break;
			case 'gambler':
				dom.setText(description,
					`Gamblers don't need anything but the favor of ol' Lady Luck. \n +4 Luck`
				);
			break;
		}
	}

}

module.exports = Render
