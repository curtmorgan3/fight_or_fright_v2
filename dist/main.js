/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: chooseCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseCharacter\", function() { return chooseCharacter; });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n\n\n\nvar helper = new _helper_js__WEBPACK_IMPORTED_MODULE_0___default.a();\nvar render = new _render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nrender.playArea();\nrender.welcome();\nvar player;\nfunction chooseCharacter(type) {\n  console.log('choose character');\n  player = new _character_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](type); // render.name();\n\n  console.log(player);\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar helper = new _helper_js__WEBPACK_IMPORTED_MODULE_0___default.a();\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(type) {\n    _classCallCheck(this, Character);\n\n    this.type = type;\n    this.level = 1;\n    this.xp = 0;\n    this.attributes = this.attributes(type);\n    this.inventory = [];\n    this.weaponType = 'Wooden Sword';\n    this.weapon = 6;\n    this.weaponQual = 'Poor';\n    this.hp = this.attributes.maxHP;\n    this.name = '';\n  }\n\n  _createClass(Character, [{\n    key: \"setAtt\",\n    value: function setAtt() {\n      var sum = 0;\n      var score = 0;\n\n      for (var i = 0; i < 4; i++) {\n        sum += Math.floor(helper.randNumber(5));\n      }\n\n      if (score < 2) {\n        score = 2;\n      }\n\n      score = Math.floor(sum / 4);\n      return score;\n    }\n  }, {\n    key: \"getModifier\",\n    value: function getModifier(n) {\n      var mod = -5;\n\n      for (var i = 1; i < n; i += 2) {\n        mod += 1;\n      }\n\n      return mod;\n    }\n  }, {\n    key: \"attributes\",\n    value: function attributes(type) {\n      var _this = this;\n\n      var attrs = ['str', 'dex', 'speed', 'fort', 'luck', 'maxHP'];\n      var attributes = {\n        str: 0,\n        dex: 0,\n        speed: 0,\n        fort: 0,\n        luck: 0,\n        ac: 0,\n        maxHP: 0,\n        initiative: 0\n      };\n      attrs.forEach(function (att) {\n        attributes[att] = _this.setAtt();\n      });\n\n      switch (type) {\n        case 'knight':\n          attributes.str += 2;\n          attributes.speed -= 2;\n          break;\n\n        case 'rogue':\n          attributes.speed += 2;\n          attributes.dex -= 2;\n          break;\n\n        case 'ninja':\n          attributes.dex += 2;\n          attributes.fort -= 2;\n          break;\n\n        case 'priest':\n          attributes.fort += 2;\n          attributes.str -= 2;\n          break;\n\n        case 'gambler':\n          attributes.luck += 4;\n          break;\n      }\n\n      attributes.ac = this.getModifier(attributes.speed) + 10;\n      attributes.initiative = this.getModifier(attributes.speed) + 5;\n      attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort);\n      return attributes;\n    }\n  }]);\n\n  return Character;\n}();\n\n\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Dom =\n/*#__PURE__*/\nfunction () {\n  function Dom() {\n    _classCallCheck(this, Dom);\n  }\n\n  _createClass(Dom, [{\n    key: \"findByClass\",\n    value: function findByClass(className) {\n      return document.querySelector(className);\n    }\n  }, {\n    key: \"createEl\",\n    value: function createEl() {\n      return document.createElement('div');\n    }\n  }, {\n    key: \"setClass\",\n    value: function setClass(parent, className) {\n      parent.className = \"\".concat(className);\n    }\n  }, {\n    key: \"setBackground\",\n    value: function setBackground(parent, image) {\n      parent.style.backgroundImage = \"url(images/\".concat(image, \".png)\");\n    }\n  }, {\n    key: \"setBackgroundColor\",\n    value: function setBackgroundColor(parent, color) {\n      parent.style.backgroundImage = 'none';\n      parent.style.backgroundColor = \"\".concat(color);\n    }\n  }, {\n    key: \"addChild\",\n    value: function addChild(parent, child) {\n      parent.appendChild(child);\n    }\n  }, {\n    key: \"removeChild\",\n    value: function removeChild(parent, child) {\n      parent.removeChild(child);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear(parent) {\n      while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n      }\n    }\n  }, {\n    key: \"setHTML\",\n    value: function setHTML(parent, html) {\n      parent.innerHTML = \"\".concat(html);\n    }\n  }, {\n    key: \"setText\",\n    value: function setText(parent, text) {\n      parent.innerText = text;\n    }\n  }, {\n    key: \"addListener\",\n    value: function addListener(parent, type, action) {\n      return parent.addEventListener(\"\".concat(type), action);\n    }\n  }]);\n\n  return Dom;\n}();\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Helper =\n/*#__PURE__*/\nfunction () {\n  function Helper() {\n    _classCallCheck(this, Helper);\n  }\n\n  _createClass(Helper, [{\n    key: \"randNumber\",\n    value: function randNumber(n) {\n      return Math.floor(Math.random() * Math.floor(n) + 1);\n    }\n  }]);\n\n  return Helper;\n}();\n\nmodule.exports = Helper;\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// let Dom = require('./dom.js');\n\n\nvar dom = new _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nvar Render =\n/*#__PURE__*/\nfunction () {\n  function Render() {\n    _classCallCheck(this, Render);\n  }\n\n  _createClass(Render, [{\n    key: \"floor\",\n    // Play Area\n    value: function floor() {\n      var field = dom.findByClass('.field');\n      var floor = dom.createEl();\n      dom.setClass(floor, 'floor');\n      dom.setBackground(floor, 'floor');\n      dom.addChild(field, floor);\n    }\n  }, {\n    key: \"backdrop\",\n    value: function backdrop() {\n      var floor = dom.findByClass('.floor');\n      var backdrop = dom.createEl();\n      dom.setClass(backdrop, 'backdrop');\n      dom.addChild(floor, backdrop);\n    }\n  }, {\n    key: \"playerRow\",\n    value: function playerRow() {\n      var floor = dom.findByClass('.floor');\n      var playerRow = dom.createEl();\n      dom.setClass(playerRow, 'playerRow');\n      dom.addChild(floor, playerRow);\n    }\n  }, {\n    key: \"actions\",\n    value: function actions() {\n      var floor = dom.findByClass('.floor');\n      var actions = dom.createEl();\n      dom.setClass(actions, 'actions');\n      dom.addChild(floor, actions);\n    }\n  }, {\n    key: \"inventory\",\n    value: function inventory() {\n      var floor = dom.findByClass('.floor');\n      var inventory = dom.createEl();\n      dom.setClass(inventory, 'inventory');\n      dom.addChild(floor, inventory);\n    }\n  }, {\n    key: \"order\",\n    value: function order() {\n      var floor = dom.findByClass('.floor');\n      var order = dom.createEl();\n      dom.setClass(order, 'order');\n      dom.addChild(floor, order);\n    }\n  }, {\n    key: \"playArea\",\n    value: function playArea() {\n      this.floor();\n      this.backdrop();\n      this.playerRow();\n      this.actions();\n      this.inventory();\n      this.order();\n    } // Welcome\n\n  }, {\n    key: \"welcome\",\n    value: function welcome() {\n      var backdrop = dom.findByClass('.backdrop');\n      dom.setBackgroundColor(backdrop, '#423A41');\n      var welcome = dom.createEl();\n      dom.setClass(welcome, 'welcome');\n      dom.addChild(backdrop, welcome);\n      var title = dom.createEl();\n      dom.setClass(title, 'welcomeTitle');\n      dom.addChild(welcome, title);\n      dom.setHTML(title, \"<h2>Fight or Fright!</h2>\\n\\t\\t\\t <h3>Choose your character</h3>\\n\\t\\t\\t\");\n      var characters = dom.createEl();\n      dom.setClass(characters, 'welcomeCharacters');\n      dom.addChild(welcome, characters);\n      var description = dom.createEl();\n      dom.setClass(description, 'welcomeDescription');\n      dom.addChild(welcome, description);\n      this.characterSelect();\n    }\n  }, {\n    key: \"characterSelect\",\n    value: function characterSelect() {\n      var _this = this;\n\n      var welcomeCharacters = dom.findByClass('.welcomeCharacters');\n      var costumes = ['knight', 'rogue', 'priest', 'ninja', 'gambler'];\n      costumes.forEach(function (costume) {\n        var sprite = dom.createEl();\n        dom.setBackground(sprite, costume);\n        dom.setClass(sprite, 'portrait');\n        sprite.id = costume;\n        dom.addChild(welcomeCharacters, sprite);\n        dom.addListener(sprite, 'mouseover', function () {\n          return _this.describeCostume(costume);\n        });\n        dom.addListener(sprite, 'mouseout', _this.deleteDescription);\n        dom.addListener(sprite, 'click', function () {\n          return _this.select(costume);\n        });\n      });\n    }\n  }, {\n    key: \"select\",\n    value: function select(costume) {\n      Object(_app_js__WEBPACK_IMPORTED_MODULE_1__[\"chooseCharacter\"])(costume);\n    }\n  }, {\n    key: \"deleteDescription\",\n    value: function deleteDescription() {\n      var description = dom.findByClass('.welcomeDescription');\n      dom.setText(description, '');\n    }\n  }, {\n    key: \"describeCostume\",\n    value: function describeCostume(costume) {\n      var description = dom.findByClass('.welcomeDescription');\n\n      switch (costume) {\n        case 'knight':\n          dom.setText(description, \"Knights are strong, but all that armor makes them slow! \\n +2 Strength, -2 Speed\");\n          break;\n\n        case 'rogue':\n          dom.setText(description, \"Rogues are sneaky, but aren't the best at hitting their targets. \\n +2 Speed, -2 Dexterity\");\n          break;\n\n        case 'priest':\n          dom.setText(description, \"Priests channel a lot of energy from...somewhere. \\n +2 Fortitude, -2 Strength\");\n          break;\n\n        case 'ninja':\n          dom.setText(description, \"Ninjas almost always hit their target, but they don't like to wear armor.\\n +2 Dexterity, -2 Fortitude\");\n          break;\n\n        case 'gambler':\n          dom.setText(description, \"Gamblers don't need anything but the favor of ol' Lady Luck. \\n +4 Luck\");\n          break;\n      }\n    }\n  }, {\n    key: \"name\",\n    value: function name() {\n      // let welcome = dom.findByClass('welcome');\n      // dom.clear(welcome);\n      var button = document.createElement('button');\n      button.addEventListener('click', console.log(player));\n    }\n  }]);\n\n  return Render;\n}();\n\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });