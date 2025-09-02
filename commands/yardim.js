const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('yardim')
  .setDescription('Tüm komutları listeler');

module.exports.execute = async function(interaction) {
  const commands = interaction.client.commands.map(cmd => `/${cmd.data.name} - ${cmd.data.description}`);
  await interaction.reply(commands.join('\n'));
}
