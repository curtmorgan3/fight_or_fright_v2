import _classCallCheck from "@babel/runtime/helpers/classCallCheck";

var BattleField = function BattleField(turnOrder, monsters, floor) {
  _classCallCheck(this, BattleField);

  this.turnOrder = turnOrder;
  this.monsters = monsters;
  this.floor = floor;
};

export { BattleField as default };