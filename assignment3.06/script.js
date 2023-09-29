var div = document.querySelector("#stop")
div.style.height="50px";
div.style.width="50px";
div.style.background="red";
div.style.borderRadius="25px";

var div = document.querySelector("#start")
div.style.height="50px";
div.style.width="50px";
div.style.background="green";
div.style.borderRadius="25px";

var div = document.querySelector("#animated");
div.style.height="100px";
div.style.width="100px";
div.style.background="blue";
div.style.color = "white";
div.style.marginTop = "5px";

var animation;

var currentBorderRadius = 0;

function nextFrame()
{
    currentBorderRadius++;
    div.style.borderRadius = (currentBorderRadius/2) + "px";
    if(currentBorderRadius<75)
    {
        div.innerHTML = "Hello";
        div.style.background = "blue";
    }
    if(currentBorderRadius>=75)
    {
        div.innerHTML = "Bye";
        div.style.background = "black";
    }
}

function reset()
{
    clearInterval(animation);
    currentBorderRadius = 0;
    div.style.borderRadius = "0px";
    div.style.background = "blue";
}

function start()
{
    animation = setInterval(nextFrame, 20);
    div.style.background = "blue";
}

start();

document.querySelector("#stop").onclick = reset;
document.querySelector("#start").onclick = start;