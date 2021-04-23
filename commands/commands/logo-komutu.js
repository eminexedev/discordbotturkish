const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text="+isim
  const embed = new Discord.MessageEmbed()
  .setColor(RANDOM)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["booking", "bookinglogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'booking-logo',
  description: 'Logo Yaparsınız',
  usage: 'skull-logo <yazı>'
};