jQuery(document).ready(function(){
	function htmSlider(){

	    var slideWrap = jQuery('.slide-wrap');

		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');
		
		
	    /* ширина слайда с отступами */
		var slideWidth = jQuery('.slide-item').outerWidth();

	    /* смещение слайдера */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/* Переход на след слайд */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
			}
		});

		/*Переход на пред слайд */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')){
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);
            }
		});
	}
    /* запуск слайдера*/
		htmSlider();
});