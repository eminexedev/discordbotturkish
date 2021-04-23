const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('kralbent pro öenmli güncelleme ve bakım menüsü')
.setDescription(':green_circle: kullanıma açık demektir. \n :red_circle: kullanıma kapalı demektir.')
.setThumbnail('https://cdn.discordapp.com/attachments/809713377353531413/817491026749947904/b6cdb6a458f1fbf27d78f844e3b77739.webp')
.addField('Güvenlik sistemi', 
          'yapım aşamasındadır ')        
.addField('eğlence menüsü bakıma alınacaktır',
         'lütfen kullanmayınız')
.addField(" <a:kral:774369479705493555> ** Bot Davet**", " [Beni Davet Et](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526)")
.addField(" <a:Like:774711469593460769> ** Oy Ver**","[Buraya Tıkla!](https://top.gg/bot/746736668630843472/vote)")
message.channel.send(yardım)

};


exports.conf = {
  aliases: ['bakım','b','bakımmenü'],
  permLevel: 0
};

exports.help = {
  name: 'bakım-yenilik',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};