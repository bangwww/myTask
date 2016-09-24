$(document).ready(function(){

	$(".btn_dwn, .btn_up").click(function(){
		$('header, .bg_box').css('min-height', '0').slideToggle(1000);
		$('.s_main').slideToggle(1000, function() {
			$(".btn_dwn, .btn_up").slideToggle(1000);
		});
	});


	function heightDetect() {
		$("header, .bg_box").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});