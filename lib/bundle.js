(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var Helper = require('./helper.js');

var Render = require('./render.js');

var helper = new Helper();
var render = new Render();
render.playArea();
render.welcome();
},{"./helper.js":3,"./render.js":4}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom =
/*#__PURE__*/
function () {
  function Dom() {
    _classCallCheck(this, Dom);
  }

  _createClass(Dom, [{
    key: "findByClass",
    value: function findByClass(className) {
      return document.querySelector(className);
    }
  }, {
    key: "createEl",
    value: function createEl() {
      return document.createElement('div');
    }
  }, {
    key: "setClass",
    value: function setClass(parent, className) {
      parent.className = "".concat(className);
    }
  }, {
    key: "setBackground",
    value: function setBackground(parent, image) {
      parent.style.backgroundImage = "url(images/".concat(image, ".png)");
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(parent, color) {
      parent.style.backgroundImage = 'none';
      parent.style.backgroundColor = "".concat(color);
    }
  }, {
    key: "addChild",
    value: function addChild(parent, child) {
      parent.appendChild(child);
    }
  }, {
    key: "removeChild",
    value: function removeChild(parent, child) {
      parent.removeChild(child);
    }
  }, {
    key: "setHTML",
    value: function setHTML(parent, html) {
      parent.innerHTML = "".concat(html);
    }
  }, {
    key: "setText",
    value: function setText(parent, text) {
      parent.innerText = text;
    }
  }, {
    key: "addListener",
    value: function addListener(parent, type, action) {
      return parent.addEventListener("".concat(type), action);
    }
  }]);

  return Dom;
}();

module.exports = Dom;
},{}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, [{
    key: "log",
    value: function log() {
      console.log("log");
    }
  }, {
    key: "randNumber",
    value: function randNumber(n) {
      return Math.floor(Math.random() * Math.floor(n) + 1);
    }
  }]);

  return Helper;
}();

module.exports = Helper;
},{}],4:[function(require,module,exports){
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
      dom.setBackgroundColor(backdrop, '#423A41');
      var welcome = dom.createEl();
      dom.setClass(welcome, 'welcome');
      dom.addChild(backdrop, welcome);
      var title = dom.createEl();
      dom.setClass(title, 'welcomeTitle');
      dom.addChild(welcome, title);
      dom.setHTML(title, "<h2>Fight or Fright!</h2>\n\t\t\t <h3>Choose your character</h3>\n\t\t\t");
      var characters = dom.createEl();
      dom.setClass(characters, 'welcomeCharacters');
      dom.addChild(welcome, characters);
      var description = dom.createEl();
      dom.setClass(description, 'welcomeDescription');
      dom.addChild(welcome, description);
      this.characterSelect();
    }
  }, {
    key: "characterSelect",
    value: function characterSelect() {
      var _this = this;

      var welcomeCharacters = dom.findByClass('.welcomeCharacters');
      var costumes = ['knight', 'rogue', 'priest', 'ninja', 'gambler'];
      costumes.forEach(function (costume) {
        var sprite = dom.createEl();
        dom.setBackground(sprite, costume);
        dom.setClass(sprite, 'portrait');
        sprite.id = costume;
        dom.addChild(welcomeCharacters, sprite);
        dom.addListener(sprite, 'click', function () {
          return _this.chooseCharacter(costume);
        });
        dom.addListener(sprite, 'mouseover', function () {
          return _this.describeCostume(costume);
        });
        dom.addListener(sprite, 'mouseout', _this.deleteDescription);
      });
    }
  }, {
    key: "chooseCharacter",
    value: function chooseCharacter(costume) {
      console.log("chooseCharacter", costume);
    }
  }, {
    key: "deleteDescription",
    value: function deleteDescription() {
      var description = dom.findByClass('.welcomeDescription');
      dom.setText(description, '');
    }
  }, {
    key: "describeCostume",
    value: function describeCostume(costume) {
      var description = dom.findByClass('.welcomeDescription');

      switch (costume) {
        case 'knight':
          dom.setText(description, "Knights are strong, but all that armor makes them slow! \n +4 Strength, -2 Speed");
          break;

        case 'rogue':
          dom.setText(description, "Rogues are sneaky, but aren't the best at hitting their targets. \n +4 Speed, -2 Dexterity");
          break;

        case 'priest':
          dom.setText(description, "Priests channel a lot of energy from...somewhere. \n +4 Fortitude, -2 Strength");
          break;

        case 'ninja':
          dom.setText(description, "Ninjas almost always hit their target, but they don't like to wear armor.\n +4 Dexterity, -2 Fortitude");
          break;

        case 'gambler':
          dom.setText(description, "Gamblers don't need anything but the favor of ol' Lady Luck. \n +4 Luck");
          break;
      }
    }
  }]);

  return Render;
}();

module.exports = Render;
},{"./dom.js":2}]},{},[1]);