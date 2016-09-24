$(document).ready(function(){

	$(".btn_dwn").click(function(){

		//$("html,body").animate({scrollTop:$('header').height()},"slow");

		$('header, .bg_box').css('min-height', '0').slideToggle(1000);
	});

	function heightDetect() {
		$("header, .bg_box").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});