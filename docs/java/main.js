window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    player ={
        x: 0,
        y: 550,
        height: 50,
        width: 50,
        color: "#00FD45",
        speed:12,
    }
    pewpew ={
        x: 0,
        y: 575,
        height: 15,
        width: 25,
        speed:12,
        color: "#00FF45"
    }
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x,player.y,player.width,player.height);
        ctx.stroke();
    }
    function clearObject(player){
        ctx.clearRect(player.x,player.y,player.width,player.height);
    }
    function jump(player){
        let start = Date.now();
        let timer = setInterval(function(){
            let timePassed = Date.now() - start;
            if(timePassed >= 250){
                clearInterval(timer);
                return;
            }
            draw(player);
        })
        function draw(player){
            clearObject(player);
            player.x += 0;
            player.y -= 5;
            drawPlayer(player);
        }
    }
    function comeDown(player){
        let start = Date.now();
        let timer = setInterval(function(){
            let timePassed = Date.now() - start;
            if(timePassed >= 150){
                clearInterval(timer);
                return;
            }
            draw(player);
        })
        function draw(player){
            clearObject(player);
            player.x += 0;
            player.y += 8.75;
            drawPlayer(player);
        }
    }
    drawPlayer(player);
    document.addEventListener("keydown",function(e){
        e.preventDefault();
        //Right Arrow Key
        if(e.which == 39){
            clearObject(player);
            player.x += player.speed;
            drawPlayer(player);
        }
        //Left Arrow Key
        if(e.which == 37){
            clearObject(player);
            player.x -= player.speed;
            drawPlayer(player);
        }
        //Up Arrow Key and Space
        if(e.which == 38 || e.which == 32){
            let start = Date.now();
            let timer = setInterval(function(){
                let timePassed = Date.now() - start;
                if(timePassed >= 400){
                    comeDown(player);
                    clearInterval(timer);
                    return
                }
            })
            jump(player);
            
        }
    })
}