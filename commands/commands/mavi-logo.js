const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://habbofont.net/font/palooza_blue/"+isim+".gif"
  const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mavilogo"],
  permLevel: 0
};
exports.help = {
  name: 'buz-banner',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};