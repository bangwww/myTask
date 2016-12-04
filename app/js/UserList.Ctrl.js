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