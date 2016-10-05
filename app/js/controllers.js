
myApp
.controller('UserListCtrl',[
	'$scope', 'User', function($scope, User) {

		User.query({userId:''}, function(data) {

			$scope.users = data;

		});

		$scope.elemBody = $("body");
		
		$scope.clickToShowPopUp = function(usrId){

			$scope.userId = usrId;
			$scope.showPopUp = true;

			$scope.elemBody.addClass("popup_no_overlay");

		}

		$scope.clickToShowHeader = function(){
			$('header, .bg_box').slideToggle(1000);
		$('.s_main').slideToggle(1000, function() {
			$(".btn_dwn, .btn_up").slideToggle(1000);
		});
		}
	}])
.controller('UserDetailCtrl', [
	'$scope','User', function($scope, User) {

		$scope.showPopUp = false;

		$scope.closePopUp = function() {

			$scope.showPopUp = false;
			$scope.elemBody.removeClass("popup_no_overlay");

		}

	}])
.controller('ResizeCtrl', [
	'$scope', function($scope){
		$scope.heightDetect = function(elem) {

			elem.css("height", $(window).height());

		}
	}])

