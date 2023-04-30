var id = "ev-08";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Hot springs",
    images:{
        "normal":"assets/img/mockup/hotsprings.png"
    },
    frames:[
        {
            image:"normal",
            text:"On your ascent, you encounter a patch of hot springs tucked away in an alcove sheltered from most of the coldest winds.\n\nThe star seems quite excited by this discovery! If you're to be honest, you are as well.",
            options: [
                {text: "Pass on by.",effect:"delta",light:1,frameId:"pass"},
                {text: "Take a short break.",effect:"delta",heat:1,frameId:"short"},
                {text: "Take a long break.",effect:"delta",heat:1,bond:1,light:-1,frameId:"long"}
            ]
        },
        {
            id:"pass",
            image:"normal",
            text:"But you just don't have the time to spare on relaxing at some hot springs, right now!\n\n\"What, come on,\" the star objects. \"We're really going to pass right by something this neat? Why?\"\n\nThe two of you have more important things to do! This is just a distraction. (+1 {.)\n\nThe star grumbles a bit, but ultimately agrees. With that, she seems to find her resolve to depart. You leave the hot springs behind.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"short",
            image:"normal",
            text:"You decide that it'd be good to take a breather here. It'd be a shame to waste an opportunity like this!\n\nYou both take the opportunity to clean up a bit, and depart the springs feeling refreshed. (+1 $.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"long",
            image:"normal",
            text:"This is a good place to make camp. Readily available sources of heat and water mean that it'll be a more comfortable camping site than most. Plus, you'll be able to take a long-deferred bath.\n\nIn the morning, you pack up and depart the hot springs, feeling rejuvenated and ready to resume the climb. (+1 $, +1 @.)\n\nThough... part of you is always going to wish that you'd just stayed in the comfort of the springs a while longer. (-1 {.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);