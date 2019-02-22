class Dom{
	constructor(){

	}

	findByClass(className){
		return document.querySelector(className);
	}

	createEl(){
		return document.createElement('div');
	}

	addChild(parent, child){
		parent.appendChild(child);
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
