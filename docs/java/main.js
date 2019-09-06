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
    function drawEnemy(enemy){
        ctx.beginPath();
        ctx.fillStyle= enemy.color;
        ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);
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
    pewpew = {
     x: 65,
     y: 275,
     color: "00FF45",
     height:60,
     width:10,
     speed:12
    }
    enemy = {
        x: 500,
        y: 600,
        color: "0089FF",
        height: 350,
        width:60,
        speed:12
    }
    drawPlayer(player); 
    drawEnemy(enemy);
    function clearObject(){
        ctx.clearRect(player.x,player.y,player.width, player.height);
    }
    function moveUp(){
        clearObject();
        player.y -= player.speed;
        drawPlayer(player);
        pewpew.y = player.y
        if(player.y <= -1){
            ctx.clearRect(player.x,player.y, player.width,player.height);
            player.y = 600;
        }
    }
    function moveDown(){
        clearObject();
        player.y += player.speed;
        drawPlayer(player);
        pewpew.y = player.y
        if(player.y >= 600){
            ctx.clearRect(player.x,player.y, player.width,player.height);
            player.y = 0;
        }
    }
    
    document.addEventListener("keydown", function(e){
        //Locks the Screen while using Arrow Keys
        e.preventDefault();
        //Up Arrow Key
        if(e.which == 38){
            moveUp();
        }
        //Down Arrow Key
        if(e.which == 40){
            moveDown();
        }
        //clear Canvas
        if(e.which == 67){
            ctx.clearRect(0,0,600,600);
        }
    }, false)
}