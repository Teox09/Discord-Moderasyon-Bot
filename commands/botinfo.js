const { SlashCommandBuilder } = require('discord.js');
const os = require('os');

module.exports.data = new SlashCommandBuilder()
  .setName('botinfo')
  .setDescription('Bot hakkında bilgi göster');

module.exports.execute = async function(interaction) {
  await interaction.reply(`Uptime: ${process.uptime().toFixed(0)} saniye\nRAM: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB\nOS: ${os.type()} ${os.arch()}`);
}
