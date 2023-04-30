//create default manifest
var manifest = [
    {id:"bg",src:"assets/img/ui/mtnbg.png"},
    {id:"overlay",src:"assets/img/ui/frame.png"},
    {id:"charshadow",src:"assets/img/ui/frame_shadow.png"},
    {id:"seed",src:"assets/img/ui/seed_base.png"},
    {id:"moteslot",src:"assets/img/ui/mote_sidebar.png"},
    {id:"motedot",src:"assets/img/ui/mote_dot.png"},
    {id:"BOND",src:"assets/img/ui/mote_bond.png"},
    {id:"HEAT",src:"assets/img/ui/mote_heat.png"},
    {id:"COLD",src:"assets/img/ui/mote_cold.png"},
    {id:"LIGHT",src:"assets/img/ui/mote_light.png"},
    {id:"EARTH",src:"assets/img/ui/mote_earth.png"},
    {id:"AIR",src:"assets/img/ui/mote_air.png"},
    {id:"port-angry",src:"assets/img/ports/angry.png"},
    {id:"port-annoyed",src:"assets/img/ports/annoyed.png"},
    {id:"port-ehehe",src:"assets/img/ports/ehehe.png"},
    {id:"port-fear",src:"assets/img/ports/fear.png"},
    {id:"port-gleeful",src:"assets/img/ports/gleeful.png"},
    {id:"port-gleeful2",src:"assets/img/ports/gleeful_2.png"},
    {id:"port-halo",src:"assets/img/ports/halo.png"},
    {id:"port-hee",src:"assets/img/ports/hee.png"},
    {id:"port-neutral",src:"assets/img/ports/neutral.png"},
    {id:"port-sad",src:"assets/img/ports/sad.png"},
    {id:"port-stoic",src:"assets/img/ports/stoic.png"},
    {id:"port-ugh",src:"assets/img/ports/ugh.png"},
    {id:"port-verysad",src:"assets/img/ports/verysad.png"}
]
//populate manifest from encounter data
for(let i = 0; i < encounters.ids.length; i++){
    let encid = encounters.ids[i];
    let enc = encounters[encid];
    for (const [key, value] of Object.entries(enc.images)) {
        let item = {id:encid + key,src:value};
        manifest.push(item);
    }
}