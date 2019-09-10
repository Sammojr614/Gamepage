window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    player ={
        x: 0,
        y: 550,
        height:50,
        width:50,
        color:"#00FD45",
        speed:12
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
    document.addEventListener("keydown", function(e){
        e.preventDefault();
        if(e.which == 80){
            ctx.font ="Arial 50px";
            ctx.fillStyle = "lightGreen";
            ctx.fillText("Game Start!", 300,300);
            ctx.textAlign = "center";
            ctx.stroke();
        }
        if(e.which == 40){
            ctx.clearRect(0,0, 600,600);
            drawPlayer(player);
        }
        if(e.which == 39){
            clearObject(player);
            player.x += player.speed;
            drawPlayer(player);
        }
        if(e.which == 37){
            clearObject(player);
            player.x -= player.speed;
            drawPlayer(player);
        }
    })
}