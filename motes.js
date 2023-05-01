function getMoteById(moteid){
    for(let i = 0; i < g.motes.length; i++){
        if(g.motes[i].id == moteid.toUpperCase())
            return g.motes[i];
    }
    return null;
}
function getHighestMote(){
    let highest = 0;
    for(let i = 1; i < g.motes.length; i++){
        if(g.motes[i].count > g.motes[highest].count)
            highest = i;
    }
    return g.motes[highest];
}
function updateMoteCount(idx,delta){
    let mote = g.motes[idx];
    let startCount = mote.count;
    mote.count += delta;
    if(mote.count < 0) mote.count = 0;
    let dotBox = mote.container.getChildByName("dots");
    dotBox.removeAllChildren();
    for(let  i = 0; i < startCount; i++){
        let dot = new createjs.Bitmap(assets.motedot);
        dot.x = i*6;
        dot.y = (i%2 == 1 ? 8 : 0);
        if(delta < 0){ //if some are disappearing 
            if(i >= mote.count){ //and you're one of the ones disappearing
                //shrink out of existence
                holdInput(dot);
                dot.homeX = dot.x;
                dot.homeY = dot.y;
                dot.addEventListener("tick",function(){
                    dot.scale = dot.scale - 0.1;
                    let offset = 6 - (6*dot.scale);
                    dot.x = dot.homeX + offset;
                    dot.y = dot.homeY + offset;
                    if(dot.scale <= 0){
                        freeHold(dot);
                        dot.removeAllEventListeners();
                        dotBox.removeChild(dot);
                    }
                });
            }
        }
        dotBox.addChild(dot);
    }
    if(delta > 0){
        let i = startCount;
        while(i < mote.count){
            let dot = new createjs.Bitmap(assets.motedot);
            dot.homeX = i*6;
            dot.x = dot.homeX + 60;
            dot.y = (i%2 == 1 ? 8 : 0);
            dot.alpha = 0;
            holdInput(dot);
            dot.addEventListener("tick",function(event){
                let pps = 300;
                let aps = 5;
                let secs = event.delta/1000;
                let pixels = Math.floor(pps*secs);
                let alphadelta = aps * secs;
                dot.x -= pixels;
                dot.alpha += alphadelta;
                if(dot.x <= dot.homeX){
                    freeHold(dot);
                    dot.x = dot.homeX;
                    dot.alpha = 1;
                    dot.removeAllEventListeners();
                }
            });
            dotBox.addChild(dot);
            i++;
        }
    }
}