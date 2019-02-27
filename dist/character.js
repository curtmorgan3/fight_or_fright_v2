import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Helper from './helper.js';
import Render from './render.js';
import Dom from './dom.js';
import { player, attackTurn } from './app.js';
var render = new Render();
var dom = new Dom();

var Character =
/*#__PURE__*/
function () {
  function Character(type) {
    _classCallCheck(this, Character);

    this.type = type;
    this.id = 'player';
    this.level = 1;
    this.xp = 0;
    this.attributes = this.attributes(type);
    this.inventory = ['potion', 'potion'];
    this.weaponType = 'Wooden Sword';
    this.weapon = 6;
    this.weaponQual = 'Poor';
    this.hp = this.attributes.maxHP;
    this.name = '';
    this.attacking = false;
    this.went = false;
  } // Static Methods


  _createClass(Character, [{
    key: "setAtt",
    value: function setAtt() {
      var sum = 0;
      var score = 0;

      for (var i = 0; i < 4; i++) {
        sum += Math.floor(Helper.randNumber(5));
      }

      if (score < 2) {
        score = 2;
      }

      score = Math.floor(sum / 4);
      return score;
    }
  }, {
    key: "getModifier",
    value: function getModifier(n) {
      var mod = -5;

      for (var i = 1; i < n; i += 2) {
        mod += 1;
      }

      return mod;
    }
  }, {
    key: "attributes",
    value: function attributes(type) {
      var _this = this;

      var attrs = ['str', 'dex', 'speed', 'fort', 'luck', 'maxHP'];
      var attributes = {
        str: 0,
        dex: 0,
        speed: 0,
        fort: 0,
        luck: 0,
        ac: 0,
        maxHP: 0,
        initiative: 0
      };
      attrs.forEach(function (att) {
        attributes[att] = _this.setAtt();
      });

      switch (type) {
        case 'knight':
          attributes.str += 2;
          attributes.speed -= 2;
          break;

        case 'rogue':
          attributes.speed += 2;
          attributes.dex -= 2;
          break;

        case 'ninja':
          attributes.dex += 2;
          attributes.fort -= 2;
          break;

        case 'priest':
          attributes.fort += 2;
          attributes.str -= 2;
          break;

        case 'gambler':
          attributes.luck += 4;
          break;
      }

      attributes.ac = this.getModifier(attributes.speed) + 10;
      attributes.initiative = this.getModifier(attributes.speed) + 5;
      attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort);
      return attributes;
    } // Instance Methods

  }, {
    key: "takePotion",
    value: function takePotion(id) {
      this.hp = this.attributes.maxHP;
      render.removePotion(id);
    }
  }, {
    key: "attackMonster",
    value: function () {
      var _attackMonster = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(id) {
        var attackButton;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (player.attacking) {
                  console.log("player attacks ".concat(id));
                  attackButton = dom.findById('attackButton');
                  dom.setText(attackButton, 'Attack');
                  player.went = true;
                  player.attacking = false;
                  attackTurn();
                } else {
                  console.log('Not players turn');
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function attackMonster(_x) {
        return _attackMonster.apply(this, arguments);
      }

      return attackMonster;
    }()
  }, {
    key: "attack",
    value: function attack() {
      console.log('players turn');
      player.attacking = true;

      if (player.attacking) {
        var attackButton = dom.findById('attackButton');
        dom.setText(attackButton, 'Select a Target');
      }
    }
  }, {
    key: "escape",
    value: function escape() {
      console.log('player escape');
    }
  }]);

  return Character;
}();

export { Character as default };