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
        x: 65,
        y: 575,
        height: 15,
        width: 25,
        speed:12,
        color: "#00FF45"
    }
    selector ={
        x:275,
        y:300,
        height:5,
        width:5,
        color:"ED00ED",
        speed:12,
    }
    function drawTitle(){
        ctx.beginPath();
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle ="lightGreen";
        ctx.fill();
        ctx.fillText("Game Title", 300,300);
        ctx.stroke();
    }
    function selectMenu(){
        ctx.beginPath();
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle ="00EE00";
        ctx.fill();
        ctx.fillText("Start",300,350);
        ctx.fillText("Exit", 300,375);
    }
    function drawMenu(){
        drawTitle();
        selectMenu();
    }
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x,player.y,player.width,player.height);
        ctx.stroke();
    }
    function drawLaser(pewpew){
        ctx.beginPath();
        ctx.fillStyle = pewpew.color;
        ctx.fillRect(pewpew.x,pewpew.y,pewpew.width, pewpew.height);
        ctx.stroke();
    }
    function drawSelector(selector){
        ctx.beginPath();
        ctx.fillStyle = selector.color;
        ctx.fillRect(selector.x,selector.y,selector.width,selector.height);
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
    function shoot(pewpew){
        let start = Date.now();
        let timer = setInterval(function(){
            let timePassed = Date.now() - start;
            if(timePassed >= 500){
                clearInterval(timer);
                return;
            }
            draw(pewpew);
        })
        function draw(pewpew){
            ctx.clearRect(pewpew.x,pewpew.y,pewpew.width,pewpew.height);
            pewpew.x += pewpew.speed;
            drawLaser(pewpew);
        }
    }
    drawMenu();
    document.addEventListener("keydown",function(e){
        e.preventDefault();
        //Right Arrow Key
        if(e.which == 39){
            ctx.clearRect(0,0,600,600);
            drawPlayer(player);
            clearObject(player);
            player.x += player.speed;
            pewpew.x == player.x +65;
            drawPlayer(player);
        }
        //Left Arrow Key
        if(e.which == 37){
            clearObject(player);
            player.x -= player.speed;
            pewpew.x == player.x +65;
            drawPlayer(player);
            ctx.clearRect(0,0,600,600);
            drawPlayer(player);
        }
        //Up Arrow Key and Space
        if(e.which == 38 || e.which == 32){
            pewpew.y = player.y +25;
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
        //Down Arrow Key
        if(e.which == 40){
            player.y = 550;
            pewpew.x = player.x +65;
        }
        //Shoot Key(S key)
        if(e.which == 83){
            shoot(pewpew);
        }
        // Num key 1
        if(e.which == 49){
            while(selector.y != 350){
                ctx.clearRect(selector.x,selector.y,selector.width,selector.height);
                selector.y += selector.speed;
                drawSelector(selector);
            }
        }
        //Num key 2
        if(e.which == 50){
            while(selector.y != 375){
                ctx.clearRect(selector.x,selector.y,selector.width,selector.height);
                selector.y += selector.speed;
                drawSelector(selector);
            }
        }
        //Start Game
        if(e.which == 13 && selector.y == 350){
            ctx.clearRect(0,0,600,600);
            drawPlayer(player);
        }
        //Exit Game
        if(e.which == 13 && selector.y == 375){
            alert("You are Leaving Game, Bye!");
            ctx.clearRect(0,0,600,600);
        }
    })
}