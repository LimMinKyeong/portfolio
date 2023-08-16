window.onload = function(){
	setTimeout(function(){
		scrollTo(0, 0);
	}, 100);
}

$(function(){
	const $header = $(".header");
	const $navi = $(".navi");
	$navi.mouseenter(function(){
		$header.addClass("naviActive");		
	})
	$(".naviWrap").mouseleave(function(){
		$header.removeClass("naviActive");		
	})
});