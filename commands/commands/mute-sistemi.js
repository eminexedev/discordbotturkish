const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Kralbent Pro Mute sistemi')
.setDescription(' <a:Zil:799551668827193374> **Mute** Etiketlenen Kişiyi Susturur.```k!mute @kişi``` \n <a:Zil:799551668827193374> **Unmute** Susturulan Kişinin mutesini kaldırır. ```k!unmute @kişi```')
message.channel.send(yardım)

};


exports.conf = {
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'mute-sistemi',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};