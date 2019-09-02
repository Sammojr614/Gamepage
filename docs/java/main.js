var canvas = document.getElementById("myCanvas");
var button = document.getElementById("drawButton");
var clearButton = document.getElementById("clearButton");
var ctx = canvas.getContext("2d");
button.onclick = function () { buttonDraw() };
clearButton.onclick = function () { clear() }
 

function buttonDraw(){
var nameOrRect = prompt("Want Me to Draw your name? or a Rectangle?: ");
if(nameOrRect == "Name" || nameOrRect == "name"){
var name = prompt("What is Your Name?: ");
 var nameSize = prompt("How big do you want it?: ");
 var nameFont = prompt("What Font?");
 var nameColor = prompt("What Color?");
 drawName(name, nameColor, nameSize, nameFont);
}
if(nameOrRect == "Rectangle" || nameOrRect == "rectangle"){
    var rectHeight = prompt("What Height?: ");
    var rectWidth = prompt("How wide do you want?: ");
    var rectColor = prompt("What Color?: ");
    drawRectangle(rectHeight, rectWidth,rectColor);
}

}
function drawName(name, color, size, font){
 ctx.beginPath();
 ctx.font = size, font;
 ctx.fillText(name, 10, 10);
 ctx.stroke();
}

function drawRectangle(height, width, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(200,200,width, height);
    ctx.stroke();
    
    
}
function clear(){
    
}

