var id = "badend-air";
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
            text:"And after that encounter, from then on, you find your progress blocked, somehow, no matter what you do.\n\nEvery path you take is obstructed. Every bridge you reach is impassable. All around you, the world conspires to prevent you from going where you want to go, let alone exploring the things you want to explore.\n\n(~ hit zero.)",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true}
            ]
        },
        {
            image:"normal",
            text:"There's nowhere you can go. Every door is shut. Even when you turn around, and try to retrace your steps, you find yourself hopelessly lost and absolutely incapable of finding your bearings.\n\nThis adventure has become a lot less fun for the two of you than it was at the start.\n\nMaybe you'll be lost on the mountain forever.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"air",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);