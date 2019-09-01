var button = document.getElementById("loginButton");
button.onclick = askForLogin;
var user;



function askForLogin(){
var user_name = prompt("Username: ");
document.cookie =user_name;
var password = prompt("Password: ");
document.cookie = password;
if(user_name == "Sammojr614" && password == "DevPassword"){
    alert("Welcome Back, Sam!");
    }
}