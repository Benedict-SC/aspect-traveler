var bgm;
var userBgmVolumePref = 1;
var userMasterVolumePref = 1;
function initSounds(){
    createjs.Sound.initializeDefaultPlugins();
    createjs.Sound.alternateExtensions = ["mp3"];
    //createjs.Sound.removeAllSounds();
    //createjs.Sound.registerSound("assets/audio/chime.mp3", "good-chime");
    //createjs.Sound.registerSound("assets/audio/mid-chime.mp3", "mid-chime");
    //createjs.Sound.registerSound("assets/audio/sad-chime.mp3", "sad-chime");
    //createjs.Sound.registerSound("assets/audio/button.mp3", "button");
    //createjs.Sound.registerSound("assets/audio/damage.mp3", "damage");

    createjs.Sound.registerSound("assets/audio/bgm.mp3", "bgm");
    let loadHandler = function(event){
        if(event.id == "bgm"){
            bgm = createjs.Sound.play("bgm",{volume:0.1,loop:-1});
            bgmFadeFunc = function(event){
                let maxVol = userBgmVolumePref;
                let secs = event.delta/1000;
                let percentPerSec = .3;
                bgm.volume += secs*percentPerSec;
                if(bgm.volume >= maxVol){
                    bgm.volume = maxVol;
                    createjs.Ticker.removeEventListener("tick",bgmFadeFunc);
                }
            }
            createjs.Ticker.addEventListener("tick",bgmFadeFunc);
        }
    };
    createjs.Sound.on("fileload",loadHandler);
}
function setBgmVolume(vol){
    userBgmVolumePref = vol;
    bgm.volume = userBgmVolumePref;
}
function setMasterVolume(vol){
    userMasterVolumePref = vol;
    createjs.Sound.volume = userMasterVolumePref;
}
var volState = 0;
var musState = 0;
function toggleVolume(){
    volState++;
    volState = volState % 4;
    if(volState == 0){
        setMasterVolume(1);
        g.vicon.image = assets["loud"];
    }else if(volState == 1){
        setMasterVolume(.5);
        g.vicon.image = assets["mid"];
    }else if(volState == 2){
        setMasterVolume(.18);
        g.vicon.image = assets["quiet"];
    }else if(volState == 3){
        setMasterVolume(0);
        g.vicon.image = assets["mute"];
    }
}
function toggleMusic(){
    musState++;
    musState = musState % 4;
    if(musState == 0){
        setBgmVolume(1);
        g.micon.image = assets["m-loud"];
    }else if(musState == 1){
        setBgmVolume(.5);
        g.micon.image = assets["m-mid"];
    }else if(musState == 2){
        setBgmVolume(.18);
        g.micon.image = assets["m-quiet"];
    }else if(musState == 3){
        setBgmVolume(0);
        g.micon.image = assets["m-mute"];
    }
}