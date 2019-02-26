import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Monster from './monster.js';

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
    key: "generateMonsters",
    value: function generateMonsters(floor, player) {
      var monsterTypes = ['ghost', 'skeleton', 'vampire', 'werewolf', 'zombie'];
      var monsters = [];
      var coinToss = this.randNumber(2); // Determine how many monsters to create and push them to monsters

      if (floor === 1) {
        var monster = new Monster(player.level, monsterTypes[this.randNumber(5) - 1]);
        monsters.push(monster);
      } else {
        var n;

        if (coinToss === 1) {
          n = floor + 1;
        } else {
          n = floor - 1;
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
  }]);

  return Helper;
}();

export { Helper as default };