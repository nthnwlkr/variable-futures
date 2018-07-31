$(document).ready(function(){
	var warningButton = $('.warning-button');
	warningButton.click(function(e){
		e.preventDefault;
		$('.mobile-warning')[0].classList.add("hidden-modal");
	});
})