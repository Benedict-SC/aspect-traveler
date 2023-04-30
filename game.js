var encounters = encounters || {}
var stage;
var assets = {};
var g = {};
var inputPaused = false;

//create default manifest
var manifest = [
    {id:"bg",src:"assets/img/ui/mtnbg.png"},
    {id:"overlay",src:"assets/img/ui/frame.png"},
    {id:"charshadow",src:"assets/img/ui/frame_shadow.png"},
    {id:"seed",src:"assets/img/ui/seed_base.png"},
    {id:"moteslot",src:"assets/img/ui/mote_sidebar.png"},
    {id:"motedot",src:"assets/img/ui/mote_dot.png"},
    {id:"BOND",src:"assets/img/ui/mote_bond.png"},
    {id:"HEAT",src:"assets/img/ui/mote_heat.png"},
    {id:"COLD",src:"assets/img/ui/mote_cold.png"},
    {id:"LIGHT",src:"assets/img/ui/mote_light.png"},
    {id:"EARTH",src:"assets/img/ui/mote_earth.png"},
    {id:"AIR",src:"assets/img/ui/mote_air.png"},
    {id:"port-angry",src:"assets/img/ports/angry.png"},
    {id:"port-annoyed",src:"assets/img/ports/annoyed.png"},
    {id:"port-ehehe",src:"assets/img/ports/ehehe.png"},
    {id:"port-fear",src:"assets/img/ports/fear.png"},
    {id:"port-gleeful",src:"assets/img/ports/gleeful.png"},
    {id:"port-gleeful2",src:"assets/img/ports/gleeful_2.png"},
    {id:"port-halo",src:"assets/img/ports/halo.png"},
    {id:"port-hee",src:"assets/img/ports/hee.png"},
    {id:"port-neutral",src:"assets/img/ports/neutral.png"},
    {id:"port-sad",src:"assets/img/ports/sad.png"},
    {id:"port-stoic",src:"assets/img/ports/stoic.png"},
    {id:"port-ugh",src:"assets/img/ports/ugh.png"},
    {id:"port-verysad",src:"assets/img/ports/verysad.png"}
]
//populate manifest from encounter data
for(let i = 0; i < encounters.ids.length; i++){
    let encid = encounters.ids[i];
    let enc = encounters[encid];
    for (const [key, value] of Object.entries(enc.images)) {
        let item = {id:encid + key,src:value};
        manifest.push(item);
    }
}

