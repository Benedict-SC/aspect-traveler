var id = "ending";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"The top of the mountain",
    images:{
        "normal":"assets/img/mockup/encountery.png"
    },
    frames:[
        {
            image:"normal",
            text:"Placeholder. Ending to come.",
            options: [
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);