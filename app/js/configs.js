myApp
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: 'templates/home.html',
					controller: 'UserListCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}
		])