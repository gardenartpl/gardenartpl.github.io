$(document).ready(function() {
	$("#topmenu").lavaLamp({
		fx: "backout", 
		speed: 800,
		click: function(event, menuItem) {
			$('#topmenu li').each(function() {
				$(this).removeClass('current')
			})
			$(menuItem).addClass('current')
		}
	});
	//Process Ball Control
	var current = 0
	var items = $('#intro .item')
	var balls = $('#ball_control a')
	$(items[current]).fadeIn('slow')
	$(balls[current]).addClass('ball_green_select')
	for( var i = 0; i < balls.length; i++) {
		$(balls[i]).click(function() {
			$(balls[current]).removeClass('ball_green_select')
			$(this).addClass('ball_green_select')
			for(var j = 0; j < balls.length; j++) {
				if( $(balls[j]).hasClass('ball_green_select')) {
					current = j 
					break
				}
			}
			$('#intro .item').hide()
			$(items[current]).fadeIn('slow')
		})
	}
	//Gallery Tooltip
	$('#gallerypage a').imgPreview({
		imgCSS: {
			// Limit preview size:
			height: 300
		},
		onShow: function(link){
			// Animate link:
			$(link).stop().animate({opacity:1.0});
			// Reset image:
			$('img', this).stop().css({opacity:1.0});
		},
		onLoad: function(){
			// Animate image
			$(this).animate({opacity:1.0}, 300);
		},
		onHide: function(link){
			// Animate link:
			$(link).stop().animate({opacity:0.4});
		}
	});
	
	
		//Gallery Tooltip
	$('#gallery a').imgPreview({
		onShow: function(link){
			// Animate link:
			$(link).stop().animate({opacity:1.0});
			// Reset image:
			$('img', this).stop().css({opacity:1.0});
		},
		onHide: function(link){
			// Animate link:
			$(link).stop().animate({opacity:0.4});
		}
	});

	
	
	
});