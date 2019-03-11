import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Monster from './monster.js';
import { player, render, battleField } from './app.js';

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "randNumber",
    value: function randNumber(n) {
      return Math.floor(Math.random() * Math.floor(n) + 1);
    }
  }, {
    key: "d20",
    value: function d20() {
      return this.randNumber(20);
    }
  }, {
    key: "generateMonsters",
    value: function generateMonsters(player) {
      var monsterTypes = ['ghost', 'skeleton', 'vampire', 'werewolf', 'zombie'];
      var monsters = [];
      var coinToss = this.randNumber(2); // Determine how many monsters to create and push them to monsters

      if (battleField.floor === 1) {
        var monster = new Monster(player.level, monsterTypes[this.randNumber(5) - 1]);
        monsters.push(monster);
      } else {
        var n;

        if (coinToss === 1) {
          n = battleField.floor + 1;
        } else {
          n = battleField.floor - 1;
        }

        for (var i = 0; i < n; i++) {
          var _monster = new Monster(player.level, monsterTypes[this.randNumber(5) - 1]);

          monsters.push(_monster);
        }
      }

      return monsters;
    }
  }, {
    key: "determineTurnOrder",
    value: function determineTurnOrder(player, monsters) {
      var turnOrder = [];
      turnOrder.push(player);
      monsters.forEach(function (monster) {
        turnOrder.push(monster);
      });
      turnOrder = turnOrder.sort(function (a, b) {
        return b.attributes.initiative - a.attributes.initiative;
      });
      return turnOrder;
    }
  }, {
    key: "sleep",
    value: function () {
      var _sleep = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(milliseconds) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(resolve, milliseconds);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sleep(_x) {
        return _sleep.apply(this, arguments);
      }

      return sleep;
    }()
  }, {
    key: "findPosition",
    value: function findPosition(id, array) {
      var n = 0;

      for (var i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          n = i;
        }

        ;
      }

      return n;
    }
  }, {
    key: "determineHit",
    value: function determineHit(attacker, defender) {
      var attackRoll = this.d20() + attacker.getModifier(attacker.attributes.dex);

      if (attackRoll > defender.attributes.ac) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "determineDamage",
    value: function determineDamage(attacker, defender) {
      var damage = this.randNumber(attacker.weapon) + attacker.getModifier(attacker.attributes.str);

      if (damage < 1) {
        damage = 1;
      }

      ;
      var coin = this.randNumber(2);

      if (coin > 1) {
        damage++;
      }

      return damage;
    }
  }, {
    key: "xp",
    value: function xp(player, monsterLevel) {
      var xp = monsterLevel * this.randNumber(10) * 10 + this.randNumber(10) * player.getModifier(player.attributes.luck);

      if (xp < 1) {
        xp = 1;
      }

      return xp;
    }
  }, {
    key: "checkLevelUp",
    value: function checkLevelUp(n) {
      var xp = player.xp;
      var currentLevel = player.level;
      var nextLevel = currentLevel + 1;
      var requiredXP = (nextLevel * nextLevel + nextLevel) / 2 * 100 - nextLevel * 100;

      if (xp >= requiredXP) {
        var canLevel = n;
        canLevel++;
        player.level++;
        return this.checkLevelUp(canLevel);
      } else {
        return n;
      }
    }
  }, {
    key: "increaseSkill",
    value: function increaseSkill(skill, newLevels) {
      switch (skill) {
        case 'Strength':
          if (player.type === 'knight') {
            player.attributes.str += 2;
          } else {
            player.attributes.str++;
          }

          break;

        case 'Dexterity':
          if (player.type === 'ninja') {
            player.attributes.dex += 2;
          } else {
            player.attributes.dex++;
          }

          break;

        case 'Speed':
          if (player.type === 'rogue') {
            player.attributes.speed += 2;
          } else {
            player.attributes.speed++;
          }

          break;

        case 'Fortitude':
          if (player.type === 'priest') {
            player.attributes.fort += 2;
          } else {
            player.attributes.fort++;
          }

          break;

        case 'Luck':
          if (player.type === 'gambler') {
            player.attributes.luck += 2;
          } else {
            player.attributes.luck++;
          }

          break;
      }

      player.attributes.maxHP = player.attributes.maxHP + player.getModifier(player.attributes.fort);
      player.hp = player.attributes.maxHP;
      player.attributes.initiative = player.getModifier(player.attributes.speed) + 3;
      render.endFloor(newLevels);
    }
  }, {
    key: "tryToEscape",
    value: function tryToEscape() {
      var roll = this.d20();

      if (roll === 1) {
        return false;
      } else if (roll === 20) {
        return true;
      } else {
        roll = roll + player.getModifier(player.attributes.speed);
        var monsterSpeedAverage = 0;
        battleField.monsters.forEach(function (monster) {
          monsterSpeedAverage += monster.attributes.speed;
        });
        monsterSpeedAverage = monsterSpeedAverage / battleField.monsters.length;

        if (roll > monsterSpeedAverage) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: "chanceFoundWeapon",
    value: function chanceFoundWeapon() {
      var chance = this.randNumber(100) + player.getModifier(player.attributes.luck);

      if (chance > 50) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "newWeapon",
    value: function newWeapon() {
      var chance = this.randNumber(100) + player.getModifier(player.attributes.luck);

      if (chance > 95) {
        return 20;
      } else if (chance > 85 && chance < 95) {
        return 16;
      } else if (chance > 70 && chance < 85) {
        return 12;
      } else if (chance > 50 && chance < 70) {
        return 8;
      } else if (chance < 50) {
        return 6;
      }
    }
  }, {
    key: "chanceFoundPotion",
    value: function chanceFoundPotion() {
      var chance = this.randNumber(100) + player.getModifier(player.attributes.luck);

      if (chance > 50) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Helper;
}();

export { Helper as default };