const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('ban')
  .setDescription('Kullanıcıyı yasakla')
  .addUserOption(opt => opt.setName('target').setDescription('Banlanacak kullanıcı').setRequired(true))
  .addStringOption(opt => opt.setName('reason').setDescription('Sebep'))
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const reason = interaction.options.getString('reason') || 'Sebep belirtilmedi';
  const member = interaction.guild.members.cache.get(target.id);
  try {
    await member.ban({ reason });
    await interaction.reply(`${target.tag} yasaklandı. (${reason})`);
  } catch (e) {
    console.error(e);
    await interaction.reply('Ban başarısız oldu.');
  }
}
