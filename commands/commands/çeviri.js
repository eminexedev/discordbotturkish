const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Bir hata oluştu tekrar deneyiniz!")
  if(!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("0xe2ff00")
    .setTitle('Kelime başarıyla çevrildi!!!')
    .setThumbnail("https://cdn.discordapp.com/attachments/809713377353531413/825483377502584852/download.jpg")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`, true)
    .addField('Link:', `${link}`)
    .setFooter(message.author.tag  +  ' tarafından kullanıldı')    
          
    message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Bot sunucudan ayrılır.',
  usage: 'gçevir'
};