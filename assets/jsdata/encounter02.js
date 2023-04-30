var id = "e02";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Frozen travelers",
    images:{
        "normal":"assets/img/mockup/frozen.png"
    },
    frames:[
        {
            image:"normal",
            text:"The ice storms here can strike with unparalleled ferocity and completely without warning, leaving statues in their wake. These travelers were swallowed in ice by a particularly voracious gale, condemned to become part of the mountain's permafrost. You wonder if you'll join them, soon enough.",
            options: [
                {text: "Continue",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"normal",
            text:"\"Do you think we can help them?\"\n\nHelp them? They've been frozen in ice for who knows how long. They'd have died in minutes, unable to breathe.\n\n\"Well, we should still try, shouldn't we? There's got to be something we can do!\"\n\nWell. Maybe you could...",
            options:[
                {text: "...No, keep moving.",effect:"delta",cold:1,frameIdx:2},
                {text: "Let her melt the ice",effect:"delta",bond:1,frameId:"melty"},
                {text: "Try and break them out yourself",effect:"delta",heat:1,earth:1,frameIdx:5}
            ]
        },
        {
            image:"normal",
            text:"It's impossible. The mountain's already claimed them. Sticking around to try and help them would only risk being claimed yourselves- and for what? Some frozen corpses?\n\n\"...Oh. That's...\" She trails off, looking on at the popsicles forlornly. She's taking something in.\n\n\"You're right. We need to look out for ourselves first, or we'll never make it to the top.\"\n\n(Your # grew.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"melty",
            image:"normal",
            text:"There's no way she could possibly save them, but you feel a pang of sympathy for her, and your stock of @ grows. She should get to try, shouldn't she? \n\n\"So, if they're too cold to breathe, maybe they're too cold to die, too! How about we heat up their breathing, before we heat up their dying?\"\n\nYeah, you're pretty sure that's not how that--\n\n\"Here, we just have to...\"",
            options:[
                {text: "--wait, what?",effect:"delta",heat:-1,frameIdx:4}
            ]
        },
        {
            image:"normal",
            text:"She draws some of your $, and begins to shine like the sun. You don't feel as warm anymore, but the ice is melting before you, running down the mountainside in steaming rivulets.\n\nStanding where the glacier once was are a group of travelers, shivering in the chilly mountain air, gasping for breath.\n\n\"See? Just like that!\"\n\n Well! She is a doer of miracles. How about that.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"Well, you need to set a good example. There's no way you could possibly save these people, but you can do your best. Maybe give them a proper burial. You should do that much for them- $ swells in your heart.\n\nYou go at it with your ice pick, and work up a good sweat chipping the ice away until you're able to pry the corpses loose. Your extremities are numb, but there's still work to be done.\n\nYou break the frozen ground, digging chunks of permafrost away to make room. The seed looks on solemnly.",
            options:[
                {text: "Continue",effect:"delta",bond:-1,frameIdx:6}
            ]
        },
        {
            image:"normal",
            text:"She stares at the makeshift graves. \"...Thanks for trying to help them,\" she says. \"This was the best we could do for them, wasn't it?\"\n\nYeah. Realistically. You have to show the compassion you can show.\n\n\"...I guess that's right. So... this was worth it, then. To do the right thing.\"\n\nMaybe. It's going to be harder to go on, now. (Your @ is strained.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);