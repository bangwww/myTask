'use strict';

myApp.directive('userPopUp', function () {
	//директива для модального окна
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'templates/user-detail.html',
		controller: 'UserDetailCtrl'
	};
}).directive('resizeDetector', function () {
	return {
		restrict: 'A',
		scope: true,
		controller: 'ResizeCtrl',
		link: function link(scope, element) {
			scope.heightDetect(element);

			$(window).on('resize', function () {
				scope.heightDetect(element);
			});
		}
	};
});