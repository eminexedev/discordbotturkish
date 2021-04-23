const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let k = await db.fetch(`güvenlik_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if (!k) return message.channel.send("Güvenlik sistemi sıfırlanmış veya ayarlanmamış!!");
    db.delete(`güvenlik_${message.guild.id}`);
    message.channel.send(`Güvenlik kanalı sıfırlandı!`);
  } else {
    if (!k) return message.channel.send("Güvenlik sistemi sıfırlanmış veya ayarlanmamış!!");
    db.delete(`güvenlik_${message.guild.id}`);
    message.channel.send(`Güvenlik kanalı sıfırlandı!`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sıfırla",
  description: "güvenlik-sıfırla",
  usage: "güvenlik-sıfırla"
};
