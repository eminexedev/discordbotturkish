const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
exports.run = async (client, message, args) => {
  	if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField(':warning: Uyarı :warning:', '`sunucu tanıt` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.MessageEmbed()
  .setTitle('Sunucu tanıtıldı! ')
  .setDescription('> Sunucun benim destek sunucumda tanıtıldı! [sunucuma gel!](https://discord.gg/ZrPkxDZCdC) \n  > 12 saat Sonra sunucunuzu Tekrardan Tanıtabilirsiniz. ')
  .addField('Sunucunu tanıtabilmek için beni ekle! https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526')
  .setColor('GREEN')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
            .setDescription('**İşte yeni sunucu tanıtıldı!!**')
            .addField('Sunucu Kurucusu', `${message.guild.owner}`)
            .addField(`Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucudakı Üye Sayısı`, message.guild.memberCount, true)
      .addField(` Sunucu Davet Linki`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('832282385629708308').send(embed)
            });
  kullanildii[message.guild.id].sunucutanitildi = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**BAŞARISIZ TANITIM** \n\nBu komut zaten kullanılmış!\n\nSunucunu 12 saate 1 defa tanıtabilirsin!  \n\n[Kralbent development  - Destek Sunucusu](https://discord.gg/ZrPkxDZCdC) \n[Beni Sunucuna davet et!](https://discord.com/oauth2/authorize?client_id=746736668630843472&scope=bot&permissions=805310526)'
            }});
  }
};

//new file > sunucutanıt.json içine {} Yazın

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sunucutanıt'],
    permLevel: 2,
}

exports.help = {
    name: 'sunucunutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}