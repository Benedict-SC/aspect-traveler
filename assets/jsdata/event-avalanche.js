var id = "ev-13";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Avalanche!",
    images:{
        "normal":"assets/img/mockup/encountery.png"
    },
    frames:[
        {
            image:"normal",
            text:"As you pass under a cliff, you hear a sound from above.\n\nYou look up. A huge snow-covered boulder, easily thrice as thick as you are tall, is falling towards the two of you.\n\nYou only have a moment to react.",
            options: [
                {text: "Dodge it!",effect:"delta",air:-1,frameId:"dodge"},
                {text: "Warn her first!",effect:"delta",earth:-2,frameId:"warn"},
                {text: "Shove her out of the way!",effect:"delta",bond:-2,frameId:"shove"}
            ]
        },
        {
            id:"dodge",
            image:"normal",
            text:"With a desperate burst of speed, you push yourself out from under the rock's shadow just in time. (-1 ~.)\n\nWith a heavy thud, the rock lands, sending snow everywhere. Only after your escape do you think to look towards the star.",
            options:[
                {text: "Did she make it?",effect:"delta",cold:1,frameId:"dodge2"},
            ]
        },
        {
            id:"dodge2",
            image:"normal",
            text:"She steps out from behind the rock, trembling.\n\nAs the two of you leave the fallen boulder behind, you reflect on how narrowly you escaped calamity just now. (+1 #.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"warn",
            image:"normal",
            text:"There's- watch out!\n\nYou shout desperately at her even as you try to get out of the way of the boulder yourself. It's not enough, though, you're not fast enough-\n\nThe star looks up,\n\nand with a gesture (-2 }),",
            options:[
                {text: "the boulder-",effect:"delta",bond:1,frameId:"warn2"}
            ]
        },
        {
            id:"warn2",
            image:"normal",
            text:"-splits into a dozen radially even pieces that land in a wide circle around you.\n\nYou stare at her. She smiles at you. “Thanks for the warning!” (+1 @.) Like it was just nothing for her.\n\nAfter calming down a bit from the shock, you continue.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"shove",
            image:"normal",
            text:"You shove the star out of the way, just in time.\n\nYou're not going to be able to avoid being crushed by the boulder, but at least you got the star out of the way. Maybe she'll be able to reach the top on her own. She's the one with the magic, after all.\n\nThe boulder hits you,\n-@@\nAnd everything disappears.",
            options:[
                {text: "Game Over >",effect:"none",frameId:"shove2"}
            ]
        },
        {
            id:"shove2",
            image:"normal",
            text:"...And yet you're not dead.\n\nYou got crushed by a boulder thrice your height. How are you not dead?\n\nYou push with an arm, and feel the familiar sensation of crunching snow. Somehow, you've been buried in the snow. Not a good situation to be in, but you know what to do. You carve out a hole, spit to reorient yourself to up, and start heading for the surface.",
            options:[
                {text: "Climb",effect:"none",frameId:"shove3"}
            ]
        },
        {
            id:"shove3",
            image:"normal",
            text:"Above you, you hear the sound of snow being scraped away from the outside. You converge on the sound yourself, until a hole in the darkness reveals the concerned expression of the star, who'd been digging away in the snow to extract you.\n\nNowhere is there a boulder to be seen. Just… a massive pile of snow, the size and shape of the boulder itself.",
            options:[
                {text: "...What?",effect:"none",frameId:"shove4"}
            ]
        },
        {
            id:"shove4",
            image:"normal",
            text:"...Did... you misjudge the situation, in the split second you had to evaluate it?\n\nHad the supposed boulder not actually been a boulder, but rather a large mass of fallen snow? It had been snow-covered, after all, and perhaps it had been more than just snow-covered, but made entirely from snow as a matter of fact.\n\nAnd if that were the case, a pile of snow would have been much less lethal upon impact. Perhaps you'd simply made a mistake of interpretation.",
            options:[
                {text: "That's... probably it. Right.",effect:"none",frameId:"shove5"}
            ]
        },
        {
            id:"shove5",
            image:"normal",
            text:"(And yet, something bothers you about that conclusion. You'd been so certain it was a boulder. This isn't the first time you've seen either stone or snow fall from high above, and you feel like you could definitely have distinguished the two.)\n\n(But you're alive. So you must have been mistaken, right?)",
            options:[
                {text: "Right. Yeah.",effect:"delta",light:-2,bond:4,frameId:"shove6"}
            ]
        },
        {
            id:"shove6",
            image:"normal",
            text:"The star pulls you out of the mound of collapsed snow, and hugs you.\n\nYou tell her it's okay. You're fine. You're all right, see?\n\nBehind her head, you see the faintest signs of a dim halo of light, so dim you wonder if you're imagining it. As you stare, it fades away into nothing.\n\n(-2 {,+4 @)",
            options:[
                {text: "Did you... do something?",effect:"none",frameId:"shove7"}
            ]
        },
        {
            id:"shove7",
            image:"normal",
            text:"The star shakes her head. \"I shouldn't say.\"\n\nShe trembles.\n\n\"I'm afraid it'll stop working if I say it.\"\n\nShe refuses to say anything else on the subject, as you leave the fallen mass of snow behind.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);