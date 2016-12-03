myApp
	.factory('User', [
		'$resource', function($resource) {
			return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'}, {});
		}])