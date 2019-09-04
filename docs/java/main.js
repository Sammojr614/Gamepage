window.onload = function() {
    var canvas = document.getElementById("gameTestCanvas");
    canvas.addEventListener("keydown", function(e){
    ctx = canvas.getContext("2d");

    function player(x,y,color,height,width){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(x,y,width,height);
        ctx.stroke();
    }
    var playerOne = new player(150,150,"red",150,150)
    
}, false)
}