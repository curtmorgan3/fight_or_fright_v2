let Helper = require('./helper.js');
let Render = require('./render.js');

let helper = new Helper();
let render = new Render();

// render.playArea();
// render.welcome();
let arr = [1,2,3];
function logThem(n){
	console.log(n);
}
arr.forEach(logThem);

arr.forEach(num =>{
	console.log(num);
})
