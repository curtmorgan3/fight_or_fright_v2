import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
import BattleField from './battleField.js';
var render = new Render();
var dom = new Dom();
var floor = 5;
var player = {};
var monsters = [];
var turnOrder = [];
var battleField = {};
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
  battleField = new BattleField(turnOrder, monsters);
  render.populateFloor(player, turnOrder, monsters);
  attackTurn();
}
export function endFloor() {
  floor++;
  render.endFloor(player, floor);
}
export function gameOver() {
  render.gameOver(player, floor);
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
  render.playArea();
  render.welcome();
}

export function resetMonsterSprites() {
  console.log('sprite reset');
  turnOrder.forEach(function (character) {
    if (character.id !== 'player') {
      var sprite = dom.findById(character.id);
      dom.setClass(sprite, 'portraitMonster');
    }
  });
}
export function attackTurn(_x) {
  return _attackTurn.apply(this, arguments);
}

function _attackTurn() {
  _attackTurn = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(n) {
    var attackButton, escapeButton, i;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            attackButton = dom.findById('attackButton');
            escapeButton = dom.findById('escapeButton');

            if (player.went && Helper.findPosition(player.id, battleField.turnOrder) !== battleField.turnOrder.length - 1) {
              n = Helper.findPosition(player.id, battleField.turnOrder) + 1;
              player.went = false;
            } else {
              n = 0;
            }

            i = n;

          case 4:
            if (!(i < battleField.turnOrder.length)) {
              _context.next = 21;
              break;
            }

            if (!(battleField.turnOrder[i].id === 'player')) {
              _context.next = 12;
              break;
            }

            dom.setText(attackButton, 'Select a Target');
            dom.setText(escapeButton, 'Escape');
            player.attacking = true;
            i = battleField.turnOrder.length + 1;
            _context.next = 18;
            break;

          case 12:
            player.attacking = false;
            dom.setText(attackButton, 'Wait');
            dom.setText(escapeButton, 'Wait');
            _context.next = 17;
            return battleField.turnOrder[i].attack(battleField.turnOrder[i].id, player);

          case 17:
            if (i === battleField.turnOrder.length - 1) {
              console.log('start again');
              resetMonsterSprites();
              attackTurn();
            }

          case 18:
            i++;
            _context.next = 4;
            break;

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _attackTurn.apply(this, arguments);
}

startGame();
export { render, dom, player, battleField };