const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('serverinfo')
  .setDescription('Sunucu bilgilerini göster');

module.exports.execute = async function(interaction) {
  const { guild } = interaction;
  const embed = new EmbedBuilder()
    .setTitle(guild.name)
    .addFields(
      { name: 'Üye sayısı', value: `${guild.memberCount}`, inline: true },
      { name: 'Oluşturulma tarihi', value: guild.createdAt.toDateString(), inline: true }
    )
    .setThumbnail(guild.iconURL());
  await interaction.reply({ embeds: [embed] });
}
