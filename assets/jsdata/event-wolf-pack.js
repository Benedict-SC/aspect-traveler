var id = "ev-05";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Wolf pack",
    images:{
        "normal":"assets/img/mockup/problems.png",
        "healed":"assets/img/mockup/encountery.png"
    },
    frames:[
        {
            image:"normal",
            text:"As you traverse a grove of frost-laden pines... there's a pack of wolves.\n\nWell, a 'pack' is probably overstating it. It's three wolves- the largest of which is visibly limping. When they see you, the two smaller, uninjured wolves spread out and growl, clearly trying to flank you two.\n\n\"What are they? What do they want?\" the star whispers from behind you.\n\nWith wolves? Usually it's easy prey.\n\nAs they close in, you...",
            options: [
                {text: "Fight",effect:"random",subOpts:[{id:"win"},{id:"lose"}]},
                {text: "Flee",effect:"delta",air:-1,frameId:"flee"},
                {text: "Intimidate them",effect:"delta",cold:-2,frameId:"intimidate"},
                {text: "Heal them",condition:"moteMinimum",conditionMote:"LIGHT",conditionValue:1,effect:"delta",light:-1,frameId:"heal"},
            ]
        },
        {
            id:"win",
            image:"normal",
            text:"A whole wolf pack would be an insurmountable danger, but two wolves plus a limping straggler? You can take them.\n\nOne of the smaller wolves leaps forward, maw wide open, but you jam the handle of your spear into it and hold it off. Then you kick it, right in the stomach, punting it a handful of meters and gouging a trench in the snow.\n\nThe other wolf hesitates, and you can see its eyes flickering between you and your star, unsure of who to target.",
            options:[
                {text: "Stand your ground.",effect:"delta",earth:2,frameId:"win2"}
            ]
        },
        {
            id:"win2",
            image:"normal",
            text:"As it continues to hesitate, the larger wolf growls a low growl, and the two smaller wolves retreat to it instantly. The three of them slowly and warily back off into the underbrush, facing you the whole time, until they've disappeared from your view.\n\nThey've judged you to be too much trouble, it seems. (+2 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"lose",
            image:"normal",
            text:"Fighting was a poor decision. The two wolves are faster and leaner than you, and take turns nipping at your heels, and leaving gashes in your clothes. As terrible as it is to lose so much of your clothes' heat-retention to the gashes, you are grateful that it's not worse- at least you've been able to keep them away from your neck.\n\nIn the end, it's your star who has the idea of distracting them with some of your rations. She rips open two packs while you fend off the wolves and tosses the food into the snow. You quickly take the opportunity to disengage while the wolves preoccupy themselves with your meals.",
            options:[
                {text: "Soldier on.",effect:"delta",bond:-1,frameId:"lose2"}
            ]
        },
        {
            id:"lose2",
            image:"normal",
            text:"You've avoided danger for now- but your clothes have been torn and you've lost a fair amount of your supplies. The star may not need to eat, but you do- and without your food, the chances that you'll be forced to turn back have only gone up. (-1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"flee",
            image:"normal",
            text:"\"We need to go,\" you whisper. \"Now.\"\n\nThe star is entirely in agreement, and the two of you beat a hasty retreat. (-1 ~.)\n\nThe wolves don't put up much of a chase, though, and you find yourself wondering why as you retrace your steps. Perhaps they were as nervous about you as you were about them.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"intimidate",
            image:"normal",
            text:"\"I'll drive them off,\" the star says, and as she steps forward you see a cold and harsh light in her eyes. Another step forwards, and a cold nimbus has appeared around her like a mantle. (-2 #.)\n\nShe stares down the largest of the wolves, and growls. It takes a step backwards. She does it again. In unison, the wolves take a step backwards.\n\nShe growls again, a third time, and the trio of wolves breaks before her, turning and fleeing. A moment later, she drops the frozen mantle, and turns back towards you.",
            options:[
                {text: "Um.",effect:"delta",bond:-1,frameId:"um"}
            ]
        },
        {
            id:"um",
            image:"normal",
            text:"What was that.\n\n\"There was much fear and pain in their family,\" she says. \"Their mother had been wounded by a trapper's trap. I took that fear and pain, and reanchored it upon myself, and amplified it, until they could see me as nothing other than an endless fountainhead of suffering.\"\n\n...You hadn't known that they were a family at all. (-1 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"heal",
            image:"healed",
            text:"\"The big one is injured, isn't it?\" the star asks. You nod.\n\n\"Well, that's no good,\" she declares, and before you can stop her she's laid her hands on the largest of the wolves. How'd she even get there without startling the wolves? It's like she crossed the intervening distance in a blink.\n\nYou can't quite see what she's doing, but her palms glow as she presses down on the largest wolf's leg. (-1 {.)",
            options:[
                {text: "What...?",effect:"delta",bond:1,frameId:"heal2"}
            ]
        },
        {
            id:"heal2",
            image:"healed",
            text:"And now something has changed, and the wolf rises from under her ministrations, and lays one long lick down her face, before turning and heading away from your group. The two smaller wolves follow, too.\n\nYour star laughs. You do too. (+1 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);