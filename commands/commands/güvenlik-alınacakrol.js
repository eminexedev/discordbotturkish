const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("Lütfen bir rol yazınız örnek: **k!güvenlik-alınacak-rol @rol** ");
    db.set(`güvenlikalınacak_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik rolü başarıyla <@&${c.id}> ayarlandı!`
    );
  } else {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("Lütfen bir rol yazınız örnek: **k!güvenlik-alınacak-rol @rol**");
    db.set(`güvenlikalınacak_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik rolü başarıyla <@&${c.id}> ayarlandı!`
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-remove-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-alınacak-rol",
  description: "güvenlik-rol",
  usage: "güvenlik-rol"
};