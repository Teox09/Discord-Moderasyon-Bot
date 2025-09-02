const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('purge')
  .setDescription('Mesajları toplu sil')
  .addIntegerOption(opt => opt.setName('count').setDescription('Silinecek mesaj sayısı (1-100)').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

module.exports.execute = async function(interaction) {
  const count = interaction.options.getInteger('count');
  if (count < 1 || count > 100) return interaction.reply({ content: '1-100 arası sayı girin.', ephemeral: true });
  const messages = await interaction.channel.messages.fetch({ limit: count });
  await interaction.channel.bulkDelete(messages, true);
  await interaction.reply({ content: `${messages.size} mesaj silindi.`, ephemeral: true });
}
