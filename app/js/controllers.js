
myApp
	.controller('UserListCtrl',[
		'$scope','$rootScope', 'User','ngDialog', function($scope, $rootScope, User, ngDialog) {
			
			User.query({userId:''}, function(data) {
				$scope.users = data;
			});

			$scope.getUserId = function(usrId) {
				$rootScope.userId = usrId;
			}

			$scope.clickToOpen = function(usrId){

				$scope.getUserId(usrId);

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
				
				User.get({userId:$rootScope.userId}, function(data) {
				$scope.user = data;
			})

			}]);

