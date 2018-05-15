////// DRAGGABLE CROSSHAIR HANDLE ///////

//Make the DIV element draggagle:
dragElement(document.getElementById(("crosshairclicktarget")));
// get window width for x-axis calculations:
var windowWidth = window.innerWidth,
    windowWidthPercent = windowWidth / 100,
    windowHeight = window.innerHeight,
    windowHeightPercent = windowHeight / 100,
    wghtAxisMinValue = 250,
    wghtAxisMaxValue = 900,
    wghtAxisScaleFactor = (wghtAxisMaxValue - wghtAxisMinValue) / 100,
    wghtCssPrefix = "'wght'",
    italAxisMinValue = 0,  
    italAxisMaxValue = 1,  
    italAxisScaleFactor = (italAxisMaxValue - italAxisMinValue) / 100,
    italCssPrefix = "'ital'",
    wdthAxisMinValue = 75,  
    wdthAxisMaxValue = 125,  
    wdthAxisScaleFactor = (wdthAxisMaxValue - wdthAxisMinValue) / 100,
    wdthCssPrefix = "'wdth'",
    crosshairContainer = document.getElementsByClassName("cross-hairs-container")[0],
    textInputBox = document.getElementById("text-entry-box"),
    syntaxVariationTarget = document.getElementsByClassName("variation-target"),
    xSwitch = document.getElementsByClassName("switch-horizontal-input")[0],
    xSwitchValue = xSwitch.options[xSwitch.selectedIndex].value,
    xSwitchIndex = xSwitch.options[xSwitch.selectedIndex].index,
    ySwitch = document.getElementsByClassName("switch-vertical-input")[0],
    ySwitchValue = ySwitch.options[ySwitch.selectedIndex].value,
    ySwitchIndex = ySwitch.options[ySwitch.selectedIndex];

textInputBox.focus();
function onValueChange() {
  // gets new switch values when a new value is selected in dropdown:
  xSwitchValue = xSwitch.options[xSwitch.selectedIndex].value,
  xSwitchIndex = xSwitch.options[xSwitch.selectedIndex].index,
  ySwitchValue = ySwitch.options[ySwitch.selectedIndex].value,
  ySwitchIndex = ySwitch.options[ySwitch.selectedIndex].index;
  // call option disabling function:
  switchLogic();
}
function switchLogic() {
  for (i = 0;i<ySwitch.options.length; i++) {
    // clear disable attributes from all options:
    ySwitch.options[i].setAttribute("enabled", "enabled");
    ySwitch.options[i].removeAttribute("disabled", "disabled");
  }
  // add disabled attribute only to required element:
  ySwitch.options[xSwitchIndex].setAttribute("disabled", "disabled");
  for (i = 0;i<xSwitch.options.length; i++) {
    xSwitch.options[i].setAttribute("enabled", "enabled");
    xSwitch.options[i].removeAttribute("disabled", "disabled");
  }
  xSwitch.options[ySwitchIndex].setAttribute("disabled", "disabled");
}
function addClickedClass(target) {
  target.classList.add("is-clicked");
}
function removeClickedClass(target) {
  target.classList.remove("is-clicked");
}

// call disabling logic on page load:
switchLogic();

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var textNode = document.getElementsByClassName("code-to-copy")[0];
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    // add class to attach click styling:
    addClickedClass(elmnt);
    addClickedClass(crosshairContainer);
    addClickedClass(textInputBox);
  }
  function elementDrag(e) {
    e = e || window.event;
    // prevent text selection during drag:
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // calculate cursor position as % of page width and height:
    var xPercent = pos3 / windowWidthPercent;
    var yPercent = pos4 / windowHeightPercent;
    // set default values before dropdown changes:
    var yAxisValue = Math.round((yPercent * italAxisScaleFactor + italAxisMinValue) * 100) / 100;
    var xAxisValue = xPercent * wghtAxisScaleFactor + wghtAxisMinValue;
    var xCssPrefixToAdd = xSwitchValue;
    var yCssPrefixToAdd = ySwitchValue;
    //switch statement based on user-selected dropdown values:
    //for x-axis
    console.log(xSwitchIndex);
    switch(xSwitchIndex) {
      case 0:
        var xAxisValue = Math.round(xPercent * wghtAxisScaleFactor + wghtAxisMinValue);
        var xCssPrefixToAdd = wghtCssPrefix; 
        break;
      case 1:
        var xAxisValue = Math.round((xPercent * italAxisScaleFactor + italAxisMinValue) * 100) / 100;
        var xCssPrefixToAdd = italCssPrefix;  
        // textInputBox.setAttribute('style', 'font-variation-settings:' + italCssPrefix + ' ' + xAxisValue);
        break;
      case 2:
        var xAxisValue = Math.round(xPercent * wdthAxisScaleFactor + wdthAxisMinValue); 
        var xCssPrefixToAdd = wdthCssPrefix; 
        // textInputBox.setAttribute('style', 'font-variation-settings:' + wdthCssPrefix + ' ' + xAxisValue);
        break;
    }
    switch(ySwitchIndex) {
      case 0:
        var yAxisValue = Math.round(yPercent * wghtAxisScaleFactor + wghtAxisMinValue); 
        var yCssPrefixToAdd = wghtCssPrefix;
        // textInputBox.setAttribute('style', 'font-variation-settings:' + wghtCssPrefix + ' ' + yAxisValue);
        break;
      case 1:
        var yAxisValue = Math.round((yPercent * italAxisScaleFactor + italAxisMinValue) * 100) / 100;
        console.log('this' + yAxisValue);
        var yCssPrefixToAdd = italCssPrefix; 
        // textInputBox.setAttribute('style', 'font-variation-settings:' + italCssPrefix + ' ' + yAxisValue);
        break;
      case 2:
        var yAxisValue = Math.round(yPercent * wdthAxisScaleFactor + wdthAxisMinValue); 
        var yCssPrefixToAdd = wdthCssPrefix;
        // textInputBox.setAttribute('style', 'font-variation-settings:' + wdthCssPrefix + ' ' + yAxisValue);
        break;
    }
    // set variable font axes styling:
    // function roundValueX(target) {
    //   target = Math.round(target);
    //   console.log(target);
    //   return xAxisValue = target;
    // }
    // function roundValueY(target) {
    //   target = Math.round(target);
    //   console.log(target);
    //   return yAxisValue = target;
    // }
    // roundValueX(xAxisValue);
    // roundValueY(yAxisValue);
    // roundValue(yAxisValue);
    // console.log(xAxisValue);
    // console.log(yAxisValue);
    var style_string = xCssPrefixToAdd + ' ' + xAxisValue + ', ' + yCssPrefixToAdd + ' ' + yAxisValue;
    textInputBox.setAttribute('style', 'font-variation-settings:' + style_string);
    for (i=0;i<syntaxVariationTarget.length;i++) {
        syntaxVariationTarget[i].innerHTML = style_string;
    }

    // console.log(wghtAxisValue);
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    // remove class to remove click styling:
    removeClickedClass(elmnt);
    removeClickedClass(crosshairContainer);
    removeClickedClass(textInputBox);
  }
}


/////////////////////////



