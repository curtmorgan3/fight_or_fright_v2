import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Helper from './helper.js';
import { battleField, player, gameOver, render, dom } from './app.js';

var Monster =
/*#__PURE__*/
function () {
  function Monster(playerLevel, type) {
    _classCallCheck(this, Monster);

    this.level = this.selectLevel(playerLevel);
    this.type = type;
    this.attributes = this.setMonsterAttributes(type, playerLevel);
    this.weapon = this.setWeapon();
    this.hp = this.attributes.maxHP;
    this.id = Helper.randNumber(10000);
  }

  _createClass(Monster, [{
    key: "selectLevel",
    value: function selectLevel(playerLevel) {
      var coinToss = Helper.randNumber(2);

      if (playerLevel === 1) {
        return playerLevel;
      } else if (coinToss === 1) {
        return playerLevel + 1;
      } else if (coinToss === 2) {
        return playerLevel - 1;
      }
    }
  }, {
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
    key: "setMonsterAttributes",
    value: function setMonsterAttributes(type, playerLevel) {
      var _this = this;

      var attrs = ['str', 'dex', 'speed', 'fort', 'maxHP'];
      var attributes = {
        str: 0,
        dex: 0,
        speed: 0,
        fort: 0,
        maxHP: 0
      };
      attrs.forEach(function (att) {
        attributes[att] = _this.setAtt();
      });

      switch (type) {
        case 'skeleton':
          break;

        case 'ghost':
          attributes.speed += 3;
          break;

        case 'werewolf':
          attributes.dex += 3;
          break;

        case 'vampire':
          attributes.fort += 3;
          break;

        case 'zombie':
          attributes.str += 3;
          break;
      }

      var diff = this.level - playerLevel;
      attributes.ac = this.getModifier(attributes.speed) + 10 + diff;
      attributes.initiative = this.getModifier(attributes.speed) + 5 + diff;
      attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort) + diff;
      return attributes;
    }
  }, {
    key: "setWeapon",
    value: function setWeapon() {
      return Math.ceil(Helper.randNumber(this.attributes.str) / 2);
    }
  }, {
    key: "attack",
    value: function () {
      var _attack = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var monsterContainer, sprite, banner, hit, damage;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("Monster ".concat(this.id, " attacks"));
                monsterContainer = dom.findById(this.id);
                sprite = monsterContainer.querySelector('.portraitMonster');
                banner = monsterContainer.querySelector('.monsterBanner');
                dom.setText(banner, 'Attacking!');
                hit = Helper.determineHit(this, player);

                if (!hit) {
                  _context.next = 16;
                  break;
                }

                damage = Helper.determineDamage(this, player);
                player.hp -= damage;
                _context.next = 11;
                return Helper.sleep(2000);

              case 11:
                render.populatePlayerRow(player);
                dom.setText(banner, "Hit! ".concat(damage, " damage."));

                if (player.hp < 1) {
                  gameOver();
                }

                _context.next = 19;
                break;

              case 16:
                _context.next = 18;
                return Helper.sleep(2000);

              case 18:
                dom.setText(banner, 'Miss!');

              case 19:
                _context.next = 21;
                return Helper.sleep(1000);

              case 21:
                dom.setText(banner, '');

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function attack() {
        return _attack.apply(this, arguments);
      }

      return attack;
    }()
  }]);

  return Monster;
}();

export { Monster as default };