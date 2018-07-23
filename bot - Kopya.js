const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı! Mesaj: ${msg.content} Y: ${msg.author.tag}`);
  client.channels.get("327058504194195457").sendMessage("Yeni Mesaj Alındı! Mesaj: ${msg.content} Y: ${msg.author.tag}`);");
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sıgaraiç') 
    msg.send('Sigara İçiyorum!');
    msg.edit(' :smoking: :cloud: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud: :cloud: ');
    msg.edit(' :smoking: :cloud:  ');
    msg.edit(' :smoking:  ');
    msg.edit(' Sigaram Bitti! Bot İçsin Ama Siz İçmeyin!');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(500);
    msg.channel.sendMessage("100 adet mesaj silindi!");
	 msg.delete(500);
	   msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
