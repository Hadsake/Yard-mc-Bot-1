bot.on('message', msg => {
  if (/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return msg.delete()
  .then(() => msg.reply('**Reklam Engellendi:shield:**'));
  });