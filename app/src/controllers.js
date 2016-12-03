
myApp

.controller('UserListCtrl',[
	'$scope', 'User', function($scope, User) {

		User.query({userId:''}, (data) => { 

			$scope.users = data;

		});

		
		$scope.clickToShowHeader = function() { //анимация при сокрытии хедера
			$('header, .bg_box').slideToggle(1000);
			$('.s_main').slideToggle(1000, () => {
				$(".btn_dwn, .btn_up").slideToggle(1000);
			});
		}
	}])

.controller('UserDetailCtrl', [
	'$scope','$location','User', function($scope, $location, User) {

		const elemBody = $("body");

		$scope.clickToShowPopUp = function(usrId) { //функция вызова модального окна

			$scope.userId = usrId;
			$scope.showPopUp = true;
			$location.hash(usrId);
			elemBody.addClass("popup_no_overlay");

		}

		$scope.closePopUp = function() { //зактыть модальное окно
			$scope.showPopUp = false;
			elemBody.removeClass("popup_no_overlay");
			$location.hash("");
		}

		$(window).bind('load',  function() {
			if($location.hash() == "") {
				$scope.showPopUp = false;
			}else {
				$scope.clickToShowHeader();
				$scope.userId = $location.hash();
				$scope.showPopUp = true;
				elemBody.addClass("popup_no_overlay");
			}
		});
		
	}])

.controller('ResizeCtrl', [
	'$scope', function($scope) {
		$scope.heightDetect = function(elem) { //рейсайзим размеры окна

			elem.css("height", $(window).height());

		}
	}])

