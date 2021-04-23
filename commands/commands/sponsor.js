const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor('𝐇𝐚𝐳𝐚𝐥 𝐇𝐨𝐬𝐭𝐢𝐧𝐠 | İNTERNET VE BİLİŞİM HİZMETLERİ')
.setThumbnail('https://cdn.discordapp.com/attachments/826362933285224458/833311654296813568/20210409_230821.png')
.setDescription(`> -15 TL'Den Başlayan Fiyatlarla!  \n > -Yüksek İnternet HIZI! \n > -Xenon 5670 İşlemcili Yüksek Performans Sunucular!
> -SAMSUNG 870 EVO M2 SSD Diskler!:
> -Yetkili Alımlarımız Açık!:yldz: 
> -Müşterilerimize Özel Ücretsiz Sunucu Paketleri  `)
.addField('» Verdiği Hizmetler:',
'Intel®️ Xeon®️ X5690 uygun fiyatlı makineler | Ryzen9-3900-xt | Domain hizmeti | Web Site hizmeti |  Fivem Key | Web Hosting')
.addField('**HADİ SENDE BU HIZA KATIL!**',
'[TIKLA!](https://discord.gg/ndkGhKanCp)')
message.channel.send(yardım)

};

exports.conf = {
  aliases: ['s','sponsor','sp'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'bota destek olan sponsorlar',
  usage: 'sponsor'
};