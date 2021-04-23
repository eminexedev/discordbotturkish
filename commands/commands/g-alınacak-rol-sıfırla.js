const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let c = await db.fetch(`güvenlikalınacak_${message.guild.id}`);
    if (!c) return message.channel.send("Güvenlik rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikalınacak_${message.guild.id}`);
  } else {
    let c = await db.fetch(`güvenlikalınacak_${message.guild.id}`);
    if (!c) return message.channel.send("Güvenlik rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikalınacak_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-remove-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-alınacak-rol-sıfırla",
  description: "güvenlik-alınacak-sıfırla",
  usage: "güvenlik-alınacak-sıfırla"
};
