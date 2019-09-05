window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle =player.color;
        ctx.fillRect(player.x,player.y,player.height,player.width);
        ctx.stroke();
    }

    player = {
     x : 0,
     y : 250,
     color: "#00FF45",
     height : 60,
     width: 60,
     speed: 10
    }
    drawPlayer(player);
    function moveLeft(){
        clearObject();
        player.x -= 1;
        drawPlayer(player);
    }
    function clearObject(){
        ctx.clearRect(player.x,player.y,player.width, player.height);
    }
    function moveUp(){
        clearObject();
        player.y -= player.speed;
        drawPlayer(player);
    }
    function moveRight(){
        clearObject();
        player.x += player.speed;
        drawPlayer(player);
    }
    function moveDown(){
        clearObject();
        player.y += player.speed;
        drawPlayer(player);
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
        //Down Arrow Key
        if(e.which == 40){
            moveDown();
        }
    }, false)
}