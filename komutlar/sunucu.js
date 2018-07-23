const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}**`, guild.id);
      embed.setColor('RANDOM')
      embed.setTitle('Sunucular')
      embed.setDescription(`**${bot.guilds.size}** tane sunucu var !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bs'],
  permLevel: 0
};

exports.help = {
  name: "sunucu",
  description: "Shows all the servers the bot is in.",
  usage: "sunucu"
};
