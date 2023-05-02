//create default manifest
var manifest = [
    {id:"bg",src:"assets/img/ui/mtnbg.png"},
    {id:"overlay",src:"assets/img/ui/frame.png"},
    {id:"charshadow",src:"assets/img/ui/frame_shadow.png"},
    {id:"seed",src:"assets/img/ui/seed_base.png"},
    {id:"seedglow",src:"assets/img/ui/seed_glow.png"},
    {id:"imbueui",src:"assets/img/ui/imbueui.png"},
    {id:"moteslot",src:"assets/img/ui/mote_sidebar.png"},
    {id:"motedot",src:"assets/img/ui/mote_dot.png"},
    {id:"mountain",src:"assets/img/ui/mountain.png"},
    {id:"trail",src:"assets/img/ui/trail.png"},
    {id:"clippedtrail",src:"assets/img/ui/clippedtrail.png"},
    {id:"littledot",src:"assets/img/ui/littledot.png"},
    {id:"bigdot",src:"assets/img/ui/bigdot.png"},
    {id:"pointer",src:"assets/img/ui/pointer.png"},
    {id:"loud",src:"assets/img/ui/volume-loud.png"},
    {id:"mid",src:"assets/img/ui/volume-mid.png"},
    {id:"quiet",src:"assets/img/ui/volume-small.png"},
    {id:"mute",src:"assets/img/ui/volume-mute.png"},
    {id:"m-loud",src:"assets/img/ui/music-loud.png"},
    {id:"m-mid",src:"assets/img/ui/music-mid.png"},
    {id:"m-quiet",src:"assets/img/ui/music-small.png"},
    {id:"m-mute",src:"assets/img/ui/music-mute.png"},
    {id:"BOND",src:"assets/img/ui/mote_bond.png"},
    {id:"HEAT",src:"assets/img/ui/mote_heat.png"},
    {id:"COLD",src:"assets/img/ui/mote_cold.png"},
    {id:"LIGHT",src:"assets/img/ui/mote_light.png"},
    {id:"EARTH",src:"assets/img/ui/mote_earth.png"},
    {id:"AIR",src:"assets/img/ui/mote_air.png"},
    {id:"darkness",src:"assets/img/ui/blackout.png"},
    {id:"port-angry",src:"assets/img/ports/angry.png"},
    {id:"port-annoyed",src:"assets/img/ports/annoyed.png"},
    {id:"port-confused",src:"assets/img/ports/confused.png"},
    {id:"port-ehehe",src:"assets/img/ports/ehehe.png"},
    {id:"port-fear",src:"assets/img/ports/fear.png"},
    {id:"port-gleeful",src:"assets/img/ports/gleeful.png"},
    {id:"port-gleeful_2",src:"assets/img/ports/gleeful_2.png"},
    {id:"port-halo",src:"assets/img/ports/halo.png"},
    {id:"port-hee",src:"assets/img/ports/hee.png"},
    {id:"port-neutral",src:"assets/img/ports/neutral.png"},
    {id:"port-sad",src:"assets/img/ports/sad.png"},
    {id:"port-stoic",src:"assets/img/ports/stoic.png"},
    {id:"port-ugh",src:"assets/img/ports/ugh.png"},
    {id:"port-verysad",src:"assets/img/ports/verysad.png"},
    {id:"port-gone",src:"assets/img/ports/gone.png"},
    {id:"goodchime",src:"assets/audio/chime.mp3",type:"sound"},
    {id:"button",src:"assets/audio/button.mp3",type:"sound"},
    {id:"damage",src:"assets/audio/damage.mp3",type:"sound"},
    {id:"sadchime",src:"assets/audio/sad-chime.mp3",type:"sound"},
    {id:"midchime",src:"assets/audio/mid-chime.mp3",type:"sound"},
    {id:"bgm",src:"assets/audio/bgm.mp3",type:"sound"}
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