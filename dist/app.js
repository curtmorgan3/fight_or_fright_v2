import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
var render = new Render();
var dom = new Dom();
var player;
var floor = 4;
var turnOrder = [];
export function chooseCharacter(type) {
  player = new Character(type);
  render.name(player.type);
}
export function chooseName(name) {
  player.name = name;
  render.prepare(player, floor);
}
export function startFloor() {
  var monsters = Helper.generateMonsters(floor, player);
  turnOrder = Helper.determineTurnOrder(player, monsters);
  render.populateFloor(player, turnOrder, monsters);
  attackTurn();
}
export function endFloor() {
  floor++;
  render.endFloor(player, floor);
}
export function gameOver() {
  render.gameOver(player, floor);
} // Not sure if I need this one yet
//
// function playerInMiddle(){
// 	let n = findPlayerPosition();
// 	if(n != 0 && n != (turnOrder.length - 1)){
// 		console.log('player is in middle');
// 		return true;
// 	}else {
// 		console.log('player not in middle');
// 		return false;
// 	}
// }

function findPlayerPosition() {
  var n = 0;

  for (var i = 0; i < turnOrder.length; i++) {
    if (turnOrder[i].id === 'player') {
      n = i;
    }

    ;
  }

  return n;
}

export function playAgain() {
  floor = 1;
  player = {};
  turnOrder = [];
  render.clearFloor();
  render.clearField();
  render.playArea();
  render.welcome();
}

function startGame() {
  render.floor();
  render.playArea();
  render.welcome();
}

export function attackTurn(_x) {
  return _attackTurn.apply(this, arguments);
}

function _attackTurn() {
  _attackTurn = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(n) {
    var i;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (player.went) {
              n = findPlayerPosition() + 1;
              player.went = false;
            } else {
              n = 0;
            }

            i = n;

          case 2:
            if (!(i < turnOrder.length)) {
              _context.next = 15;
              break;
            }

            if (!(turnOrder[i].id === 'player')) {
              _context.next = 8;
              break;
            }

            player.attacking = true;
            i = turnOrder.length + 1;
            _context.next = 12;
            break;

          case 8:
            player.attacking = false;
            _context.next = 11;
            return turnOrder[i].attack(turnOrder[i].id, player);

          case 11:
            if (i === turnOrder.length - 1) {
              console.log('start again');
              attackTurn();
            }

          case 12:
            i++;
            _context.next = 2;
            break;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _attackTurn.apply(this, arguments);
}

startGame();
export { player };