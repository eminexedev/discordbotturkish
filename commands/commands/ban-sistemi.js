const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Kralbent Pro Ban sistemi')
.setTitle('')
.addField(' <a:ayarlar:810813823912771595> Ban',
         '```k!ban @kişi``` Etiketlenen kişiyi banlar. __Not__: Önce ban log ayarlamalısınız!!')
.addField(' <a:ayarlar:810813823912771595> Ban Yetkili rol',
         '```k!ban-yetkili-rol @ayarlanacak-rol``` Ban yetkilisi ayarlarsınız.')
.addField(' <a:ayarlar:810813823912771595> Ban say',
         '```k!ban-say``` Sunucunuzdaki Banlananların Sayısını Gösterir')
.addField(' <a:ayarlar:810813823912771595> Ban Log ',
         '```k!ban-log #kanal``` Banlananları bi kanalda gösterir.')
message.channel.send(yardım)

};


exports.conf = {
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'ban-sistemi',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};