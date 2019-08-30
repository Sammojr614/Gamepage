var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

start();

function start(){
    whatIsYourname();
}

function whatIsYourname(){
    var name = prompt("What is Your name?");
    ctx.font = "30px Arial";
    ctx.fillText(name, 10, 50);
    
}