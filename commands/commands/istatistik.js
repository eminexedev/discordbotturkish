const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(" ©  Kralbent Pro Tüm Hakları Saklıdır.", client.user.avatarURL())
    .addField(" > **Botun Sahibi** ", "<@316161332854390785> ")
    .addField(" > **Geliştirici** ", "<@685560149381087248>", "<@407486004505870336> ")
    .addField(" > **Ping Değerim**"," {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping))
    .addField(" > **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB")
    .addField(" > **Çalışma süresi**", seksizaman)
    .addField(" > **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
    .addField(" > **Sunucular**", client.guilds.cache.size.toLocaleString())
    .addField(" > **Kanallar**", client.channels.cache.size.toLocaleString())
    .addField(" > **Discord.JS sürüm**", "v" + Discord.version)
    .addField(" > **Node.JS sürüm**", `${process.version}`)
    .addField(" > **Seste Olduğum Sunucu Sayısı**", client.voice.connections.size)
    .addField(" > **Komut Sayısı**", client.commands.size)
    .addField(" > **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField(" > **Bit**", `\`${os.arch()}\``)
    .addField("> **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .setImage('https://images-ext-2.discordapp.net/external/9KgRBhM3Ov0urvE4QifJceeI9y8ix5oKqwSLbBDX2A8/https/habbofont.net/font/habbo_new/Kralbent%2BPro.gif');
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i",'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};