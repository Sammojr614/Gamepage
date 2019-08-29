var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Ground Tile
ctx.beginPath();
ctx.fillStyle = "#7cfc00 "
ctx.fillRect(0,150,200,100);
ctx.stroke();

//sky tile
ctx.beginPath();
ctx.fillStyle = "SkyBlue"
ctx.fillRect(0,0, 200,150);
ctx.stroke();

//Sky things
ctx.beginPath();
ctx.arc(10, 10, 40, 0, 2 * Math.PI);
ctx.fillStyle = "Yellow"
ctx.fill();
ctx.stroke();


// Might be a Stick figure
//body
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(90,120,10,15);
ctx.stroke();
//head
ctx.beginPath();
ctx.arc(95,115,5,0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
//left arm
ctx.beginPath();
ctx.fillRect(85,121,5,10);
ctx.stroke();
