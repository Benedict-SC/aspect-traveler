var id = "ev-04";
var encounters = encounters || {}
encounters[id] = {
    id:id,
    desc:"Parhelion Sign",
    images:{
        "normal":"assets/img/event/parhelion_sign.png"
    },
    frames:[
        {
            image:"normal",
            text:"As the two of you travel across a snowfield early in the morning, a grand sight appears before you. A halo-like ring, around the resplendent sun, and two lesser suns flanking it. A parhelion.\n\n\"What is it?\" the star asks, and, of course, you tell her.\n\n\"...But what is a parhelion, exactly?\"\n\n...You're not actually sure, you realize.\n\nShe seems unhappy that you can't answer her.",
            options: [
                {text: "Ask what she thinks.",effect:"delta",bond:1,highestStatBranch:true,port:"hee"},
                {text: "Take a better look.",effect:"delta",light:1,frameIdx:1,port:"confused"},
                {text: "Distract her with a race.",effect:"delta",air:1,frameIdx:2,port:"ehehe"}
            ]
        },
        {
            image:"normal",
            text:"You admit you don't know what it is. But the first step to knowing what something is, is to stop and take it in and observe it clearly.\n\nMaybe you don't know what it truly is, but knowing how it looks will give you information, and that information might be what unlocks actual understanding for you, someday, in the future.\n\nPlus, it's really pretty.\n\nThe two of you stop to watch the parhelion for a while. (+1 {)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            image:"normal",
            text:"\"Race you to the other end of this snowfield!\" you say, before bolting off at top speed. (+1 ~)\n\n\"HEY!\" the star shouts, from so far back there's no WAY you won't outrun-\n\nAs it turns out, you cannot in fact outrun a living star. But you tried your best!",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"BOND",
            image:"normal",
            text:"\"It makes me think of... two children, keeping their parent company. Two guardians, protecting their charge.\"\n\nShe shakes her head. \"That's probably not it, is it?\"\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"HEAT",
            image:"normal",
            text:"\"It feels warm and bright. It gives me hope. Maybe someday I'll burn just as brightly in the sky, and give light and heat to everyone I can see. Do you think?\"\n\nYou've never heard of a star that could outblaze the sun, but you think it sounds like a worthy aspiration.\n\n\"It probably won't happen! If a star could burn like the sun, it would be a sun and not a star, and the night would be day rather than night!\"\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"AIR",
            image:"normal",
            text:"She laughs. \"I wanna know what it is! I wish I could just go and fly up real close to it and take a better look!\"\n\nShe shakes her head. \"That's probably not possible, is it? At least, not until we get to the top of this mountain!\"\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"EARTH",
            image:"normal",
            text:"\"It's kinda distracting,\" she shrugs. \"Makes it hard to pay attention to where we're going, is all. Big shiny goober in the sky, hogging all the attention. Kinda blinding too.\"\n\nShe shakes her head. \"I shouldn't blame it for being itself.\"\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"LIGHT",
            image:"normal",
            text:"\"An emanation of the Sun Aspect, maybe? Though I feel like that one got folded into that warm one, in this particular shard, especially in the manifestation of blessings and benevolence... I'm not the best at gestalt decomposition. It has significance of some sort, though. Perhaps it's not a message intended for us.\"\n\nYou're not sure what she means by any of that.\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        },
        {
            id:"COLD",
            image:"normal",
            text:"\"I'm just kind of worried it could be dangerous. It's more or less three suns at once, and that has to be a sign of great power. Something within me deeply fears it.\"\n\nShe shakes her head. \"I'm being silly, aren't I.\"\n\nShe looks happy you asked, though. (+1 @)",
            options:[
                {text: "Continue",effect:"end"}
            ]
        }
    ]
};
encounters.ids = encounters.ids || [];
encounters.ids.push(id);