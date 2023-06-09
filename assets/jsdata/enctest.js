var id = "test";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"testing...",
    images:{
        "normal":"assets/img/mockup/encountery.png",
        "changed":"assets/img/mockup/problems.png"
    },
    frames:[
        {
            image:"changed",
            text:"Choices. Some might not work.",
            options:[
                {text: "deplete #",effect:"delta",cold:-1,frameIdx:0,port:"ehehe"},
                {text: "increase #",effect:"delta",cold:1,frameIdx:0,port:"fear"},
                {text: "only with 0 #",condition:"moteMaximum",conditionMote:"COLD",conditionValue:0,effect:"none",frameIdx:1},
                {text: "only with 8 #",condition:"moteMinimum",conditionMote:"COLD",conditionValue:8,effect:"none",frameIdx:1},
                {text: "do something random",effect:"random",subOpts:[{id:"red",bond:1},{id:"blue",cold:1},{id:"green",earth:1},{id:"yellow",heat:1}],port:"gone"}
            ]
        },
        {
            image:"normal",
            text:"You had the right amount of # to get here.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"red",
            image:"normal",
            text:"Red was randomly selected.",
            options:[
                {text: "Do something random again",effect:"random",subOpts:[{id:"red",bond:1},{id:"blue",cold:1},{id:"green",earth:1},{id:"yellow",heat:1}]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"blue",
            image:"normal",
            text:"Blue was randomly selected, which means you had the best possible luck in this event.",
            options:[
                {text: "Do something random again",effect:"random",subOpts:[{id:"red",bond:1},{id:"blue",cold:1},{id:"green",earth:1},{id:"yellow",heat:1}]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"green",
            image:"normal",
            text:"Green was randomly selected.",
            options:[
                {text: "Do something random again",effect:"random",subOpts:[{id:"red",bond:1},{id:"blue",cold:1},{id:"green",earth:1},{id:"yellow",heat:1}]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"yellow",
            image:"normal",
            text:"Yellow was randomly selected.",
            options:[
                {text: "Do something random again",effect:"random",subOpts:[{id:"red",bond:1},{id:"blue",cold:1},{id:"green",earth:1},{id:"yellow",heat:1}]},
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);