const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('unmute')
  .setDescription('Susturmayı kaldır')
  .addUserOption(opt => opt.setName('target').setDescription('Kullanıcı').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const member = interaction.guild.members.cache.get(target.id);
  try {
    await member.timeout(null);
    await interaction.reply(`${target.tag} unmute edildi.`);
  } catch (e) {
    console.error(e);
    await interaction.reply('Unmute başarısız oldu.');
  }
}
