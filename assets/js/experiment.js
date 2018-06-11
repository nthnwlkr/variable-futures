//Experiment 1
function getInitialWidth(textTarget){
	var textWidth = textTarget.innerWidth();
	return textWidth;
}
function setCssVariable(textWidth){
	var htmlDoc = document.getElementsByTagName('html')[0];
	var cssWidthVariable = htmlDoc.style.setProperty('--loadingTextBoxWidth', textWidth);
}
$(document).ready(function(){
	var textBox = $('.text-container-1');
	var textWidth = getInitialWidth(textBox);
	setCssVariable(textWidth);
	// debugger;
});
//Experiment 2
function enlargeText(textTarget){

}
function fixSection(sectionToFix) {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var scrollDistance = $(window).scrollTop();
	if (scrollDistance >= (winHeight - 10)) {
	    sectionToFix.addClass('fixed');
	    var scrolled = true;
    } 
    else if (scrollDistance <= 10) {
    	sectionToFix.removeClass('fixed');
    	var scrolled = false;
    }
    else {
    	var scrolled = false;
    }
    return scrolled;
}
// This function converts the defined CSS font-variation-settings of a text element into an object.
// textTarget argument = text element from HTML you wish to get CSS of. 
function getAxes(textTarget){
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var scrollDistance = $(window).scrollTop();	    
	var axesStringToSplit = textTarget.css('font-variation-settings');//Gets CSS object
	var axesArray1 = axesStringToSplit.split(', ');//Splits at comma
	var containerWidth = $(window).width();
	var axis_wdth = containerWidth / 100;
	var scrollMultiplier = scrollDistance / 500;
	var axesObject = {};//Object that the key value pairs are added to at function completion
	for (var i = 0; i < axesArray1.length; i++) {
        var axesArray2 = axesArray1[i].split(' ');//Splits first array at space to create 2nd array
        axesObject[axesArray2[0].trim()] = (JSON.stringify(parseFloat(axesArray2[1])+scrollMultiplier+10)).trim();//Converts 2nd array to key value pairs for final object
	    var stringifiedObject = JSON.stringify(axesObject);
	    var strippedString = stringifiedObject.replace(/["{}\\:]+/g, "'"); 
    }
    console.log("striped" + strippedString);
    console.log(scrollMultiplier);
    return strippedString; 
}
$(document).ready(function(){
	// var textBox1Settings = textBox.css('font-variation-settings');
	$(window).scroll(function() {    
	    var winHeight = $(window).height();
	    var docHeight = $(document).height();
	    var scrollDistance = $(window).scrollTop();	
	    // var toFix = $('.experiment-2');
	    // var isScrolled = fixSection(toFix);
		var textBox2 = $('.text-2');
		var newCssValue = getAxes(textBox2, scrollDistance);
		console.log(newCssValue);
		textBox2.css('font-variation-settings', "'wght' " + (scrollDistance / 4 + 400) );
		// textBox2.css('font-variation-settings', newCssValue);
	});
});
$(document).ready(function(){
	$('.text-5').lettering();
	$('.text-8').lettering();
	// function startAnimation {
	// 	$('.text-container-7').addClass('animation-has-occurred');
		$('.text-container-7').addClass('animation-has-occurred');


});
// function timeout() {
// 	setTimeout(function(){
//         $('.text-container-7').toggleClass('animation-has-occurred');
//         timeout();
// 	}, 1500);
// }


var x=0;

var intervalAnimation = setInterval(function() {
    switch(x++%3) {
        case 0: $('.text-container-7').addClass('animation-has-occurred');
        break;
        case 1:
        $('.text-container-7').addClass('animation-state-3');
        break;
        case 2: ;
        $('.text-container-7').removeClass('animation-has-occurred')
        $('.text-container-7').removeClass('animation-state-3')
        break;
    }

}, 1000);


// $(document).ready() ;
// function getResizeDirection() {
//     var finalWidth = $(window).width();
//     var finalHeight = $(window).height();
//     var result;
//     if ((initialWidth < finalWidth) || (initialHeight < finalHeight)) { 
//         result = 'expand'; 
//     } else {
//         result = 'shrink';
//     }

//     initialWidth = finalWidth;
//     initialHeight = finalHeight;

//     return result;
// };

$(document).ready(function(){
	var counter = 0;
	function increment(){
		var countUp = ++counter;
		return countUp;
	}
	var intervalValue = increment*2000;
	// var interval = setInterval(increment, 2000)
	setInterval(function(){
		var z=0;
		var letterContainer7 = $('.text-8');
		$(letterContainer7).children().each(function(z) { 
			setTimeout(function(){
				$('.char' + (z + 1)).addClass('grow');
			}, (z+1)*50)
			setTimeout(function(){
				$('.char' + (z + 1)).removeClass('grow');
			}, (z+1)*50+1000)
		})
	}, 2000)
});
