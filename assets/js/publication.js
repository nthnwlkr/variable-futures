$(document).ready(function(){
	var pubColumns = $('.pub-column'),
		imgList = $('.gal-img');
	console.log(imgList);
	imgList[0].classList.add("active");
	
	pubColumns.mouseover(function (e){
		var thisIndex = ($(e.target).index()) + 1;
		for (i=0;i<imgList.length;i++) {
			console.log(i);
			imgList[i].classList.remove("active");
		}
		imgList[thisIndex - 1].classList.add("active");
	});

});