// Expand first panel is width is greater than 768
// by adding .in to panel
//----------------------------------------
$( document ).ready(function() {	
    var width = $('.container').css('width');
  	width = parseInt(width.substring(0, width.length - 2))
	if (width > 768 ){
		$('#collapse1').addClass('in');
	}

	//collapse other panels on click
	$('.panel-collapse').on('show.bs.collapse', function(){
		console.log($(this).parents('.panel').siblings().children('.panel-collapse'));
		//$(this)parent('panel');
	})
});



// Collapse on resize instead?
//----------------------------------------
$(window).resize(function(){	
    var width = $('.container').css('width');
  	width = parseInt(width.substring(0, width.length - 2))
	if (width > 768 ){
		$('#collapse1').addClass('in');
	}
});