const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"Yazı-Tura Attım Senin İçin Ve Gelen Taraf : **__TURA__**",
	"Yazı-Tura Attım Senin İçin Ve Gelen Taraf : **__YAZI__**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "Yazı-Tura Attım Senin İçin Ve Gelen Taraf : **__YAZI__**") {
		
		 const embedyazı = new Discord.MessageEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png")
        .setFooter('Tüm eğlence komutları için: k!eğlence')
		message.channel.send(embedyazı);
		
	} else if (cevap === "Yazı-Tura Attım Senin İçin Ve Gelen Taraf : **__TURA__**") {
		
		const embedtura = new Discord.MessageEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1TL_reverse.png/200px-1TL_reverse.png")
        .setFooter('Tüm eğlence komutları için: k!eğlence')
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazı-tura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};