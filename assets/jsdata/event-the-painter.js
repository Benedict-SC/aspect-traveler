var id = "ev-14";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"A painter?",
    images:{
        "normal":"assets/img/event/painter.png"
    },
    frames:[
        {
            image:"normal",
            text:"As the two of you reach the top of a ridge, you notice a man standing on a ledge just below you. He seems to be painting away in front of a canvas on a wooden stand.\n\"What's he doing?\" The star, who has apparently never seen a painting before, asks.\n\nHearing the star, the man turns back to see the two of you, and gives you a friendly wave.\n\n\"What I'm doing? Painting the landscape, of course, little miss,\" the man laughs.\"You two heading to the top of the mountain?\"",
            options: [
                {text: "That's the plan, yep.",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"normal",
            text:"\"Hah, knew it. You two have the look of climbers about you. Good luck with your expedition!\"\n\nYou thank him.\n\nNow, you really ought to continue on your journey... but the star seems quite interested in the painter's work.",
            options:[
                {text: "Watch the artist paint for a while.",effect:"delta",air:1,light:1,frameId:"watch"},
                {text: "Perhaps the star would like to try painting herself?",effect:"delta",earth:1,frameId:"tryIt"},
                {text: "Bid farewell and move on.",effect:"delta",air:1,earth:1,frameId:"leave"}
            ]
        },
        {
            id:"watch",
            image:"normal",
            text:"You and the star watch the man paint, for a while.\n\nHe's clearly quite skilled. Under his brush, the lights and shadows of the world are captured vivaciously upon the canvas. (+1 {.)\n\nWhen you depart eventually, it is with a greater appreciation for the beautiful things of the world. (+1 ~.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"tryIt",
            image:"normal",
            text:"It turns out that your star is surprisingly talented! She's still obviously a complete novice, but if you're to be honest, you were expecting her to give up after making a few chickenscratches.\n\n\"Your daughter has some aptitude!\" The painter claps you on the shoulder. \"Has she studied the visual arts before?\" (+1 }.)\n\nYou shake your head. At least, you don't... think... she's painted before. You realize then that you really can't be sure.",
            options:[
                {text: "Has she, though?",effect:"delta",light:1,frameId:"tryIt2"}
            ]
        },
        {
            id:"tryIt2",
            image:"normal",
            text:"\"I'm not a daughter,\" the star interjects, still hard at work on the painting. \"I'm a star fallen from the heavens.\" (+1 {.)\n\nThe painter chuckles, clearly not taking her words seriously.\n\nIn the end, you and the star depart from the encounter richer by one small handmade landscape painting. And if perhaps it is not the most polished piece of art, it is worth all the more for being the work of your star's own two hands.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"leave",
            image:"normal",
            text:"You tell the star it's time you be on your way. You should try and go around, and not disrupt the landscape he's working so hard to paint.\n\n\"You really don't have to trouble yourself to go around my field of view,\" the jovial painter laughs.\"In fact, if anything, you should march right through it! Why, a few figures and the trail they've left will add a splendid narrative to the painting, if you don't mind.\" (+1 ~.)\n\nYou don't mind at all! You and the star take the man up on his offer. Even if your journey ultimately fails, you will have left a mark of your passage in the painting. That alone makes it all worth something. (+1 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);