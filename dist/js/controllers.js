
myApp
	.controller('UserListCtrl',[
		'$scope','$rootScope', 'User','ngDialog', function($scope, $rootScope, User, ngDialog) {
			
			User.query({userId:''}, function(data) {
				$scope.users = data;
			});

			$scope.clickToOpen = function(usrId){
				$rootScope.getUserId = usrId;
				ngDialog.open({
				template: 'templates/user-detail.html',
				className: 'ngdialog-theme-default',
				controller: 'UserDetailCtrl'
			});
			};
		}
		])
	.controller('UserDetailCtrl', [
			'$scope','$rootScope','User', function($scope, $rootScope, User) {
				
				$scope.userId = $rootScope.getUserId;

				User.get({userId:$scope.userId}, function(data) {
				$scope.user = data;
			})

			}]);

