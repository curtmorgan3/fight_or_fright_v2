import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

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
  }]);

  return Helper;
}();

export { Helper as default };