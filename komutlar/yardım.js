const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "YardımcıBot",
              icon_url: "https://i.hizliresim.com/rOnDgM.png"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/EyyG8z.png"
			},
            title: "YardımcıBot Nedir ?",
            url: "",
            description: "YardımcıBot kolay işlevli bir bottur .",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: "+**Destek**\n+**Yardim**\n+**Değişiklikler**\n+**SunucuBilgi**\n+**Davet**\n+**Ailemiz**\n"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: "+**Temizle**\n+**ban**\n+**duyuruyap**\n+**uyar**\n+**kick**\n",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: "+**kedi**\n+**köpek**\n+**coolresim**\n+**hastebin**\n+**köpekadı**\n+**kediadı**\n+**twerk**\n+**sins-aga**\n"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: "+**kullanıcıbilgim**\n+**avatarım**\n+**ping**\n+**altınlarım**\n+**altın-kontrol**\n+**madencilik**\n"
              },
              {
                name: "Güncel Sürüm",
                value: "v1.0 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/rOnDgM.png",
              text: "© YardımcıBot 2018"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};
