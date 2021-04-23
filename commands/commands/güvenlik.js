const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Lütfen bir kanal etiketleyiniz!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    );
  } else {
        let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Lütfen bir kanal etiketleyiniz!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik",
  description: "güvenlik",
  usage: "güvenlik"
};

