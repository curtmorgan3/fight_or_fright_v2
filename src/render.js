import Dom from './dom.js';
import {chooseCharacter, chooseName, startFloor} from './app.js';

let dom = new Dom();

export default class Render{

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
			dom.addListener(sprite, 'mouseover', () => this.describeCostume(costume));
			dom.addListener(sprite, 'mouseout', this.deleteDescription);
			dom.addListener(sprite, 'click', () => this.select(costume));
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
					`Knights are strong, but all that armor makes them slow! \n +2 Strength, -2 Speed`
				);
			break;
			case 'rogue':
				dom.setText(description,
					`Rogues are sneaky, but aren't the best at hitting their targets. \n +2 Speed, -2 Dexterity`
				);
			break;
			case 'priest':
				dom.setText(description,
					`Priests channel a lot of energy from...somewhere. \n +2 Fortitude, -2 Strength`
				);
			break;
			case 'ninja':
				dom.setText(description,
					`Ninjas almost always hit their target, but they don't like to wear armor.\n +2 Dexterity, -2 Fortitude`
				);
			break;
			case 'gambler':
				dom.setText(description,
					`Gamblers don't need anything but the favor of ol' Lady Luck. \n +4 Luck`
				);
			break;
		}
	}

	name(playerType){
		let welcome = dom.findByClass('.welcome');
		dom.clear(welcome);

		let setNameWrapper = dom.createEl();
		dom.setClass(setNameWrapper, 'setNameWrapper');
		dom.addChild(welcome, setNameWrapper);

		let nameMsg = dom.createEl();
		dom.setClass(nameMsg, 'nameMsg');
		dom.setText(nameMsg, `What is your name, ${playerType}?`);
		dom.addChild(setNameWrapper, nameMsg);

		let nameInputField = dom.createField();
		dom.setClass(nameInputField, 'nameInputField');
		dom.addChild(setNameWrapper, nameInputField);

		let nameSubmit = dom.createButton('Submit');
		dom.setClass(nameSubmit, 'nameSubmit');
		dom.addChild(setNameWrapper, nameSubmit);
		dom.addListener(nameSubmit, 'click', ()=> chooseName(nameInputField.value));

	}

	// Prepare for horror!

	prepare(player, level){
		let welcome = dom.findByClass('.welcome');
		dom.clear(welcome);

		let prepareWrapper = dom.createEl();
		dom.setClass(prepareWrapper, 'prepareWrapper');
		dom.addChild(welcome, prepareWrapper);

		let prepare = dom.createEl();
		dom.setText(prepare, 'Prepare for Horror!');
		dom.setClass(prepare, 'prepare');
		dom.addChild(prepareWrapper, prepare);

		let stats = dom.createEl();
		dom.setClass(stats, 'prepareStats');
		dom.addChild(prepareWrapper, stats);
		dom.setHTML(stats,
			`
				<h2>${player.name}, Level ${player.level} ${player.type}</h2>
				<h3>Strength: ${player.attributes.str} / Speed: ${player.attributes.speed} / Dexterity: ${player.attributes.dex}</h3>
				<h3>Fortitude: ${player.attributes.fort} / Luck: ${player.attributes.luck} / Max HP: ${player.attributes.maxHP}</h3>
				<h3>Weapon: ${player.weaponType} / Quality: ${player.weapon}
				<h2>Floor ${level}</h2>
			`
		)


		let submit = dom.createButton('Enter...');
		dom.addListener(submit, 'click', startFloor);
		dom.addChild(prepareWrapper, submit);
	}

	// Floor

	populatePlayerRow(player){
		let playerRow = dom.findByClass('.playerRow');
		dom.clear(playerRow);
		let playerInfoWrapper = dom.createEl();
		dom.setClass(playerInfoWrapper, 'playerInfoWrapper');
		dom.addChild(playerRow, playerInfoWrapper);

		let playerHealth = dom.createEl();
		dom.setClass(playerHealth, 'playerRowPlayerHealth');
		dom.setHTML(playerHealth, `
				<h3>${player.hp}/${player.attributes.maxHP}</h3>
			`);
		dom.addChild(playerInfoWrapper, playerHealth);

		let playerStats = dom.createEl();
		dom.setClass(playerStats, 'playerRowPlayerStats');
		dom.setHTML(playerStats, `
				<h3>Strength: ${player.attributes.str} Speed: ${player.attributes.speed} \n
						Dexterity: ${player.attributes.dex} Fortitude: ${player.attributes.fort} \n
						Luck: ${player.attributes.luck} Level: ${player.level}
				</h3>
			`)
		dom.addChild(playerInfoWrapper, playerStats);

		let playerSprite = dom.createEl();
		dom.setClass(playerSprite, 'playerRowPlayerSprite');
		dom.setBackground(playerSprite, `${player.type}`);
		dom.addChild(playerInfoWrapper, playerSprite);

		let weaponStats = dom.createEl();
		dom.setClass(weaponStats, 'playerRowWeaponStats');
		dom.setHTML(weaponStats, `
				<h3>${player.weaponType}, ${player.weaponQual}</h3>
			`);
		dom.addChild(playerInfoWrapper, weaponStats);

		let weaponIcon = dom.createEl();
		dom.setClass(weaponIcon, 'playerRowWeaponIcon');
		dom.setBackground(weaponIcon, `${player.weaponQual.toLowerCase()}`);
		dom.addChild(playerInfoWrapper, weaponIcon);
	}

	populateTurnOrder(turnOrder){

	}

	populateInventory(player){
		let inventory = dom.findByClass('.inventory');
		dom.clear(inventory);

		player.inventory.forEach(item => {
			let invenItem = dom.createEl();
			dom.setBackground(invenItem, 'healthPotion');
			dom.setClass(invenItem, 'playerInventoryItem');
			dom.addListener(invenItem, 'click', player.takePotion);
			dom.addChild(inventory, invenItem);
		});
	}

	populateActions(player){
		let actions = dom.findByClass('.actions');
		dom.clear(actions);

		let attackButton = dom.createButton('Attack');
		dom.setClass(attackButton, 'actionButton');
		dom.addListener(attackButton, 'click', player.attack);
		dom.addChild(actions, attackButton);

		let escapeButton = dom.createButton('Escape');
		dom.setClass(escapeButton, 'actionButton');
		dom.addListener(escapeButton, 'click', player.escape);
		dom.addChild(actions, escapeButton);
	}

	populateFloor(player, turnOrder){
		let welcome = dom.findByClass('.welcome');
		dom.clear(welcome);
		let floor = dom.findByClass('.floor');
		let backdrop = dom.findByClass('.backdrop');
		dom.setBackground(backdrop, 'backdrop');

		this.populatePlayerRow(player);
		// this.populateTurnOrder(turnOrder);
		this.populateInventory(player);
		this.populateActions(player);

	}

}
