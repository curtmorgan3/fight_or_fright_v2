let Dom = require('./dom.js');
let dom = new Dom();

class Render{

	floor(){
		let field = dom.findByClass('.field');
		let floor = dom.createEl('div');
		dom.setClass(floor, 'floor');
		dom.setBackground(floor, 'floor')
		dom.addChild(field, floor);
	}
}

module.exports = Render
