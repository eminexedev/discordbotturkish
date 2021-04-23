const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın!");

  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Kralbent Pro kanal temizleme sistemi")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.send(`Bomba Hazırlanıyor...`);
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
      message.channel.send('Nuked this channel.\nhttps://imgur.com/LIyGeCR');
		} else {
			message.reply('Nuke işlemi iptal edildi!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('zaman aşımına uğradı. Lütfen Daha Sonra Deneyiniz.');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nuke'],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}