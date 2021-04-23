const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(' <:SaOk:814231296875429918> Kralbent Pro Bot Menüsü')
.setDescription(' <a:Hypesquad1:774552177259577354> Botun İstatistiğini Görmek İçin »  `k!istatistik\`  \n <a:Hypesquad1:774552177259577354> Botun Pingini Görmek İçin » \`k!ping`  \n <a:Hypesquad1:774552177259577354> Botu Davet Etmek İçin » \`k!davet\` ')
.addField(' <a:YanaOk:814232768321814539> Öneri,Fikir için:', 
          ' `k!öner` **yazabilirsin!**')
.addField(' <a:YanaOk:814232768321814539> Şikayet için:',
         ' `k!şikayet <sebep>` ')
message.channel.send(yardım)

};


exports.conf = {
  aliases: ['bot'],
  permLevel: 0
};

exports.help = {
  name: 'bot',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};