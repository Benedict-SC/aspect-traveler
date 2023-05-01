var id = "ev-03";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Abandoned shelter",
    images:{
        "normal":"assets/img/mockup/tents.png"
    },
    frames:[
        {
            image:"normal",
            text:"The two of you come across a pitched tent and what seems to be a supply cache. You check, and there's nobody present.\n\n\"What's this?\" the star asks.\n\nYou explain that it's a supply cache. Those who travel through the mountains often leave things like this behind on their travels.\n\n\"Oh,\" the star says. \"Why?\"\n\nWhy leave supplies behind? Well...",
            options: [
                {text: "It's practical.",condition:"moteMinimum",conditionMote:"COLD",conditionValue:2,effect:"delta",heat:-2,cold:1,air:1,frameIdx:1},
                {text: "It's the right thing to do.",condition:"moteMinimum",conditionMote:"HEAT",conditionValue:2,effect:"delta",cold:-2,heat:1,light:1,frameIdx:2},
                {text: "Stay silent.",effect:"delta",bond:-1,frameIdx:3}
            ]
        },
        {
            image:"normal",
            text:"You explain that supply depots provide a way to retreat in case of danger. If you carry all your supplies with your party, that's a single point of vulnerability, and if you lose everything then you're left with nothing. By leaving strategic caches, you give yourself a place to fall back to and restock at, even if some disaster befalls you. Leaving paths of retreat is important- it helps protect you, helps keep you safe.\n\n\"I see,\" the Star says contemplatively, before wandering off to examine a tentpole with excruciating focus.\n\n(-2 $, +1 #, +1 ~.)",
            options:[
                {text: "Continue",effect:"none",frameIdx:4}
            ]
        },
        {
            image:"normal",
            text:"Because if there's one thing the mountain teaches us, it's that we're all in this together. The mountain is a hard place to survive, and if we don't work together and share what we have, we won't make it for long. That's where our strength comes from- and it's because of havens and depots like this that we'll be able to make it further up the mountain.\n\n\"I see!\" the Star says cheerfully, before wandering off to examine a tentpole with excruciating focus.\n\n(-2 #, +1 $, +1 {.)",
            options:[
                {text: "Continue",effect:"none",frameIdx:4}
            ]
        },
        {
            image:"normal",
            text:"You're too busy unpacking at the campsite to humor the star's questions. She pouts a bit, but eventually gets distracted and wanders off to stare cross-eyed at a tentpole. You're happy enough to let her do that, you suppose.\n\n(-1 @.)",
            options:[
                {text: "Continue",effect:"none",frameIdx:4}
            ]
        },
        {
            image:"normal",
            text:"What will you do here?",
            options:[
                {text: "Rest here",effect:"delta",bond:2,frameIdx:5},
                {text: "Take from the cache",effect:"delta",cold:1,earth:1,frameIdx:6},
                {text: "Add to the cache",effect:"delta",heat:1,earth:-1,frameIdx:7}
            ]
        },
        {
            image:"normal",
            text:"You take a short break in the tent, and check over your equipment. You patch up what needs patching, do maintenance on what needs maintaining. The star bounces over and around you with excitement the whole time, ceaselessly asking you what everything you're using is for, and you're happy enough to explain.\n\n(+2 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"Caches are for using, ultimately, and right now your situation is one that warrants a bit of taking.\n\nYou take some food and equipment from the cache. You'll have a better chance of making it to the top, this way.\n\n(+1 #, +1 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"We've got enough that we can afford to spare some for those who come by in the future,” you explain to the star as you add some of your own surplus equipment to the cache.\n\nShe nods, and you continue onwards, making sure to leave the campsite clean before you go.\n\n(+1 $, -1 }.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);