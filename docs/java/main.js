window.onload = function() {
    var canvas = document.getElementById("gameTestCanvas");
    var ctx = canvas.getContext("2d");
    document.addEventListener("keydown", function(e){
        if(e.which == 37){
            alert("Hi!");
        }
    }, false)
}