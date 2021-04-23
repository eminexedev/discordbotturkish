const Discord = require('discord.js');

exports.run = (client, message, args) => {

var embesil = new Discord.MessageEmbed()
.setColor('#c66276')
.setTitle(`${message.author.tag} adlı kullanıcının Profil Fotusu`)
.setAuthor(message.author.username, message.author.avatarURL({ size:1024, dynamic:true, format: 'png'}))
.setDescription('PP Çok Güzelmiş Bana Da Atsana :D')
.setImage(message.author.avatarURL( { size:1024, dynamic:true, format: 'png'} ))
message.channel.send(embesil)

};


exports.conf = {
  aliases: ['user-pp','pp','avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};