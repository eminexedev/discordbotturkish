const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(message.author.id !== "685560149381087248","316161332854390785") {
 return message.reply('Aslan Parçası Bunu Sadece Sahibim Kullanır')
}
message.delete();
message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Eğer Kabul Ediyorsan => `onay` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('TheRenk', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('TheRenk', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};