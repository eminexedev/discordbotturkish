const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
var yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor('Moderasyon Menüsüne Hoş Geldin!',message.author.avatarURL())
.setDescription(' `k!ban` **etiketlenen kişiyi banlar.** \n `k!mute` **etiketlenen kişiyi susturur.** \n  `k!nuke` **komutunu yazdığınızda kanalı siler ve yeniden oluşturur.** \n  `k!sil <miktar>` **belirlenen miktar kadar mesaj siler.** \n  `k!yavaşmod` **hızlı yazmayı engeller.** \n  `k!sunucutanıt` **sunucunuzu tanıtırsınız.** \n  `k!say` **sunucudaki toplam üyeyi sayar.** ')
.setThumbnail('https://cdn.discordapp.com/attachments/809713377353531413/817491026749947904/b6cdb6a458f1fbf27d78f844e3b77739.webp')
.addField(' | <a:YanaOk:814232768321814539> Öneri,Fikir için:', 
          ' `k!öner` **yazabilirsin!**')
.addField(' | <a:YanaOk:814232768321814539> Şikayet için:',
         ' `k!şikayet <sebep>` ')
.addField(" <a:kral:774369479705493555> ** Bot Davet**", " [Beni Davet Et](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526)")
.addField(" <a:emj:792111735892738089> ** Oy Ver**","[Buraya Tıkla!](https://top.gg/bot/746736668630843472/vote)")
message.channel.send(yardım)

};


exports.conf = {
  aliases: ['mod','moderasyon'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Botun Pingini Gösterir !',
  usage: 'yardım'
};