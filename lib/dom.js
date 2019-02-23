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