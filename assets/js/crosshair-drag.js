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
    textInputBox = document.getElementById("text-entry-box");

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var textNode = document.getElementsByClassName("code-to-copy")[0];
  textNode.innerHTML = "X Position" + "<br>" + "Y Position";
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
    elmnt.classList.add("is-clicked");
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
    // calculate axis value for variable font:
    var wghtAxisValue = xPercent * wghtAxisScaleFactor + wghtAxisMinValue; 
    var italAxisValue = yPercent * italAxisScaleFactor + italAxisMinValue; 
    textInputBox.setAttribute('style', 'font-variation-settings:' + wghtCssPrefix + ' ' + wghtAxisValue + ', ' + italCssPrefix + ' ' + italAxisValue );
    console.log(wghtAxisValue);
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    var xNode = "X Position = " + pos3; 
    var yNode = "Y Position = " + pos4; 
    textNode.innerHTML = xNode + "<br>" + yNode;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    // remove class to remove click styling:
    elmnt.classList.remove("is-clicked");
  }
}


/////////////////////////



