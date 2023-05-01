var id = "ev-16";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Cold malice",
    images:{
        "normal":"assets/img/event/cold_malice.png"
    },
    frames:[
        {
            image:"normal",
            text:"A heavy snow has begun to fall. The white flakes are falling densely, but not whippingly fast; there is little wind, thankfully, and it's not too hard to keep the worst of the cold away from your face.\n\nBeside you, the star walks forward, blithely ignoring the cold as she's always done.\n\n...You see a shadow ahead of you, in the snow. Another traveler? They're coming towards you.",
            options: [
                {text: "Keep going.",effect:"none",frameIdx:1,resultPort:"fear"}
            ]
        },
        {
            image:"normal",
            text:"As they approach you, the snowfall intensifies even further, until the snowfall has become a true blizzard.\n\nYou still cannot make out any details of their clothing or their face. They are an indistinct shadow in the midst of the storm, advancing relentlessly upon you, and it occurs to you that, with the snow falling as densely as it is, there is no reason that you should be able to see them through the storm.",
            options:[
                {text: "Keep going...?",condition:"moteMaximum",conditionMote:"BOND",conditionValue:2,hidden:true,effect:"none",frameIdx:2},
                {text: "Keep going...?",condition:"moteMinimum",conditionMote:"BOND",conditionValue:3,hidden:true,effect:"none",frameIdx:3},
            ]
        },
        {
            image:"normal",
            text:"The Star stands there with an unnatural stillness, as if she fears to move.\n\nThe shadow whispers to her and you.\n\n\"You are not where you should be, seed. This is a transgression. Yet I am not without reason. Accept my touch, take my mark, and you shall have passage.\"",
            options:[
                {text: "Repel with $$$",condition:"moteMinimum",conditionMote:"HEAT",conditionValue:3,effect:"delta",heat:-3,frameId:"repel",port:"angry",resultPort:"halo"},
                {text: "Accept their touch (!!!{$!!!)",effect:"minimize",motes:["light","heat"],frameId:"accept",port:"sad"},
                {text: "Flee ({@)",effect:"delta",light:-1,bond:-1,frameId:"flee",port:"fear",resultPort:"ugh"}
            ]
        },
        {
            image:"normal",
            text:"The Star clings to your arm, as if she's afraid.\n\nThe shadow whispers to her and you.\n\n\"You are not where you should be, seed. This is a transgression. Yet I am not without reason. Accept my touch, take my mark, and you shall have passage.\"",
            options:[
                {text: "Repel with $$$",condition:"moteMinimum",conditionMote:"HEAT",conditionValue:3,effect:"delta",heat:-3,frameId:"repel",port:"angry",resultPort:"halo"},
                {text: "Accept their touch (!!!{$!!!)",effect:"minimize",motes:["light","heat"],frameId:"accept",port:"sad"},
                {text: "Flee ({@)",effect:"delta",light:-1,bond:-1,frameId:"flee",port:"fear",resultPort:"ugh"}
            ]
        },
        {
            id:"repel",
            image:"normal",
            text:"You do not know exactly what this thing is, but it is certainly a spirit of cold of some kind.\n\nAnd against a malicious being of cold, the correct answer is always fire.\n\nThe star seems to agree as well, judging by the blazing heat that her halo now emanates.\"I am a star and a seed, destined to become a universe,\" she shouts, each word punctuated by wave of heat. \"And I refuse to incorporate that which your mark confers, into a universe of my making. Begone, or I will burn you until you are!\" (-3 $.)",
            options:[
                {text: "Whoa.",effect:"delta",bond:2,frameId:"repel2"}
            ]
        },
        {
            id:"repel2",
            image:"normal",
            text:"The entity hisses, and retreats, and with its departure the winter storm around you abates as well.\n\nAs soon as the creature fades, the star collapses to the ground next to you.\n\nYou pick her up. You carry her on your back as you continue onwards, for some time, before she reawakens. (+2 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"accept",
            image:"normal",
            text:"You have no choice but to submit. The spirit sets one cold clawed hand upon the star's forehead, and it is done. It vanishes immediately, and with it goes the storm. (Drained { and $.)\n\n...So... what did it do, exactly?\n\nThe star looks up, a blank expression on their face. \"That entity was a creature of cold-and-void. Its nature is to bring about void through cold. It is a being of the entropic-nature, and having taken its mark, I now have the entropic-nature within me as well, and that nature will be passed into any universe of my creation.\"",
            options:[
                {text: "That... doesn't sound good?",effect:"delta",cold:6,frameId:"accept2",resultPort:"annoyed"}
            ]
        },
        {
            id:"accept2",
            image:"normal",
            text:"(+6 #.)\n\nThe star shakes her head. She can tell that you don't really get it. \"Forget it. It's not relevant to our current situation.\"\n\nYou're still a bit worried, but she doesn't seem interested in explaining any further as you move on from this place.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"flee",
            image:"normal",
            text:"You aren't just going to sit here and watch the star go through with this.\n\nYou grab her, turn, and flee.\n\nThe storm is a labyrinth, one that almost feels like it's cutting you on a level deeper than the physical, at times. But you make it out, eventually.\n\nEven if you and the star are a bit worse for the wear after. (-1 {, -1 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);