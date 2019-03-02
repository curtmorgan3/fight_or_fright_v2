import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import Helper from './helper.js';
import { dom, player, chooseCharacter, battleField, chooseName, startFloor, endFloor, gameOver, playAgain, takeWeapon, takePotion } from './app.js';

var Render =
/*#__PURE__*/
function () {
  function Render() {
    _classCallCheck(this, Render);
  }

  _createClass(Render, [{
    key: "clearFloor",
    // Play Area
    value: function clearFloor() {
      var backdrop = dom.findByClass('.backdrop');
      var playerRow = dom.findByClass('.playerRow');
      var actions = dom.findByClass('.actions');
      var inventory = dom.findByClass('.inventory');
      var order = dom.findByClass('.order');
      var field = [backdrop, playerRow, actions, inventory, order];
      field.forEach(function (area) {
        dom.clear(area);
      });
    }
  }, {
    key: "clearField",
    value: function clearField() {
      var field = dom.findByClass('.field');
      dom.clear(field);
    }
  }, {
    key: "floor",
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
        dom.addListener(sprite, 'mouseover', function () {
          return _this.describeCostume(costume);
        });
        dom.addListener(sprite, 'mouseout', _this.deleteDescription);
        dom.addListener(sprite, 'click', function () {
          return _this.select(costume);
        });
      });
    }
  }, {
    key: "select",
    value: function select(costume) {
      chooseCharacter(costume);
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
          dom.setText(description, "Knights are strong, but all that armor makes them slow! \n +2 Strength, -2 Speed");
          break;

        case 'rogue':
          dom.setText(description, "Rogues are sneaky, but aren't the best at hitting their targets. \n +2 Speed, -2 Dexterity");
          break;

        case 'priest':
          dom.setText(description, "Priests channel a lot of energy from...somewhere. \n +2 Fortitude, -2 Strength");
          break;

        case 'ninja':
          dom.setText(description, "Ninjas almost always hit their target, but they don't like to wear armor.\n +2 Dexterity, -2 Fortitude");
          break;

        case 'gambler':
          dom.setText(description, "Gamblers don't need anything but the favor of ol' Lady Luck. \n +4 Luck");
          break;
      }
    }
  }, {
    key: "name",
    value: function name(playerType) {
      var welcome = dom.findByClass('.welcome');
      dom.clear(welcome);
      var setNameWrapper = dom.createEl();
      dom.setClass(setNameWrapper, 'setNameWrapper');
      dom.addChild(welcome, setNameWrapper);
      var nameMsg = dom.createEl();
      dom.setClass(nameMsg, 'nameMsg');
      dom.setText(nameMsg, "What is your name, ".concat(playerType, "?"));
      dom.addChild(setNameWrapper, nameMsg);
      var nameInputField = dom.createField();
      dom.setClass(nameInputField, 'nameInputField');
      dom.addChild(setNameWrapper, nameInputField);
      var nameSubmit = dom.createButton('Submit');
      dom.setClass(nameSubmit, 'nameSubmit');
      dom.addChild(setNameWrapper, nameSubmit);
      dom.addListener(nameSubmit, 'click', function () {
        return chooseName(nameInputField.value);
      });
    } // Prepare for horror!

  }, {
    key: "prepare",
    value: function prepare(player, floor) {
      var welcome = dom.findByClass('.welcome');
      dom.clear(welcome);
      var prepareWrapper = dom.createEl();
      dom.setClass(prepareWrapper, 'prepareWrapper');
      dom.addChild(welcome, prepareWrapper);
      var prepare = dom.createEl();
      dom.setText(prepare, 'Prepare for Horror!');
      dom.setClass(prepare, 'prepare');
      dom.addChild(prepareWrapper, prepare);
      var stats = dom.createEl();
      dom.setClass(stats, 'prepareStats');
      dom.addChild(prepareWrapper, stats);
      dom.setHTML(stats, "\n\t\t\t\t<h2>".concat(player.name, ", Level ").concat(player.level, " ").concat(player.type, "</h2>\n\t\t\t\t<h3>Strength: ").concat(player.attributes.str, " / Speed: ").concat(player.attributes.speed, " / Dexterity: ").concat(player.attributes.dex, "</h3>\n\t\t\t\t<h3>Fortitude: ").concat(player.attributes.fort, " / Luck: ").concat(player.attributes.luck, " / Max HP: ").concat(player.attributes.maxHP, "</h3>\n\t\t\t\t<h3>Weapon: ").concat(player.weaponType, " / Quality: ").concat(player.weapon, "\n\t\t\t\t<h2>Floor ").concat(floor, "</h2>\n\t\t\t"));
      var submit = dom.createButton('Enter...');
      dom.addListener(submit, 'click', startFloor);
      dom.addChild(prepareWrapper, submit);
    } // Floor

  }, {
    key: "populatePlayerRow",
    value: function populatePlayerRow(player) {
      var playerRow = dom.findByClass('.playerRow');
      dom.clear(playerRow);
      var playerInfoWrapper = dom.createEl();
      dom.setClass(playerInfoWrapper, 'playerInfoWrapper');
      dom.addChild(playerRow, playerInfoWrapper);
      var playerHealth = dom.createEl();
      dom.setClass(playerHealth, 'playerRowPlayerHealth');
      dom.setHTML(playerHealth, "\n\t\t\t\t<h3>".concat(player.hp, "/").concat(player.attributes.maxHP, "</h3>\n\t\t\t\t<h3>Floor ").concat(battleField.floor, "</h3>\n\t\t\t"));
      dom.addChild(playerInfoWrapper, playerHealth);
      var playerStats = dom.createEl();
      dom.setClass(playerStats, 'playerRowPlayerStats');
      dom.setHTML(playerStats, "\n\t\t\t\t<h3>Strength: ".concat(player.attributes.str, " Speed: ").concat(player.attributes.speed, " \n\n\t\t\t\t\t\tDexterity: ").concat(player.attributes.dex, " Fortitude: ").concat(player.attributes.fort, " \n\n\t\t\t\t\t\tLuck: ").concat(player.attributes.luck, " Level: ").concat(player.level, "\n\t\t\t\t</h3>\n\t\t\t"));
      dom.addChild(playerInfoWrapper, playerStats);
      var playerSprite = dom.createEl();
      dom.setClass(playerSprite, 'playerRowPlayerSprite');
      dom.setBackground(playerSprite, "".concat(player.type));
      dom.addChild(playerInfoWrapper, playerSprite);
      var weaponStats = dom.createEl();
      dom.setClass(weaponStats, 'playerRowWeaponStats');
      dom.setHTML(weaponStats, "\n\t\t\t\t<h3>".concat(player.weaponType, ", ").concat(player.weaponQual, "</h3>\n\t\t\t"));
      dom.addChild(playerInfoWrapper, weaponStats);
      var weaponIcon = dom.createEl();
      dom.setClass(weaponIcon, 'playerRowWeaponIcon');
      dom.setBackground(weaponIcon, "".concat(player.weaponQual.toLowerCase()));
      dom.addChild(playerInfoWrapper, weaponIcon);
    }
  }, {
    key: "populateTurnOrder",
    value: function populateTurnOrder(turnOrder) {
      var order = dom.findByClass('.order');
      dom.clear(order);
      turnOrder.forEach(function (pos) {
        var sprite = dom.createEl();
        dom.setClass(sprite, 'portraitOrder');
        dom.setBackground(sprite, pos.type);
        dom.addChild(order, sprite);
      });
    }
  }, {
    key: "populateInventory",
    value: function populateInventory(player) {
      var inventory = dom.findByClass('.inventory');
      dom.clear(inventory);

      if (player.inventory.length > 0) {
        player.inventory.forEach(function (item) {
          var invenItem = dom.createEl();
          dom.setBackground(invenItem, 'healthPotion');
          dom.setClass(invenItem, 'playerInventoryItem');
          var id = Helper.randNumber(10000);
          dom.setId(invenItem, id);
          dom.addListener(invenItem, 'click', function () {
            return player.takePotion(id);
          });
          dom.addChild(inventory, invenItem);
        });
      }
    }
  }, {
    key: "removePotion",
    value: function removePotion(id, player) {
      var potion = dom.findById(id);
      var inventory = dom.findByClass('.inventory');
      inventory.removeChild(potion);
      this.populatePlayerRow(player);
    }
  }, {
    key: "populateActions",
    value: function populateActions(player) {
      var actions = dom.findByClass('.actions');
      dom.clear(actions);
      var attackButton = dom.createButton('Wait');
      dom.setClass(attackButton, 'actionButton');
      dom.setId(attackButton, 'attackButton');
      dom.addChild(actions, attackButton);
      var escapeButton = dom.createButton('Escape');
      dom.setClass(escapeButton, 'actionButton');
      dom.setId(escapeButton, 'escapeButton');
      dom.addListener(escapeButton, 'click', player.escape);
      dom.addChild(actions, escapeButton);
    }
  }, {
    key: "populateBackdrop",
    value: function populateBackdrop(monsters, player) {
      var backdrop = dom.findByClass('.backdrop');
      dom.clear(backdrop);
      monsters.forEach(function (monster) {
        var monsterContainer = dom.createEl();
        dom.setId(monsterContainer, monster.id);
        dom.setClass(monsterContainer, 'monsterContainer');
        var monsterHP = dom.createEl();
        dom.setClass(monsterHP, 'monsterHP');
        dom.addChild(monsterContainer, monsterHP);
        dom.setText(monsterHP, "".concat(monster.hp, "/").concat(monster.attributes.maxHP));
        var sprite = dom.createEl();
        dom.setClass(sprite, 'portraitMonster');
        dom.setBackground(sprite, monster.type);
        dom.addChild(monsterContainer, sprite);
        dom.addListener(sprite, 'click',
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return player.attackMonster(monster.id);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
        var monsterBanner = dom.createEl();
        dom.setClass(monsterBanner, 'monsterBanner');
        dom.addChild(monsterContainer, monsterBanner);
        dom.addChild(backdrop, monsterContainer);
      });
    }
  }, {
    key: "populateFloor",
    value: function populateFloor(player, turnOrder, monsters) {
      var floor = dom.findByClass('.floor');
      var backdrop = dom.findByClass('.backdrop');
      dom.clear(backdrop);
      dom.setBackground(backdrop, 'backdrop');
      this.populatePlayerRow(player);
      this.populateTurnOrder(turnOrder);
      this.populateInventory(player);
      this.populateActions(player);
      this.populateBackdrop(monsters, player);
    } // End Floor

  }, {
    key: "levelUp",
    value: function levelUp(newLevels) {
      newLevels--;
      var floorEnd = dom.findByClass('.floorEnd');
      var buttons = ['Strength', 'Dexterity', 'Speed', 'Fortitude', 'Luck'];
      buttons.forEach(function (button) {
        var select = dom.createButton(button);
        dom.addListener(select, 'click', function () {
          return Helper.increaseSkill(button, newLevels);
        });
        dom.addChild(floorEnd, select);
      });
    }
  }, {
    key: "endFloor",
    value: function endFloor(newLevels) {
      this.clearFloor();
      var backdrop = dom.findByClass('.backdrop');
      var actions = dom.findByClass('.actions');
      var end = dom.createEl();
      dom.setClass(end, 'floorEnd');

      if (newLevels === 1) {
        dom.setHTML(end, "\n\t\t\t\t<h2>You leveled up ".concat(newLevels, " time!</h2>\n\t\t\t\t<h3>Add one point to your skills per level (your special skill will go up by two!)</h3>\n\t\t\t"));
        dom.addChild(backdrop, end);
        this.levelUp(newLevels);
      } else if (newLevels > 1) {
        dom.setHTML(end, "\n\t\t\t\t<h2>You leveled up ".concat(newLevels, " times!</h2>\n\t\t\t\t<h3>Add one point to your skills per level (your special skill will go up by two!)</h3>\n\t\t\t"));
        dom.addChild(backdrop, end);
        this.levelUp(newLevels);
      } else {
        dom.setHTML(end, "\n\t\t\t\t<h2>Floor clear!</h2>\n\t\t\t\t<h3>Prepare for floor ".concat(battleField.floor, "!</h3>\n\t\t\t"));
        dom.addChild(backdrop, end);
        var cont = dom.createButton('Continue');
        dom.setClass(cont, 'actionButton');
        dom.addListener(cont, 'click', startFloor);
        dom.addChild(actions, cont);
      }
    }
  }, {
    key: "resetFloor",
    value: function resetFloor() {
      this.clearFloor();
      var backdrop = dom.findByClass('.backdrop');
      var actions = dom.findByClass('.actions');
      var end = dom.createEl();
      dom.setClass(end, 'floorEnd');
      dom.setHTML(end, "\n\t\t\t<h2>Escaped!</h2>\n\t\t\t<h3>If your health was low, it's been restored a bit. Don't give up!</h3>\n\t\t");
      dom.addChild(backdrop, end);
      var cont = dom.createButton('Get back in the fight!');
      dom.setClass(cont, 'actionButton');
      dom.addListener(cont, 'click', startFloor);
      dom.addChild(actions, cont);
    }
  }, {
    key: "gameOver",
    value: function gameOver(player) {
      this.clearFloor();
      var backdrop = dom.findByClass('.backdrop');
      var actions = dom.findByClass('.actions');
      var end = dom.createEl();
      dom.setClass(end, 'floorEnd');
      dom.addChild(backdrop, end);
      dom.setHTML(end, "\n\t\t\t<h2>Game Over</h2>\n\t\t");
      var again = dom.createButton('Play Again');
      dom.setClass(again, 'actionButton');
      dom.addListener(again, 'click', playAgain);
      dom.addChild(actions, again);
    }
  }, {
    key: "foundPotion",
    value: function foundPotion() {
      console.log('render found potion');
      this.clearFloor();
      var backdrop = dom.findByClass('.backdrop');
      var end = dom.createEl();
      dom.setClass(end, 'floorEnd');
      dom.addChild(backdrop, end);
      var found = dom.createEl();
      dom.setHTML(found, "\n\t\t\t<h2>You found a potion!</h3>\n\t\t");
      dom.addChild(end, found);
      var portrait = dom.createEl();
      dom.setClass(portrait, 'portrait');
      dom.setBackground(portrait, 'healthPotion');
      dom.addChild(end, portrait);
      var accept = dom.createButton('Take it!');
      dom.addListener(accept, 'click', takePotion);
      dom.addChild(end, accept);
    }
  }, {
    key: "foundWeapon",
    value: function foundWeapon(newWeapon) {
      this.clearFloor();
      var backdrop = dom.findByClass('.backdrop');
      var end = dom.createEl();
      dom.setClass(end, 'floorEnd');
      dom.addChild(backdrop, end);
      var weaponQual = '';
      var weapon = newWeapon;
      var weaponName = '';

      switch (weapon) {
        case 6:
          weaponQual = 'Poor';
          weaponName = 'Wooden Sword';
          break;

        case 8:
          weaponQual = 'Decent';
          weaponName = 'Small Dagger';
          break;

        case 10:
          weaponQual = 'Good';
          weaponName = 'Iron Sword';
          break;

        case 12:
          weaponQual = 'Great';
          weaponName = 'Axe';
          break;

        case 20:
          weaponQual = 'Awesome';
          weaponName = 'Double Axe';
          break;
      }

      var found = dom.createEl();
      dom.setHTML(found, "\n\t\t\t<h2>You found a ".concat(weaponName, "!</h3>\n\t\t\t<h3>It's ").concat(weaponQual, " quality.</h3>\n\t\t"));
      dom.addChild(end, found);
      var portrait = dom.createEl();
      dom.setClass(portrait, 'portrait');
      dom.setBackground(portrait, weaponQual);
      dom.addChild(end, portrait);
      var accept = dom.createButton('Take it!');
      dom.addListener(accept, 'click', function () {
        return takeWeapon(weapon, weaponQual, weaponName);
      });
      var deny = dom.createButton('Leave it');
      dom.addListener(deny, 'click', function () {
        return takeWeapon(player.weapon, player.weaponQual, player.weaponType);
      });
      dom.addChild(end, accept);
      dom.addChild(end, deny);
    }
  }]);

  return Render;
}();

export { Render as default };