$(document).ready(function(){
	function heightDetect() {
		$("header, .bg_box").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});