let Helper = require('./helper.js');
let Dom = require('./dom.js');

let helper = new Helper();
let dom = new Dom();

let floor = dom.createEl('div');
dom.addChild(floor);
dom.setBackground(floor, 'floor')
dom.setClass(floor, 'floor');
