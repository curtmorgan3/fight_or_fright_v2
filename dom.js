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
