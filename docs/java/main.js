window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    var playerX = 0;
    var playerY = 250;
    function player(x,y,color,height,width){
        ctx.beginPath();
        ctx.fillStyle =color;
        ctx.fillRect(x,y,height,width);
        ctx.stroke();
    }
    var playerOne = new player(playerX,playerY, "#00FF45",150,150);

    function moveLeft(){
        playerX -= 1;
        playerOne;
    }
    function moveUp(){
        playerY -= 1;
        playerOne;
    }
    function moveRight(){
        playerX += 1;
        playerOne;
    }
    function moveDown(){
        playerY += 1;
        playerOne;
    }

    document.addEventListener("keydown", function(e){

        //Left Arrow Key
        if(e.which == 37){
            moveLeft();
        }
        //Up Arrow Key
        if(e.which == 38){
            moveUp();
        }
        //Right Arrow Key
        if(e.which == 39){
            moveRight();
        }
        //Down Arrow
        if(e.which == 40){
            moveDown();
        }

    }, false)
}