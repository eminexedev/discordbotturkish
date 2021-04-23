const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Sistemler menüsüne hoş geldin!',message.author.avatarURL())
.setTitle(' <:SaOk:810771925193982012> Kralbent Pro Sistemler Menüsü')
.setDescription('**Merhaba! Buradan Sistemlerime Göz Atabilir Bir Sorun Olduğunda Destek sunucuma gelebilirsin !**')
.addField(' <a:Load:774632716628262922> Ban Sistemi',
         '```k!ban-sistemi```')
.addField(' <a:Load:774632716628262922> Mute Sistemi',
         '```k!mute-sistemi```')
.addField(' <a:Load:774632716628262922> Otorol sistemi',
         '```k!otorol-sistemi``` **intentler kapalı olduğu için kapalı ama siz rol kanal ayarlayın!** ')               
.addField(' <a:Load:774632716628262922> Oylama Sistemi',
         '```k!oylama-sistemi```')
.addField(' <a:Load:774632716628262922> Sa-as Sistemi',
         ' ```k!sa-as aç kapatmak için k!sa-as kapat yazmanız yeterlidir``` ')         
.addField(' <a:YanaOk:810772856577064961> Öneri,Fikir için:', 
          ' `k!öner` **yazabilirsin!**')
.addField(' <a:YanaOk:810772856577064961> Şikayet için:',
         ' `k!şikayet <sebep>` ')        
message.channel.send(yardım)

};


exports.conf = {
  aliases: ['sistemler'],
  permLevel: 0
};

exports.help = {
  name: 'sistemler',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};