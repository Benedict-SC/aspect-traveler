var encounters = encounters || {}
var stage;
var assets = {};
var g = {};
var holds = [];
function inputPaused(){
    return holds.length > 0;
}
function freeHold(referent){
    //console.log("hold removed: %o",referent);
    holds = holds.filter(x => x != referent);
}
function holdInput(referent){
    holds.push(referent);
    //console.log("hold added: %o",referent);
}

function initializeGame(){
    var loadQueue = new createjs.LoadQueue(false);
    loadQueue.on("fileload",onFileLoad,this);
    loadQueue.on("complete",onFilesComplete,this);
    loadQueue.loadManifest(manifest);
}
function tryInit(){
    document.getElementById("loadmessage").hidden = true;
    document.getElementById("startbutton").hidden = false;
}
function startGame(){
    document.getElementById("startmenu").hidden = true;
    document.getElementById("maincanv").hidden = false;
    initSounds();
    buildGame();
}
function buildGame(){
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
    g.darkness = new createjs.Bitmap(assets.darkness);
    g.darkness.alpha = 0;
    g.darkPercent = 0;
    stage.addChild(g.darkness);

    g.options = [];
    g.encid = "test";
    loadEventFrame(g.encid);
    createjs.Ticker.on("tick", tick);
}
function loadEventFrame(encid, idx = 0){
    unloadEventFrame(function(){
        if(encid == null) return;
        g.encid = encid;
        let enc = encounters[encid];
        let frame = enc.frames[idx];
    
        g.frameContainer = new createjs.Container();
    
        let options = frame.options;
        g.encounterText = new createjs.BitmapText(insertNewlines(frame.text,528),fontsheet);//createjs.Text(first.text,"13px Arial","#FFFFFF");
        //g.encounterText.lineWidth = 520;
        g.encounterText.lineHeight = 19;
        g.encounterText.x = 136;
        g.encounterText.y = 261;
        g.encTextShadow = new createjs.BitmapText(insertNewlines(frame.text,528),shadowsheet);
        g.encTextShadow.lineHeight = 19;
        g.encTextShadow.x = g.encounterText.x + 1
        g.encTextShadow.y = g.encounterText.y + 1
        g.encounterImg = new createjs.Bitmap(assets[enc.id + frame.image]);
        g.encounterImg.x = 140;
        g.encounterImg.y = 110;
        g.frameContainer.addChild(g.encTextShadow);
        g.frameContainer.addChild(g.encounterImg);
        g.frameContainer.addChild(g.encounterText);
        setOptions(options,g.frameContainer);
        stage.addChild(g.frameContainer);
        g.frameContainer.alpha = 0;
        holdInput(g.frameContainer);
        g.animFunc = function(event){
            let secs = event.delta/1000;
            let aps = 4;
            g.frameContainer.alpha += aps*secs;
            if(g.frameContainer.alpha >= 1){
                g.frameContainer.alpha = 1;
                g.frameContainer.removeEventListener("tick",g.animFunc);
                freeHold(g.frameContainer);
            }
        };
        g.frameContainer.addEventListener("tick",g.animFunc);
    }); 
}
function unloadEventFrame(whenDone){
    if(!(g.frameContainer)){ 
        whenDone();
        return;
    }
    holdInput(g.frameContainer);
    g.frameContainer.addEventListener("tick",function(event){
        let secs = event.delta/1000;
        let aps = 4;
        g.frameContainer.alpha -= aps*secs;
        if(g.frameContainer.alpha <= 0){
            g.frameContainer.alpha = 0;
            freeHold(g.frameContainer);
            stage.removeChild(g.frameContainer);
            g.frameContainer = null;
            if(whenDone){whenDone();}
        }
    });
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
function showHolds(){
    console.log(holds);
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
function getDarker(){
    g.darkPercent += 0.15;
    if(g.darkPercent > 1) g.darkPercent = 1;
    g.darkness.alpha = g.darkPercent;
    createjs.Sound.volume = userMasterVolumePref * (1 - g.darkPercent);
}
function breakDarkness(){
    g.darkPercent = 0;
    g.darkness.alpha = g.darkPercent;
    createjs.Sound.volume = userMasterVolumePref * (1 - g.darkPercent);
}
createjs.Ticker.framerate = 60;
function tick(event) { stage.update(event); }
//createjs.Ticker.on("tick",stage.update());