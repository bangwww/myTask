var myApp = angular.module('myApp', ['ngResource']);

myApp.factory('User', [
'$resource', function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users', {});
}
])

myApp.controller('UserListCtrl',[
'$scope', 'User', function($scope, User) {
	User.query({}, function(data) {
		$scope.users = data;
	});
}
]);