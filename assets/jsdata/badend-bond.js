var id = "badend-bond";
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
            text:"You're finished.\n\nYou can't go on any further. It's too difficult. The climb is too hard. It's too much.\n\nMaybe it's the physical stress, or maybe it was emotional. Either way, you've exhausted your resolve.\n\n(@ hit zero.)",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true}
            ]
        },
        {
            image:"normal",
            text:"When you stop, turn, and sit down, the star barely pauses, turning only to give you a sad look before continuing up the summit on her own, like they were expecting it of you all along.\n\nYou never find out if she makes it.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"bond",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);