// JavaScript Document// JavaScript Document

$(document).ready(function () {

	

	$('.tab-buttons a').on('click',function (e) {
		
		var tabToShow = $(this).attr('href');
	
	$('.slide-group img').hide();
	$(tabToShow).fadeToggle(500);
	
/*$('.slides #tab1').fadeOut(500, function() { 
			$('.slides img') //.eq(next).fadeIn();
			
			.fadeIn(500)
			.addClass('current')
			;
		$('.slides .current').removeClass('current');
		// $('.slides img').eq(next).addClass('current');
		$(this).removeClass('current')
		console.log(next);
});*/


	});
	
	$('.tab-buttons li').on('click',function (e) {
		
	$('.tab-buttons .current').removeClass('current');	
	
	$(this).addClass('current');
	
	});
});



