$(document).ready(function(){
	var pubColumns = $('.pub-column'),
		imgList = $('.gal-img');
	console.log(imgList);
	imgList[0].classList.add("active");
	
	pubColumns.mouseenter(function (e){
		var thisIndex = ($(e.target).index()) + 1;
		for (i=0;i<imgList.length;i++) {
			console.log(i);
			imgList[i].classList.remove("active");
		}
		imgList[thisIndex - 1].classList.add("active");
	});

	$(document).scroll(function(){
		pubColumns.mouseenter(function (e){
		var thisIndex = ($(e.target).index()) + 1;
		for (i=0;i<imgList.length;i++) {
			console.log(i);
			imgList[i].classList.remove("active");
		}
		imgList[thisIndex - 1].classList.add("active");
	});
	});

	function fadeImg(e) {
		var winHeight = $(window).height();
	    $(e).each(function(){
	        var thisPos = $(this).offset().top;
			var scrollDistance = $(window).scrollTop();

	        if (scrollDistance + winHeight - 200 > thisPos ) {
	            $(this).addClass("fadeIn");
	        }
	    });
	}

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
        fadeImg('.pub-img');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
        fadeImg('.pub-img');
    });

});