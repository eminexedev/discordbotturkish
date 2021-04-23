const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Hata!, Lütfen steam mağazasında olan bir oyun adı yazınız. __örnek__: **k!steam csgo**')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Steam', steampng)
    .setTitle(result[0].name)
    .setThumbnail(results.otherData.imageUrl)
    .addField('> Türleri', results.genres)
    .addField('> Fiyat', `Normal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Desteklediği yazılımlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('> Etiketleri', results.otherData.features, true)
    .addField('Geliştiriciler', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher, true)
    .setColor('RANDOM')
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steam',
  description: 'steamstore',
  usage: 'steamstore'
};