var timer = 60;
var score = 0;
var hitnum= 0;


function increaseScore(){
    score = score+ 10;
    document.querySelector("#scoreval").textContent= score;
    
}

function createBubble(){
    var clutter = "";

for(var i = 1 ; i <=154 ; i++ ){
    hitnum = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${hitnum}</div>`;
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

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
   
    if( hitnum === clickednum ){
        increaseScore();
        createBubble();
        getNewHit();
    };
});

getNewHit();
setTimer();
createBubble();
