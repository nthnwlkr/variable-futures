
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
    canvas.onmousemove = function (e) {
        e.preventDefault();
        setMousePosition(e);
        if (element !== null) {

        // });                                
            // if ((Math.abs(mouse.x - mouse.startX)) > 194) {
                // element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                // element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            // }
            // if ((Math.abs(mouse.y - mouse.startY)) > 45) {
                // element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
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

    canvas.onmousedown = function (e) {
        canvas.onmouseup = function(){
            element = null;
        }
        console.log(element);
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            // console.log("finished.");
        } else {
            // console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            var handleNames = ["vertical","horizontal"];
            handleNames.forEach(function(el){
                boxHandle = document.createElement('div');
                boxHandle.className = "box-handle " + el;
                element.appendChild(boxHandle)
            });

            textBox = document.createElement('p'); 
            textBox.className = 'rectangle-text-box draggable';
            textBox.innerHTML = 'Type Here';
            textBox.setAttribute("contenteditable", "true");
            element.appendChild(textBox);
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
        return textBox;
    }
}