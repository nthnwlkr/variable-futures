$(document).ready(function(){
  $('.scroll-box').click(function(e){
  	$(this).on("mousemove", function(event){
	    $('.scroll-box').css({left: ((event.pageX) * -1)});
	});
  });

});
