class UserPopUp {
	constructor() {
		this.restrict = 'E';
		this.scope = false;
		this.templateUrl = 'templates/user-detail.html';
		this.controller = ['$scope', '$location', 'user', function($scope, $location, user) {


		const elemBody = $("body");


		if($location.path().slice(1) == "") {
			$scope.showPopUp = false;
		} else {
			$scope.clickToShowHeader();
			$scope.userId = $location.path().slice(1);
			$scope.showPopUp = true;
			elemBody.addClass("popup_no_overlay");
		};
		
		

		$scope.clickToShowPopUp = function(usrId) { //функция вызова модального окна

			$scope.userId = usrId;
			$scope.showPopUp = true;
			$location.path(usrId);
			elemBody.addClass("popup_no_overlay");

		}

		$scope.closePopUp = function() { //зактыть модальное окно
			$scope.showPopUp = false;
			elemBody.removeClass("popup_no_overlay");
			$location.path("");
		};

		}];
	}

}

export {UserPopUp}