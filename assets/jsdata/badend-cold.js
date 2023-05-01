var id = "badend-cold";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Game over",
    images:{
        "normal":"assets/img/mockup/encountery.png"
    },
    frames:[
        {
            image:"normal",
            text:"\"...I should scour it away,\" the star murmurs, from behind you.\n\n...What?\n\n\"The cold,\" she says. \"The ice and snow, here. All of it. I was afraid to, before. I thought I'd die, if I did, so I didn't, even though I wanted to. But I'm not afraid of that anymore. I have the power within me. So I should banish the cold for good.\"\n\n(# hit zero.)",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true}
            ]
        },
        {
            image:"normal",
            text:"She ignites. It's blinding. Her humanity burns away like the fragile wrapper around a boundless flame that it always was. You shout at her to stop, but you don't think she hears you.\n\nThat day, a new sun is ignited upon the surface of the earth, and when it passes neither the mountain nor the two of you remain.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"cold",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);