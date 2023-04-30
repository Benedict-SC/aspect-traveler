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
        console.log(height);
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
        let highestMoteAtStart = getHighestMote();
        if(opt.effect == "delta"){
            let ups = 0;
            let downs = 0;
            if(opt.bond){ 
                if(opt.bond > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(0,opt.bond);
            }
            if(opt.heat){
                if(opt.heat > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(1,opt.heat);
            }
            if(opt.cold){ 
                if(opt.cold > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(2,opt.cold);
            }
            if(opt.light){ 
                if(opt.light > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(3,opt.light);
            }
            if(opt.earth){ 
                if(opt.earth > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(4,opt.earth);
            }
            if(opt.air){ 
                if(opt.air > 0){
                    ups++;
                }else{
                    downs++;
                }
                updateMoteCount(5,opt.air);
            }
            
            if(ups > 0 && downs <= 0){
                createjs.Sound.play("good-chime");
            }else if(downs > 0 && ups <= 0){
                createjs.Sound.play("sad-chime");
            }else if(downs != 0 && ups != 0){
                createjs.Sound.play("mid-chime");
            }else{
                createjs.Sound.play("button");
            }
        }else if(opt.effect == "end"){
            createjs.Sound.play("button");
            unloadEventFrame();
            g.encid = null;
        }else{
            createjs.Sound.play("button");
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