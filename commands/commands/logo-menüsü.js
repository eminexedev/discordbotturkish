const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var logo = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Kralbent Pro logo menüsü')
.setDescription('Bu Menüden hem logo komutlarına ve banner komutlarına erişebilirsiniz.')
.addField('ÇOK YAKINDA!!!',
'logo komutları ve banner komutları yapım aşamasındadır lütfen sabırla bekleyiniz......')
message.channel.send(logo)

};


exports.conf = {
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'logo',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};