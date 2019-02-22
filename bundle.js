(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Helper = require('./helper.js');
let Dom = require('./dom.js');

let helper = new Helper();
let dom = new Dom();

let floor = dom.createEl('div');
dom.addChild(floor);
dom.setBackground(floor, 'floor')
dom.setClass(floor, 'floor');

},{"./dom.js":2,"./helper.js":3}],2:[function(require,module,exports){
class Dom{
	constructor(){

	}

	findClass(className){
		return document.querySelector(className);
	}

	createEl(type){
		return document.createElement(type);
	}

	addChild(child){
		let field = document.querySelector('.field');
		field.appendChild(child);
	}

	setHTML(parent, html){
		parent.innerHTML = `${html}`;
	}

	setBackground(parent, image){
		parent.style.backgroundImage = `url(images/${image}.png)`;
	}

	addListener(parent, type, action){
		return parent.addEventListener(`${type}`, action);
	}

	setClass(parent, className){
		parent.className = `${className}`;
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

},{}]},{},[1]);
