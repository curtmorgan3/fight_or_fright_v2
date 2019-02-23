"use strict";

var _helper = _interopRequireDefault(require("./helper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var helper = new _helper.default();

var Character =
/*#__PURE__*/
function () {
  function Character(type) {
    _classCallCheck(this, Character);

    this.type = type;
    this.level = 1;
    this.xp = 0;
    this.attributes = this.attributes(type);
    this.inventory = [];
    this.weaponType = 'Wooden Sword';
    this.weapon = 6;
    this.weaponQual = 'Poor';
    this.hp = this.attributes.maxHP;
  }

  _createClass(Character, [{
    key: "setAtt",
    value: function setAtt() {
      var sum = 0;
      var score = 0;

      for (var i = 0; i < 4; i++) {
        sum += Math.floor(helper.randNumber(5));
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

      // str, dex, speed, fort, luck, ac, maxHP, init
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
    }
  }]);

  return Character;
}();

module.exports = Character;