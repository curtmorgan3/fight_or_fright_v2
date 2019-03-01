import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Helper from './helper.js';
import { render, dom, player, attackTurn, battleField, endFloor } from './app.js';

var Character =
/*#__PURE__*/
function () {
  function Character(type) {
    _classCallCheck(this, Character);

    this.type = type;
    this.id = 'player';
    this.level = 1;
    this.xp = 300;
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
      var mod = 0;

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

      if (player.inventory.length === 2) {
        player.inventory = ['potion'];
      } else if (player.inventory.length > 2) {
        player.inventory = player.inventory.pop();
      } else {
        player.inventory = [];
      }

      render.removePotion(id, player);
    }
  }, {
    key: "attackMonster",
    value: function () {
      var _attackMonster = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(id) {
        var defenderContainer, defenderBanner, defenderHP, floor, overlay, defenderPos, defender, hit, damage, xp;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                defenderContainer = dom.findById(id);
                defenderBanner = defenderContainer.querySelector('.monsterBanner');
                defenderHP = defenderContainer.querySelector('.monsterHP');
                floor = dom.findByClass('.floor');
                overlay = dom.createEl();
                dom.setClass(overlay, 'overlay');

                if (!player.attacking) {
                  _context.next = 35;
                  break;
                }

                dom.addChild(floor, overlay);
                defenderPos = Helper.findPosition(id, battleField.turnOrder);
                defender = battleField.turnOrder[defenderPos];
                dom.setText(defenderBanner, "".concat(player.name, " attacks!"));
                _context.next = 13;
                return Helper.sleep(2000);

              case 13:
                hit = Helper.determineHit(player, defender);

                if (!hit) {
                  _context.next = 25;
                  break;
                }

                damage = Helper.determineDamage(player, defender);
                dom.setText(defenderBanner, "Hit! ".concat(damage, " damage."));
                defender.hp -= damage;
                dom.setText(defenderHP, "".concat(defender.hp, "/").concat(defender.attributes.maxHP));
                _context.next = 21;
                return Helper.sleep(2000);

              case 21:
                dom.setText(defenderBanner, "");

                if (defender.hp < 1) {
                  xp = Helper.xp(player, defender.level);
                  player.xp += xp;
                  battleField.turnOrder = battleField.turnOrder.filter(function (monster) {
                    return monster.id !== id;
                  });

                  if (battleField.turnOrder.length === 1) {
                    endFloor();
                  } else {
                    render.populateTurnOrder(battleField.turnOrder);
                    battleField.monsters = battleField.monsters.filter(function (monster) {
                      return monster.id !== id;
                    });
                    render.populateBackdrop(battleField.monsters, player);
                  }
                }

                _context.next = 29;
                break;

              case 25:
                dom.setText(defenderBanner, "Miss!");
                _context.next = 28;
                return Helper.sleep(2000);

              case 28:
                dom.setText(defenderBanner, "");

              case 29:
                dom.setText(attackButton, 'Wait');
                player.went = true;
                player.attacking = false;
                attackTurn();
                _context.next = 36;
                break;

              case 35:
                console.log('Not players turn');

              case 36:
                dom.destroyEl(overlay);

              case 37:
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
    key: "escape",
    value: function escape() {
      if (player.attacking) {
        console.log('player escape');
      } else {
        console.log('Not players turn');
      }
    }
  }]);

  return Character;
}();

export { Character as default };