const Discord = require('discord.js');

exports.run = (client, message, args) => {

var davetembed = new Discord.MessageEmbed()
.setColor('RANDOM')
.addField(" :calling: **Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526)")
.addField(" :calling: **Bot Davet 0 perm link**","[Davet Et](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=0)")
.addField(" :calling: **Destek Sunucusu**", "[KATIL](https://discord.gg/nuNdhSyJgs)")
.addField(" :calling: **Oy Ver**","[Oy Ver](https://top.gg/bot/746736668630843472/vote)")
message.channel.send(davetembed)

};


exports.conf = {
  aliases: ['davet','destek','invite'],
  permLevel: 0
};

exports.help = {
  name: 'Davet',
  description: 'Botu Daver Eder',
  usage: 'davet'
};