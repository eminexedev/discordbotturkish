const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const kralbentpro = new Discord.MessageEmbed()
            .setDescription(`Şikayetini yazmalısın örnek **k!şikayet <şikayet>**`)
            .setColor('#ff0000')
            return message.channel.send(kralbentpro)
        }

        // Zaman
        var zaman = new Date(); 
        var codemarefizaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun İnvitesi İçin
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const codemarefisikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adlı Sunucudan ${message.author} Kişisi Bot Hakkında Şikayette Bulundu, __şikayetiniz__ - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**kralbent pro şikayet sistemi**`)
                .setFooter(codemarefizaman)
                client.channels.cache.get('826363007285067787').send(codemarefisikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Şikayet','Report','ŞİKAYET','REPORT','report'],
    permLevel: 0
}

exports.help = {
    name: 'şikayet'
}