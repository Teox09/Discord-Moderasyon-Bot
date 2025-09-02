const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('slowmode')
  .setDescription('Kanal için yavaş mod ayarla')
  .addIntegerOption(opt => opt.setName('seconds').setDescription('Yavaş mod süresi (saniye)').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels);

module.exports.execute = async function(interaction) {
  const seconds = interaction.options.getInteger('seconds');
  try {
    await interaction.channel.setRateLimitPerUser(seconds);
    await interaction.reply(`Yavaş mod ${seconds} saniye olarak ayarlandı.`);
  } catch (e) {
    console.error(e);
    await interaction.reply('Slowmode ayarlanamadı.');
  }
}
