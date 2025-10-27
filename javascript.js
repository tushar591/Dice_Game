
var random1 = Math.random();
var random2 = Math.random();
var leftnum = Math.floor(random1*6) + 1;
var rightnum = Math.floor(random2*6) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+leftnum+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+rightnum+".png");
if(leftnum > rightnum){
    document.querySelector("h1").innerHTML = "Left Player Wins";
}
else if(rightnum > leftnum){
    document.querySelector("h1").innerHTML = "Right Player Wins";
}
else
    document.querySelector("h1").innerHTML = "It's draw";


