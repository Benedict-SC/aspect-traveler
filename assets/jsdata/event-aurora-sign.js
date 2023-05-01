var id = "ev-15";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Aurora Sign",
    images:{
        "normal":"assets/img/event/aurora_sign.png"
    },
    frames:[
        {
            image:"normal",
            text:"Night has fallen. Soon after, a curtain of multicolored light drapes itself over the sky- an aurora, dancing in the heavens.\nAs beautiful as it is, you're a little concerned by it. An aurora is a sign, of a certain kind. You're not sure it's a good sign, in your current situation.\n\nNext to you, the star stops to look up at it.\n\n\"Huh,\" she says.\nDoesn't happen every night, you agree. It's a sight, isn't it?\n\n\"Yeah, but, not just that... I feel something from it,\" she says.",
            options: [
                {text: "What do you feel?",effect:"delta",bond:1,highestStatBranch:true}
            ]
        },
        {
            id:"BOND",
            image:"normal",
            text:"\"It is powerful, but also... conflicted?\" She seems hesitant. \"Half of it favors me. The other half disfavors me.\"\n\nWell. (+1 @.)\n\nThey say, you say, that the aurora is a sign reserved only for lone travelers. It disdains the unworthy sight of the masses and the touch of the ground, and so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. But...",
            options:[
                {text: "You pause, before adding...",effect:"none",frameId:"bond2",port:"confused"},
            ]
        },
        {
            id:"bond2",
            image:"normal",
            text:"To those who travel together, the aurora is an omen of separation, the solitude-bringer.\n\n\"...It's going to try to separate us?\"\n\nShe looks very unhappy at the thought.\n\n\"I'm not going to let it, if that's what it wants. Even if it's calling out to me.\"",
            options:[
                {text: "Go anyway.",effect:"delta",light:1,frameId:"go",port:"stoic",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"gleeful"}
            ]
        },
        {
            id:"HEAT",
            image:"normal",
            text:"\"...It feels cold,\" she shivers. \"And, yeah, I know, it's always cold down here. It's not that. It's something else.\"\n\nMmm. (+1 @.)\n\nThey say, you say, that the aurora is a sign reserved only for lone travelers. It disdains the unworthy sight of the masses and the touch of the ground, and so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. But...",
            options:[
                {text: "You pause, before adding...",effect:"none",frameId:"heat2",port:"fear"},
            ]
        },
        {
            id:"heat2",
            image:"normal",
            text:"To those who travel together, the aurora is an omen of separation, the solitude-bringer.\n\n\"It's calling out to me,\" she says. \"I don't know if I want to go.\"",
            options:[
                {text: "Go anyway.",effect:"delta",light:1,frameId:"go",port:"stoic",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"gleeful"}
            ]
        },
        {
            id:"COLD",
            image:"normal",
            text:"\"I feel at home in it. It accepts me. Actually, no, more than that- I'd even so far as to say it favors me. Not you, though. Just me, by myself, for some reason.\"\n\nWell, that makes sense. (+1 @.)\n\nThey say, you say, that the aurora is a sign reserved only for lone travelers. It disdains the unworthy sight of the masses and the touch of the ground, and so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. But...",
            options:[
                {text: "You pause, before adding...",effect:"none",frameId:"cold2",port:"gleeful"}
            ]
        },
        {
            id:"cold2",
            image:"normal",
            text:"To those who travel together, the aurora is an omen of separation, the solitude-bringer.\n\nThe star pauses. \"That's a bit concerning. Especially because I think it's calling for me to come to it.\"",
            options:[
                {text: "Go.",effect:"delta",light:1,frameId:"go",port:"neutral",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"stoic"}
            ]
        },
        {
            id:"LIGHT",
            image:"normal",
            text:"She stares at the aurora a bit more.\n\n\"Even higher beings may become forgetful,\" she says eventually. \"And those thoughts and memories that wander out of the mind of such a being may sometimes fall, from heaven to earth. And in being forgotten they become alone, and they grow cold in their solitude.\"\n\nThat's... implying a lot. There's no way, right?\n\nShe just smiles. (+1 @.)",
            options:[
                {text: "They say the aurora is a sign reserved for lone travelers. It disdains the-",effect:"none",frameId:"light2"},
            ]
        },
        {
            id:"light2",
            image:"normal",
            text:"\"-unworthy sight of the masses and the touch of the ground, yes,\" she finishes. \"And so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. To those who travel together, the aurora is an omen of separation, the solitude-bringer.\"\n\nHow did she know exactly what you were about to say?\n\nShe smiles again. \"Don't worry,\" she says. \"It's okay if you're traveling with a star. I asked it, since it was calling me to go to it. Do you think I should?\"",
            options:[
                {text: "Go.",effect:"delta",light:1,frameId:"go",port:"neutral",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"stoic"}
            ]
        },
        {
            id:"EARTH",
            image:"normal",
            text:"\"It's a wonderful thing to look at, but... It's too ephemeral,\" she says. \"The light descends into the world and scatters in the atmosphere, and ultimately bears no fruit. For all its beauty, it doesn't do much to materially change our lives. It doesn't nourish or warm like the sun, and it can't be caught and used like the flame. It seems mean of me, but if I'm to be honest, it seems like it's all flash and no substance. Even if it is pretty.\"\n\nHuh. You weren't expecting something like that out of a star like her. (+1 @.)",
            options:[
                {text: "You know, they say...",effect:"none",frameId:"earth2"},
            ]
        },
        {
            id:"earth2",
            image:"normal",
            text:"...the aurora is a sign reserved only for lone travelers. It disdains the unworthy sight of the masses and the touch of the ground, and so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. But...\n\nYou pause, before adding the second part.\nTo those who travel together, the aurora is an omen of separation, the solitude-bringer.\n\n\"It's calling out to me,\" she replies. \"I don't really want to go, though. Seems pointless to me.\"",
            options:[
                {text: "Go anyway.",effect:"delta",light:1,frameId:"go",port:"stoic",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"gleeful"}
            ]
        },
        {
            id:"AIR",
            image:"normal",
            text:"\"It's telling me about how long a journey it took, to get here,\" she says. \"All the things it saw along the way. Mostly other stars. And now its lonely journey is ending. It didn't mind the loneliness, but it seems glad to have found us at the end here. (+1 @)\n\nThey say, you say, that the aurora is a sign reserved only for lone travelers. It disdains the unworthy sight of the masses and the touch of the ground, and so it hides itself where only a few may see it. To one who travels alone, it is a blessing and an auspicious sign. But...",
            options:[
                {text: "You pause, before adding...",effect:"none",frameId:"air2"}
            ]
        },
        {
            id:"air2",
            image:"normal",
            text:"To those who travel together, the aurora is an omen of separation, the solitude-bringer.\n\n\"Huh. Do you think we count as 'alone' enough to get the blessing and not the omen?\"\n...You're not sure.\n\n\"I'm asking because it's calling for me to come to it, and, I'll be honest, I'm kinda interested!\"\n\nHm.",
            options:[
                {text: "Go.",effect:"delta",light:1,frameId:"go",port:"ehehe",resultPort:"halo"},
                {text: "Don't go.",effect:"delta",earth:1,frameId:"stay",port:"ugh"}
            ]
        },
        {
            id:"go",
            image:"normal",
            text:"She nods.\n\nThen her eyes glow, and she rises into the air. Not far- not more than a foot off the ground. You suppose that if she could simply fly through the air freely, you wouldn't need to help her with the climb.\n\nStill, a foot of separation from the ground is enough, it seems. The aurora's colors converge above her, and descend all at once like a waterfall of light, pouring into her small form.\n\n(+1 {.)",
            options:[
                {text: "Watch.",effect:"delta",cold:1,earth:-1,frameId:"go2",resultPort:"neutral"},
            ]
        },
        {
            id:"go2",
            image:"normal",
            text:"You try to watch, but something about it stings your eyes with chill, and eventually you turn away as the cold becomes unbearable.\n\nEventually, the aurora recedes, and you hear a whumph in the snow from behind you, as the star falls back to the earth.\n\nShe seems a little more distant, now. More like the other stars, in the night sky. A colder and paler light. (+1 #, -1 }.)\n\nAt least it didn't separate the two of you permanently.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"stay",
            image:"normal",
            text:"She shakes her head at the sky. (+1 }.)\n\nIn response, the auroras slowly dissipate, with almost a sense of disappointment to them. With its disappearance, you let out a breath you didn't realize you were holding.\n\nIf the aurora was an omen signaling the end of your journey together, you've successfully evaded its dangers, and you're glad for it.",
            options:[
                {text: "Continue",effect:"end"},
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);