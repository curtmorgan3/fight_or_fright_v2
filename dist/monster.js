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
      attributes.ac = this.getModifier(attributes.speed) + 5 + diff;
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
    value: function attack(player) {
      var _this2 = this;

      if (player.attacking) {
        this.attacking = false;
      } else {
        setTimeout(function () {
          console.log("Monster ".concat(_this2.id, " attacks"));
          var sprite = dom.findById(_this2.id);
          dom.setClass(sprite, 'attackingSprite');
        }, 2000);
      }
    } // attacked(player){
    // 	if(player.attacking){
    // 		player.attacking = false;
    // 		let attackButton = dom.findById('attackButton');
    // 		dom.setText(attackButton, 'Attack');
    // 		return(this.id);
    // 	}else{
    // 		console.log('player not attacking');
    //
    // 	}
    // }

  }]);

  return Monster;
}();

export { Monster as default };