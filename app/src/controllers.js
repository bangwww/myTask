
myApp
.controller('UserListCtrl',[
	'$scope', 'User', function($scope, User) {

		User.query({userId:''}, (data) => {

			$scope.users = data;

		});

		
		$scope.clickToShowHeader = function() {
			$('header, .bg_box').slideToggle(1000);
			$('.s_main').slideToggle(1000, () => {
				$(".btn_dwn, .btn_up").slideToggle(1000);
			});
		}
	}])
.controller('UserDetailCtrl', [
	'$scope','$location','User', ($scope, $location, User) => {



		$scope.elemBody = $("body");
		
		$scope.clickToShowPopUp = function(usrId) {

			$scope.userId = usrId;
			$scope.showPopUp = true;
			$location.hash(usrId);
			$scope.elemBody.addClass("popup_no_overlay");

		}

		if($location.hash() == "")
			$scope.showPopUp = false;
		else {
			$scope.userId = $location.hash();
			$scope.showPopUp = true;
			$scope.elemBody.addClass("popup_no_overlay");
		} 
			


		$scope.closePopUp = function() {
			$scope.showPopUp = false;
			$scope.elemBody.removeClass("popup_no_overlay");
			$location.hash("");
		}

	}])
.controller('ResizeCtrl', [
	'$scope', $scope => {
		$scope.heightDetect = elem => {

			elem.css("height", $(window).height());

		}
	}])

