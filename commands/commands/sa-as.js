const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
       .setDescription(
            ` • \`k!sa-as aç/kapat\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        );
        message.channel.send(embed);
    return;
    }
    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Hatalı kullanım!!')
        .setDescription(`Örnek: **k!sa-as aç & kapat** yazmalısın.`);
      message.channel.send(embed);
      return;
    }
    let selam = await db.fetch(`sa-as_${message.guild.id}`);
    if (args[0] == "aç") {
      if (selam) {
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("**sistem zaten aktif**");
        message.channel.send(embed);
        return;
      } else {
        db.set(`sa-as_${message.guild.id}`, "Açık");
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle('İşlem Başarılı!')
          .setDescription("Sa-As Sistemi Başarıyla Açıldı!");

        message.channel.send(embed);
      }
    } else if (args[0] == "kapat") {
      db.delete(`sa-as_${message.guild.id}`);
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('İşlem Başarılı!')
        .setDescription("Sa-As Sistemi Başarıyla Kapandı!");

      message.channel.send(embed);
    
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sa-as sistemi"],
  permLevel: 0
};
exports.help = {
  name: "sa-as",
  description: "",
  usage: "sa-as"
};