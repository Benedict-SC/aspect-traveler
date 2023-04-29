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
                {text: "deplete cold",effect:"delta",cold:-1,frameIdx:0},
                {text: "increase cold",effect:"delta",cold:1,frameIdx:0},
                {text: "only with 0 cold",condition:"moteMaximum",conditionMote:"COLD",conditionValue:0,effect:"none",frameIdx:1},
                {text: "only with 8 cold",condition:"moteMinimum",conditionMote:"COLD",conditionValue:8,effect:"none",frameIdx:1},
                {text: "do something random",effect:"none",idPool:["red","blue","green","yellow"]}
            ]
        },
        {
            image:"normal",
            text:"You had the right amount of cold to get here.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"red",
            image:"normal",
            text:"Red was randomly selected.",
            options:[
                {text: "Do something random again",effect:"none",idPool:["red","blue","green","yellow"]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"blue",
            image:"normal",
            text:"Blue was randomly selected, which means you had the best possible luck in this event.",
            options:[
                {text: "Do something random again",effect:"none",idPool:["red","blue","green","yellow"]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"green",
            image:"normal",
            text:"Green was randomly selected.",
            options:[
                {text: "Do something random again",effect:"none",idPool:["red","blue","green","yellow"]},
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"yellow",
            image:"normal",
            text:"Yellow was randomly selected.",
            options:[
                {text: "Do something random again",effect:"none",idPool:["red","blue","green","yellow"]},
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);