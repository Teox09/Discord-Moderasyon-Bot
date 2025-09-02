const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('userinfo')
  .setDescription('Kullanıcı bilgilerini göster')
  .addUserOption(opt => opt.setName('target').setDescription('Kullanıcı'));

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target') || interaction.user;
  const member = interaction.guild.members.cache.get(target.id);
  const embed = new EmbedBuilder()
    .setTitle(`${target.username} bilgileri`)
    .addFields(
      { name: 'ID', value: target.id },
      { name: 'Katılma tarihi', value: member.joinedAt.toDateString() }
    )
    .setThumbnail(target.displayAvatarURL());
  await interaction.reply({ embeds: [embed] });
}
