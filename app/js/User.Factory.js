'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User($resource) {
	'ngInject';

	_classCallCheck(this, User);

	return $resource('http://jsonplaceholder.typicode.com/users/:userId', { userId: '@id' }, {});
};

exports.User = User;