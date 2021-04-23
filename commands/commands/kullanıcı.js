const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Yardım menüsüne hoş geldin!',message.author.avatarURL())
.setTitle(' <:SaOk:810771925193982012> Kralbent Pro Kullanıcı Menüsü')
.setDescription(' <a:bosta:810791291431813130> Avatarınızı Görmek İçin »  `k!avatar\`  \n <a:bosta:810791291431813130> Afk Olmak İçin » \`k!afk <sebep>`')
.addField(' <a:YanaOk:810772856577064961> Öneri,Fikir için:', 
          ' `k!öner` **yazabilirsin!**')
.addField(' <a:YanaOk:810772856577064961> Şikayet için:',
         ' `k!şikayet <sebep>` ')
message.channel.send(yardım)

};


exports.conf = {
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};