const vache = {
    name : "Kiri",
    campus : "Toulouse campus"
}

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${vache.name} from ${vache.campus}`,
    e : "oO",
    T : "U "
}));
