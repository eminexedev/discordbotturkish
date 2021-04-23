const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const kralbentpro = new Discord.MessageEmbed()
            .setDescription(`Önerini yazmalısın örnek **k!öneri <önerin>**`)
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
                    **${message.guild.name}** Adlı Sunucudan ${message.author} Kişisi Bot Hakkında Öneride Bulundu, __Önerisi__ - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**kralbent pro öneri sistemi**`)
                .setFooter(codemarefizaman)
                client.channels.cache.get('826363024281305089').send(codemarefisikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['öner','öneri'],
    permLevel: 0
}

exports.help = {
    name: 'öneri'
}