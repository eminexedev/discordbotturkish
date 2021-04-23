const Discord = require("discord.js");
const { get } = require("superagent");

  exports.run = (client, message, args) => {
    try {
        if(!args[0]){
message.channel.send(' **UYARI**\n`Yazı giriniz Türkçe karakter kullanmayınız Örnek: **ı** yerine **i** giriniz.!`') 
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed() 
            .setColor("0x36393E")
            .setAuthor("Trump diyorki..")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed); 
            }, 100);
        });
    } catch(err) {
        console.log(err)  
    }
  }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'trump',
  description: 'Trump twitter komudu',
  usage: 'trump <yazı>'
};