myApp
	.controller('UserListCtrl',[
		'$scope', 'User', function($scope, User) {
			User.query({}, function(data) {
				$scope.users = data;
			});
		}
		])
	.controller('UserDetailCtrl', [
			'$scope','User','ngDialog', function($scope, User, ngDialog) {

				User.query({}, function(data) {
				$scope.users = data;
			});

			$scope.clickToOpen = function (){
				ngDialog.open({
				template: 'templates/user-detail.html',
				className: 'ngdialog-theme-default',
				controller: 'UserDetailCtrl'
			});
			};
			}]);

