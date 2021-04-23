const Discord = require("discord.js");

exports.run = (client, message, args) => {//'Vu4ll#0586
  let mesaj = args.slice(0).join(" ");//zNekStrafe#8806 
  let encode = encodeURI(mesaj);
  if (mesaj.length < 1)
    return message.reply("Resmi atmam için birşey yazmalısın!");
  message.channel.send(
    new Discord.MessageAttachment(
      `https://fortnitefontgenerator.com/img.php?textcolor=FFFFFF&text=${encode}&fontsize=250px`,
      `${mesaj}.png`
    )
  );
};

exports.conf = {
  aliases: ["fornite-yazı", "forniteyazı", "fy", "ft"]
};

exports.help = {
  name: "fortnite-banner",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "yaz <yazdırmak istediğiniz şey>",
  perm: ""
};