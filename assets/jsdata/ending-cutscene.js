var id = "ending";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"The top of the mountain",
    images:{
        "normal":"assets/img/mockup/encountery.png"
    },
    frames:[
        {
            image:"normal",
            text:"You're finally here.\n\nThe summit.\n\nWhen the next night falls, it will be time for her to go.\n\nUntil then, you can pitch a camp, wait quietly, and speak a while longer.",
            options: [
                {text: "How are you feeling?",effect:"none",highestStatBranch:true}
            ]
        },
        {
            id:"BOND",
            image:"normal",
            text:"\"I'm glad you're here,\" she says simply, as you set up the camp together. \"Thank you for protecting me.\"\n\nHonestly, you feel like she protected you more than you did her. She had all the star-magic, after all.\n\nShe shakes her head. \"I couldn't have gotten here without your help,\" she says matter-of-factly.",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"HEAT",
            image:"normal",
            text:"\"Happy,\" she says simply. \"This world is a place of physical coldness, but on the inside it is a kind place. I'm glad I was able to come here and experience these experiences, and if I was able to help anybody while I was here, I'm glad about that too.\"\n\nYou're glad for her, too.\n\nEverything feels a bit warmer, with her around.",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"COLD",
            image:"normal",
            text:"\"Anxious,\" she says quietly. \"Worried.\"\n\nYou're not surprised. There's something you've been thinking of for a while now.\n\nFor all that the mountain was dangerous, you don't think that anything here could have laid a scratch on the angel. And yet, something up there killed the angel, and sent the star crashing down to earth.\n\nNow she's going back up there. Is she really going to be okay?",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"LIGHT",
            image:"normal",
            text:"\"I look forward to assuming my full potential again.\" she says simply. \"As we approach the appointed time of departure, I feel like I'm coming back into tune with my true nature.\"\n\nEver since you approached the summit, she's started to talk less and less in her usual register, and more and more in the register of the angels.\nYou're not sure if you're unsettled by it or not. But it feels like, in a way, she's being truer to herself than ever before.\n\nOr maybe something about being up here is stripping away her surface veneer, and showing what lies at the core.",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"EARTH",
            image:"normal",
            text:"\"Prepared and resolute,\" she says. \"This is what all of our hard work has led up to, after all.\"\nShe helped you pitch the tent as you spoke.\n\n\"I kind of appreciate these things, now,\" she says, as you work quietly together. \"It's not just mere tedium. There's something pure about the act of doing the work, the flow-state. I wouldn't have understood, before I came down here. It's a valuable thing. Thank you for showing me.\"\n\nUh, you suppose she's welcome. You hadn't been thinking that much of it. It's just... how you live, really.",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"AIR",
            image:"normal",
            text:"\"Kind of wistful, to be honest. I wish it could have lasted longer!\" She laughs. \"I'm sure there's a lot of things I didn't get to see on my trip down here.\"\n\nYeah, you can see it. Her time down here must have been a whirlwind tour for her, relative to the timescales on which stars must live.\n\n...You don't actually know for a fact that she's going to outlive you, but somehow you're pretty sure that she will, and that she'll see many more things in the long life that lies ahead of her.",
            options: [
                {text: "Wait together.",effect:"none",frameId:"wait"}
            ]
        },
        {
            id:"wait",
            image:"normal",
            text:"The two of you wait.\n\nAnd soon enough, the night falls.\n\nYou were wondering if there might be one last final step, or an ultimate challenge to overcome, but nothing of the sort appears. Instead, she simply rises off the ground, seemingly not even of her own volition, as though the hand of an invisible clock had struck some appointed hour.\n\n\"It's time,\" she says, and her star-halo lights up at full intensity behind her.",
            options: [
                {text: "It's time.",effect:"none",condition:"leavewish",hidden:true,frameId:"leavewish"},
                {text: "It's time.",effect:"none",condition:"volunteer",hidden:true,frameId:"volunteer"},
                {text: "It's time.",effect:"none",condition:"treasure",hidden:true,frameId:"treasure"},
            ]
        },
        {
            id:"leavewish",
            image:"normal",
            text:"She's drifting up and away. You get the impression that at any moment the sky might reel her up and take her home at any moment.\n\nThe star peers at you, one last time, as the halo around her waxes in intensity.\n\n\"Back at the beginning of all this,\" she says slowly, \"You named a price for this journey. You asked whether you could come with me, as the reward for bringing me all the way here.\"",
            options: [
                {text: "You nod.",effect:"none",frameId:"leavewish2"}
            ]
        },
        {
            id:"leavewish2",
            image:"normal",
            text:"She stretches a hand out towards you, while you're still in range to grab onto it.\n\nBut it's been a long time, since then, and you've had a lot of time to think.\n\nDo you still want to go with her, and leave everything here behind?",
            options: [
                {text:"Go with her.",effect:"none",frameId:"depart"},
                {text:"Stay",effect:"none",frameId:"watch"}
            ]
        },
        {
            id:"volunteer",
            image:"normal",
            text:"She's drifting up and away. You get the impression that at any moment the sky might reel her up and take her home at any moment.\n\n\"Sure was an adventure we had, huh?\"\n\nYou agree.\n\n\"What if you could have more?\"",
            options: [
                {text: "What do you mean?",effect:"none",frameId:"volunteer2"}
            ]
        },
        {
            id:"volunteer2",
            image:"normal",
            text:"She stretches a hand out towards you, while you're still in range to grab onto it.\n\n\"Come with me,\" she says, as she continues to slowly rise.\n\nYou hadn't realized that was an option available to you.\n\nDo you want to go with her, and see what lies beyond the sky together?",
            options: [
                {text:"Go with her.",effect:"none",frameId:"depart"},
                {text:"Stay",effect:"none",frameId:"watch"}
            ]
        },
        {
            id:"depart",
            image:"normal",
            text:"You take her hand.\n\nThe two of you rise through the sky together, and leave the world below you behind.\n\nAhead of you, a vast future full of possibilities awaits.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"watch",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.",
            options: [
                {text: "And then...",effect:"none",frameId:"watch2"}
            ]
        },
        {
            id:"watch2",
            image:"normal",
            text:"You returned to your usual life.\n\nYou told people about what had happened to you. They mostly didn't believe you, unsurprisingly to you. Some of them did, and of those who did, some of them went to the mountain, to see if they could find a fallen star of their own. If any of them did, you never heard back from them.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasure",
            image:"normal",
            text:"She's floating now.\n\n\"Back at the beginning of all this,\" she says slowly, \"I remember that you named a price for this journey. You asked for a treasure to call your own, as the reward for bringing me all the way here.\"\nYou nod.\n\n\"I am about to ascend,\" she says, looking up at the sky. \"And as I ascend, I will have to choose what aspects of this experience I will weave into my new self, and which parts I will cast away and leave behind. And that which I take with me will become a part of me, from then on.\"",
            options: [
                {text: "...She sounds like the angel, when she talks like that.",effect:"none",frameId:"treasure2"}
            ]
        },
        {
            id:"treasure2",
            image:"normal",
            text:"\"Ordinarily, that which I discard would quietly disperse back into the world again. But because you have asked it as your price, I will condense that which I would discard into a tool of great magic for you instead, to grant upon you a treasure you may wield henceforth, as the proof of your journey here.\"\n\nAh.\n\n\"And so I ask you- what should I cast away? What do you want me to leave behind for you?\"",
            options: [
                {text: "Leave behind the bonds we formed.",condition:"moteMinimum",conditionValue:3,conditionMote:"BOND",effect:"delta",bond:-3,frameId:"treasureBond1"},
                {text: "Leave behind your warmth.",condition:"moteMinimum",conditionValue:3,conditionMote:"HEAT",effect:"delta",heat:-3,frameId:"treasureHeat1"},
                {text: "Leave behind your fears.",condition:"moteMinimum",conditionValue:3,conditionMote:"COLD",effect:"delta",cold:-3,frameId:"treasureCold1"},
                {text: "Leave behind something wondrous.",condition:"moteMinimum",conditionValue:3,conditionMote:"LIGHT",effect:"delta",light:-3,frameId:"treasureLight1"},
                {text: "Leave behind something useful.",condition:"moteMinimum",conditionValue:3,conditionMote:"EARTH",effect:"delta",earth:-3,frameId:"treasureEarth1"},
                {text: "Leave behind something surprising.",condition:"moteMinimum",conditionValue:3,conditionMote:"AIR",effect:"delta",air:-3,frameId:"treasureAir1"},
                {text: "Leave behind nothing.",effect:"none",frameId:"treasureNone1"}
            ]
        },
        {
            id:"treasureBond1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a pendant drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureBond2"}
            ]
        },
        {
            id:"treasureBond2",
            image:"normal",
            text:"You found the pendant a comfort to you. After you returned home, you took to wearing the pendant constantly, and when you did, you found that friendships and love came to you easily, as though something was bending the world itself aside to bring new connections to you.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureHeat1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a ruby drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureHeat2"}
            ]
        },
        {
            id:"treasureHeat2",
            image:"normal",
            text:"You found that the ruby kept you warm, as you descended the mountain. When you return home, you set it carefully into a ring around your finger, and from that day on flames would no longer scorch you so long as you wore the ring.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureCold1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a fang drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureCold2"}
            ]
        },
        {
            id:"treasureCold2",
            image:"normal",
            text:"You found that the fang warded away wild beasts of the mountain, as you descended. When you returned home, you set it over the headposts of your bed, and from that day on your dreams were never troubled by nightmares again.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureLight1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a diamond drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureLight2"}
            ]
        },
        {
            id:"treasureLight2",
            image:"normal",
            text:"You found that looking through the diamond allowed you to see anything as through it was lit by a bright and clear day. When you returned home, you set the diamond into a monocle, and from then on you needed not worry about darkness or mist obscuring your vision ever again.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureEarth1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a hemp string drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureEarth2"}
            ]
        },
        {
            id:"treasureEarth2",
            image:"normal",
            text:"Tying the string around your wrist, you found that the string granted you exceptionally steady footing. It was a subtle thing, but you found that you never once stumbled or tripped, on your way down the mountain.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureAir1",
            image:"normal",
            text:"She nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.\n\nYou continue waiting, until a book drops out from the sky and falls to the snow before you.",
            options: [
                {text: "Take it.",effect:"none",frameId:"treasureAir2"}
            ]
        },
        {
            id:"treasureAir2",
            image:"normal",
            text:"Opening the book, you saw words appear by themselves on the blank white pages, giving you directions for how to get home. When you returned home, you set the book into a bookshelf, and from then on you consulted the book for advice whenever you needed directions, and found its advice unerringly helpful each and every time.\n\nAnd you returned to your usual life.\n\nAnd every once in a while, you looked up at the heavens, wondering if your star could still see you, all the way up there.",
            options: [
                {text: "THE END",condition:"moteMinimum",conditionValue:999,conditionMote:"BOND",effect:"none"}
            ]
        },
        {
            id:"treasureNone1",
            image:"normal",
            text:"You didn't realize it came with a cost.\n\n...You don't want it. Not if it costs her something like that.\n\nShe nods and accepts your choice.\n\nYou watch as she shrinks, until she fades into a pale speck in the sky, and you keep watching until you can no longer make her out.",
            options: [
                {text: "And then...",effect:"none",frameId:"watch2"}
            ]
        },
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);