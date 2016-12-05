'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResizeDetector = function () {
	function ResizeDetector() {
		_classCallCheck(this, ResizeDetector);

		this.restrict = 'A';
		this.scope = true;
		this.controller = ['$scope', function ($scope) {

			$scope.heightDetect = function (elem) {
				elem.css("height", $(window).height());
			};
		}];
	}

	_createClass(ResizeDetector, [{
		key: 'link',
		value: function link(scope, element) {
			scope.heightDetect(element);

			$(window).on('resize', function () {
				scope.heightDetect(element);
			});
		}
	}]);

	return ResizeDetector;
}();

exports.ResizeDetector = ResizeDetector;