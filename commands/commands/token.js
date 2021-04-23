const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var hahaha = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL())
.addField('**TOKENİM** → NzQ2NzM2NjY4NjMwODQzNDcy.X0Eqtw._oB3q9wZ9f7VIp_tp45anT_9-os',
         'Güle Güle Kullan :)')
.setImage('https://habbofont.net/font/habbo_new/Tokenim+Senindir.gif')
.setDescription('Fake Tokendir Boşuna Denemeyiniz')
.setFooter('©  Kralbent Pro Tüm Hakları Saklıdır')
message.channel.send(hahaha)

};


exports.conf = {
  aliases: ['token'],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};