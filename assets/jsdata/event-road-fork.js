var id = "ev-10";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Fork in the road",
    images:{
        "normal":"assets/img/mockup/fork.png"
    },
    frames:[
        {
            image:"normal",
            text:"You've come to a fork in the road that you're familiar with.\n\nOne path leads to a path you've never traveled before, but the map promises that it's a shortcut.\n\nThe other path is quite long, but you're familiar with its length and know what to expect from it.",
            options: [
                {text: "Take the unfamiliar path.",effect:"random",subOpts:[{id:"fastbad",earth:-1},{id:"fastgood",air:1}],port:"confused"},
                {text: "Take the reliable path.",effect:"random",subOpts:[{id:"slowbad",goblinTinkerer:true,air:-1},{id:"slowgood",earth:1}],port:"ugh"}
            ]
        },
        {
            id:"fastbad",
            image:"normal",
            text:"The unfamiliar path, as it turns out, was much less used for a reason; it had quite a few obstructions along the way. You spend some of your own supplies to clear your way, and in the end barely make even on overall progress. (-1 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"fastgood",
            image:"normal",
            text:"The unfamiliar path turned out to be much shorter and easier to walk than the other path! You make a mental note of it- in the future, you'll be much more likely to use this path rather than the other one. (+1 ~.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"slowgood",
            image:"normal",
            text:"The reliable path was exactly as you remembered it. You enjoy the slow trek down the familiar trail, and tell the star a few stories about your past travels down the road. (+1 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"slowbad",
            image:"normal",
            text:"The reliable path turns out to be quite a detour. Its long and meandering trail takes the two of you quite a bit of time to traverse, and by the end of it you've both grown impatient. (-1 ~.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);