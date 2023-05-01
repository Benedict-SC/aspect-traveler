var id = "ev-07";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Scaling a cliff",
    images:{
        "normal":"assets/img/mockup/cliff.png"
    },
    frames:[
        {
            image:"normal",
            text:"The two of you come to a cliff, towering above you.\n\nLooks like the only way to continue on is to scale the cliff. That's going to involve setting up quite a bit of climbing equipment, slowly and carefully.\n\nThe star looks more interested in playing with the hardy lichen growing on the cliff, though.",
            options: [
                {text: "Have her help you with the work",effect:"delta",earth:1,frameIdx:1},
                {text: "Let her play",effect:"delta",air:1,frameIdx:2}
            ]
        },
        {
            image:"normal",
            text:"She grumbles a bit, but the hard work will be good for her.\n\nThere will be no shortage of time for the stars to frolic playfully, in heaven, is your reasoning. Some good old fashioned honest work will be a valuable experience for her, in the short time she has down here. (+1 }.)\n\nWith her help, the two of you soon overcome the cliff, and continue on your way.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"You can handle the labor yourself. Stars don't often get a chance to come to earth, you think, and it's best she spends the short time she has here exploring what she's interested in.\n\nIt takes a while, but you eventually manage to get over the cliff, and then it's just a matter of having the star grab on to a rope while you pull her up. Nothing unpleasant surprises the two of you, and soon you're on your way towards the summit.\n\nAs you and the star continue onwards, the star is happy enough to fill your ears on the various weird lichens and plants she saw while playing. (+1 ~.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);