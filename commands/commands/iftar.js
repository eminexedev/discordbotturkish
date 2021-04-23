const Discord = require("discord.js");
const axios = require('axios');
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {

var tokenler = ["apikey 525r0ri4ni4tOMjLrXjK3b:4ylmc5NALreQMXCsT2LB3U", "apikey 0yAdFIiiKHiwFllD0jYrhO:2HhXE7IBlL7x8v2JdeT2B9"]
    var tokenler = tokenler[Math.floor(Math.random() * tokenler.length)]


    const city = args[0];
    if (!city) {
        const sehiryok = new Discord.MessageEmbed()
        .setDescription(`❌ Bir Şehir Adı Belirtmelisin!`)
        .setColor("RED")
        return message.channel.send(sehiryok)
    }



    
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": `${tokenler}`
        }
        
    }).then(res => {
        const iftarembed = new Discord.MessageEmbed()
        .setTitle(`${city} İftar Saati`)
        .setAuthor(`RAMAZAN İFTAR SAYACI`)
        .setColor("GREEN")
        .setDescription(`> 🕒 ${city} İçin İftar Saati : **${res.data.result[0].time}**` + "\r\n" + `> ${city} İçin İftara Kalan Süre: **${res.data.result[0].hour} ${res.data.result[0].min}**`)
        .addField('Not:',
        'eğer sayaçta **undefined** yazıyorsa lütfen güncellenmesini bekleyiniz. Veriler apiden alınmaktadır geç gelebilir.')
        .setImage('https://cdn.discordapp.com/attachments/826362933285224458/833059605466578974/2Q.png')
        message.channel.send(iftarembed)

        
    }).catch(err => {
        message.channel.send('Bir Hata İle Karşılaşıldı. Hata Sebebi = Türkçe Harfler Kullanmak, Çözümü = İngilizce Harfler Kullanmak.');
        console.log(err);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "iftar"
};