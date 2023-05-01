var id = "ev-12";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Star supplicant",
    images:{
        "normal":"assets/img/event/starsupplicant.png"
    },
    frames:[
        {
            image:"normal",
            text:"\"There's someone looking for me, up ahead,\" the star says with absolute conviction, out of nowhere.\n\nYou're not sure how she knew, but she's proven right when a figure approaches the two of you. The figure is hunched and gaunt, their clothes heavily worn, and they introduce themself as a supplicant searching for a miracle.",
            options: [
                {text: "A miracle?",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"normal",
            text:"Tied to the supplicant's back, in a densely-wrapped bundle, is a sickly-looking child. They explain that they know this mountain to be a place where powerful entities occasionally manifest. Apparently, they have come here hoping against hope to find a numinous being with the ability to cure their ward and the willingness to do so.\n\nYou look towards the star. They've definitely found such a being in her. But nothing is ever free. Should she give her power away so easily?",
            options:[
                {text: "Give the blessing freely.",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:2,effect:"delta",light:-2,heat:3,frameIdx:2,port:"halo",resultPort:"gleeful"},
                {text: "Give the blessing in exchange for something.",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:2,effect:"none",frameIdx:3,port:"ehehe",resultPort:"neutral"},
                {text: "Don't give a blessing.",effect:"delta",cold:1,heat:-1,frameId:"refuse",port:"ugh"}
            ]
        },
        {
            image:"normal",
            text:"The star touches her hand to the child, and the pallor in their skin leaves the child in an instant. She stumbles, afterwards, but the supplicant seems endlessly grateful, and that makes it worth it for both you and her. (-2 {, +3 $.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"The supplicant asks what you would have of them, in exchange.\n\nThey sound hopeful that you're even asking. Perhaps this is the closest they have ever gotten to a cure with any of their encounters.",
            options:[
                {text: "Their knowledge for your magic",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:2,effect:"delta",light:-2,air:3,frameId:"knowledge",port:"halo"},
                {text: "Their supplies for your magic",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:2,effect:"delta",light:-2,earth:3,frameId:"supplies",port:"halo"},
                {text: "Their vitality for your magic",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:2,effect:"delta",light:-2,bond:3,frameId:"vitality",port:"halo"}
            ]
        },
        {
            id:"knowledge",
            image:"normal",
            text:"You could use some information about the local area. You're heading to the summit, and you'd be interested in anything the supplicant had to tell you about the best routes up.\n\nThe supplicant does, in fact, know a few routes. They'd be willing to trade you a detailed map of their own creation for your star's magic. (+3 ~.)\n\nAfter the deal is struck, the star touches her hand to the child, and the pallor in their skin leaves the child in an instant. She stumbles, afterwards, -2 {, but the two of you got what you needed out of the deal. Time to move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"supplies",
            image:"normal",
            text:"You could always use more supplies. The supplicant doesn't have much to trade, but they agree to part with some of their food for your star's magic. (+3 }.)\n\nAfter the deal is struck, the star touches her hand to the child, and the pallor in their skin leaves the child in an instant. She stumbles, afterwards, -2 {, but the two of you got what you needed out of the deal. Time to move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"vitality",
            image:"normal",
            text:"A magical gift has a magical price. Here's your offer: she can cure the child in exchange for a portion of vitality.\n\nThe supplicant hesitates, but ultimately decides the price is worth it. The star touches one hand to the supplicant, and the other to you, and you feel something transferring from them through her to you. (+3 @.)\n\nAfter the deal is struck, the star touches her hand to the child, and the pallor in their skin leaves the child in an instant. She stumbles, afterwards, -2 {, but the two of you got what you needed out of the deal. Time to move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"refuse",
            image:"normal",
            text:"You shake your head. The star looks disappointed, but shakes her head as well.\n\nDejected, the supplicant leaves you and moves on.\n\nIt's unfortunate, but the star cannot afford to spend her magic so casually- not if she wishes to return to her exalted position in the skies above. (+1 #, -1 $.)\n\nTime to move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);