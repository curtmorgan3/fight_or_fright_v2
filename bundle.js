(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Helper = require('./helper.js');
let Render = require('./render.js');

let helper = new Helper();
let render = new Render();

render.playArea();
render.welcome();

},{"./helper.js":3,"./render.js":4}],2:[function(require,module,exports){
class Dom{
	constructor(){

	}

	findByClass(className){
		return document.querySelector(className);
	}

	createEl(){
		return document.createElement('div');
	}

	setClass(parent, className){
		parent.className = `${className}`;
	}

	setBackground(parent, image){
		parent.style.backgroundImage = `url(images/${image}.png)`;
	}

	addChild(parent, child){
		parent.appendChild(child);
	}

	setHTML(parent, html){
		parent.innerHTML = `${html}`;
	}

	addListener(parent, type, action){
		return parent.addEventListener(`${type}`, action);
	}


}

module.exports = Dom

},{}],3:[function(require,module,exports){
class Helper{

	log() {
		console.log("log");
	}

	randNumber(n){
		return Math.floor(Math.random() * Math.floor(n) + 1);
	}







}
module.exports = Helper

},{}],4:[function(require,module,exports){
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

},{"./dom.js":2}]},{},[1]);
