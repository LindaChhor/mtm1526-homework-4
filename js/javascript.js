// JavaScript Document// JavaScript Document

$(document).ready(function () {

	$('.tab-buttons a').on('click',function (e) {
	var tabToShow = $(this).attr('href');
	
	$('.slide-group img').hide();
	$(this).css('background-color','#000');
	$(tabToShow).show();
	
$('.slides #tab1').fadeOut(500, function() { 
			$('.slides img') //.eq(next).fadeIn();
			
			.fadeIn(500)
			.addClass('current')
			;
		$('.slides .current').removeClass('current');
		// $('.slides img').eq(next).addClass('current');
		$(this).removeClass('current')
		console.log(next);
});


	});
});



