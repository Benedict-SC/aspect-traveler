var id = "ev-09";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Ice mirror",
    images:{
        "normal":"assets/img/mockup/mirror1.png",
        "colder":"assets/img/mockup/mirror2.png",
        "frozen":"assets/img/mockup/mirror3.png",
        "dark":"assets/img/mockup/mirror4.png"
    },
    frames:[
        {
            image:"normal",
            text:"You and the star encounter a monolithic piece of ice, standing upright in the middle of nowhere.\n\nIts surface is as polished as a mirror.",
            options: [
                {text: "Continue",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"normal",
            text:"Looking into the ice mirror, you can see yourself.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            image:"colder",
            text:"You rub your face. The icicles of frost that have built up over your eyes and clothes look like the fangs of a monster. You can't believe anybody trusts you to guide them. You wouldn't, if you were them.\n\nThe star tugs nervously at your arm.\n\n-@, +#\n\nYou continue looking into the mirror.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            image:"colder",
            text:"The mountain is as cold as ever. It pierces your clothes. You feel like your face is a numb mask.\n\nThe star tugs nervously at your arm.\n\n-$, +#\n\nYou continue looking into the mirror.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            image:"colder",
            text:"You don't want to be here. You wish you were anywhere else. Why do you have to be the one to make this journey?\n\nThe star tugs nervously at your arm.\n\n-{, +#\n\nYou continue looking into the mirror.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            image:"colder",
            text:"This blasted hellscape of snow and ice is so difficult to climb. Everything feels like it's conspiring against you to undo your progress and prevent you from making headway. Turning all your efforts to nothing.\n\nThe star tugs nervously at your arm.\n\n-}, +#\n\nYou continue looking into the mirror.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            image:"colder",
            text:"You're worried. The journey is long and difficult. Maybe you're not going to make it to the top. Maybe you aren't going to make it anywhere at all.\n\nThe star tugs nervously at your arm.\n\n-~, +#\n\nYou continue looking into the mirror.",
            options:[
                {text: "I look menacing.",effect:"delta",cold:1,bond:-1,frameIdx:2,silence:true},
                {text: "I look cold.",effect:"delta",cold:1,heat:-1,frameIdx:3,silence:true},
                {text: "I look preoccupied.",effect:"delta",cold:1,light:-1,frameIdx:4,silence:true},
                {text: "I look frustrated.",effect:"delta",cold:1,earth:-1,frameIdx:5,silence:true},
                {text: "I look tired.",effect:"delta",cold:1,air:-1,frameIdx:6,silence:true},
                {text: "Look away from the mirror.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:4,effect:"delta",cold:1,frameId:"turn",silence:true}
            ]
        },
        {
            id:"turn",
            image:"colder",
            text:"You try to turn away from the mirror and fail.\n\nInstead, you continue looking into the mirror. (+1 #.)\n\nThe star tugs at your arm.",
            options:[
                {text:"Turn away from the mirror.",effect:"delta",cold:1,frameId:"turn2",silence:true}
            ]
        },
        {
            id:"turn2",
            image:"frozen",
            text:"You try to turn away from the mirror and fail.\n\nInstead, you continue looking into the mirror. (+1 #.)\n\nThe star tugs, harder, at your arm.",
            options:[
                {text:"Turn away from the mirror.",effect:"delta",cold:1,frameId:"turn3",silence:true}
            ]
        },
        {
            id:"turn3",
            image:"dark",
            text:"You try to turn away from the mirror and fail.\n\nInstead, you continue looking into the mirror. (+1 #.)\n\nThe star shouts something at you.",
            options:[
                {text:"Turn away from the mirror.",effect:"delta",cold:-3,frameId:"turn4",silence:true}
            ]
        },
        {
            id:"turn4",
            image:"dark",
            text:"You try to turn away from the mirror and fail.\n\nInstead, you continue looking into the mirror. (+1 #.)\n\nThe star shouts something at the top of their voice.\n\nThen she shatters the mirror, with a single strike of heat and light. (-4 #.)",
            options:[
                {text:"What?",effect:"restoreVolume",frameId:"done"}
            ]
        },
        {
            id:"done",
            image:"normal",
            text:"\"...ey! Hey! Don't just zone out on me like that again! Seriously!\"\n\nOh, you can hear her again now. You couldn't, before.\n\n\"Yeah! I could sorta tell! Don't just let yourself get hypnotized by creepy ice mirrors like that again!\"\n\nYou shudder a bit, and nod. You promise you won't make that particular mistake again.",
            options:[
                {text:"Continue (moving, that is. Not looking at the ice mirror.)",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);