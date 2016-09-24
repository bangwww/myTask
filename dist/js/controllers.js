var myApp = angular.module('myApp', ['ngRoute','ngResource']);

myApp
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: 'templates/home.html',
					controller: 'UserListCtrl'
				})
				.when('/users/:userId', {
					templateUrl: 'templates/user-detail.html',
					controller: 'UserDetailCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}
		])
	.factory('User', [
		'$resource', function($resource){
			return $resource('http://jsonplaceholder.typicode.com/users', {});
		}
		])
	.controller('UserListCtrl',[
		'$scope', 'User', function($scope, User) {
			User.query({}, function(data) {
				$scope.users = data;
			});
		}
		])
	.controller('UserDetailCtrl', [
			'$scope', '$routeParams','User', function($scope, $routeParams, User) {
				$scope.userId = $routeParams.userId;

				User.query({}, function(data) {
				$scope.users = data;
			});

			}
		]);

