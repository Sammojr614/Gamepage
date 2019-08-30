var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ball;


start();

function start(){

} 
function drawCircle(radius, x, y){
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
}