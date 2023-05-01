var id = "ev-11";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Biting cold",
    images:{
        "normal":"assets/img/mockup/snow.png"
    },
    frames:[
        {
            image:"normal",
            text:"The air around you grows cold. You feel it in your bones.",
            options: [
                {text: "Press onwards.",effect:"delta",bond:-1,frameIdx:1},
                {text: "Warm yourself",effect:"delta",heat:-1,frameIdx:2}
            ]
        },
        {
            image:"normal",
            text:"You endure the cold as best as you can. Best to conserve resources. You can bear it for now. (-1 @.)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"You pause to light a flame, and warm yourself around the fire while the worst of the chill recedes. (-1 $.)\n\nAfterwards, you continue onwards.",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);