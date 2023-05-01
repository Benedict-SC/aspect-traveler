var id = "opening";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Fallen star",
    images:{
        "normal":"assets/img/event/angel1.png",
        "fading":"assets/img/event/angel2.png",
        "faded":"assets/img/event/angel3.png",
        "morefaded":"assets/img/event/angel4.png",
        "fadest":"assets/img/event/angel5.png",
        "gone":"assets/img/event/angel6.png"
    },
    frames:[
        {
            image:"normal",
            text:"When you saw the falling star in the sky,\nAnd went into the deep and frozen mountains to hunt for it,\nYou didn't expect to actually find anything.\n\nLet alone an angel, beautiful and androgynous, with wings of light and fire, whose fall from the sky left behind a molten trench cutting all the way to the permafrosted ground beneath.\n\nCradled in the angel's arms is a singular shining star.",
            options: [
                {text: "Look at the star",effect:"delta",bond:1,light:1,frameIdx:1},
                {text: "Look at the trench",effect:"delta",heat:1,earth:1,frameIdx:2}
            ]
        },
        {
            image:"normal",
            text:"Up close, the star looks almost like a seed, of some sort. It reminds you a bit of a single wheat seed, but with a semitransparent outer membrane. Inside, it glows with a soft inner light that makes you feel that everything will be alright.\n\nThe shape of the glow inside looks to be that of a person, if you squint.",
            options:[
                {text: "The angel...",effect:"none",frameIdx:3}
            ]
        },
        {
            image:"normal",
            text:"The trench seems to be filling up with steaming meltwater, from the heat of the angel and the star's descent. Perhaps in time there will be a new river here, born from the fall of a star.\n\nThat is the nature of angels. It is easy for them to leave deep marks in the world, and difficult to grind those marks away.",
            options:[
                {text: "The angel...",effect:"none",frameIdx:3}
            ]
        },
        {
            image:"fading",
            text:"The angel's glow is fading. It is dying.\n\nYou somehow know this with certainty.\n\nThe angel is dying, and you can see with your own eyes that its shine is growing dim, though the star's glow remains strong and intact. You know with certainty that you must take the star, and bring it where it needs to go, and protect it at all costs, so that the rightful order of things can be restored.\n\nYou might have certain questions occupying your thoughts, though.",
            options:[
                {text: "What are you? Why are you here?",effect:"none",frameId:"whatwhy",condition:"opening",flag:"whatwhy"},
                {text: "Is there nothing that can be done to save you?",effect:"delta",heat:1,frameId:"save",condition:"opening",flag:"save"},
                {text: "Where must the star be brought to?",effect:"delta",air:1,frameId:"brought",condition:"opening",flag:"brought"},
                {text: "...Why do I keep 'knowing' things with 'certainty'?",effect:"none",frameId:"knowing",condition:"opening",flag:"knowing"},
                {text: "No more questions. Decide.",effect:"none",frameId:"decide",condition:"opening",flag:"decide"}
            ]
        },
        {
            id:"whatwhy",
            image:"faded",
            text:"Each star in the sky is a world, or grows towards becoming one, and each star has set over it a protective angel to watch over it until it achieves that goal.\n\nBut there also exist certain forces that would seek to prevent this, to stifle the birth of new worlds and sunder those worlds which are already born, who despise the plenum and would replace it all with nothingness.\n\nThis angel and its star encountered agents of such forces. A great battle was had, and the broken and vanquished angel you see before you is the result of that battle.",
            options:[
                {text: "But...",effect:"delta",earth:1,frameId:"what2"}
            ]
        },
        {
            id:"what2",
            image:"faded",
            text:"Thankfully, it was able to protect its star from harm. And before the angel perishes, it must secure the safety of its star.\n\nIt was fortunate enough to find you before the end.\n\nThe angel did not open its mouth to speak this to you. You're not sure it even has a mouth. (+})\n\nBut you're pretty sure that this is what it would have said, if it did.",
            options:[
                {text: "What are you? Why are you here?",effect:"none",frameId:"whatwhy",condition:"opening",flag:"whatwhy"},
                {text: "Is there nothing that can be done to save you?",effect:"delta",heat:1,frameId:"save",condition:"opening",flag:"save"},
                {text: "Where must the star be brought to?",effect:"delta",air:1,frameId:"brought",condition:"opening",flag:"brought"},
                {text: "...Why do I keep 'knowing' things with 'certainty'?",effect:"none",frameId:"knowing",condition:"opening",flag:"knowing"},
                {text: "No more questions. Decide.",effect:"none",frameId:"decide",condition:"opening",flag:"decide"}
            ]
        },
        {
            id:"save",
            image:"faded",
            text:"Your sense of certainty that the angel is doomed redoubles.\n\nIt is appreciative of your offer, anyways. (+$)\n\nThe angel was created to protect the star, now and always, until the star grew enough that it could achieve its true purpose. Regrettably, it can no longer fulfill that purpose, and must entrust the star to you.\n\nIf you can bring the star to where she needs to go, that is all the angel could possibly ask for.",
            options:[
                {text: "What are you? Why are you here?",effect:"none",frameId:"whatwhy",condition:"opening",flag:"whatwhy"},
                {text: "Is there nothing that can be done to save you?",effect:"delta",heat:1,frameId:"save",condition:"opening",flag:"save"},
                {text: "Where must the star be brought to?",effect:"delta",air:1,frameId:"brought",condition:"opening",flag:"brought"},
                {text: "...Why do I keep 'knowing' things with 'certainty'?",effect:"none",frameId:"knowing",condition:"opening",flag:"knowing"},
                {text: "No more questions. Decide.",effect:"none",frameId:"decide",condition:"opening",flag:"decide"}
            ]
        },
        {
            id:"brought",
            image:"faded",
            text:"You realize with certainty that the fallen star must be delivered to the very top of the mountain.\n\nIt makes sense, you suppose. She came from the highest place imaginable, so of course to restore the rightful order of things, you must bring her back to the highest place you can possibly reach.\n\nAt the summit, she will be able to return to the sky, where she belongs.\n\nIt sounds like the stuff of epics and quests. (+~)",
            options:[
                {text: "What are you? Why are you here?",effect:"none",frameId:"whatwhy",condition:"opening",flag:"whatwhy"},
                {text: "Is there nothing that can be done to save you?",effect:"delta",heat:1,frameId:"save",condition:"opening",flag:"save"},
                {text: "Where must the star be brought to?",effect:"delta",air:1,frameId:"brought",condition:"opening",flag:"brought"},
                {text: "...Why do I keep 'knowing' things with 'certainty'?",effect:"none",frameId:"knowing",condition:"opening",flag:"knowing"},
                {text: "No more questions. Decide.",effect:"none",frameId:"decide",condition:"opening",flag:"decide"}
            ]
        },
        {
            id:"knowing",
            image:"faded",
            text:"You are experiencing 'knowing things with absolute certainty' because that is how angels communicate with non-angels.\n\nWait, what?\n\nThe angelic language is composed entirely of certainties. It is the language of inevitables and absolutes, of immovable constants and absolute facts. You perceive them in your own mind in terms of beliefs-with-absolute-certainty, because that is the nature of their speech.",
            options:[
                {text: "So that's...",effect:"delta",light:1,frameId:"knowing2"}
            ]
        },
        {
            id:"knowing2",
            image:"faded",
            text:"That sensation is how you know an angel- or something with the angel-nature- is speaking to you at all.\n\nThis knowledge pours itself into your awareness with great urgency- and, of course, absolute certainty.\n\nAh. (+{)\n\nThat's how it is, huh.",
            options:[
                {text: "What are you? Why are you here?",effect:"none",frameId:"whatwhy",condition:"opening",flag:"whatwhy"},
                {text: "Is there nothing that can be done to save you?",effect:"delta",heat:1,frameId:"save",condition:"opening",flag:"save"},
                {text: "Where must the star be brought to?",effect:"delta",air:1,frameId:"brought",condition:"opening",flag:"brought"},
                {text: "...Why do I keep 'knowing' things with 'certainty'?",effect:"none",frameId:"knowing",condition:"opening",flag:"knowing"},
                {text: "No more questions. Decide.",effect:"none",frameId:"decide",condition:"opening",flag:"decide"}
            ]
        },
        {
            id:"decide",
            image:"morefaded",
            text:"The angel is dying.\n\nIn its arms is the glowing star.",
            options:[
                {text: "Take the star. You can't just leave it here by itself.",effect:"delta",bond:1,heat:1,frameId:"cantleave",flag:"volunteer"},
                {text: "Take the star. It's the angel's last wish.",effect:"delta",heat:2,frameId:"lastwish",flag:"volunteer"},
                {text: "Take the star. You were heading up anyways!",effect:"delta",air:1,heat:1,frameId:"anyway",flag:"volunteer"},
                {text: "Step backwards.",effect:"delta",cold:1,frameId:"step"}
            ]
        },
        {
            id:"cantleave",
            image:"morefaded",
            text:"The thought of leaving the glowing star alone, out in the cold, as its guardian's body cools around it, fills you with unbearable dismay.\n\n...You're not sure why.\n\nIt's not like the star is a person, after all.",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"lastwish",
            image:"morefaded",
            text:"The thought of simply ignoring the angel's last wish, and leaving it to perish alone, seems too cruel to accept. (+$$)\n\nThe angel fought against the forces of unmaking, for this world and others.\n\nYou owe a debt to the angel, for that.",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"anyway",
            image:"morefaded",
            text:"The thought of just leaving something as interesting as the star behind seems unthinkable to you. This is probably the most exciting thing that's ever happened to you! You'd regret it for the rest of your life, if you turned an opportunity like this down. (+$, +~)",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"step",
            image:"morefaded",
            text:"No. (+#)\n\nYou didn't come here to... go on some sort of... quest to deliver a fallen star somewhere to the top of the mountain.\n\nThe angel's impending demise is tragic, but you're not at fault for it and you have no obligation to help, here. The mountain is a deadly place, and you don't know that you can survive the climb to the summit. You're sorry- but the angel asks too much of you. This is a risk you cannot take, not when the reward is effectively nothing.",
            options:[
                {text: "But...",effect:"none",frameId:"step2"}
            ]
        },
        {
            id:"step2",
            image:"morefaded",
            text:"...perhaps it can give you what you want, the thought fills your mind desperately. Perhaps it has something to offer you.\n\nYou mull it over.\n\n...There is, in fact, something you want, that you think that the angel could give you.\n\nWhat you want is...",
            options:[
                {text: "An escape.",effect:"none",frameId:"escape",flag:"leavewish"},
                {text: "Higher understanding.",effect:"none",frameId:"understanding",flag:"leavewish"},
                {text: "A treasure.",effect:"none",frameId:"treasure",flag:"treasure"}
            ]
        },
        {
            id:"escape",
            image:"fadest",
            text:"You came here in the first place because you knew you were in danger.\n\nThere is a calamity hounding your heels. A doom that approaches, inexorably and slowly. You came here in the hopes that you could hide from it, in one of the most inhospitable and frigid places in the known world.\n\nBut that is a temporary measure. You cannot live in these mountains forever, and sooner or later you will find that your doom has returned to your doorstep once more.",
            options:[
                {text: "Unless you can escape from the world itself.",effect:"delta",cold:1,frameId:"escape2"}
            ]
        },
        {
            id:"escape2",
            image:"fadest",
            text:"When the star ascends to the sky, you want to go with it, so that you can leave behind this world, and everything in this world that ties you to it. (+#)\n\n...This is a thing the star can do, and a thing which the angel can promise you. You realize this with, at this point, familiar certainty.\n\nVery well.\n\nThen it looks like you've got a reason to take this journey, after all.",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"understanding",
            image:"fadest",
            text:"You've never felt like you belonged in this world. You've always felt... distant. Like there's something more that you should be doing, or reaching. Somewhere else you should be. That's why you came here, to this mountain. You felt like something was calling you.\n\nYou have never felt this way more than you do now, in the face of something so undeniably alien from everything you know.\n\nYou want to know more. You want to know the truth of the world.",
            options:[
                {text: "You want to see everything.",effect:"delta",light:1,frameId:"understanding2"}
            ]
        },
        {
            id:"understanding2",
            image:"fadest",
            text:"When the star ascends to the sky, you want to go with it, so that you can see the true shape of the universe, from a higher perspective. (+{)\n\n...This is a thing the star can do, and a thing which the angel can promise you. You realize this with, at this point, familiar certainty.\n\nVery well.\n\nThen it looks like you've got a reason to take this journey, after all.",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"treasure",
            image:"fadest",
            text:"You have touched the edge of grace.\n\nYou can't imagine coming face-to-face with an angel and a star, and coming away from the encounter with... nothing. To go home with nothing in your hands to show for it but an unbelievable tale and a sigh.\n\nEven the hardest stone would surely dispense a small chip for you, if you worked at it for long enough.\n\nSurely a numinous, heavenly fallen-star could spare you some dregs of magic, at the end of the journey.",
            options:[
                {text: "Nothing special.",effect:"delta",earth:1,frameId:"treasure2"}
            ]
        },
        {
            id:"treasure2",
            image:"fadest",
            text:"Just something to bring home and put up on the mantel- material proof that you once met a fallen angel and delivered a star to the mountain peak, a magical treasure with a unique power, to prove the veracity of your story. Is that too much to ask- material reward for your trouble? (+})\n\n...This is a thing the star can do, and a thing which the angel can promise you. You realize this with, at this point, familiar certainty.\n\nVery well.\n\nThen it looks like you've got a reason to take this journey, after all.",
            options:[
                {text: "Reach for the star.",effect:"none",frameId:"reach"}
            ]
        },
        {
            id:"reach",
            image:"gone",
            text:"You were worried that the star's surface might be hot, given how brightly it's glowing. It isn't. It's cool and pleasant to the touch.\nThe moment your fingers make contact with the surface of the star, it splits wide open, down its length,\nAnd disgorges a girl-child out onto the snow-covered ground before you.\n\n(She's wearing the same clothes as you. (Why is she wearing the same clothes as you??)\n\nWhile you are reeling from this development, the girl- the star??- stands up and pats herself off.",
            options:[
                {text: "Uh...",effect:"none",frameId:"reach2"}
            ]
        },
        {
            id:"reach2",
            image:"gone",
            text:"\"Hi!\" She says to you. \"I'm a star! What's that?\" she asks, before you can formulate any response.\n\nShe's pointing upwards, and you follow her finger, to see nothing in particular. You're not sure what she's talking about.\n\n\"That. The big... thing. Up there.\"\n\nIs she talking about the whole entire sky?",
            options:[
                {text: "Is she?",effect:"none",frameId:"reach3"}
            ]
        },
        {
            id:"reach3",
            image:"gone",
            text:"Apparently she is.\n\n\"The sky! Wow! What about that?\"\n\nThat's... the ground.\n\nThis line of inquiry continues for a while. She seems very very excited to learn these extremely basic concepts, and you do your best to bring her up to speed with the questions she's asking, about approximately everything.",
            options:[
                {text: "This...",effect:"delta",bond:1,frameId:"reach4"}
            ]
        },
        {
            id:"reach4",
            image:"gone",
            text:"Nobody told you that she was going to be a person.\n\nYou don't know if you're ready for this.\n\n(+@)",
            options:[
                {text: "So, uh, the angel...",effect:"none",frameId:"reach5"}
            ]
        },
        {
            id:"reach5",
            image:"gone",
            text:"You gesture at the angel, kneeling in the snow behind the star.\n\nIt is certainly dead, now. It's not the kind of certainty that comes from angel-speech. It's just... normal certainty, from the coolness of its body, and the stony pallor of its skin, and the way its fiery wings have faded to ash.\n\nThe star turns around, sets her eyes on the angel's corpse as if she's truly seeing the angel's sorry state for the first time, and starts bawling uncontrollably.",
            options:[
                {text: "It'll be okay.",effect:"none",frameId:"reach6"}
            ]
        },
        {
            id:"reach6",
            image:"gone",
            text:"She's not going to be alone, you tell her through her tears. For as long as it takes to lead her to the summit, you'll be with her.\n\nOkay?\nOkay.\n\nLet's go. We'll get to the top of the mountain. We'll get you back in the sky, kid.\n\nEverything is going to work out.",
            options:[
                {text: "Continue",effect:"openingEnd"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);