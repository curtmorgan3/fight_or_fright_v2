let Helper = require('./helper.js');
let Render = require('./render.js');
let Character = require('./character.js');

let helper = new Helper();
let render = new Render();

let player;

render.playArea();
render.welcome();


export function chooseCharacter(type){
	player = new Character(type);
	console.log(player);
}
