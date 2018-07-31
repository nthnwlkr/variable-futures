$(document).ready(function(){

var benefitsHeight = $('.benefits-section').outerHeight(),
    docHeight = $(document).outerHeight(),
    winHeight = $(window).outerHeight(),
    benefitsScroll = (docHeight - (winHeight));

  console.log(docHeight);
  console.log(winHeight);
  console.log(benefitsScroll);

$(window).scroll(function() {    
  scrollDistance = $(window).scrollTop();
  console.log(scrollDistance);
  if (scrollDistance > (docHeight - 100)) {
    $('.site-nav')[0].classList.add('black');
  }else {
    $('.site-nav')[0].classList.remove('black');
  }
});


$(".interpolation-title").lettering();

dragElement(document.getElementById("scroll-box"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById("interpolation-scroll-container").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.setAttribute("style", " font-variation-settings: \'wght\' " + (pos3 * 0.6) + "; left:" + (elmnt.offsetLeft - pos1) +  "px ");
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var benefitsTitles = $('.benefit-link');
var benefitsTexts = $('.benefit-description');
benefitsTitles[0].classList.add("active");
benefitsTexts[0].classList.add("active");
$('.benefit-link').on("mouseover", function(e){
	for (i=0;i<benefitsTitles.length;i++){
		benefitsTitles[i].classList.remove("active");
		benefitsTexts[i].classList.remove("active");
	}
	var thisIndex = ($('.benefits-list > h1').index($(e.target)));
  console.log(thisIndex);
	$(e.target).addClass("active");
	benefitsTexts[(thisIndex)].classList.add("active");
});

$('.web-typography-title').mouseover(function(){
  $('.web-typography-text')[0].classList.add('small-width');
});
$('.web-typography-title').mouseout(function(){
  $('.web-typography-text')[0].classList.remove('small-width');
});

});