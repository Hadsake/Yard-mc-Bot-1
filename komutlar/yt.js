const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlari Gonderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .addField("**Eğlence ve Kullanıcı Komutları:**", `!banned = Dene ve Görg? \!youtube = Youtube kanalımın linkini bulabilir siniz. \!website = Web Sitemizin linki bulabilirsiniz. \!avatarım = Avatarınınızı Gösterir. \!herkesebendençay = Herkese Çay Alırsınız. \!koş = Koşarsınız.\!çayiç = Çay İçersiniz. \!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \!çayaşekerat = Çaya Şeker Atarsınız. \!yumruh-at = Yumruk Atarsınız. \!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nghg?sunucuresmi = BOT Sunucunun Resmini Atar. \nghg?sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
    .addField("**Yetkilisi Komutlar**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \!kick  = İstediğiniz Kişiyi Sunucudan Atar. \!unban = İstediğiniz Kişinin Yasağını Açar. \nghg?sustur = İstediğiniz Kişiyi Susturur. \nghg?oylama = Oylama Açar. \nghg?duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana Komutlar**", "g?yardım = BOT Komutlarını Atar. \g?bilgi = BOT Kendisi Hakkında Bilgi Verir. \g?ping = BOT Gecikme Süresini Söyler. \g?davet = BOT Davet Linkini Atar. \g?istatistik = BOT İstatistiklerini Atar.")
    .addField("**Yapımcı**", " **ibrahim#9834** ")
    .setFooter('**--------------------------**')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'sq',
  description: 'Botun davet linkini gönderir.',
  usage: 'sq'
};
