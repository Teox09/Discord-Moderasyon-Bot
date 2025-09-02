const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('say')
  .setDescription('Bot mesajı tekrar eder')
  .addStringOption(opt => opt.setName('message').setDescription('Mesaj').setRequired(true));

module.exports.execute = async function(interaction) {
  const msg = interaction.options.getString('message');
  await interaction.reply(msg);
}
