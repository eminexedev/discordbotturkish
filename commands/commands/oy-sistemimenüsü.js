const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var oylama = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Kralbent Pro Oylama Sistemi')
.setDescription('**YAPIM AŞAMASINDA**')
message.channel.send(oylama)

};


exports.conf = {
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'oylama-sistemi',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};