////// DRAGGABLE CROSSHAIR HANDLE ///////

//Make the DIV element draggagle:
window.onload = function() {
  dragElement(document.getElementById(("crosshairclicktarget")));
} 

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var textNode = document.getElementsByClassName("code-to-copy")[0];
  textNode.innerHTML = "X Position" + "<br>" + "Y Position";
  elmnt.onmousedown = dragMouseDown;
  // add class to attach click styling:


  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
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
    elmnt.classList.remove("is-clicked");
  }
}


/////////////////////////



