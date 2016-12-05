class User {
	constructor($resource) {
		'ngInject'
		return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'}, {});
	}
}

export {User}