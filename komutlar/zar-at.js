const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Zar Atılıyor...').then(message => {
      var sayılar = ['**Çıkan Sayı: 1**','**Çıkan Sayı: 2**','**Çıkan Sayı: 3**','**Çıkan Sayı: 4**','**Çıkan Sayı: 5**','**Çıkan Sayı: 6**'];
      var sayı = sayılar[Math.floor(Math.random() * sayılar.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zar-at', 'zar-at', 'at-zar', 'atbi-zar'],
  permLevel: 0
};

exports.help = {
  name: 'zar-at',
  description: 'Espri yapar.',
  usage: '-zar-at'
};