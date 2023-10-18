var div = document.querySelector("#animated");
div.style.height="100px";
div.style.width="100px";
div.style.background="blue";
div.style.color = "white";
div.style.marginTop = "5px";

var animation;

var currentBorderRadius = 0;
let increasing = true;

function nextFrame()
{
    if (increasing)
    {
        currentBorderRadius++;
    }
    else
    {
        currentBorderRadius--;
    }

    div.style.borderRadius = (currentBorderRadius/Math.sin(2)) + "px";
    if(currentBorderRadius>15)
    {
        div.style.background = "Blue";
    }
    else
    {
     div.style.background = "Red";
    }
    if(currentBorderRadius>=50)
    {
        increasing = false;
    }
    if (currentBorderRadius==0)
    {
        increasing = true;
    }
}
function start()
{
    animation = setInterval(nextFrame, 20);
    div.style.background = "blue";
}

start();