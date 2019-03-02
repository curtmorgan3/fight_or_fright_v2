import Helper from './helper.js';
import {dom, chooseCharacter, battleField, chooseName, startFloor, endFloor, gameOver, playAgain} from './app.js';

export default class Render{

	// Play Area

	clearFloor(){
		let backdrop = dom.findByClass('.backdrop');
		let playerRow = dom.findByClass('.playerRow');
		let actions = dom.findByClass('.actions');
		let inventory = dom.findByClass('.inventory');
		let order = dom.findByClass('.order');
		let field = [backdrop, playerRow, actions, inventory, order];

		field.forEach(area => {
			dom.clear(area);
		});
	}

	clearField(){
		let field = dom.findByClass('.field');
		dom.clear(field);
	}

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

	prepare(player, floor){
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
				<h2>Floor ${floor}</h2>
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
				<h3>Floor ${battleField.floor}</h3>
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
		let order = dom.findByClass('.order');
		dom.clear(order);
		turnOrder.forEach(pos => {
			let sprite = dom.createEl();
			dom.setClass(sprite, 'portraitOrder');
			dom.setBackground(sprite, pos.type);
			dom.addChild(order, sprite);
		});

	}

	populateInventory(player){
		let inventory = dom.findByClass('.inventory');
		dom.clear(inventory);
		if(player.inventory.length > 0){
			player.inventory.forEach(item => {
				let invenItem = dom.createEl();
				dom.setBackground(invenItem, 'healthPotion');
				dom.setClass(invenItem, 'playerInventoryItem');
				let id = Helper.randNumber(10000);
				dom.setId(invenItem, id);
				dom.addListener(invenItem, 'click', ()=> player.takePotion(id));
				dom.addChild(inventory, invenItem);
			});
		}

	}

	removePotion(id, player){
		let potion = dom.findById(id);
		let inventory = dom.findByClass('.inventory');
		inventory.removeChild(potion);
		this.populatePlayerRow(player);
	}

	populateActions(player){
		let actions = dom.findByClass('.actions');
		dom.clear(actions);

		let attackButton = dom.createButton('Wait');
		dom.setClass(attackButton, 'actionButton');
		dom.setId(attackButton, 'attackButton');
		dom.addChild(actions, attackButton);

		let escapeButton = dom.createButton('Escape');
		dom.setClass(escapeButton, 'actionButton');
		dom.setId(escapeButton, 'escapeButton');
		dom.addListener(escapeButton, 'click', player.escape);
		dom.addChild(actions, escapeButton);
		// Temporary Buttons
		let endButton = dom.createButton('End Floor');
		dom.setClass(endButton, 'actionButton');
		dom.addListener(endButton, 'click', endFloor);
		dom.addChild(actions, endButton);

		let endGame = dom.createButton('End Game');
		dom.setClass(endGame, 'actionButton');
		dom.addListener(endGame, 'click', gameOver);
		dom.addChild(actions, endGame);
	}

	populateBackdrop(monsters, player){
		let backdrop = dom.findByClass('.backdrop');
		dom.clear(backdrop);
		monsters.forEach(monster => {
			let monsterContainer = dom.createEl();
			dom.setId(monsterContainer, monster.id);
			dom.setClass(monsterContainer, 'monsterContainer');

			let monsterHP = dom.createEl();
			dom.setClass(monsterHP, 'monsterHP');
			dom.addChild(monsterContainer, monsterHP);
			dom.setText(monsterHP, `${monster.hp}/${monster.attributes.maxHP}`)

			let sprite = dom.createEl();
			dom.setClass(sprite, 'portraitMonster');
			dom.setBackground(sprite, monster.type);
			dom.addChild(monsterContainer, sprite);
			dom.addListener(sprite, 'click', async ()=> await player.attackMonster(monster.id));

			let monsterBanner = dom.createEl();
			dom.setClass(monsterBanner, 'monsterBanner');
			dom.addChild(monsterContainer, monsterBanner);

			dom.addChild(backdrop, monsterContainer);
		});
	}

	populateFloor(player, turnOrder, monsters){
		let floor = dom.findByClass('.floor');
		let backdrop = dom.findByClass('.backdrop');
		dom.clear(backdrop);
		dom.setBackground(backdrop, 'backdrop');

		this.populatePlayerRow(player);
		this.populateTurnOrder(turnOrder);
		this.populateInventory(player);
		this.populateActions(player);
		this.populateBackdrop(monsters, player);

	}

	// End Floor

	levelUp(newLevels){
		newLevels --;
		let floorEnd = dom.findByClass('.floorEnd');
		let buttons = ['Strength', 'Dexterity', 'Speed', 'Fortitude', 'Luck'];
		buttons.forEach(button => {
			let select = dom.createButton(button);
			dom.addListener(select, 'click', ()=> Helper.increaseSkill(button, newLevels));
			dom.addChild(floorEnd, select);
		})
	}

	endFloor(newLevels){
		this.clearFloor();
		let backdrop = dom.findByClass('.backdrop');
		let actions = dom.findByClass('.actions');

		let end = dom.createEl();
		dom.setClass(end, 'floorEnd');
		if(newLevels === 1){
			dom.setHTML(end, `
				<h2>You leveled up ${newLevels} time!</h2>
				<h3>Add one point to your skills per level (your special skill will go up by two!)</h3>
			`);
			dom.addChild(backdrop, end);
			this.levelUp(newLevels);
		}else if(newLevels > 1){
			dom.setHTML(end, `
				<h2>You leveled up ${newLevels} times!</h2>
				<h3>Add one point to your skills per level (your special skill will go up by two!)</h3>
			`);
			dom.addChild(backdrop, end);
			this.levelUp(newLevels);
		}else{
			dom.setHTML(end, `
				<h2>Floor clear!</h2>
				<h3>Prepare for floor ${battleField.floor}!</h3>
			`);
			dom.addChild(backdrop, end);

			let cont = dom.createButton('Continue');
			dom.setClass(cont, 'actionButton');
			dom.addListener(cont, 'click', startFloor);
			dom.addChild(actions, cont);
		}

	}

	resetFloor(){
		this.clearFloor();
		let backdrop = dom.findByClass('.backdrop');
		let actions = dom.findByClass('.actions');

		let end = dom.createEl();
		dom.setClass(end, 'floorEnd');

		dom.setHTML(end, `
			<h2>Escaped!</h2>
			<h3>If your health was low, it's been restored a bit. Don't give up!</h3>
		`);
		dom.addChild(backdrop, end);

		let cont = dom.createButton('Get back in the fight!');
		dom.setClass(cont, 'actionButton');
		dom.addListener(cont, 'click', startFloor);
		dom.addChild(actions, cont);

	}

	gameOver(player){
		this.clearFloor();
		let backdrop = dom.findByClass('.backdrop');
		let actions = dom.findByClass('.actions');

		let end = dom.createEl();
		dom.setClass(end, 'floorEnd');
		dom.addChild(backdrop, end);
		dom.setHTML(end, `
			<h2>Game Over</h2>
		`);

		let again = dom.createButton('Play Again');
		dom.setClass(again, 'actionButton');
		dom.addListener(again, 'click', playAgain);
		dom.addChild(actions, again);
	}

}
