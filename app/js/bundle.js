(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User($resource) {
	'ngInject';

	_classCallCheck(this, User);

	return $resource('http://jsonplaceholder.typicode.com/users/:userId', { userId: '@id' }, {});
};

exports.User = User;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserListCtrl = function UserListCtrl($scope, user) {
	'ngInject';

	_classCallCheck(this, UserListCtrl);

	this.$scope = $scope;

	user.query({ userId: '' }, function (data) {

		$scope.users = data;
	});

	this.$scope.clickToShowHeader = function ($scope) {
		$('header, .bg_box').slideToggle(1000);
		$('.s_main').slideToggle(1000, function () {
			$(".btn_dwn, .btn_up").slideToggle(1000);
		});
	};
};

exports.UserListCtrl = UserListCtrl;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserPopUp = function UserPopUp() {
	_classCallCheck(this, UserPopUp);

	this.restrict = 'E';
	this.scope = false;
	this.templateUrl = 'templates/user-detail.html';
	this.controller = ['$scope', '$location', 'user', function ($scope, $location, user) {

		var elemBody = $("body");

		$(window).bind('load', function () {
			if ($location.hash() == "") {
				$scope.showPopUp = false;
			} else {
				$scope.clickToShowHeader();
				$scope.userId = $location.hash();
				$scope.showPopUp = true;
				elemBody.addClass("popup_no_overlay");
			}
		});

		$scope.clickToShowPopUp = function (usrId) {
			//функция вызова модального окна

			$scope.userId = usrId;
			$scope.showPopUp = true;
			$location.hash(usrId);
			elemBody.addClass("popup_no_overlay");
		};

		$scope.closePopUp = function () {
			//зактыть модальное окно
			$scope.showPopUp = false;
			elemBody.removeClass("popup_no_overlay");
			$location.hash("");
		};
	}];
};

exports.UserPopUp = UserPopUp;
},{}],5:[function(require,module,exports){
"use strict";

var _UserList = require("./UserList.Ctrl");

var _User = require("./User.Factory");

var _ResizeDetector = require("./ResizeDetector.Directive");

var _UserPopUp = require("./UserPopUp.Directive");

angular.module('myApp', ['ngResource']).controller('userListCtrl', _UserList.UserListCtrl).factory('user', function ($resource) {
	return new _User.User($resource);
}).directive('resizeDetector', function () {
	return new _ResizeDetector.ResizeDetector();
}).directive('userPopUp', function () {
	return new _UserPopUp.UserPopUp();
});
},{"./ResizeDetector.Directive":1,"./User.Factory":2,"./UserList.Ctrl":3,"./UserPopUp.Directive":4}]},{},[5]);
