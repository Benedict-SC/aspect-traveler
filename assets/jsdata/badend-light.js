var id = "badend-light";
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
            text:"And then, abruptly, without warning, the star collapses to the ground behind you.\n\nYou rush over in alarm, but you can't wake her up despite your best efforts.\n\n({ hit zero.)",
            options: [
                {text: "GAME OVER",effect:"none",frameIdx:1,fadeMusic:true}
            ]
        },
        {
            image:"normal",
            text:"You continue on, anyways. You carry her to the summit, all on your own, in the hopes that perhaps you could still complete your journey. It doesn't work. The heavens do not open, no signs appear, there is no miraculous reawakening.\n\nJust coldness and howling wind and silent stone, and the insensate body of the star that you failed.",
            options:[
                {text: "Refresh the browser (F5) to start a new game.",condition:"moteMinimum",conditionMote:"light",conditionValue:100,effect:"none"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);