export default class Dom{
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
	setBackgroundColor(parent, color){
		parent.style.backgroundImage = 'none';
		parent.style.backgroundColor = `${color}`;
	}

	addChild(parent, child){
		parent.appendChild(child);
	}
	removeChild(parent, child){
		parent.removeChild(child);
	}
	clear(parent){
		while(parent.firstChild){
			parent.removeChild(parent.firstChild);
		}
	}

	setHTML(parent, html){
		parent.innerHTML = `${html}`;
	}
	setText(parent, text){
		parent.innerText = text;
	}
	addListener(parent, type, action){
		return parent.addEventListener(`${type}`, action);
	}

	createField(){
		return document.createElement('input');
	}

	createButton(text){
		let button = document.createElement('button');
		this.setText(button, text);
		return button;
	}

}
