window.onload = function(){
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    player ={
        x: 0,
        y: 450,
        width:50,
        height:50,
        color:"#00FE45",
        speed:12,
        direction: "right"
    }
    pewpew ={
        x: 45,
        y: 475,
        width:50,
        height:15,
        color:"00CC45",
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
    function moveRight(){
        clearObject(player);
        player.x += player.speed;
        drawPlayer(player);
        player.direction += "center";
    }
    function moveLeft(){
        clearObject(player);
        player.x -= player.speed;
        drawPlayer(player);
        player.direction += "left";
    }
    function jump(){
        let start = Date.now(); // remember start time

        let timer = setInterval(function() {
          // how much time passed from the start?
          let timePassed = Date.now() - start;
        
          if (timePassed >= 500) {
            clearInterval(timer); // finish the animation after 2 seconds
            return;
          }
        
          // draw the animation at the moment timePassed
          draw(timePassed);
        
        }, 20);
        
        // as timePassed goes from 0 to 2000
        // left gets values from 0px to 400px
        function draw(timePassed) {
          clearObject(player);
            player.y -= 10;
            player.x += 2;
          drawPlayer(player);
       
        }
    }
    function comeDown(){
        let start = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 1000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  clearObject(player)
    player.y += 5;
    player.x += 2;
    drawPlayer(player);
}
    }
    document.addEventListener("keydown",function(e){
        if(e.which == 80){
            player.y = 550;
            alert("Begin game!")
            drawPlayer(player);
        }
        if(e.which == 82){
            clearObject(player);
            alert("GameReset");
            player.y = 550;
            player.x = 0;
            drawPlayer(player);
        }
        if(e.which == 39){
            moveRight();
        }
        if(e.which == 32 || e.which == 38){
            jump(player);
            comeDown(player);
        }
        if(e.which == 37){
            moveLeft();
        }

    })
}