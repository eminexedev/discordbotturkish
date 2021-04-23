const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "k!";
  

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription( `Otorol sıfırlamak için \`${prefix}otorol-sıfırla\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`);

    message.channel.send(embed);
    return;
  }
const sistem = await db.fetch(`otorolrol_${message.guild.id}`);
if(!sistem) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Hata!')
  .setDescription(`**Oto Rol Sistemi Aktif Olmadığı için sıfırlama işlemi gerçekleştirilemedi.**`));
db.delete(`otorolrol_${message.guild.id}`);
db.delete(`otorolkanal_${message.guild.id}`);
const embedi =  new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Oto-Rol Sistemi Başarıyla sıfırlandı tekrar kurmak için **k!otorol** yazınız.`);
  return message.channel.send(embedi);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol-kapat"],
  permLevel: 0
};

exports.help = {
  name: "otorol-sıfırla",
  description: "",
  usage: "otorol-kapat"
};