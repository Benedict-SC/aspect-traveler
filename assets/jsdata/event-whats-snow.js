var id = "ev-06";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"What's Snow?",
    images:{
        "normal":"assets/img/mockup/snow.png"
    },
    frames:[
        {
            image:"normal",
            text:"As you walk, your star suddenly asks you a question.\n\n\"Hey, so, uh... I've kind of been meaning to ask you about this stuff.\"\n\nWhat stuff?\n\n\"You know. The... cold white powdery stuff that's on everything. What is it?\"",
            options: [
                {text: "You stare at her.",effect:"none",frameIdx:1}
            ]
        },
        {
            image:"normal",
            text:"There is no way she doesn't know what snow is, you say, staring in disbelief.\n\n\"Well, I don't!\" She says this in the most cheerful tone imaginable, as if it wasn't an absolutely ludicrous thing to say.\"So what is it? Snow, I mean. Tell me about it.\"\n\nUh.\n\nWhere do you start.",
            options:[
                {text: "Tell her about where snow comes from",effect:"none",frameId:"source"},
                {text: "Tell her about what snow is made out of",effect:"none",frameId:"made"},
                {text: "Tell her about what the snow means to you",effect:"none",frameId:"means"},
                {text: "Tell her that snow can keep you warm",effect:"none",frameId:"warm"},
                {text: "Tell her that snow can be dangerous",effect:"none",frameId:"cold"}
            ]
        },
        {
            id:"source",
            image:"normal",
            text:"From the sky? Usually? She's seen snow falling by now, hasn't she? It's been snowing for a while! It snows a lot on the mountain. You'd think she would have put two and two together!\n\n\"I just wasn't sure that was the normal way things worked,\" the star answers. \"Many strange things happen around me! That is how it always works, though? Snow falls from the sky?\"\n\nYeah, from out of clouds, usually.\n\n\"Are the clouds also made of snow? They do look similar.\"",
            options:[
                {text: "What? No.",effect:"delta",light:1,frameId:"source2"}
            ]
        },
        {
            id:"source2",
            image:"normal",
            text:"At least... you don't think so? Actually you have no idea. You've never touched a cloud- for all you know, they really are made of snow.\n\n\"Lots of things come from or fall from the sky here, huh.\" The star looks up. \"Including me. Perhaps when I return I will touch a cloud on the way, and then I'll know what it's made of.\" (+1 {.)\n\nSometimes she gives you a stark reminder that she isn't from this place, huh. Just to be safe, you explain a few more things about snow to her, so that she has a more well-rounded understanding of things, before moving on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"made",
            image:"normal",
            text:"On a material level, snow is made of frozen water. In other places water falls as liquid, from the sky, but if it's cold enough and other conditions are right, the water crystallizes into snowflakes in the air, and falls as snow. Here on the mountain it's mostly snow.\n\nShe nods. \"And it turns back into water when it gets warm.\"\n\n...How does she know that snow turns into water if it gets warm, but not anything else about it?",
            options:[
                {text: "That's a good question.",effect:"delta",earth:1,frameId:"made2"}
            ]
        },
        {
            id:"made2",
            image:"normal",
            text:"\"I tried melting some while you weren't looking.\"\n\nRight. The whole she's a magic star person thing.\n\nAnyways, yeah, you say, it's basically just, frozen water. It's not substantially magic or anything. Kind of ordinary really. (+1 }.)\n\nYou spend a while after that making sure the star has a full and well-rounded understanding of snow, before you move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"means",
            image:"normal",
            text:"Snow is just- omnipresent in your life. You guess it reminds you of home, actually. You've lived in cold places for so long that it's hard to imagine a world without snow. Even if it can be a bit of a problem at times, you feel like you just wouldn't be at home without it.\n\n\"Home...\" the star echoes.\n\nYeah, kiddo. This one's yours, and with any luck, you'll get her back to hers as well. (+1 @.)\nAs you keep moving, you tell her some more stories about snow. With any luck, she'll have a better-rounded understanding of snow afterwards.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"warm",
            image:"normal",
            text:"Well, uh. Snow shows up in very cold places. She... knows that, right? It occurs to you that she might not know that.\n\n\"Sure!\" She says it in a tone of voice that does not at all convince you that she truly understands what it feels like to be cold.\n\nRight. So. People need heat to survive. If it's too cold, they can't. Wearing clothes helps stave off the cold. But snow itself is also a good insulator, despite being cold. You can build shelter out of it if there's enough and it's cold enough to not melt- which is usually, here. In a weird way, it's like the snow is helping protect us against the cold that enables its own existence.",
            options:[
                {text: "Isn't that funny?",effect:"delta",heat:1,frameId:"warm2"}
            ]
        },
        {
            id:"warm2",
            image:"normal",
            text:"\"Huh. So... even in the coldest of things, there is warmth to be found.\"\n\nShe looks thoughtful. (+1 $.)\n\nEr, right. You guess. You scratch your head. That's not all snow is, of course, you explain...\n\nYou spend a while really trying to drill in a well-rounded understanding of snow itself, to her, before you move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"cold",
            image:"normal",
            text:"Okay, if she doesn't know, she needs to know- snow can be extremely dangerous. It's the most critical thing she has to learn, if she truly has absolutely no understanding of the subject.\n\nSnow looks uniform on the outside, but anything could be underneath it. If you get buried in snow, which can happen from an avalanche or something, you lose the ability to breathe, and- you don't know if it's the case for stars, actually, but for us normal people if we can't breathe we die.\n\n...Does she know what dying is. Do you need to explain what dying means to a small star child.",
            options:[
                {text: "You really hope she doesn't ask.",effect:"delta",cold:1,frameId:"cold2"}
            ]
        },
        {
            id:"cold2",
            image:"normal",
            text:"Thankfully, she doesn't ask.\n\n\"I wouldn't let myself get buried in snow,\" she says. \"I'd burn my way out.\" (+1 #.)\n\nThat's... that works, you guess?\n\nYou nevertheless spend a while making sure she knows how to free herself from the snow in case you ever get separated, before you drill in a more well-rounded understanding of the snow into her and move on.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);