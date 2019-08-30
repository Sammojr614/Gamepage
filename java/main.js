var canvas = document.getElementById("myCanvas");
start();

function start(){
        drawCircle(20,"#FF0000", 10, 10);
}

function drawCircle(radius, color, x, y){
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();

}
function checkMouse(){
    canvas.addEventListener("mousedown", doMouseDown, false);
}
function doMouseDown(event){
    canvas_y = event.page;
    canvas_x = event.page;
    alert("X =" + canvas_x + "Y=" +canvas_y);
}