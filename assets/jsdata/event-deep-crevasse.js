var id = "ev-17";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Deep crevasse",
    images:{
        "normal":"assets/img/event/placeholder.png"
    },
    frames:[
        {
            image:"normal",
            text:"The two of you come to a deep crevasse in the earth.\n\nThe star reaches over, snaps off an icicle dangling on the side, and throws it down the crevasse.\n\nIt takes quite a while for it to hit the bottom. Falling down would be extremely undesirable.\n\nWhat do you do?",
            options: [
                {text: "Look for a place to cross (@)",effect:"delta",bond:-1,frameIdx:1},
                {text: "Leap across (~)",effect:"delta",air:-2,frameId:"leap"},
                {text: "Freeze it over (#)",effect:"delta",cold:-2,frameId:"freeze"}
            ]
        },
        {
            image:"normal",
            text:"It takes quite a while, but you eventually do find a place where the crevasse is thin enough to bridge with the climbing supplies you have available.\n\nThe star is quite impatient with you, but the safe option is always best, even if it takes up some of your climbing equipment. (-1 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"leap",
            image:"normal",
            text:"Y'know, we could just... try jumping it.\n\nThe star perks up at this. \"I like that idea!\"\n\nShe grabs you by one hand and starts running. You panic, maybe, just a little? Like, no, wait, that was just a joke-- (-2 ~.)\n\nToo late! You're sailing over the gap! She's laughing! You are definitely not shouting!",
            options:[
                {text: "AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAA",effect:"none",frameId:"leap2"}
            ]
        },
        {
            id:"leap2",
            image:"normal",
            text:"You land on the other side of the crevasse.\n\nThe star beams at you. \"How was that?\"",
            options:[
                {text: "Terrifying!",effect:"delta",earth:2,frameId:"terror"},
                {text: "Awesome!",effect:"delta",air:1,bond:1,frameId:"cool"}
            ]
        },
        {
            id:"terror",
            image:"normal",
            text:"\"Terrific!\" she nods.\n\nNOT terrific! Awful! Extremely risky! (+2 }.)\n\n\"Hey, it was your idea.\"",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"cool",
            image:"normal",
            text:"Yeah, you have to be honest- that was pretty cool. (+1 ~, +1 @.)\n\n\"Thanks! Wanna do it again?\" She makes as if to leap right back over the crevasse.\n\nPlease don't.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"freeze",
            image:"normal",
            text:"Is that a thing she can even do?\n\n\"Might as well try!\" The star laughs, and a cold halo appears behind her head. (-2 #.)\n\nA few moments later, a pristine bridge of ice has been formed. You step onto it gingerly, afraid that it won't bear your full weight, but your fears were needless, and the two of you cross without incident.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);