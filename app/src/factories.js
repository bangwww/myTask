myApp
	.factory('User', [
		'$resource', ($resource) => {
			return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'}, {});
		}
		
		])