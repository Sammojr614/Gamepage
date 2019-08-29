var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//First red Rectangle
ctx.beginPath();
ctx.fillStyle ="#FF0000";
ctx.fillRect(0,0,150,50);
ctx.strokeStyle ="red";
ctx.stroke();

//Second red Rectangle
ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,150,150,50);
ctx.strokeStyle ="red";
ctx.stroke();

//First yellow Rectangle
ctx.beginPath();
ctx.fillStyle ="#00FF34";
ctx.fillRect(0,100,50,25);
ctx.strokeStyle ="yellow";
ctx.stroke();

//second Yellow Rectangle
ctx.beginPath();
ctx.fillStyle ="#00FF34";
ctx.fillRect(0,75,50,25);
ctx.strokeStyle ="yelllow"
ctx.stroke();