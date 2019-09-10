window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    //Player Object Perameters
    player ={
        x: 0,
        y:550,
        color:"#00FD45",
        height:50,
        width:50,
        speed:12
    }
    //Selector Perameters
    selector ={
        x: 250,
        y: 325,
        radius:5,
        color:"lightGreen",
        speed:25
    }
    //Draw Player
    function drawPlayer(player){
        ctx.beginPath();
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x,player.y,player.width,player.height);
        ctx.stroke();
    }
    //Drawing the Selector
    function drawSelector(selector){
        ctx.beginPath();
        ctx.fillStyle = selector.color;
        ctx.fill();
        ctx.arc(selector.x,selector.y,selector.radius,0, 2 * Math.PI);
        ctx.stroke();
    }
    //Clearing Objects
    function clearObject(player){
        ctx.clearRect(player.x,player.y,player.width,player.height);
    }
    //Drawing the Text at the Beginning
    function beginText(){
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle= "#00FF00"
        ctx.fill();
        ctx.fillText("Game Title", 300,300);
    }
    //Select Menu
    function selectMenu(){
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle ="lightGreen";
        ctx.fill();
        ctx.fillText("Start", 300,350);
        ctx.fillText("Exit", 300,375);
    }
    //Drawing the Full Menu
    function drawMenu(){
    beginText();
    selectMenu();
}
function jump(){
    let start = Date.now();
    let timer = setInterval(function(){
        let timePassed = Date.now(); - start;
        if(timePassed >= 500){
            clearInterval(timer);
            return;
        }
        draw(timePassed);

    },20)
    function draw(timePassed){
        clearObject(player);
        player.y -= 50;
        player.x += 50;
        drawPlayer(player);
    }
}
drawMenu();
    document.addEventListener("keydown", function(e){
        //Starting the Game
        if(e.which == 13 && selector.y == 350){
            alert("Game Start");
            ctx.clearRect(0,0,600,600);
            drawPlayer(player);
        }
        //Exiting
        if(e.which == 13 && selector.y == 375){
            alert("Exiting Game");
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
        //1 key
        if(e.which == 49){
            ctx.clearRect(selector.x,selector.y, 4,4);
           selector.y = 350;
           drawSelector(selector);
        }
        //2 key
        if(e.which == 50){
            ctx.clearRect(selector.x,selector.y, 4,4);
           selector.y = 375;
           drawSelector(selector);
        }
        //Right Arrow 
        if(e.which == 39){
            clearObject(player);
            player.x += player.speed
            drawPlayer(player);
        }
        //Left Arrow
        if(e.which == 37){
            clearObject(player);
            player.x -= player.speed;
            drawPlayer(player);
        }
        //Space and Up Arrow
        if(e.which == 38 || e.which == 32){
            jump();
        }
    }, false)

}