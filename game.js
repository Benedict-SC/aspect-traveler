var encounters = encounters || {}
var stage;
var assets = {};
var g = {};

//create default manifest
var manifest = [
    {id:"bg",src:"assets/img/ui/mtnbg.png"},
    {id:"overlay",src:"assets/img/ui/frame.png"},
    {id:"seed",src:"assets/img/ui/seed_base.png"},
    {id:"char",src:"assets/img/mockup/char.png"},
    {id:"moteslot",src:"assets/img/ui/mote_sidebar.png"},
    {id:"motedot",src:"assets/img/ui/mote_dot.png"},
    {id:"BOND",src:"assets/img/ui/mote_bond.png"},
    {id:"HEAT",src:"assets/img/ui/mote_heat.png"},
    {id:"COLD",src:"assets/img/ui/mote_cold.png"},
    {id:"LIGHT",src:"assets/img/ui/mote_light.png"},
    {id:"EARTH",src:"assets/img/ui/mote_earth.png"},
    {id:"AIR",src:"assets/img/ui/mote_air.png"}
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
    g.char = new createjs.Bitmap(assets.char);
    g.char.x = 685;
    g.char.y = 222;
    stage.addChild(g.bg);
    stage.addChild(g.char);
    stage.addChild(g.overlay);
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
    stage.update();
}
function updateMoteCount(idx,delta){
    let mote = g.motes[idx];
    mote.count += delta;
    let dotBox = mote.container.getChildByName("dots");
    dotBox.removeAllChildren();
    for(let i = 0; i < mote.count; i++){
        let dot = new createjs.Bitmap(assets.motedot);
        dot.x = i*6;
        dot.y = (i%2 == 1 ? 8 : 0);
        dotBox.addChild(dot);
    }
    stage.update();
}
function loadEventFrame(encid, idx = 0){
    unloadEventFrame();
    if(encid == null) return;
    g.encid = encid;
    let enc = encounters[encid];
    let first = enc.frames[idx];
    let options = first.options;
    g.encounterText = new createjs.Text(first.text,"13px Arial","#FFFFFF");
    g.encounterText.lineWidth = 520;
    g.encounterText.lineHeight = 21;
    g.encounterImg = new createjs.Bitmap(assets[enc.id + first.image]);
    g.encounterImg.x = 140;
    g.encounterImg.y = 110;
    g.encounterText.x = 140;
    g.encounterText.y = 261;
    stage.addChild(g.encounterImg);
    stage.addChild(g.encounterText);
    setOptions(options);
    stage.update();
}
function unloadEventFrame(){
    stage.removeChild(g.encounterImg);
    stage.removeChild(g.encounterText);
    for(let i = 0; i < g.options.length; i++){
        stage.removeChild(g.options[i]);
    }
    stage.update();
}
function setOptions(options){
    let enc = encounters[g.encid];
    g.options = [];
    for(let i = 0; i < options.length; i++){
        let opt = options[i];
        let optObj = new createjs.Container();
        let optText = new createjs.Text(opt.text,"14px Arial","#FFFFFF");
        optText.x = 8;
        optText.y = 8;
        let width = optText.getBounds().width;
        let buttonbg = new createjs.Shape();
        buttonbg.graphics.beginFill("#000000").drawRoundRect(0,0,width+18,30,9);
        optObj.addChild(buttonbg);
        optObj.addChild(optText);
        optObj.x = 677;
        optObj.y = 115 + (i*40);
        //add button logic
        optObj.addEventListener("click",function(event){
            if(opt.frameIdx){
                loadEventFrame(g.encid,opt.frameIdx);
            }else if(opt.frameId){
                for(let j = 0; j < enc.frames.length; j++){
                    if(enc.frames[j].id == opt.frameId){
                        loadEventFrame(g.encid,j);
                        break;
                    }
                }
            }
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
        })

        g.options.push(optObj);
        stage.addChild(optObj);
    }
    stage.update();
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