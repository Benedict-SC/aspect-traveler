var id = "e01";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"A chance encounter...",
    images:{
        "normal":"assets/img/mockup/encountery.png",
        "changed":"assets/img/mockup/problems.png"
    },
    frames:[
        {
            image:"normal",
            text:"This is some encounter text. It's just the first part of the encounter, though. Nothing all that unusual is happening yet. Press the continue button to proceed through the event.",
            options: [
                {text: "Continue",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"changed",
            text:"Oh dear! Something has happened in the encounter! It's time to make some sort of choice related to the events going on. Press one of the buttons on the right to proceed.",
            options:[
                {text: "Ignore the problem",effect:"none",frameIdx:2},
                {text: "Try and stop the problem",effect:"none",frameIdx:3}
            ]
        },
        {
            image:"changed",
            text:"You ignore what's going on here and proceed on your way. Press continue to end the event.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"You fix the problem, so the problem isn't there anymore. It probably cost you some resources?? Press continue to end the event.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);