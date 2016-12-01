myApp
.directive('userPopUp', () => {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'templates/user-detail.html',
		controller: 'UserDetailCtrl'
	}
})
.directive('resizeDetector', () => {
	return {
		restrict: 'A',
		scope: true,
		controller: 'ResizeCtrl',
		link: function(scope, element) {
			scope.heightDetect(element);

			$(window).on('resize', () => {
				scope.heightDetect(element)
			})

		}
	}
})