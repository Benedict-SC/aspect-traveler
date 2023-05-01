function setOptions(options,container){
    let enc = encounters[g.encid];
    g.options = [];
    let lastHeight = 115;
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
        if(opt.hidden && !eventValid){
            continue;
        }
        let optFont = eventValid ? fontsheet : graysheet;
        //let textColor = eventValid ? "#FFFFFF" : "#AAAAAA";
        let bgColor = eventValid ? "#000000" : "#111111";

        let optObj = new createjs.Container();
        //let optText = new createjs.Text(opt.text,"14px Arial",textColor);
        let optWidth = 194;
        let brokenText = insertNewlines(opt.text,optWidth);
        let optText = new createjs.BitmapText(brokenText,optFont);
        optText.x = 8;
        optText.y = 8;
        let width = optText.getBounds().width;
        let height = optText.getBounds().height;
        let buttonbg = new createjs.Shape();
        buttonbg.graphics.beginFill(bgColor).drawRoundRect(0,0,width+18,height+14,9);
        optObj.addChild(buttonbg);
        optObj.addChild(optText);
        optObj.x = 677;
        optObj.y = lastHeight;
        lastHeight += height + 25;
        //add button logic
        if(eventValid){
            setOptionBehavior(opt,buttonbg,enc);
        }

        g.options.push(optObj);
        container.addChild(optObj);
    }
}
function setOptionBehavior(opt,optObj,enc){
    optObj.addEventListener("click",function(event){
        if(inputPaused()){
            return;
        }
        if(opt.silence){
            getDarker();
        }
        let highestMoteAtStart = getHighestMote();
        if(opt.effect == "delta"){
            processMoteChanges(opt);
        }else if(opt.effect == "minimize"){
            for(let i = 0; i < opt.motes.length; i++){
                let mote = getMoteById(opt.motes[i]);
                let delta = mote.count - 1;
                let dummyOpt = {};
                dummyOpt[opt.motes[i]] = -delta;
                processMoteChanges(dummyOpt,true);
            }
            createjs.Sound.play("damage");
        }else if(opt.effect == "end"){
            createjs.Sound.play("button");
            unloadEventFrame();
            g.encid = null;
        }else if(opt.effect == "random"){
            let randomIndex = Math.floor(Math.random() * opt.subOpts.length);
            let randomId = opt.subOpts[randomIndex].id;
            let efi = getEventFrameIndex(randomId,enc);
            processMoteChanges(opt.subOpts[randomIndex]);
            loadEventFrame(g.encid,efi);
        }else if(opt.effect == "restoreVolume"){
            breakDarkness();
        }else{
            createjs.Sound.play("button");
            console.log(opt.effect);
        }

        if(opt.frameIdx || opt.frameIdx === 0){
            loadEventFrame(g.encid,opt.frameIdx);
        }else if(opt.frameId){
            loadEventFrame(g.encid,getEventFrameIndex(opt.frameId,enc));
        }else if(opt.idPool){
            let randomIndex = Math.floor(Math.random() * opt.idPool.length);
            let randomId = opt.idPool[randomIndex];
            loadEventFrame(g.encid,getEventFrameIndex(randomId,enc));
        }else if(opt.highestStatBranch){
            loadEventFrame(g.encid,getEventFrameIndex(highestMoteAtStart.id,enc));
        }
    })
}
function processMoteChanges(opt,disablesound){
    //while updating, tally up whether the outcome has negative or positive results
            let ups = 0;
            let downs = 0;
            if(opt.bond){ 
                if(opt.bond > 0){ups++;}else{downs++;}
                updateMoteCount(0,opt.bond);
            }if(opt.heat){
                if(opt.heat > 0){ups++;}else{downs++;}
                updateMoteCount(1,opt.heat);
            }if(opt.cold){ 
                if(opt.cold > 0){ups++;}else{downs++;}
                updateMoteCount(2,opt.cold);
            }if(opt.light){ 
                if(opt.light > 0){ups++;}else{downs++;}
                updateMoteCount(3,opt.light);
            }if(opt.earth){ 
                if(opt.earth > 0){ups++;}else{downs++;}
                updateMoteCount(4,opt.earth);
            }if(opt.air){ 
                if(opt.air > 0){ups++;}else{downs++;}
                updateMoteCount(5,opt.air);
            }
            if(disablesound){
                return;
            }
            //check outcome and play result chimes
            if(ups > 0 && downs <= 0){
                createjs.Sound.play("good-chime");
            }else if(downs > 0 && ups <= 0){
                createjs.Sound.play("sad-chime");
            }else if(downs != 0 && ups != 0){
                createjs.Sound.play("mid-chime");
            }else{
                createjs.Sound.play("button");
            }
}
function getEventFrameIndex(fid,enc){
    for(let i = 0; i < enc.frames.length; i++){
        if(enc.frames[i].id == fid){
            return i;
        }
    }
}