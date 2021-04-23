const Discord = require('discord.js');

String.prototype.replaceAll = function (find, replace) {
var str = this;
return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

exports.run = async (client, chimp, args) => {
  
if(!args[0]) return chimp.channel.send('Kuş diline çevirmek istediğin kelimeyi yaz.');
if(args.slice(0).join(' ').length <= 5) return chimp.channel.send('En az bir beş harf kullanmalısın.');

let chimped = args.slice(0).join(' ');
let replaced = chimped.replaceAll('a', 'aga').replaceAll('e', 'ege').replaceAll('ı', 'igi').replaceAll('i', 'igi').replaceAll('u', 'ugu').replaceAll('ü', 'ugu').replaceAll('o', 'ogo').replaceAll('ö', 'ogo');
return chimp.channel.send(replaced);

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kuş-dili'],
  permLevel: 0
};
 
exports.help = {
  name: 'kuş-dili-çevirici'
};