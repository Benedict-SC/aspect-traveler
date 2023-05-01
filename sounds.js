var bgm;
var userBgmVolumePref = 1;
var userMasterVolumePref = 1;
function initSounds(){
    createjs.Sound.initializeDefaultPlugins();
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.removeAllSounds();
    createjs.Sound.registerSound("assets/audio/chime.mp3", "good-chime");
    createjs.Sound.registerSound("assets/audio/mid-chime.mp3", "mid-chime");
    createjs.Sound.registerSound("assets/audio/sad-chime.mp3", "sad-chime");
    createjs.Sound.registerSound("assets/audio/button.mp3", "button");


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