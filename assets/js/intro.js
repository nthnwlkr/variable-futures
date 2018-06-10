$(document).ready(function(){
	var hoverColumn = $('.hover-column'),
		letter = $('.intro-letter'),
		title = $('.title-letter'),
		columnWidth = hoverColumn.outerWidth(),
		scrollDistance = $(window).scrollTop(),
		winheight = $(window).height(),
		scrollPercent = parseInt(scrollDistance/(winheight)*100),
		docHeight = $(document).height();
	$(window).scroll(function() {    
		scrollDistance = $(window).scrollTop();
		scrollPercent = parseInt(scrollDistance/(winheight)*100);
		if (scrollPercent < 2) {
			$('.final-column').on('mouseout', function(f) {
				// $('.title-letter')[0].setAttribute('style', "font-variation-settings: 'wght' 800 !important");
			});
		}
		console.log(scrollPercent);
		if (scrollPercent > 99) {
			$('.site-nav')[0].classList.add('fixed');
			$('.section-two-container')[0].classList.add('scrolled');
			$('.text-container')[0].classList.remove('fixed');
		}else {
			$('.site-nav')[0].classList.remove('fixed');
			$('.section-two-container')[0].classList.remove('scrolled');
			$('.text-container')[0].classList.add('fixed');
		}
	});


	hoverColumn.on('mouseenter', function(e){			
		var index = hoverColumn.index(this)
			selectedColumn = (e.target),
			selectedLetter = letter.get(index);
		if (scrollPercent < 30){
			for (i=0;i<letter.length;i++){
				letter[i].classList.remove('show');
				letter[i].classList.remove('wght-reset');
			}
				title[0].classList.remove('wght-reset');
				title[0].classList.remove('show');
			selectedLetter.classList.add('show');
			title[0].classList.add('show');
			title[0].classList.add('wght-reset');	
			selectedLetter.classList.add('wght-reset');	
		}
	    function setMousePosition(e) {
	        var ev = e || window.event; //Moz || IE
	        if (ev.pageX) { //Moz
	            mouse.x = ev.pageX + window.pageXOffset - $(selectedColumn).offset().left;
	        } else if (ev.clientX) { //IE
	            mouse.x = ev.clientX + document.body.scrollLeft  - $(selectedColumn).offset().left;
	        }
	    };
        var mouse = {
	        x: 0,
	        y: 0,
	        startX: 0,
	        startY: 0
	    };
		hoverColumn.on('mousemove', function(a) {
	        a.preventDefault();
	        setMousePosition(a);
	        var growFactor = columnWidth / 700,
	        	percentageTravel = Math.round((mouse.x / columnWidth) * 100),
	        	cssString = "'wght' " + ((percentageTravel * 7) + 100);
	        if (scrollPercent < 20) {
			    selectedLetter.setAttribute('style', 'font-variation-settings:' + cssString  + ' !important');
			    if ($(a.target).hasClass("final-column")){
				    title[0].setAttribute('style', 'font-variation-settings:' + cssString  + ' !important');
				}
			}	
		});
		
	});

});