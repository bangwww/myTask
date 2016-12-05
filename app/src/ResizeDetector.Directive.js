class ResizeDetector {
	constructor() {
		this.restrict = 'A';
		this.scope = true;
		this.controller = ['$scope', function ($scope) {

			$scope.heightDetect = function(elem) {
				elem.css("height", $(window).height());
			};	
			
		}];
	}

	link(scope,element) {
		scope.heightDetect(element);

		$(window).on('resize', () => {
			scope.heightDetect(element)
		})
	}
}

export {ResizeDetector}