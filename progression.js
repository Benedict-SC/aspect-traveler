var eventPool = [];
for(let i = 1; i < 18; i++){
    if(i == 4 || i == 15){continue;}
    let istr = "" + i;
    if(i < 10) istr = "0" + istr;
    eventPool.push("ev-" + istr);
}
var eventTrack = [
    ["opening"],
    eventPool,
    eventPool,
    eventPool,
    eventPool,
    ["ev-04"],
    eventPool,
    eventPool,
    eventPool,
    eventPool,
    eventPool,
    ["ev-15"],
    eventPool,
    eventPool,
    eventPool,
    eventPool,
    ["ending"]
];
var eventIndex = 0;
var trackUi = {};
function initTrack(){
    g.trackContainer = new createjs.Container();
    g.trackContainer.x = 00;
    g.trackContainer.y = 49;
    g.pointer = new createjs.Bitmap(assets["pointer"]);
    g.mountain = new createjs.Bitmap(assets["mountain"]);
    g.mountain.x = 770;
    g.mountain.y = -40;
    g.pointer.x = 29;
    g.pointer.y = -45;
    g.pointer.alpha = 0;
    g.trackContainer.addChild(g.pointer);
    g.trackContainer.addChild(g.mountain);
    stage.addChild(g.trackContainer);
    trackUi = g.trackContainer;
}
function trackKickoff(){
    fadeInElement(g.pointer,function(){
        movePointer(g.pointer.x,g.pointer.x+60,function(){performProgression(true)},true,false);
    });
}
function performProgression(nomove = false){
    eventIndex++;
    console.log('event index is: ' + eventIndex);
    let bigger = eventIndex == 5 || eventIndex == 11;
    let pool = eventTrack[eventIndex];
    let randomEventIndex = Math.floor(Math.random()*pool.length);
    let randomEvent = pool[randomEventIndex];
    pool.splice(randomEventIndex,1);
    if(nomove){
        loadEventFrame(randomEvent,0);
    }else{
        movePointer(g.pointer.x,g.pointer.x+46,function(){
            loadEventFrame(randomEvent,0);
        },null,bigger);
    }
}
function movePointer(start,end,whendone,clipped,big){
    let trailwidth = 33;
    let pointerHalfWidth = 27;
    let trail = new createjs.Bitmap(assets["trail"]);
    trail.y = 15;
    trail.x = start + pointerHalfWidth + Math.floor(((end-start) - trailwidth)/2);
    if(clipped) trail.x = 75;
    g.trackContainer.addChild(trail);
    trail.alpha = 0;
    fadeInElement(trail);
    g.trackContainer.setChildIndex(g.mountain, g.trackContainer.getNumChildren()-1);
    g.trackContainer.setChildIndex(g.pointer, g.trackContainer.getNumChildren()-1);

    let progress = 0;
    let mover = function(event){
        let secs = event.delta/1000;
        let totalTime = 0.8;
        let progThisFrame = secs/totalTime;
        progress+=progThisFrame;
        let easedProgress = -(Math.cos(Math.PI * progress) - 1) / 2;
        g.pointer.x = start + (end - start)*easedProgress;
        if(progress >= 1){
            g.pointer.x = end;
            if(whendone){
                whendone();
            }
            createjs.Ticker.removeEventListener("tick",mover);
            summonIndicator(big);
        }
    };
    createjs.Ticker.addEventListener("tick",mover);
}
function summonIndicator(big=false){
    let dot = new createjs.Bitmap(assets[big ? "bigdot" : "littledot"]);
    dot.x = g.pointer.x+12;
    dot.y = 3;
    dot.alpha = 0;
    fadeInElement(dot);
    g.trackContainer.addChild(dot);
    g.trackContainer.setChildIndex(dot, 0);
    g.trackContainer.setChildIndex(g.mountain, g.trackContainer.getNumChildren()-1);
    g.trackContainer.setChildIndex(g.pointer, g.trackContainer.getNumChildren()-1);
}
function fadeInElement(obj,whendone){
    let fadefunc = function(event){
        let secs = event.delta/1000;
        obj.alpha += secs*3;
        if(obj.alpha >= 1){
            obj.alpha = 1;
            if(whendone){
                whendone();
            }
            createjs.Ticker.removeEventListener("tick",fadefunc);
        }
    }
    createjs.Ticker.addEventListener("tick",fadefunc);
}
function debugMovePointer(bigger){
    movePointer(g.pointer.x,g.pointer.x+46,null,null,bigger);
}