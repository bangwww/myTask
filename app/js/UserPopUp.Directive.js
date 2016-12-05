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

				if ($location.path().slice(1) == "") {
						$scope.showPopUp = false;
				} else {
						$scope.clickToShowHeader();
						$scope.userId = $location.path().slice(1);
						$scope.showPopUp = true;
						elemBody.addClass("popup_no_overlay");
				};

				$scope.clickToShowPopUp = function (usrId) {
						//функция вызова модального окна

						$scope.userId = usrId;
						$scope.showPopUp = true;
						$location.path(usrId);
						elemBody.addClass("popup_no_overlay");
				};

				$scope.closePopUp = function () {
						//зактыть модальное окно
						$scope.showPopUp = false;
						elemBody.removeClass("popup_no_overlay");
						$location.path("");
				};
		}];
};

exports.UserPopUp = UserPopUp;