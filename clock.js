function digitalClock()
{
    document.getElementById("hour").innerHTML = new Date().getHours();
    document.getElementById("minute").innerHTML = new Date().getMinutes();
    document.getElementById("second").innerHTML = new Date().getSeconds();
}
var interval = setInterval(digitalClock);