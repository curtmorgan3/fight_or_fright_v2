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
