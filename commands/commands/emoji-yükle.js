const Discord = require('discord.js');

exports.run = function(client, message, args) {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return
  const embed = new Discord.MessageEmbed()
  .setDescription('**Yönetici** izninin olması lazım dostum!')
   message.channel.send(embed)
  let guild = message.guild
  let [link, ad] = args.join(" ").split(" - ");
  if (!link) return 
  const eembed = new Discord.MessageEmbed()
  .setDescription('Lütfen link yaz **örnek kullanım : k!emoji-yükle (emoji link) - deneme**')
  message.channel.send(eembed)
  
  
  
  guild.emojis.create(link, ad)
    .then(emoji => message.channel.send(`${emoji.name} adında emoji oluşturuldu. (${emoji})`))
    .catch(console.error);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 3
};

exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emojiyükle <link> - <isim>'
};
