const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "k!";
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`•| \`${prefix}oto-rol\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir.**.`
        )

    );
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();

  if (!rol) {
    const embed2 = new Discord.MessageEmbed()
      .setTitle('Hatalı kullanım!')
      .setDescription(`> Örnek Kullanım : **${prefix}oto-rol @rol #kanal**`)
      .setColor("RANDOM");

    return message.channel.send(embed2);
  }

  if (!kanal) {
    const embed3 = new Discord.MessageEmbed()
     .setTitle('Hatalı kullanım!')
      .setDescription(`> Lütfen doğru kullanınız. \nÖrnek Kullanım : **${prefix}oto-rol @rol #kanal şeklinde yazmalısın!**`)
      .setColor("RANDOM");

    return message.channel.send(embed3);
  }
  db.set(`otorolrol_${message.guild.id}`, rol.id);
  db.set(`otorolkanal_${message.guild.id}`, kanal.id);

  const embed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle('Başarılı!')
    .setDescription(`> Artık Gelen kişiye <@&${rol.id}> (@${rol.name}) rolü verilecek, Oto rol kanalı ise <#${kanal.id}> (#${kanal.name}) Olarak Ayarlandı!`
    );

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol"],
  permLevel: 0
};

exports.help = {
  name: "otorol",
  description: "",
  usage: "otorol"
};