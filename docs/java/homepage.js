var canvas = document.getElementById("homepageCanvas");
var ctx = canvas.getContext("2d");
var user;

start();

function start(){
    askForLogin();
}

function askForLogin(){
 var user_name = prompt("Username: ");
 var password = prompt("Password: ");
 if(user_name == "Sammojr614" && password == "DevPassWord"){
    alert("Welcome back, Sam!");
}
if(user_name == "Sammojr614" && password != "DevPassword"){
    alert("Incorrect Password.");
}

if(user_name == "Holt" && password == "JamieRules"){
    alert("Welcome Back, Jamison");
}
 document.cookie = username;
 document.cookie = password;
}