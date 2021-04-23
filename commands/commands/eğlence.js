const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var eğlence = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL())
.setTitle('Kralbent Pro Eğlence Menüsü')
.setDescription(' <a:YesilAtes:800386114611445770> `k!kuş-dili <yazı>` = yazınızı kuş diline çevirirsiniz. \n  <a:YesilAtes:800386114611445770> `k!token`= botun tokenini alırsınız.  \n  <a:YesilAtes:800386114611445770> `k!balıktut`= balık tutarsınız  \n  <a:YesilAtes:800386114611445770> `k!aşkölçer`= aşkınızı ölçersiniz.  \n  <a:YesilAtes:800386114611445770> `k!dans`= dans eden rakam atar.  \n  <a:YesilAtes:800386114611445770>  `k!buz-banner`= yazıyı bannerı a çevirirsiniz.  \n  <a:YesilAtes:800386114611445770> `k!fortnite-banner`= yazdığınız yazıyı fortnite stiline çevirirsiniz. \n  <a:YesilAtes:800386114611445770> `k!çeviri <kelime>`= istediğiniz kelimeyi transtdate den çevirir.  \n  <a:YesilAtes:800386114611445770> `k!yazı-tura`= yazı veya tura atarsınız.  \n  <a:YesilAtes:800386114611445770> `k!steam <oyun ismi>` = steam de bir oyun aratır.  \n  <a:YesilAtes:800386114611445770> `k!trump` = trump a tweet attırırsınız.')         
.setImage('https://images-ext-2.discordapp.net/external/9KgRBhM3Ov0urvE4QifJceeI9y8ix5oKqwSLbBDX2A8/https/habbofont.net/font/habbo_new/Kralbent%2BPro.gif')
.setFooter('©  Kralbent Pro Tüm Hakları Saklıdır')
message.channel.send(eğlence)

};


exports.conf = {
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};