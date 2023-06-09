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
    var loadQueue = new createjs.LoadQueue(false,null,"Anonymous");
    loadQueue.installPlugin(createjs.Sound);
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
    stage.enableMouseOver();
    g.bg = new createjs.Bitmap(assets.bg);
    g.bg.x = 0;
    g.bg.y = 0;
    g.bg2 = new createjs.Bitmap(assets.bg);
    g.bg2.x = 900;
    g.bg2.y = 0;
    g.overlay = new createjs.Bitmap(assets.overlay);
    g.overlay.x = 0;
    g.overlay.y = 0;
    buildSeed();
    g.imbue = new createjs.Container();
    let imbueui = new createjs.Bitmap(assets["imbueui"]);
    g.imbue.addChild(imbueui);
    g.imbue.x = -1800;
    g.imbue.y = -960;
    g.imbueSummonState = -1;
    g.char = new createjs.Bitmap(assets["port-gone"]);
    g.charFade = new createjs.Bitmap(assets["port-gone"]);
    g.char.x = 548;
    g.char.y = 91;
    g.charFade.x = 548;
    g.charFade.y = 91;
    g.charFade.alpha = 0;
    g.midfade = false;
    g.charshadow = new createjs.Bitmap(assets.charshadow);
    g.charshadow.x = 0;
    g.charshadow.y = 0;
    stage.addChild(g.bg);
    stage.addChild(g.bg2);
    stage.addChild(g.charshadow);
    stage.addChild(g.overlay);
    stage.addChild(g.char);
    stage.addChild(g.charFade);
    stage.addChild(g.seed);
    stage.addChild(g.imbue);

    g.volumeControl = new createjs.Container();
    g.vicon = new createjs.Bitmap(assets["loud"]);
    let vshape = new createjs.Shape();
    vshape.graphics.beginFill("#000000").drawRoundRect(0,0,20,20,3);
    g.volumeControl.addChild(vshape);
    g.volumeControl.addChild(g.vicon);
    g.volumeControl.x = 876;
    g.volumeControl.y = 2;
    g.vicon.x = 3;
    g.vicon.y = 3;
    vshape.addEventListener("click",function(event){toggleVolume()});
    stage.addChild(g.volumeControl);
    g.musicControl = new createjs.Container();
    g.micon = new createjs.Bitmap(assets["m-loud"]);
    let mshape = new createjs.Shape();
    mshape.graphics.beginFill("#000000").drawRoundRect(0,0,20,20,3);
    g.musicControl.addChild(mshape);
    g.musicControl.addChild(g.micon);
    g.musicControl.x = 876;
    g.musicControl.y = 26;
    g.micon.x = 3;
    g.micon.y = 3;
    mshape.addEventListener("click",function(event){toggleMusic()});
    stage.addChild(g.musicControl);

    g.openingFlags = {
        whatwhy:true,
        save:true,
        brought:true,
        knowing:true,
        decide:false,
        leavewish:false,
        volunteer:false,
        treasure:false
    }

    g.motes = [
        {id:"BOND",count: 1},
        {id:"HEAT",count: 1},
        {id:"COLD",count: 1},
        {id:"LIGHT",count: 1},
        {id:"EARTH",count: 1},
        {id:"AIR",count: 1}
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

    initTrack();

    g.options = [];
    g.encid = "opening";
    loadEventFrame(g.encid);
    createjs.Ticker.on("tick", tick);
}
function loadEventFrame(encid, idx = 0){
    unloadEventFrame(function(){
        if(encid == null) return;
        g.encid = encid;
        let enc = encounters[encid];
        if(idx == 0){
            shiftBg();
        }
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
    //if(event.item.ext == "mp3"){
    //    createjs.Sound.registerSound(event.item.id,)
    //}
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
    stage.setChildIndex( g.darkness, stage.getNumChildren()-1);
    stage.setChildIndex( g.frameContainer, stage.getNumChildren()-1);
    g.darkPercent += 0.15;
    if(g.darkPercent > 1) g.darkPercent = 1;
    g.darkness.alpha = g.darkPercent;
    createjs.Sound.volume = userMasterVolumePref * (1 - g.darkPercent);
}
function fadeMusic(){
    let mutefunc = function(event){
        let secs = event.delta/1000;
        createjs.Sound.volume -= (secs/3);
        if(createjs.Sound.volume <= 0){
            createjs.Sound.volume = 0;
            createjs.Ticker.removeEventListener("tick",mutefunc);
        }
    }
    createjs.Ticker.addEventListener("tick",mutefunc);
}
function breakDarkness(){
    g.darkPercent = 0;
    g.darkness.alpha = g.darkPercent;
    createjs.Sound.volume = userMasterVolumePref * (1 - g.darkPercent);
}
function shiftBg(){
    let progress = {val:0};
    holdInput(progress);
    let shiftfunc = function(event){
        let secs = event.delta/1000;
        progress.val += secs; //one second animation- no adjustment needed
        let percentMoved = -(Math.cos(Math.PI * progress.val) - 1) / 2;
        g.bg.x = Math.floor(percentMoved * -900);
        g.bg2.x = 900 + Math.floor(percentMoved * -900);
        if(progress.val > 1){
            g.bg.x = 0;
            g.bg2.x = 900;
            freeHold(progress);
            createjs.Ticker.removeEventListener("tick",shiftfunc);
        }
    }
    createjs.Ticker.addEventListener("tick",shiftfunc);
}
function buildSeed(){
    g.seed = new createjs.Container();
    let seedImg = new createjs.Bitmap(assets.seed);
    g.seed.addChild(seedImg);
    let seedShape = new createjs.Shape();
    seedShape.graphics.beginFill("#0000FF").drawRect(0,0,seedImg.image.width,seedImg.image.height);
    seedShape.alpha = 0.01;
    g.seed.addChild(seedShape);
    g.seed.x = 20;
    g.seed.y = -2;
    /*seedShape.addEventListener("mouseover",function(event){
        seedImg.image = assets.seedglow;
    });
    seedShape.addEventListener("mouseout",function(event){
        seedImg.image = assets.seed;
    });
    seedShape.addEventListener("click",function(event){
        if(g.imbueSummonState == -1){
            summonImbue();
        }else if(g.imbueSummonState == 1){
            dismissImbue();
        }
    })*/
}
function summonImbue(){
    return; //not yet implemented
    g.imbueSummonState = 0;
    stage.setChildIndex( g.imbue, stage.getNumChildren()-1);
    stage.setChildIndex( g.seed, stage.getNumChildren()-1);
    let progress = {val:0};
    holdInput(g.imbue);
    let summon = function(event){
        let secs = event.delta/1000;
        progress.val += 2*secs;
        let percentMoved = Math.sin((progress.val * Math.PI) / 2);
        g.imbue.x = -1800 + Math.floor(percentMoved * 1800);
        g.imbue.y = -960 + Math.floor(percentMoved * 960);
        if(progress.val > 1){
            g.imbueSummonState = 1;
            g.imbue.x = 0;
            g.imbue.y = 0;
            createjs.Ticker.removeEventListener("tick",summon);
        }
    }
    createjs.Ticker.addEventListener("tick",summon);
}
function dismissImbue(){
    g.imbueSummonState = 0;
    stage.setChildIndex( g.imbue, stage.getNumChildren()-1);
    stage.setChildIndex( g.seed, stage.getNumChildren()-1);
    let progress = {val:0};
    let summon = function(event){
        let secs = event.delta/1000;
        progress.val += 2*secs;
        let percentMoved = 1 - Math.cos((progress.val * Math.PI) / 2);
        g.imbue.x = Math.floor(percentMoved * -1800);
        g.imbue.y = Math.floor(percentMoved * -960);
        if(progress.val > 1){
            g.imbueSummonState = -1;
            g.imbue.x = -1800;
            g.imbue.y = -960;
            freeHold(g.imbue);
            createjs.Ticker.removeEventListener("tick",summon);
        }
    }
    createjs.Ticker.addEventListener("tick",summon);
}
function changePortraits(expression){
    g.charFade.image = assets["port-" + expression];
    if(g.midFade){
        return;
    }
    g.midFade = true;
    let percent = 0;
    let crossfade = function(event){
        let secs = event.delta/1000;
        percent += 5*secs;
        if(expression == "gone"){
            g.char.alpha = 1 - percent;
            if(g.char.alpha > 1) g.char.alpha = 1;
        }
        g.charFade.alpha = .3 + percent;
        if(g.charFade.alpha > 1) g.charFade.alpha = 1;
        if(percent >= 1){
            g.char.image = g.charFade.image;
            g.char.alpha = 1;
            g.charFade.alpha = 0;
            g.midFade = false;
            createjs.Ticker.removeEventListener("tick",crossfade);
        }
    }
    createjs.Ticker.addEventListener("tick",crossfade);
}
createjs.Ticker.framerate = 60;
function tick(event) { stage.update(event); }
//createjs.Ticker.on("tick",stage.update());