var canvas = document.getElementById("homepageCanvas");
var ctx = canvas.getContext("2d");

start();

function start(){
askForLogin();

}

function askForLogin(){
    var username = prompt("Username: ");
    var password = prompt("Password: ");
    if(username == "Sammojr614" && password == "DevPassCode");
        alert("Welcome back!");
    }
