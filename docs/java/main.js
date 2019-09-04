
var playerX;
var playerY;
var canvas = document.getElementById("gameTestCanvas");
var ctx = canvas.getContext("2d");
function player(playerX,playerY,color,height,width){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(playerX,playerY,width,height);
    ctx.stroke();
}
window.onload = function() {
    var STARTING_X = 150;
    var STARTING_Y = 150;
    var playerOne = new player(STARTING_X,STARTING_Y,"red",150,150)
    document.addEventListener("keydown", function(e){
        if(e.which == 37){
            playerX -= 1;
        }
    }, false)
}

