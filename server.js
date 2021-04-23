const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, official_bymayfe } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
const db = require("quick.db");
require('./util/eventHandler.js')(client);

//COMMAND HANDLER
var commandtable = new AsciiTable('Kralbent Pro Commands');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "❌")
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === official_bymayfe) permlvl = 4;
  return permlvl;
};
//sa-as//
client.on("message", async message => {
  const walaska = message.content.toLocaleLowerCase();

  if (
    walaska  === "selam" ||
    walaska  === "sa" ||
    walaska  === "Sa" ||
    walaska  === "selamün aleyküm" ||
    walaska  === "selamun aleyküm" ||
    walaska  === "slm" ||
    walaska  === "sea"
  )
  {
    if (db.fetch(`sa-as_${message.guild.id}`)) {
      message.reply(
        new Discord.MessageEmbed()

          .setDescription(
            `${message.author} Aleyküm Selam, Hoş Geldin :wink: `
          )
          .setColor("RANDOM")

      );
    }
  }
});

   //komudu açma döverim :)
  //yazıyo
  //client.on('ready', ()=>{
 //   client.channels.cache.get('827485516487720970').startTyping()
  //  }) 
  

//etiket Prefix

client.on("message", async msg => { 
                const as = require('./config.json')
                const dcskelime = [client.user.id, client.user.username, "<@"+client.user.id+">"];
                if (dcskelime.some(dcss => msg.content.includes(dcss))) {
                  msg.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle('KRALBENT PRO')
                    .setDescription(`🖐 **Merhaba ${msg.author} Beni Tercih Edip Kullandığın İçin Teşekkür Ederim.**`)
                    .addField("**__Prefix :__**", "**`K!`**")
                    .addField(`**Destek Sunucuma Gelmek İçin :**`, `[Destek Sunucum](https://discord.gg/nuNdhSyJgs)`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/790268201756786692/810223802373898270/390fdc99bc1f0ef1d560ac1140ce3c7f.webp')
                    .setColor('RANDOM')
                  )
                }})

                client.on("guildMemberAdd", async member => {

                  let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);
                  let rol = await db.fetch(`otorolrol_${member.guild.id}`);
                
                  if (!kanal) return;
                  if (!rol) return;
                
                  let user = client.users.cache.get(member.id);
                
                  client.channels.cache.get(kanal).send(
                  new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTitle(`${client.user.username} | **Oto Rol Sistemi**`)
                  .setTimestamp()
                  .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
                  .setDescription(`Sunucuya Hoşgeldin **${member}** (${member.user.tag})`))
                  
                  member.roles.add(rol)
                });

                //giriş-çıkış
//client.on('guildCreate', async guild => {  client.channels.cache.get('826362961232265226').send(`**${guild}**, isimli sunucuya eklendim!`)})

//client.on('guildDelete', async guild => {  client.channels.cache.get('826362975581372428').send(`**${guild}**, isimli sunucudan atıldım.`)})

const Topgg = require('@top-gg/sdk')

const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0NjczNjY2ODYzMDg0MzQ3MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5MTgzMDI1fQ.DYu29Nl7Zmr2vtGJjHEl6PxJp_4Gy3Sn5jDnTeVPKZY')

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size})
}, 1800000) // post every 30 minutes

