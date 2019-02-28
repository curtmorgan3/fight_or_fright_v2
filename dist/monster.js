import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Helper from './helper.js';
import Dom from './dom.js';
var dom = new Dom();

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
    this.attacking = false;
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
      _regeneratorRuntime.mark(function _callee(player) {
        var next, sprite;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                next = 0;

                if (player.attacking) {
                  this.attacking = false;
                } else {
                  console.log("Monster ".concat(this.id, " attacks"));
                  sprite = dom.findById(this.id);
                  dom.setClass(sprite, 'attackingSprite');
                }

                _context.next = 4;
                return Helper.sleep(2000);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function attack(_x) {
        return _attack.apply(this, arguments);
      }

      return attack;
    }()
  }]);

  return Monster;
}();

export { Monster as default };