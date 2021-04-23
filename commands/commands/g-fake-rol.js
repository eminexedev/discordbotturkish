const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  if (kontrol == "TR_tr") {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("**Lütfen bir rol belirtiniz!**");
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik fake hesaplara verilecek rol <@&${c.id}> olarak ayarlandı!`
    );
  } else {
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("**Lütfen bir rol belirtiniz!**");
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik fake hesaplara verilecek rol <@&${c.id}> olarak ayarlandı!`
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-fake-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-fake-rol",
  description: "güvenlik-sahte-rol",
  usage: "güvenlik-sahte-rol"
};