client.on('guildCreate', async (guild, args) => {
  
  let WCS = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle(`${guild.name} Adlı Sunucusuna Eklendim!`)
  .setDescription(`
  **__Sunucu Bilgileri__**
  Sunucu Adı : \`${guild.name}\`
  Sunucu ID : \`${guild.id}\`
  Sunucu Bölgesi : **${guild.region}**
  Sunucu Üye Sayısı : \`${guild.memberCount}\``)
  
  client.channels.cache.get('826362961232265226').send(WCS);
  });
  
  client.on('guildDelete', guild => {
    
  let WCS = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle(`${guild.name} Adlı Sunucudan Atıldım!`)
  .setDescription(`
  **__Sunucu Bilgileri__**
  Sunucu Adı : \`${guild.name}\`
  Sunucu ID : \`${guild.id}\`
  Sunucu Bölgesi : **${guild.region}**
  Sunucu Üye Sayısı : \`${guild.memberCount}\``)
  
  client.channels.cache.get('826362975581372428').send(WCS);
  
  });

  client.on("message", msg => {
    var kanal = client.channels.cache.get("833342151102300191")
    if(msg.channel.type === "dm") {
    if(msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} Dm`)
    .setTimestamp()
    .setColor("RED")
    .setThumbnail(`${msg.author.avatarURL()}`)
    .addField("Gönderen", msg.author.tag)
    .addField("Gönderen ID", msg.author.id)
    .addField("Gönderilen Mesaj", msg.content)
    kanal.send(botdm)
    
    }
    if(msg.channel.bot) return;
    });

client.on('message', (message) => {
 //AFK
 if (db.has(message.author.id + '.afk')) {
   const embed1 = new Discord.MessageEmbed()
   .setDescription(`** :wave: Tekrardan Merhaba ${message.author} Seni Tekrardan Görmek Ne Güzel :blush:**`)
   .setColor('RANDOM')
  message.channel.send(embed1);
  db.delete(message.author.id + '.afk');
  db.delete(message.author.id + '.messageafk');
 }
 if (message.content.startsWith('k!afk')) {
   let sebep = message.content.split(" ").slice(1).join(" ")
   
     if(!sebep) {
    sebep = "Sebep Belirtilmedi"
  }
     
   const embed = new Discord.MessageEmbed()
   .setDescription(`**:sleeping: ${message.author} AFK Moduna Geçildi! Seni Etiketleyen Kişilere Müsait Olmadığını Ve Sebebi Olarakta ` + "`" + `${sebep}` + "`" +  `Olduğunu Söyleyeceğim :kissing_heart:
   
   AFK Modundan Çıkmak İçin Tek Yapman Gereken Herhangi Bir Mesaj Yazmak :smirk: **`)
   .setColor('RANDOM')
   
  message.channel.send(
   embed
  );
  
  db.set(message.author.id + '.afk', 'true');
  db.set(
   message.author.id + '.messageafk',
   message.content.split(' ').slice(1)
  );
  
  let sebepdb = db.fetch(`afksebep_${message.guild.id}_${message.author.id}`) 
  db.set(`afksebep_${message.guild.id}_${message.author.id}`, sebep)
 }

});

client.on('message', (message) => {

 message.mentions.users.forEach((user) => {
  if (message.author.bot) return false;

  if (
   message.content.includes('@here') ||
   message.content.includes('@everyone')
  )
   return false;
  if (db.has(user.id + '.afk')) {
    let sebepdb = db.fetch(`afksebep_${message.guild.id}_${user.id}`) 
    const embedafk = new Discord.MessageEmbed()
    .setDescription(`** :confused: ${message.author} Etiketlemeye Çalıştığın Kişi Şuan AFK Modunda Ve Şuan Müsait Değil :sweat_smile:**` + "\r\n" + "\r\n" +
                        
                    
                    
   " :scroll: Sebep:" + "`" + `${sebepdb}` + "`")
    .setColor('RANDOM')
       message.channel.send(
    embedafk
   );
  }

 });
});


client.on('ready', () => {//v12 dir
  setInterval(() => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Anlık bilgilerim!!")//kozmos
  .setColor("RANDOM")//west
  .setDescription(client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)  +   ' **Kullanıcı sayısı** ')
  .addField(" **Sunucu sayısı:**",
            + client.guilds.cache.size.toLocaleString())
  client.channels.cache.get("826363093977530398").send(embed)//kanal id deisin
}, 1000 * 60 * 10 )//su an 1 saatte bir atıyor 10 dk da yapmak için  1000 * 60 * 10 ile deistirin
});

//otorol
 client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.roles.add(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.cache.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.MessageEmbed()
    .setDescription(`> Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi,Hoş Geldin Dostum!`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})  


  
client.login(config.token);