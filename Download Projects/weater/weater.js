const timer = document.querySelector(".timer");
const drop = document.querySelector(".drop");
const sunny = document.querySelector(".sunny");

const lightmod = document.querySelector(".moon");
const darkmode = document.querySelector(".sun");
const link = document.querySelector(".link");
lightmod.onclick = function () {
link.setAttribute("href" , "weater lightmode.css");
timer.setAttribute("src" , "timer.png");
drop.setAttribute( "src" , "drop.png");
sunny.setAttribute("src" , "sunny.png");


}
darkmode.onclick = function () {
link.setAttribute("href" , "weater.css");
timer.setAttribute("src" , "white timer.png");
drop.setAttribute( "src" , "white drop.png");
sunny.setAttribute("src" , "white sunny.png");
}