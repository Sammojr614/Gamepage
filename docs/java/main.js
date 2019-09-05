window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle =player.color;
        ctx.fillRect(player.x,player.y,player.height,player.width);
        ctx.stroke();
    }
    function drawLaser(pewpew){
        ctx.beginPath();
        ctx.fillStyle =pewpew.color;
        ctx.fillRect(pewpew.x,pewpew.y,pewpew.height,pewpew.width);
        ctx.stroke();
    }
    player = {
     x : 0,
     y : 250,
     color: "#00FF45",
     height : 60,
     width: 60,
     speed: 13
    }
    pewpew = {
     x: 0,
     y: 250,
     color: "00FF45",
     height:60,
     width:10,
     speed:20
    }
    drawPlayer(player);
    function moveLeft(){
        clearObject();
        player.x -= player.speed;
        drawPlayer(player);
        pewpew.x = player.x
        pewpew.y = player.y
    }
    function clearObject(){
        ctx.clearRect(player.x,player.y,player.width, player.height);
    }
    function moveUp(){
        clearObject();
        player.y -= player.speed;
        drawPlayer(player);
        pewpew.x = player.x
        pewpew.y = player.y
    }
    function moveRight(){
        clearObject();
        player.x += player.speed;
        drawPlayer(player);
        pewpew.x = player.x
        pewpew.y = player.y
    }
    function moveDown(){
        clearObject();
        player.y += player.speed;
        drawPlayer(player);
        pewpew.x = player.x
        pewpew.y = player.y
    }
    function shoot(){
        while(pewpew.x <= canvas.width){
        ctx.clearRect(pewpew.x, pewpew.y, pewpew.width, pewpew.height);
        pewpew.x += pewpew.speed; 
        drawLaser(pewpew);
        }
    }
    document.addEventListener("keydown", function(e){
        //Locks the Screen while using Arrow Keys
        e.preventDefault();
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
        //Space Key
        if(e.which == 32){
            shoot();
        }
        //clear Canvas
        if(e.which == 67){
            ctx.clearRect(0,0,600,600);
        }
    }, false)
}