
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
    function getAxes(textTarget){
        var winHeight = $(window).height();
        var docHeight = $(document).height();
        var axesStringToSplit = textTarget.css('font-variation-settings');//Gets CSS object
        var axesArray1 = axesStringToSplit.split(', ');//Splits at comma
        var containerWidth = $(window).width();
        var axis_wdth = containerWidth / 100;
        var axesObject = {};//Object that the key value pairs are added to at function completion
        for (var i = 0; i < axesArray1.length; i++) {
            var axesArray2 = axesArray1[i].split(' ');//Splits first array at space to create 2nd array
            axesObject[axesArray2[0].trim()] = (JSON.stringify(parseFloat(axesArray2[1])+i)).trim();//Converts 2nd array to key value pairs for final object
            var stringifiedObject = JSON.stringify(axesObject);
            var strippedString = stringifiedObject.replace(/["{\\}:]+/g, ' '); 
        }
        strippedString = strippedString.replace('wdth ', '');
        return strippedString; 
    }
    var handle = {
                h: $(".box-handle"),
                vert: $(this).find(".box-handle.vertical"),
                horz: document.getElementsByClassName("box-handle-horizontal")
            }
    $(document).on("click",".close-button",function(e){
        var parent = this.parentNode;
        parent.parentNode.removeChild(parent);
    })
    canvas.onmousedown = function (e) {
        canvas.onmouseup = function(){
            setTimeout(function(){ 
                if ($('.rectangle').length) {
                    $('.explanation').addClass('hide');
                } else {
                    $('.explanation').removeClass('hide');
                }
            }, 100);
            element = null;
        }
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            // console.log("finished.");
        }else if (e.target != canvas) {

        }else if (e.target = canvas) {
            // console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            var handleNames = ["vertical"];
            handleNames.forEach(function(el){
                boxHandle = document.createElement('div');
                boxHandle.className = "box-handle " + el;
                // boxHandle.setAttribute("onmousedown", "clickHandle()");
                element.appendChild(boxHandle)
            });
            closeButton = document.createElement('div');
            closeButton.className = 'close-button';
            element.appendChild(closeButton);
            textBox = document.createElement('p'); 
            textBox.className = 'rectangle-text-box draggable';
            textBox.innerHTML = 'Type Here';
            textBox.setAttribute("contenteditable", "true");
            element.appendChild(textBox);
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
            $(document).on("mousedown",".box-handle", function (e){
                setMousePosition(e);
                mouse.startX = mouse.x;
                mouse.startY = mouse.y;
                // console.log((xTravel - 194) + "+" + (yTravel - 45));
                // element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                // element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
                // fontSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'));
                // fontSizeToAdd = parseInt((Math.abs(mouse.y - mouse.startY)) * text.fontSizeMultiplier);
                // textBox.style.fontSize = fontSizeToAdd;
                var mousedown = true;
                var vertClass = "vertical",
                    horzClass = "horizontal",
                    parentBox = $(e.target).parent()[0],
                    boxWidth = $(parentBox).outerWidth(),
                    boxHeight = $(parentBox).height(),
                    textEl = $(e.target).siblings('p'),
                    lastWidth,
                    lastAxis,
                    lastVar;
                var axisInit = getAxes(textEl);
                var last_position = {};
                $(textEl).addClass("focus");
                $(document).on("mouseup", function (){
                    mousedown = false;
                    $(textEl).removeClass("focus");
                    return mousedown;
                });
                $('#canvas').on("mousemove", function (){
                    var direction = "positive";
                    lastVar = axisInit;
                    xResizeTravel = (mouse.x - mouse.startX);
                    yResizeTravel = (mouse.y - mouse.startY);
                    if (mousedown !== false) {
                        if ($(e.target).hasClass(vertClass)) {
                            axisInit = $(parentBox).outerWidth() / 1000  + xResizeTravel + 150 ;
                            if (direction == "negative") {
                                // axisInit = axisInit - (axisInit - 150);
                            }
                            lastWidth = $(parentBox).outerWidth();
                            // $(parentBox).outerWidth(boxWidth + xResizeTravel);
                            // var boxWidth = ($(parentBox).outerWidth()) * 150 / ($(textEl).outerWidth()) ;
                            // console.log(axisInit);
                            $(textEl).css('font-variation-settings', '"wdth" ' + Math.floor(axisInit) );
                        }
                        if ($(e.target).hasClass(horzClass)) {
                            // $(parentBox).height(boxHeight + yResizeTravel);
                            fontSize = parseFloat($(textEl).css("font-size"));
                            fontSize = fontSize.replace(/["px:]+/g, ' ');
                            fontSizeToAdd = parseInt((Math.abs(mouse.y - mouse.startY)) * text.fontSizeMultiplier);
                            $(textEl).css("font-size", fontSizeToAdd);

                        }
                    }
                });
                
            });
            return boxHandle;
        }
        return textBox;
    }
}

    
