window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    //Player Object Perameters
    player ={
        x: 0,
        y: 550,
        height:50,
        width:50,
        color:"#00FD45",
        speed:12
    }
    //Laser Object Perameters
    pewpew ={
        x: 0,
        y: 575,
        height:25,
        width:50,
        color:"00FD45",
        speed:12
    }
    //Draw Player
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x,player.y,player.width,player.height);
        ctx.stroke();
    }
    //Draw the Laser
    function drawLaser(pewpew){
        ctx.beginPath();
        ctx.fillStyle =pewpew.color;
        ctx.fillRect(pewpew.x,pewpew.y,pewpew.width,pewpew.height);
        ctx.stroke();
    }
    //Clearing Objects for Movement
    function clearObject(player){
        ctx.clearRect(player.x,player.y,player.width,player.height);
    }
    //Jumping Function
    function jump(){
        let start = Date.now;
        let timer = setInterval(function(){
            let timePassed = Date.now() - start;
            if(timePassed >= 500){
                clearInterval(timer);
                return
            }
            draw(timePassed)
        })
    }
    document.addEventListener("keydown", function(e){
        //The P key 
        if(e.which == 80){
            ctx.beginPath();
            ctx.font = "30px Arial";
            ctx.textAlign = "center";            
            ctx.fillText("Game Start!",300,300);
            ctx.stroke();

        }
        //Down Arrow key
        if(e.which == 40){
            ctx.clearRect(0,0,600,600);
            drawPlayer(player);
        }
        //Left Arrow Key
        if(e.which == 37){
            clearObject(player);
            player.x -= player.speed;
            pewpew.x = player.x;
            drawPlayer(player);
        }
        //Right Arrow Key
        if(e.which == 39){
            clearObject(player);
            player.x += player.speed;
            pewpew.x = player.x;
            drawPlayer(player);
        }
        //Space and Up Arrow Key
        if(e.which == 32 || e.which == 38){
            jump();
            comeDown();
        }
    }, false)
}