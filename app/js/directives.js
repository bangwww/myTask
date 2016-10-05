myApp
.directive('userPopUp', function(){
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'templates/user-detail.html',
		controller: 'UserDetailCtrl'
	}
})
.directive('resizeDetector', function() {
	return {
		restrict: 'A',
		scope: true,
		controller: 'ResizeCtrl',
		link: function(scope, element){

			scope.heightDetect(element);

			$(window).on('resize', function(){
				scope.heightDetect(element)
			})

		}
	}
})