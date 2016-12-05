class UserListCtrl {
	constructor($scope, user) {
		'ngInject';
		this.$scope = $scope;

		user.query({userId:''}, (data) => {

			$scope.users = data;

		});

		this.$scope.clickToShowHeader = function($scope) {
			$('header, .bg_box').slideToggle(1000);
			$('.s_main').slideToggle(1000, () => {
				$(".btn_dwn, .btn_up").slideToggle(1000);
			});
		}

	}
}

export {UserListCtrl}