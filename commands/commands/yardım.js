const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Yardım menüsüne hoş geldin!',message.author.avatarURL())
.setTitle(' <:SaOk:814231296875429918> Kralbent Pro Yardım Menüsü')
.setDescription('> <a:Hypesquad1:774552177259577354> Sistemleri Görmek İçin »  `k!sistemler\`  \n > <a:Hypesquad1:774552177259577354> Moderasyon Komutları Görmek İçin » \`k!moderasyon` \n > <a:Hypesquad1:774552177259577354> Eğlence Komutları Görmek İçin » \`k!eğlence\` \n > <a:Hypesquad1:774552177259577354> Bot Komutları Görmek İçin » \`k!bot\` \n > <a:Hypesquad1:774552177259577354> Kullanıcı Komutları Görmek İçin » \`k!kullanıcı\`  ')
.setThumbnail('https://cdn.discordapp.com/attachments/809713377353531413/817491026749947904/b6cdb6a458f1fbf27d78f844e3b77739.webp')
.addField('SPONSORUM:',
'Hazalhost detaylar için k!sponsor')
.addField('önemli güncelleştirme veya bakım vs bu menüden paylaşıyoruz:',
' `k!bakım` yazarak ulaşabilirsin!')
.addField(' | <a:YanaOk:814232768321814539> Öneri,Fikir için:', 
          ' `k!öner` **yazabilirsin!**')        
.addField(' | <a:YanaOk:814232768321814539> Şikayet için:',
         ' `k!şikayet <sebep>` ')
.addField(" <a:kral:774369479705493555> ** Bot Davet**", " [Beni Davet Et](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526)")
.addField(" <a:Like:774711469593460769> ** Oy Ver**","[Buraya Tıkla!](https://top.gg/bot/746736668630843472/vote)")
message.channel.send(yardım)

};

exports.conf = {
  aliases: ['y','yardım','yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};