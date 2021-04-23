const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!").then(m => m.delete(8000))
if(!args[0]) return message.channel.send(" Lütfen Silinicek Mesaj Miktarını Yazın.!").then(m => m.delete(8000))
message.channel.bulkDelete(args[0]).then(() => {
  const embed = new Discord.RichEmbed()
       .setDescription(`Mesajlar Başarılı Bir Şekilde Yok Edildi.`)
        .setImage(`https://media1.tenor.com/images/fde560261da8a964771406d0edb3ef6e/tenor.gif?itemid=8981104`)
        .setFooter(`${message.author.username} Tarafından istendi.`)
        .setColor("BLACK")
        .setTimestamp()
message.channel.send({ embed }).then(m => m.delete(8000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['delete','sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  time: '10 saniye',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'patlat '
};