const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('mute')
  .setDescription('Kullanıcıyı sustur')
  .addUserOption(opt => opt.setName('target').setDescription('Susturulacak kullanıcı').setRequired(true))
  .addIntegerOption(opt => opt.setName('minutes').setDescription('Süre (dakika)').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const minutes = interaction.options.getInteger('minutes');
  const member = interaction.guild.members.cache.get(target.id);
  try {
    await member.timeout(minutes * 60 * 1000, 'Mute komutu ile');
    await interaction.reply(`${target.tag} ${minutes} dakika susturuldu.`);
  } catch (e) {
    console.error(e);
    await interaction.reply('Mute başarısız oldu.');
  }
}
