import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

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
    key: "findById",
    value: function findById(id) {
      return document.getElementById(id);
    }
  }, {
    key: "createEl",
    value: function createEl() {
      return document.createElement('div');
    }
  }, {
    key: "destroyEl",
    value: function destroyEl(el) {
      return el.parentNode.removeChild(el);
    }
  }, {
    key: "setClass",
    value: function setClass(parent, className) {
      parent.className = "".concat(className);
    }
  }, {
    key: "setId",
    value: function setId(parent, id) {
      parent.setAttribute('id', id);
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
    key: "clear",
    value: function clear(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
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
  }, {
    key: "createField",
    value: function createField() {
      return document.createElement('input');
    }
  }, {
    key: "createButton",
    value: function createButton(text) {
      var button = document.createElement('button');
      this.setText(button, text);
      return button;
    }
  }]);

  return Dom;
}();

export { Dom as default };