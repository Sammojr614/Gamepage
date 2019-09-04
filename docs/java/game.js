window.onload = function() {
var canvas = document.getElementById("testingCanvas");
var ctx = canvas.getContext("2d");

document.addEventListener("keydown", function(e){
    var playerX = 300;
    var playerY = 300;
    var player1 = new player(playerX,playerY, "lightgreen", 250,250);
    //Left Arrow
    if(e.which == 37){
        playerX -= 1;
    }
    //Right Arrow
    if(e.which == 39){
        playerX += 1;
    }
    //Up arrow 
    if(e.which == 38){
        playerY += 1;
    }
    //Down Arrow
    if(e.which == 40){
        playerY -= 1;
    }
}, false);
}

function player(x,y,color,height,width){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
    ctx.stroke();
}
