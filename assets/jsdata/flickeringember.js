var id = "flickeringember";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"flickering ember",
    images:{
        "normal":"assets/img/mockup/encountery.png",
        "changed":"assets/img/mockup/problems.png"
    },
    frames:[
        {
            image:"normal",
            text:"You come across an abandoned hearth, still smouldering slightly despite the cold. In the hearth, the last few remaining embers give off the last of their heat in futility. Still, this is a slightly warmer place than the rest of the mountain for now.",
            options: [
                {text: "Harvest embers",effect:"delta",heat:1,frameId:"harvest_embers"},
				{text: "Rest a while here", effect:"none",frameId:"rest_here"},
				{text: "Revive the hearth",effect:"delta",heat:-1,frameId:"revive_hearth"}
            ]
        },
        {
            id:"harvest_embers",
			image:"changed",
		text:"\"Every bit of heat could be useful,\" you say to your charge. \"We should collect as much of it as we can.\" She nods with understanding, and reaches out to the hearth, and draws the last vestiges of heat forth from the embers.\n\n(You gain 1 (heat symbol).)",
            options:[
                {text: "Every bit counts",effect:"none",frameId:"conclusion"},
            ]
        },
        {
            id:"rest_here",
			image:"changed",
            text:"You take a bit of time to rest while the embers still remain.\n\n\"What're you doing?\" she asks, with a puzzled expression.\n\n\"Resting\", you reply dryly.\"It's a thing that those of us burdened with corporeal form have to do on occasion.\"\n\n\"Oh,\", she says, after a moment. \"Couldn't be me,\" she says. You laugh, a little. \"But is it nice? Resting, I mean. Or do you just do it because you have no other choice?\" ",
            options:[
                {text: "It's nice to rest.",effect:"delta",earth:1,frameId:"pro_rest"},
				{text: "Definitely the latter.",effect:"delta",light:1,frameId:"anti_rest"}
            ]
        },
		{
            id:"pro_rest",
			image:"changed",
            text:"\"I see!\" your star says. \"In that case, scoot over and make some room, I'm going to take one of these rests as well!\" \n\nYour star has gained (earth symbol).",
            options:[
                {text: "Continue",effect:"delta",earth:1,frameId:"conclusion"}
            ]
        },
		{
            id:"anti_rest",
			image:"changed",
            text:"\"I doubt anybody would want to spend their time on doing literally nothing, had they a choice,\" you answer your curious star. \"Our bodies are as chains around our necks, sometimes.\"\n\n\"I thought your neck was part of your body. If your body is a chain around your neck, that's recursion.\"\n\n\You are forced to agree she has a point. \"If you star-folk do not feel exhaustion as we do, then you are luckier than we.\"\n\nShe nods.",
            options:[
                {text: "Continue",effect:"delta",earth:1,frameId:"conclusion"}
            ]
        },
        {
            id:"revive_hearth",
			image:"changed",
            text:"\"It's sad to watch the embers just... go out, like that,\" the star whispers. She reaches out, and flicks a charge of (heat) at the hearth.\n\n\"Is... that a prudent way to spend our warmth?\" You ask her.\n\n\"It'll work out!\" she says, cheerfully. \"See?\" \n\nIndeed, before long, the hearth is a roaring flame once again. You collect (3x heat symbol). ",
            options:[
                {text: "Guess she knows what she's doing sometimes",effect:"delta",heat:4, frameId:"conclusion"}
            ]
        },
		{
            id:"conclusion",
			image:"normal",
            text:"Soon, it's time for the two of you to get moving again.\n\n\"Who do you think left those embers behind in the first place?\" the star asks.\n\nIn all honesty, you have no idea. \"Even a mountain as inhospitably cold as this plays host to many, it seems,\" you answer, as you leave the hearth behind.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);