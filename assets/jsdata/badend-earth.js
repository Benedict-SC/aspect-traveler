var id = "badend-earth";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Game over",
    images:{
        "normal":"assets/img/event/badend_earth.png"
    },
    frames:[
        {
            image:"normal",
            text:"A while after that encounter, you realize that your pack feels much lighter than before. (} hit zero.)\n\nYou stop, drop your rucksack to take an inventory of, and swear aloud as you realize the sheer magnitude of your folly. The vast majority of the goods in your climbing backpack are just- gone.\n\nWhere did you lose all of your supplies? Had you not bound them to your pack properly? Had you lost them in one of the previous encounters and not noticed somehow? How did you fail so terribly in doing your due diligence?",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true,resultPort:"gone"}
            ]
        },
        {
            image:"normal",
            text:"Whatever happened, you can't go any further like this. It's not a matter of willpower or desire or motivation. You just plain don't have the climbing tools you know you'll need to actually reach the summit.\n\nYou tell the star that you have to turn back and resupply. You promise you'll return immediately, and ask her to wait for you.\n\nBut the star simply shakes her head at you, before continuing onwards alone and leaving you behind.\n\nYou never find out if she makes it.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"earth",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);