import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import Render from './render.js';
import Character from './character.js';
import Dom from './dom.js';
import Helper from './helper.js';
import BattleField from './battleField.js';
var render = new Render();
var dom = new Dom();
var floor = 1;
var player = {};
var monsters = [];
var turnOrder = [];
var battleField = {}; // TODO: Chance for item drop between levels
// TODO: Replace weapons

export function chooseCharacter(type) {
  player = new Character(type);
  render.name(player.type);
}
export function chooseName(name) {
  player.name = name;
  render.prepare(player, floor);
}
export function startFloor() {
  battleField = new BattleField(turnOrder, monsters, floor);
  monsters = Helper.generateMonsters(player);
  turnOrder = Helper.determineTurnOrder(player, monsters);
  battleField.monsters = monsters;
  battleField.turnOrder = turnOrder;
  render.populateFloor(player, turnOrder, monsters);
  attackTurn();
}
export function endFloor() {
  var overlay = dom.findByClass('.overlay');
  dom.destroyEl(overlay);

  if (!battleField.checkedForWeapon) {
    battleField.checkedForWeapon = true;
    var foundNewWeapon = Helper.chanceFoundWeapon();

    if (!foundNewWeapon) {
      console.log('didnt find weapon');
      var foundPotion = Helper.chanceFoundPotion(); // Found a potion

      console.log('inven', player.inventory);

      if (foundPotion && player.inventory.length < 2) {
        console.log('found potion');
        battleField.foundPotion = true;
        render.foundPotion();
      } else {
        console.log('found nothing');
        var newLevels = Helper.checkLevelUp(0);
        battleField.floor = battleField.floor + 1;
        floor = battleField.floor;
        render.endFloor(newLevels);
      } // Found a weapon

    } else {
      var newWeapon = Helper.newWeapon();
      battleField.foundWeapon = true;
      render.foundWeapon(newWeapon);
    }
  } else {
    var _newLevels = Helper.checkLevelUp(0);

    battleField.floor = battleField.floor + 1;
    floor = battleField.floor;
    render.endFloor(_newLevels);
  }
}
export function resetFloor() {
  var overlay = dom.findByClass('.overlay');
  dom.destroyEl(overlay);

  if (player.hp < player.attributes.maxHP / 2) {
    player.hp = player.attributes.maxHP / 2;
  }

  ;
  render.resetFloor();
}
export function gameOver() {
  var overlay = dom.findByClass('.overlay');
  dom.destroyEl(overlay);
  render.gameOver(player);
}
export function playAgain() {
  battleField.floor = 1;
  floor = battleField.floor;
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

export function takeWeapon(weapon, qual, type) {
  player.weapon = weapon;
  player.weaponQual = qual;
  player.weaponType = type;
  endFloor();
}
;
export function takePotion() {
  player.inventory.push('potion');
  endFloor();
}
startGame();
export { render, dom, player, battleField };