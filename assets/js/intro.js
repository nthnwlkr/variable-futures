$(document).ready(function(){
	var hoverColumn = $('.hover-column'),
		letter = $('.intro-letter'),
		columnWidth = hoverColumn.outerWidth();
	console.log(columnWidth);

	hoverColumn.on('mouseenter', function(e){
		var index = hoverColumn.index(this)
			selectedColumn = (e.target),
			selectedLetter = letter.get(index);
		for (i=0;i<letter.length;i++){
			letter[i].classList.remove('show');
			letter[i].classList.remove('wght-reset');
		}
		selectedLetter.classList.add('show');
		selectedLetter.classList.add('wght-reset');	
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
		    selectedLetter.setAttribute('style', 'font-variation-settings:' + cssString  + ' !important');
		});
	});

});