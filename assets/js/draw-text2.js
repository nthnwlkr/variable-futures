
// $(function() {
//   console.log("loaded");
//   $("#resizable").resizable({
//     containment: "#container"
//   });
//   $("#draggable").draggable({
//     containment: "#container"
//   });
// });
// $(document).on("mousedown", function() {
//   console.log("success");
//   var h = document.createElement("H1");
//   var t = document.createTextNode("Hello World");
//   document.body.appendChild(h);
//   h.appendChild(t);
//   $("main").append(h);
// });

initDraw(document.getElementById('canvas'));



function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;
    var text = {
        wdth: 'wdth',
        wdthMin: 0,
        wdthMax: 1000,
        wdthToChange: '',
        fontSizeMultiplier: 1.33
    }

        var last_position = {},
        $output = $('#output');
        mousemove_ok  = true,
        mouse_timer   = setInterval(function () {
            mousemove_ok = false;
        }, 1500);
    canvas.onmousemove = function (e) {
        e.preventDefault();
        setMousePosition(e);
        if (element !== null) {
        //setup a variable to store our last position

        //note that `.on()` is new in jQuery 1.7 and is the same as `.bind()` in this case
        // $(document).on('mousemove', function (event) {
            if (mousemove_ok) {
                mousemove_ok = false;
                //check to make sure there is data to compare against
                if (typeof(last_position.x) != 'undefined') {

                    //get the change from last position to this position
                    var deltaX = last_position.x - event.clientX,
                        deltaY = last_position.y - event.clientY;

                    //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
                    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
                        //left
                        console.log('left');
                    } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
                        //right
                        console.log('right');
                    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
                        //up
                        console.log('up');
                    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
                        //down
                        console.log('down');
                    }
                }

                //set the new last position to the current for next time
                last_position = {
                    x : event.clientX,
                    y : event.clientY
                };
        // });                                
            // if ((Math.abs(mouse.x - mouse.startX)) > 194) {
                // element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            // }
            // if ((Math.abs(mouse.y - mouse.startY)) > 45) {
                element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            // }
            xTravel = Math.abs(mouse.x - mouse.startX);
            yTravel = Math.abs(mouse.y - mouse.startY);
            // console.log((xTravel - 194) + "+" + (yTravel - 45));
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
            fontSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'));
            fontSizeToAdd = parseInt((Math.abs(mouse.y - mouse.startY)) * text.fontSizeMultiplier);
            textBox.style.fontSize = fontSizeToAdd;
        }
        }
    }

    canvas.onmousedown = function (e) {
        canvas.onmouseup = function(){
            element = null;
        }
        console.log(element);
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finished.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            textBox = document.createElement('p'); 
            textBox.className = 'rectangle-text-box';
            textBox.innerHTML = 'Type Here';
            textBox.setAttribute("contenteditable", "true");
            element.appendChild(textBox);
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
        return textBox;
    }
}