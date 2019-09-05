window.onload = function() {
    var prevPlayerX;
    var prevPlayerY;
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    var playerX = 0;
    var playerY = 250;
    function player(x,y, color, height, width){
        ctx.beginPath();
        ctx.fillStyle =color;
        ctx.fillRect(x, y, width, height);
        ctx.stroke();
    } 
    
    function moveLeft(){
        var prevPlayerX = playerX+1;
        playerX -= 1;
        ctx.clearRect(prevPlayerX,playerY,0,150,150);
        playerOne;
    }
    function moveUp(){
        var prevPlayerY = playerY+1;
        playerY -= 1;
        ctx.clearRect(playerX,prevPlayerY,150,150);
        playerOne;
    }
    function moveRight(){
        var prevPlayerX = playerX-1;
        playerX += 1;
        ctx.clearRect(prevPlayerX,playerY,150,150);
        playerOne;
    }
    function moveDown(){
        var prevPlayerY = playerY-1;
        playerY += 1;
        ctx.clearRect(playerX,prevPlayerY,150,150);
        playerOne;
    }
    var playerOne = new player(playerX, playerY, "#00FF45", 150,150);
    document.addEventListener("keydown", function(e){
        //Left Arrow key
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
        //Down Arrow Key
        if(e.which == 40){
            moveDown();
        }
        if(e.which == 32){
            alert("clearing canvas");
            ctx.clearRect(0,0,600,600);
        }
    }, false)
}