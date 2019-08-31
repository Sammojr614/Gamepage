var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

start();

function start(){
    var nameOrRectangle = prompt("Name or Draw a Rectangle?")
    if(nameOrRectangle == "Name" || nameOrRectangle == "name"){
        whatIsYourname();
    }
    if(nameOrRectangle == "Rectangle" || nameOrRectangle == "rectangle"){
        drawRect();
    }   
}

function whatIsYourname(){
    var name = prompt("What is Your name?");
    var sizeAndFont = prompt("What Size and Font?");
    var color = prompt("What Color?");
    ctx.font = sizeAndFont;
    ctx.textAlign ="center";
    ctx.fillStyle = color;
    ctx.fillText(name, 200, 200);
}
function drawRect(){
    var height = prompt("What is the height?");
    var width = prompt("How wide do you want it?");
    var color = prompt("What Color? make Sure its Hex code or Rgb")
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(200, 200, width,height);
    ctx.stroke();
}
