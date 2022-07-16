let perclicks = 1;
let clicks = 0;
document.getElementById("clicker").onclick = function(){
    clicks += perclicks;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("mpc").innerHTML = perclicks;
}
document.getElementById("up").onclick = function(){
    if (clicks > 100 || clicks == 100){
        clicks -= 100;
        perclicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("mpc").innerHTML = perclicks;
    }
}
document.getElementById("up2").onclick = function(){
    if (clicks > 300 || clicks == 300){
        clicks -= 300;
        perclicks += 5;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("mpc").innerHTML = perclicks;
    }
}
document.getElementById("up3").onclick = function(){
    if (clicks > 5000 || clicks == 5000){
        clicks -= 5000;
        perclicks += 2000;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("mpc").innerHTML = perclicks;
    }
}
