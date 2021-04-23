const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {

console.log("Bot Giriş Yaptı!");

var randomMesajlar = [

    "👑| Kralbent Pro V 0.3 beta ",
    "📛| Prefixim = k!",
    "🔨| Yeni sistemler",
    client.guilds.cache.size   + " sunucuya hizmet veriyorum :)",
    "👑| VDS SPONSOR: Hazal Hosting | discord.gg/2axuxgpybp"
]


setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`, { type:'WATCHING' })

}, 3 * 4000);

client.user.setStatus("online");
/*
dnd = rahatsız etmeyin
idle = boşda
online = çevrimiçi
ofline = görünmez
*/


}