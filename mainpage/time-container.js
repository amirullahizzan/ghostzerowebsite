function updateTime()
{
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

hours = (hours < 10) ? '0' + hours : hours; //ternary op
minutes = (minutes < 10) ? '0' + minutes : minutes;
seconds = (seconds < 10) ? '0' + seconds : seconds;

document.getElementById("time-container").textContent = hours+  ":" +minutes+":"+seconds;

}

setInterval(updateTime, 1000); //puts on Update

updateTime(); //init once
