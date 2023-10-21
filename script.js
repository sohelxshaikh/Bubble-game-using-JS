timer = 60;

function createBubble(){
    var clutter = "";

for(var i = 1 ; i <=154 ; i++ ){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function setTimer(){
    var timerinn= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerinn);
        }
       
    },1000)
}


function getNewHit(){
    var rn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = rn;
}

getNewHit();
setTimer();
createBubble();