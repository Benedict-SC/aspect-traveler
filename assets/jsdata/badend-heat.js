var id = "badend-heat";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Game over",
    images:{
        "normal":"assets/img/event/badend_heat.png"
    },
    frames:[
        {
            image:"normal",
            text:"It creeps up on you all of a sudden- an ice storm heavier than any you've encountered before.\n\nYou need heat and fire, for this, to keep yourself and the star safe- but you have nothing left.\n\nYou can't feel the cold anymore.\n\n($ hit zero.)",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true,resultPort:"fear"}
            ]
        },
        {
            image:"normal",
            text:"In a panic, the star raises her hands, like she's trying to conjure fire from her hands. Nothing comes of it. She stares at her own hands in shock.\n\nThe ice swallows her in that position, freezing her in that pose for good. A moment later, it takes you as well.\n\nThat day, the mountain adds two new frozen statues to its collection of victims.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"heat",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);