"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom = require('./dom.js');

var dom = new Dom();

var Render =
/*#__PURE__*/
function () {
  function Render() {
    _classCallCheck(this, Render);
  }

  _createClass(Render, [{
    key: "floor",
    // Play Area
    value: function floor() {
      var field = dom.findByClass('.field');
      var floor = dom.createEl();
      dom.setClass(floor, 'floor');
      dom.setBackground(floor, 'floor');
      dom.addChild(field, floor);
    }
  }, {
    key: "backdrop",
    value: function backdrop() {
      var floor = dom.findByClass('.floor');
      var backdrop = dom.createEl();
      dom.setClass(backdrop, 'backdrop');
      dom.addChild(floor, backdrop);
    }
  }, {
    key: "playerRow",
    value: function playerRow() {
      var floor = dom.findByClass('.floor');
      var playerRow = dom.createEl();
      dom.setClass(playerRow, 'playerRow');
      dom.addChild(floor, playerRow);
    }
  }, {
    key: "actions",
    value: function actions() {
      var floor = dom.findByClass('.floor');
      var actions = dom.createEl();
      dom.setClass(actions, 'actions');
      dom.addChild(floor, actions);
    }
  }, {
    key: "inventory",
    value: function inventory() {
      var floor = dom.findByClass('.floor');
      var inventory = dom.createEl();
      dom.setClass(inventory, 'inventory');
      dom.addChild(floor, inventory);
    }
  }, {
    key: "order",
    value: function order() {
      var floor = dom.findByClass('.floor');
      var order = dom.createEl();
      dom.setClass(order, 'order');
      dom.addChild(floor, order);
    }
  }, {
    key: "playArea",
    value: function playArea() {
      this.floor();
      this.backdrop();
      this.playerRow();
      this.actions();
      this.inventory();
      this.order();
    } // Welcome

  }, {
    key: "welcome",
    value: function welcome() {
      var backdrop = dom.findByClass('.backdrop');
      var welcome = dom.createEl();
      dom.setClass(welcome, 'welcome');
      dom.addChild(backdrop, welcome);
      dom.setHTML(welcome, "<h2>Fight or Fright</h2>\n\t\t\t <h3>Choose your character</h3>\n\t\t\t");
      this.characterSelect();
    }
  }, {
    key: "characterSelect",
    value: function characterSelect() {
      var costumes = ['knight', 'rogue', 'priest', 'ninja', 'gambler'];
      costumes.forEach(costume, function () {
        var sprite = dom.createEl();
        dom.setBackground(sprite, costume);
        dom.setClass(sprite, 'portrait');
        sprite.id = costume; // dom.addListener(sprite, 'click', this.chooseCharacter);
        // dom.addListener(sprite, 'mouseover', this.describeCostume(costume));
      });
    }
  }, {
    key: "chooseCharacter",
    value: function chooseCharacter() {
      console.log("chooseCharacter");
    }
  }, {
    key: "describeCostume",
    value: function describeCostume(costume) {
      console.log(costume);
    }
  }]);

  return Render;
}();

module.exports = Render;