function initializeGame(){
    var loadQueue = new createjs.LoadQueue(false);
    loadQueue.on("fileload",onFileLoad,this);
    loadQueue.on("complete",onFilesComplete,this);
    loadQueue.loadManifest(manifest);
}
function tryInit(){
    stage = new createjs.Stage("maincanv");
    g.bg = new createjs.Bitmap(assets.bg);
    g.bg.x = 0;
    g.bg.y = 0;
    g.overlay = new createjs.Bitmap(assets.overlay);
    g.overlay.x = 0;
    g.overlay.y = 0;
    g.seed = new createjs.Bitmap(assets.seed);
    g.seed.x = 27;
    g.seed.y = 4;
    g.char = new createjs.Bitmap(assets["port-halo"]);
    g.char.x = 548;
    g.char.y = 91;
    g.charshadow = new createjs.Bitmap(assets.charshadow);
    g.charshadow.x = 0;
    g.charshadow.y = 0;
    stage.addChild(g.bg);
    stage.addChild(g.charshadow);
    stage.addChild(g.overlay);
    stage.addChild(g.char);
    stage.addChild(g.seed);

    g.motes = [
        {id:"BOND",count: 1 + Math.floor(Math.random() * 9)},
        {id:"HEAT",count: Math.floor(Math.random() * 10)},
        {id:"COLD",count: Math.floor(Math.random() * 10)},
        {id:"LIGHT",count: Math.floor(Math.random() * 10)},
        {id:"EARTH",count: Math.floor(Math.random() * 10)},
        {id:"AIR",count: Math.floor(Math.random() * 10)}
    ]
    for(let i = 0; i < g.motes.length; i++){
        let moteContainer = new createjs.Container();
        let slot = new createjs.Bitmap(assets.moteslot);
        slot.x = 0;
        slot.y = 0;
        moteContainer.addChild(slot);
        let icon = new createjs.Bitmap(assets[g.motes[i].id]);
        icon.x = 5;
        icon.y = 3;
        moteContainer.addChild(icon);
        let dotBox = new createjs.Container();
        dotBox.x = 50;
        dotBox.y = 14;
        dotBox.name = "dots";
        moteContainer.addChild(dotBox);
        moteContainer.x = 10;
        moteContainer.y = 136 + (55*i);
        stage.addChild(moteContainer);
        g.motes[i].container = moteContainer;
        updateMoteCount(i,0);
    }

    g.options = [];
    g.encid = "e01";
    loadEventFrame(g.encid);
    createjs.Ticker.on("tick", tick);
}
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
    console.log(mote.id + " going from " + mote.count + " to " + (mote.count + delta));
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
            inputPaused = true;
            if(i >= mote.count){ //and you're one of the ones disappearing
                //shrink out of existence
                dot.homeX = dot.x;
                dot.homeY = dot.y;
                dot.addEventListener("tick",function(){
                    dot.scale = dot.scale - 0.1;
                    let offset = 6 - (6*dot.scale);
                    dot.x = dot.homeX + offset;
                    dot.y = dot.homeY + offset;
                    if(dot.scale <= 0){
                        inputPaused = false;
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
            inputPaused = true;
            dot.addEventListener("tick",function(event){
                console.log("ticking up- dot.x is " + dot.x + " and alpha is " + dot.alpha);
                let pps = 300;
                let aps = 5;
                let secs = event.delta/1000;
                let pixels = Math.floor(pps*secs);
                console.log("delta is " + event.delta);
                let alphadelta = aps * secs;
                dot.x -= pixels;
                dot.alpha += alphadelta;
                if(dot.x <= dot.homeX){
                    inputPaused = false;
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
function loadEventFrame(encid, idx = 0){
    unloadEventFrame();
    if(encid == null) return;
    g.encid = encid;
    let enc = encounters[encid];
    let first = enc.frames[idx];
    let options = first.options;
    g.encounterText = new createjs.BitmapText(insertNewlines(first.text,520),fontsheet);//createjs.Text(first.text,"13px Arial","#FFFFFF");
    //g.encounterText.lineWidth = 520;
    g.encounterText.lineHeight = 19;
    g.encounterText.x = 140;
    g.encounterText.y = 261;
    g.encTextShadow = new createjs.BitmapText(insertNewlines(first.text,520),shadowsheet);
    g.encTextShadow.lineHeight = 19;
    g.encTextShadow.x = g.encounterText.x + 1
    g.encTextShadow.y = g.encounterText.y + 1
    g.encounterImg = new createjs.Bitmap(assets[enc.id + first.image]);
    g.encounterImg.x = 140;
    g.encounterImg.y = 110;
    stage.addChild(g.encTextShadow);
    stage.addChild(g.encounterImg);
    stage.addChild(g.encounterText);
    setOptions(options);
}
function unloadEventFrame(){
    stage.removeChild(g.encounterImg);
    stage.removeChild(g.encTextShadow);
    stage.removeChild(g.encounterText);
    for(let i = 0; i < g.options.length; i++){
        stage.removeChild(g.options[i]);
    }
}
function setOptions(options){
    let enc = encounters[g.encid];
    g.options = [];
    for(let i = 0; i < options.length; i++){
        let opt = options[i];

        let eventValid = true;
        if(opt.condition){
            if(opt.condition == "moteMaximum"){
                let mote = getMoteById(opt.conditionMote);
                eventValid = mote.count <= opt.conditionValue;
            }else if(opt.condition == "moteMinimum"){
                let mote = getMoteById(opt.conditionMote);
                eventValid = mote.count >= opt.conditionValue;
            }
        }
        let textColor = eventValid ? "#FFFFFF" : "#AAAAAA";
        let bgColor = eventValid ? "#000000" : "#111111";

        let optObj = new createjs.Container();
        let optText = new createjs.Text(opt.text,"14px Arial",textColor);
        optText.x = 8;
        optText.y = 8;
        let width = optText.getBounds().width;
        let buttonbg = new createjs.Shape();
        buttonbg.graphics.beginFill(bgColor).drawRoundRect(0,0,width+18,30,9);
        optObj.addChild(buttonbg);
        optObj.addChild(optText);
        optObj.x = 677;
        optObj.y = 115 + (i*40);
        //add button logic
        if(eventValid){
            setOptionBehavior(opt,optObj,enc);
        }

        g.options.push(optObj);
        stage.addChild(optObj);
    }
}
function setOptionBehavior(opt,optObj,enc){
    optObj.addEventListener("click",function(event){
        if(inputPaused){
            return;
        }
        let highestMoteAtStart = getHighestMote();
        if(opt.effect == "delta"){
            if(opt.bond){ updateMoteCount(0,opt.bond);}
            if(opt.heat){ updateMoteCount(1,opt.heat);}
            if(opt.cold){ updateMoteCount(2,opt.cold);}
            if(opt.light){ updateMoteCount(3,opt.light);}
            if(opt.earth){ updateMoteCount(4,opt.earth);}
            if(opt.air){ updateMoteCount(5,opt.air);}
        }else if(opt.effect == "end"){
            unloadEventFrame();
            g.encid = null;
        }else{
            console.log(opt.effect);
        }

        if(opt.frameIdx || opt.frameIdx === 0){
            loadEventFrame(g.encid,opt.frameIdx);
        }else if(opt.frameId){
            for(let j = 0; j < enc.frames.length; j++){
                if(enc.frames[j].id == opt.frameId){
                    loadEventFrame(g.encid,j);
                    break;
                }
            }
        }else if(opt.idPool){
            let randomIndex = Math.floor(Math.random() * opt.idPool.length);
            let randomId = opt.idPool[randomIndex];
            for(let j = 0; j < enc.frames.length; j++){
                if(enc.frames[j].id == randomId){
                    loadEventFrame(g.encid,j);
                    break;
                }
            }
        }else if(opt.highestStatBranch){
            for(let j = 0; j < enc.frames.length; j++){
                if(enc.frames[j].id == highestMoteAtStart.id){
                    loadEventFrame(g.encid,j);
                    break;
                }
            }
        }
    })
}
function onFileLoad(event){
    assets[event.item.id] = event.result;
}
function onFilesComplete(event){
    tryInit();
}
function loadTestEvent(){
    loadEventFrame("e02",0);
}
function insertNewlines(textstring,width){
    let tokens = textstring.split(" ");
    let lines = [];
    let currentLine = ""
    while(tokens.length > 0){
        nextToken = tokens.slice(0,1)[0];
        tokens = tokens.slice(1);
        let newline = currentLine + (currentLine.length == 0 ? "" : " ") + nextToken;
        let testText = new createjs.BitmapText(newline,fontsheet);
        let newlength = testText.getBounds().width;
        if(newlength > width){
            lines.push(currentLine);
            currentLine = "" + nextToken;
        }else{
            currentLine = newline;
        }
    }
    lines.push(currentLine);
    return lines.join("\n");
}
createjs.Ticker.framerate = 60;
function tick(event) { stage.update(event); }
//createjs.Ticker.on("tick",stage.update());