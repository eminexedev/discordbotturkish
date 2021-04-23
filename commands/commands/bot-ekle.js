const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: k!bot-ekle <bot id> <prefix>  '));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('**Bot ekleme isteğiniz alındı.**')
message.delete();
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının eklenmesi istediği bot:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Bot Bilgileri:", type)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('823848477762781186').send(embed2);
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bot-ekle'],
  permLevel: 0 
};
exports.help = {
  name: 'bot-eklet',
  description: 'Botunuzu Bu Sunucuya Ekleyebilirsiniz.',
  usage: 'bot-eklet BOT ID PREFİX'
};