"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var people = function () {
	function people(x, y) {
		_classCallCheck(this, people);

		this.x = x;
		this.y = y;
	}

	_createClass(people, [{
		key: "toString",
		value: function toString() {
			return "(" + this.x + "-" + this.y + ")";
		}
	}]);

	return people;
}();

var p = new people("tom", "18 years old");
console.log(p.toString() + "-----s-");