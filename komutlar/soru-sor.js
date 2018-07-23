const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <question fjdksf>
  if(!args[2]) return message.reply("Lütfen tam bir soru sorun");
  let replies = ["Evet.", "Hayır.", "Bilmiyorum ki.", "Sonra tekrar sor canım.","Bilemiyorum öyle mi?","Öyle olamaz o ya.","Hmm anlamadım.","Hiç işte öyle.","İyiyim sen nasılsın dostum?"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0xa447aa)
  .addField("Soru", question)
  .addField("Cevap", replies[result])
  .setFooter('ibrahim#9834 ')
  .setTimestamp();
  message.react('✅')
  message.channel.send(ballembed);



}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'soru-sor',
  description: 'Bota soru sorarsınız.',
  usage: 'soru-sor'
};