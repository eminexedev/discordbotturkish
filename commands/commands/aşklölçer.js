exports.run = async (client, msg, args) => {
    let ask=[
      " %3 Gösteriyor hmmmmm sanırım yakın arkadaş değilsiniz ya da ayrıldınız :(",
      " %6 var bi terslik ama siz halledersiniz <3",
      " %9 Bence sorun var tamir edilmesi gereken bir kalp var sanırım...",
      " %12 çok samimi değilsiniz sanırım hıh....",
      " %18 iyi arkadaşlık kötü bitmiş sanırım....",
      " %20 dağılın durum ciddi... ",
      " %23 Yorumsuz kaldım valla konuşun aranızda siz.",
      " %26 ",
      " %29 ",
      " %30 ",
      " %40 ",
      " %50 Yarı yarıya aşk....",
      " %60 ",
      " %70 ",
      " %73 ",
      " %76 ",
      " %79 ",
      " %82 ",
      " %85 ",
      " %88 ",
      " %90 ",
      " %93 ",
      " %94 ",
      " %95 ",
      " %96 ",
      " %97 ufak sorunlar var sanırım bak falımda bile çıktı :))",
      " %98 %2 lik kısma aldırma yaw xd ",
      " %99 nE %1 LİK SIKINTI VAR SANIRIM...",
      " %100 AŞK ANLATILMAZ YAŞANIR DERLER DOĞRUYMUŞ.....",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }