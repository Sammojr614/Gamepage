window.onload = function(){
    document.addEventListener("keydown", function(e){
        var canvas = document.getElementById("gameTestCanvas");
        var ctx = canvas.getContext("2d");
        //Up Arrow Key
        if(e.which == 38){
            ctx.font = "30px Arial";
            ctx.fillText("Up",300,50);
        }
        //Down Arrow Key
        if(e.which == 40){
            ctx.font = "30px Arial";
            ctx.fillText("Down",300,600);
        }
        //Right Arrow Key
        if(e.which == 39){
            ctx.font = "30px Arial";
            ctx.fillText("Right",450,300);
        }
        //Left Arrow Key
        if(e.which == 37){
            ctx.font = "30px Arial";
            ctx.fillText("Left",50,300);
        }
        if(e.which == 32){
            ctx.clearRect(0,0,600,600);
            alert("Space Key Pressed Clearing Canvas...");
        }

    })
}