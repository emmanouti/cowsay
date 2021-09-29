const vache = require('./information.js')
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${vache.name} from ${vache.campus}`,
    e : "oO",
    T : "U "
}));