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

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: chooseCharacter, chooseName, startFloor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseCharacter\", function() { return chooseCharacter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseName\", function() { return chooseName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startFloor\", function() { return startFloor; });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.js */ \"./src/character.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n\n\n\n\nvar render = new _render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar dom = new _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar player;\nvar floor = 5;\nvar turnOrder = [];\nrender.playArea();\nrender.welcome();\nfunction chooseCharacter(type) {\n  player = new _character_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](type);\n  render.name(player.type);\n}\nfunction chooseName(name) {\n  player.name = name;\n  render.prepare(player, floor);\n}\nfunction startFloor() {\n  var monsters = _helper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generateMonsters(floor, player);\n  var turnOrder = _helper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].determineTurnOrder(player, monsters); // pass player, turn order array with monsters\n\n  render.populateFloor(player, turnOrder, monsters);\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n\n\n\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(type) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Character);\n\n    this.type = type;\n    this.level = 1;\n    this.xp = 0;\n    this.attributes = this.attributes(type);\n    this.inventory = ['potion', 'potion'];\n    this.weaponType = 'Wooden Sword';\n    this.weapon = 6;\n    this.weaponQual = 'Poor';\n    this.hp = this.attributes.maxHP;\n    this.name = '';\n  } // Static Methods\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Character, [{\n    key: \"setAtt\",\n    value: function setAtt() {\n      var sum = 0;\n      var score = 0;\n\n      for (var i = 0; i < 4; i++) {\n        sum += Math.floor(_helper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randNumber(5));\n      }\n\n      if (score < 2) {\n        score = 2;\n      }\n\n      score = Math.floor(sum / 4);\n      return score;\n    }\n  }, {\n    key: \"getModifier\",\n    value: function getModifier(n) {\n      var mod = -5;\n\n      for (var i = 1; i < n; i += 2) {\n        mod += 1;\n      }\n\n      return mod;\n    }\n  }, {\n    key: \"attributes\",\n    value: function attributes(type) {\n      var _this = this;\n\n      var attrs = ['str', 'dex', 'speed', 'fort', 'luck', 'maxHP'];\n      var attributes = {\n        str: 0,\n        dex: 0,\n        speed: 0,\n        fort: 0,\n        luck: 0,\n        ac: 0,\n        maxHP: 0,\n        initiative: 0\n      };\n      attrs.forEach(function (att) {\n        attributes[att] = _this.setAtt();\n      });\n\n      switch (type) {\n        case 'knight':\n          attributes.str += 2;\n          attributes.speed -= 2;\n          break;\n\n        case 'rogue':\n          attributes.speed += 2;\n          attributes.dex -= 2;\n          break;\n\n        case 'ninja':\n          attributes.dex += 2;\n          attributes.fort -= 2;\n          break;\n\n        case 'priest':\n          attributes.fort += 2;\n          attributes.str -= 2;\n          break;\n\n        case 'gambler':\n          attributes.luck += 4;\n          break;\n      }\n\n      attributes.ac = this.getModifier(attributes.speed) + 10;\n      attributes.initiative = this.getModifier(attributes.speed) + 5;\n      attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort);\n      return attributes;\n    } // Instance Methods\n\n  }, {\n    key: \"takePotion\",\n    value: function takePotion() {\n      console.log('take potion');\n    }\n  }, {\n    key: \"attack\",\n    value: function attack() {\n      console.log('player attack');\n    }\n  }, {\n    key: \"escape\",\n    value: function escape() {\n      console.log('player escape');\n    }\n  }]);\n\n  return Character;\n}();\n\n\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Dom =\n/*#__PURE__*/\nfunction () {\n  function Dom() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dom);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dom, [{\n    key: \"findByClass\",\n    value: function findByClass(className) {\n      return document.querySelector(className);\n    }\n  }, {\n    key: \"createEl\",\n    value: function createEl() {\n      return document.createElement('div');\n    }\n  }, {\n    key: \"setClass\",\n    value: function setClass(parent, className) {\n      parent.className = \"\".concat(className);\n    }\n  }, {\n    key: \"setBackground\",\n    value: function setBackground(parent, image) {\n      parent.style.backgroundImage = \"url(images/\".concat(image, \".png)\");\n    }\n  }, {\n    key: \"setBackgroundColor\",\n    value: function setBackgroundColor(parent, color) {\n      parent.style.backgroundImage = 'none';\n      parent.style.backgroundColor = \"\".concat(color);\n    }\n  }, {\n    key: \"addChild\",\n    value: function addChild(parent, child) {\n      parent.appendChild(child);\n    }\n  }, {\n    key: \"removeChild\",\n    value: function removeChild(parent, child) {\n      parent.removeChild(child);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear(parent) {\n      while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n      }\n    }\n  }, {\n    key: \"setHTML\",\n    value: function setHTML(parent, html) {\n      parent.innerHTML = \"\".concat(html);\n    }\n  }, {\n    key: \"setText\",\n    value: function setText(parent, text) {\n      parent.innerText = text;\n    }\n  }, {\n    key: \"addListener\",\n    value: function addListener(parent, type, action) {\n      return parent.addEventListener(\"\".concat(type), action);\n    }\n  }, {\n    key: \"createField\",\n    value: function createField() {\n      return document.createElement('input');\n    }\n  }, {\n    key: \"createButton\",\n    value: function createButton(text) {\n      var button = document.createElement('button');\n      this.setText(button, text);\n      return button;\n    }\n  }]);\n\n  return Dom;\n}();\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Helper; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monster.js */ \"./src/monster.js\");\n\n\n\n\nvar Helper =\n/*#__PURE__*/\nfunction () {\n  function Helper() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Helper);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Helper, null, [{\n    key: \"randNumber\",\n    value: function randNumber(n) {\n      return Math.floor(Math.random() * Math.floor(n) + 1);\n    }\n  }, {\n    key: \"generateMonsters\",\n    value: function generateMonsters(floor, player) {\n      var monsterTypes = ['ghost', 'skeleton', 'vampire', 'werewolf', 'zombie'];\n      var monsters = [];\n      var coinToss = this.randNumber(2); // Determine how many monsters to create and push them to monsters\n\n      if (floor === 1) {\n        var monster = new _monster_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.level, monsterTypes[this.randNumber(5) - 1]);\n        monsters.push(monster);\n      } else {\n        var n;\n\n        if (coinToss === 1) {\n          n = floor + 1;\n        } else {\n          n = floor - 1;\n        }\n\n        for (var i = 0; i < n; i++) {\n          var _monster = new _monster_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.level, monsterTypes[this.randNumber(5) - 1]);\n\n          monsters.push(_monster);\n        }\n      }\n\n      return monsters;\n    }\n  }, {\n    key: \"determineTurnOrder\",\n    value: function determineTurnOrder(player, monsters) {\n      var turnOrder = [];\n      turnOrder.push(player);\n      monsters.forEach(function (monster) {\n        turnOrder.push(monster);\n      });\n      turnOrder = turnOrder.sort(function (a, b) {\n        return b.attributes.initiative - a.attributes.initiative;\n      });\n      return turnOrder;\n    }\n  }]);\n\n  return Helper;\n}();\n\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monster; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.js */ \"./src/helper.js\");\n\n\n\n\nvar Monster =\n/*#__PURE__*/\nfunction () {\n  function Monster(playerLevel, type) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Monster);\n\n    this.level = this.selectLevel(playerLevel);\n    this.type = type;\n    this.attributes = this.setMonsterAttributes(type, playerLevel);\n    this.weapon = this.setWeapon();\n    this.hp = this.attributes.maxHP;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Monster, [{\n    key: \"selectLevel\",\n    value: function selectLevel(playerLevel) {\n      var coinToss = _helper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randNumber(2);\n\n      if (playerLevel === 1) {\n        return playerLevel;\n      } else if (coinToss === 1) {\n        return playerLevel + 1;\n      } else if (coinToss === 2) {\n        return playerLevel - 1;\n      }\n    }\n  }, {\n    key: \"setAtt\",\n    value: function setAtt() {\n      var sum = 0;\n      var score = 0;\n\n      for (var i = 0; i < 4; i++) {\n        sum += Math.floor(_helper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randNumber(5));\n      }\n\n      if (score < 2) {\n        score = 2;\n      }\n\n      score = Math.floor(sum / 4);\n      return score;\n    }\n  }, {\n    key: \"getModifier\",\n    value: function getModifier(n) {\n      var mod = -5;\n\n      for (var i = 1; i < n; i += 2) {\n        mod += 1;\n      }\n\n      return mod;\n    }\n  }, {\n    key: \"setMonsterAttributes\",\n    value: function setMonsterAttributes(type, playerLevel) {\n      var _this = this;\n\n      var attrs = ['str', 'dex', 'speed', 'fort', 'maxHP'];\n      var attributes = {\n        str: 0,\n        dex: 0,\n        speed: 0,\n        fort: 0,\n        maxHP: 0\n      };\n      attrs.forEach(function (att) {\n        attributes[att] = _this.setAtt();\n      });\n\n      switch (type) {\n        case 'skeleton':\n          break;\n\n        case 'ghost':\n          attributes.speed += 3;\n          break;\n\n        case 'werewolf':\n          attributes.dex += 3;\n          break;\n\n        case 'vampire':\n          attributes.fort += 3;\n          break;\n\n        case 'zombie':\n          attributes.str += 3;\n          break;\n      }\n\n      var diff = this.level - playerLevel;\n      attributes.ac = this.getModifier(attributes.speed) + 5 + diff;\n      attributes.initiative = this.getModifier(attributes.speed) + 5 + diff;\n      attributes.maxHP = attributes.maxHP + 10 + this.getModifier(attributes.fort) + diff;\n      return attributes;\n    }\n  }, {\n    key: \"setWeapon\",\n    value: function setWeapon() {\n      return Math.ceil(_helper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randNumber(this.attributes.str) / 2);\n    }\n  }]);\n\n  return Monster;\n}();\n\n\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\nvar dom = new _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nvar Render =\n/*#__PURE__*/\nfunction () {\n  function Render() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Render);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Render, [{\n    key: \"floor\",\n    // Play Area\n    value: function floor() {\n      var field = dom.findByClass('.field');\n      var floor = dom.createEl();\n      dom.setClass(floor, 'floor');\n      dom.setBackground(floor, 'floor');\n      dom.addChild(field, floor);\n    }\n  }, {\n    key: \"backdrop\",\n    value: function backdrop() {\n      var floor = dom.findByClass('.floor');\n      var backdrop = dom.createEl();\n      dom.setClass(backdrop, 'backdrop');\n      dom.addChild(floor, backdrop);\n    }\n  }, {\n    key: \"playerRow\",\n    value: function playerRow() {\n      var floor = dom.findByClass('.floor');\n      var playerRow = dom.createEl();\n      dom.setClass(playerRow, 'playerRow');\n      dom.addChild(floor, playerRow);\n    }\n  }, {\n    key: \"actions\",\n    value: function actions() {\n      var floor = dom.findByClass('.floor');\n      var actions = dom.createEl();\n      dom.setClass(actions, 'actions');\n      dom.addChild(floor, actions);\n    }\n  }, {\n    key: \"inventory\",\n    value: function inventory() {\n      var floor = dom.findByClass('.floor');\n      var inventory = dom.createEl();\n      dom.setClass(inventory, 'inventory');\n      dom.addChild(floor, inventory);\n    }\n  }, {\n    key: \"order\",\n    value: function order() {\n      var floor = dom.findByClass('.floor');\n      var order = dom.createEl();\n      dom.setClass(order, 'order');\n      dom.addChild(floor, order);\n    }\n  }, {\n    key: \"playArea\",\n    value: function playArea() {\n      this.floor();\n      this.backdrop();\n      this.playerRow();\n      this.actions();\n      this.inventory();\n      this.order();\n    } // Welcome\n\n  }, {\n    key: \"welcome\",\n    value: function welcome() {\n      var backdrop = dom.findByClass('.backdrop');\n      dom.setBackgroundColor(backdrop, '#423A41');\n      var welcome = dom.createEl();\n      dom.setClass(welcome, 'welcome');\n      dom.addChild(backdrop, welcome);\n      var title = dom.createEl();\n      dom.setClass(title, 'welcomeTitle');\n      dom.addChild(welcome, title);\n      dom.setHTML(title, \"<h2>Fight or Fright!</h2>\\n\\t\\t\\t <h3>Choose your character</h3>\\n\\t\\t\\t\");\n      var characters = dom.createEl();\n      dom.setClass(characters, 'welcomeCharacters');\n      dom.addChild(welcome, characters);\n      var description = dom.createEl();\n      dom.setClass(description, 'welcomeDescription');\n      dom.addChild(welcome, description);\n      this.characterSelect();\n    }\n  }, {\n    key: \"characterSelect\",\n    value: function characterSelect() {\n      var _this = this;\n\n      var welcomeCharacters = dom.findByClass('.welcomeCharacters');\n      var costumes = ['knight', 'rogue', 'priest', 'ninja', 'gambler'];\n      costumes.forEach(function (costume) {\n        var sprite = dom.createEl();\n        dom.setBackground(sprite, costume);\n        dom.setClass(sprite, 'portrait');\n        sprite.id = costume;\n        dom.addChild(welcomeCharacters, sprite);\n        dom.addListener(sprite, 'mouseover', function () {\n          return _this.describeCostume(costume);\n        });\n        dom.addListener(sprite, 'mouseout', _this.deleteDescription);\n        dom.addListener(sprite, 'click', function () {\n          return _this.select(costume);\n        });\n      });\n    }\n  }, {\n    key: \"select\",\n    value: function select(costume) {\n      Object(_app_js__WEBPACK_IMPORTED_MODULE_3__[\"chooseCharacter\"])(costume);\n    }\n  }, {\n    key: \"deleteDescription\",\n    value: function deleteDescription() {\n      var description = dom.findByClass('.welcomeDescription');\n      dom.setText(description, '');\n    }\n  }, {\n    key: \"describeCostume\",\n    value: function describeCostume(costume) {\n      var description = dom.findByClass('.welcomeDescription');\n\n      switch (costume) {\n        case 'knight':\n          dom.setText(description, \"Knights are strong, but all that armor makes them slow! \\n +2 Strength, -2 Speed\");\n          break;\n\n        case 'rogue':\n          dom.setText(description, \"Rogues are sneaky, but aren't the best at hitting their targets. \\n +2 Speed, -2 Dexterity\");\n          break;\n\n        case 'priest':\n          dom.setText(description, \"Priests channel a lot of energy from...somewhere. \\n +2 Fortitude, -2 Strength\");\n          break;\n\n        case 'ninja':\n          dom.setText(description, \"Ninjas almost always hit their target, but they don't like to wear armor.\\n +2 Dexterity, -2 Fortitude\");\n          break;\n\n        case 'gambler':\n          dom.setText(description, \"Gamblers don't need anything but the favor of ol' Lady Luck. \\n +4 Luck\");\n          break;\n      }\n    }\n  }, {\n    key: \"name\",\n    value: function name(playerType) {\n      var welcome = dom.findByClass('.welcome');\n      dom.clear(welcome);\n      var setNameWrapper = dom.createEl();\n      dom.setClass(setNameWrapper, 'setNameWrapper');\n      dom.addChild(welcome, setNameWrapper);\n      var nameMsg = dom.createEl();\n      dom.setClass(nameMsg, 'nameMsg');\n      dom.setText(nameMsg, \"What is your name, \".concat(playerType, \"?\"));\n      dom.addChild(setNameWrapper, nameMsg);\n      var nameInputField = dom.createField();\n      dom.setClass(nameInputField, 'nameInputField');\n      dom.addChild(setNameWrapper, nameInputField);\n      var nameSubmit = dom.createButton('Submit');\n      dom.setClass(nameSubmit, 'nameSubmit');\n      dom.addChild(setNameWrapper, nameSubmit);\n      dom.addListener(nameSubmit, 'click', function () {\n        return Object(_app_js__WEBPACK_IMPORTED_MODULE_3__[\"chooseName\"])(nameInputField.value);\n      });\n    } // Prepare for horror!\n\n  }, {\n    key: \"prepare\",\n    value: function prepare(player, level) {\n      var welcome = dom.findByClass('.welcome');\n      dom.clear(welcome);\n      var prepareWrapper = dom.createEl();\n      dom.setClass(prepareWrapper, 'prepareWrapper');\n      dom.addChild(welcome, prepareWrapper);\n      var prepare = dom.createEl();\n      dom.setText(prepare, 'Prepare for Horror!');\n      dom.setClass(prepare, 'prepare');\n      dom.addChild(prepareWrapper, prepare);\n      var stats = dom.createEl();\n      dom.setClass(stats, 'prepareStats');\n      dom.addChild(prepareWrapper, stats);\n      dom.setHTML(stats, \"\\n\\t\\t\\t\\t<h2>\".concat(player.name, \", Level \").concat(player.level, \" \").concat(player.type, \"</h2>\\n\\t\\t\\t\\t<h3>Strength: \").concat(player.attributes.str, \" / Speed: \").concat(player.attributes.speed, \" / Dexterity: \").concat(player.attributes.dex, \"</h3>\\n\\t\\t\\t\\t<h3>Fortitude: \").concat(player.attributes.fort, \" / Luck: \").concat(player.attributes.luck, \" / Max HP: \").concat(player.attributes.maxHP, \"</h3>\\n\\t\\t\\t\\t<h3>Weapon: \").concat(player.weaponType, \" / Quality: \").concat(player.weapon, \"\\n\\t\\t\\t\\t<h2>Floor \").concat(level, \"</h2>\\n\\t\\t\\t\"));\n      var submit = dom.createButton('Enter...');\n      dom.addListener(submit, 'click', _app_js__WEBPACK_IMPORTED_MODULE_3__[\"startFloor\"]);\n      dom.addChild(prepareWrapper, submit);\n    } // Floor\n\n  }, {\n    key: \"populatePlayerRow\",\n    value: function populatePlayerRow(player) {\n      var playerRow = dom.findByClass('.playerRow');\n      dom.clear(playerRow);\n      var playerInfoWrapper = dom.createEl();\n      dom.setClass(playerInfoWrapper, 'playerInfoWrapper');\n      dom.addChild(playerRow, playerInfoWrapper);\n      var playerHealth = dom.createEl();\n      dom.setClass(playerHealth, 'playerRowPlayerHealth');\n      dom.setHTML(playerHealth, \"\\n\\t\\t\\t\\t<h3>\".concat(player.hp, \"/\").concat(player.attributes.maxHP, \"</h3>\\n\\t\\t\\t\"));\n      dom.addChild(playerInfoWrapper, playerHealth);\n      var playerStats = dom.createEl();\n      dom.setClass(playerStats, 'playerRowPlayerStats');\n      dom.setHTML(playerStats, \"\\n\\t\\t\\t\\t<h3>Strength: \".concat(player.attributes.str, \" Speed: \").concat(player.attributes.speed, \" \\n\\n\\t\\t\\t\\t\\t\\tDexterity: \").concat(player.attributes.dex, \" Fortitude: \").concat(player.attributes.fort, \" \\n\\n\\t\\t\\t\\t\\t\\tLuck: \").concat(player.attributes.luck, \" Level: \").concat(player.level, \"\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\"));\n      dom.addChild(playerInfoWrapper, playerStats);\n      var playerSprite = dom.createEl();\n      dom.setClass(playerSprite, 'playerRowPlayerSprite');\n      dom.setBackground(playerSprite, \"\".concat(player.type));\n      dom.addChild(playerInfoWrapper, playerSprite);\n      var weaponStats = dom.createEl();\n      dom.setClass(weaponStats, 'playerRowWeaponStats');\n      dom.setHTML(weaponStats, \"\\n\\t\\t\\t\\t<h3>\".concat(player.weaponType, \", \").concat(player.weaponQual, \"</h3>\\n\\t\\t\\t\"));\n      dom.addChild(playerInfoWrapper, weaponStats);\n      var weaponIcon = dom.createEl();\n      dom.setClass(weaponIcon, 'playerRowWeaponIcon');\n      dom.setBackground(weaponIcon, \"\".concat(player.weaponQual.toLowerCase()));\n      dom.addChild(playerInfoWrapper, weaponIcon);\n    }\n  }, {\n    key: \"populateTurnOrder\",\n    value: function populateTurnOrder(turnOrder) {\n      var order = dom.findByClass('.order');\n      turnOrder.forEach(function (pos) {\n        var sprite = dom.createEl();\n        dom.setClass(sprite, 'portraitOrder');\n        dom.setBackground(sprite, pos.type);\n        dom.addChild(order, sprite);\n      });\n    }\n  }, {\n    key: \"populateInventory\",\n    value: function populateInventory(player) {\n      var inventory = dom.findByClass('.inventory');\n      dom.clear(inventory);\n      player.inventory.forEach(function (item) {\n        var invenItem = dom.createEl();\n        dom.setBackground(invenItem, 'healthPotion');\n        dom.setClass(invenItem, 'playerInventoryItem');\n        dom.addListener(invenItem, 'click', player.takePotion);\n        dom.addChild(inventory, invenItem);\n      });\n    }\n  }, {\n    key: \"populateActions\",\n    value: function populateActions(player) {\n      var actions = dom.findByClass('.actions');\n      dom.clear(actions);\n      var attackButton = dom.createButton('Attack');\n      dom.setClass(attackButton, 'actionButton');\n      dom.addListener(attackButton, 'click', player.attack);\n      dom.addChild(actions, attackButton);\n      var escapeButton = dom.createButton('Escape');\n      dom.setClass(escapeButton, 'actionButton');\n      dom.addListener(escapeButton, 'click', player.escape);\n      dom.addChild(actions, escapeButton);\n    }\n  }, {\n    key: \"populateBackdrop\",\n    value: function populateBackdrop(monsters) {\n      var backdrop = dom.findByClass('.backdrop');\n      monsters.forEach(function (monster) {\n        var sprite = dom.createEl();\n        dom.setClass(sprite, 'portraitMonster');\n        dom.setBackground(sprite, monster.type);\n        dom.addChild(backdrop, sprite);\n      });\n    }\n  }, {\n    key: \"populateFloor\",\n    value: function populateFloor(player, turnOrder, monsters) {\n      var floor = dom.findByClass('.floor');\n      var backdrop = dom.findByClass('.backdrop');\n      dom.clear(backdrop);\n      dom.setBackground(backdrop, 'backdrop');\n      this.populatePlayerRow(player);\n      this.populateTurnOrder(turnOrder);\n      this.populateInventory(player);\n      this.populateActions(player);\n      this.populateBackdrop(monsters);\n    }\n  }]);\n\n  return Render;\n}();\n\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });