const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Botun ping değerini göster');

module.exports.execute = async function(interaction) {
  await interaction.reply(`🏓 Ping: ${interaction.client.ws.ping}ms`);
}
