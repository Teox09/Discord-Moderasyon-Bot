const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('kick')
  .setDescription('Kullanıcıyı at')
  .addUserOption(opt => opt.setName('target').setDescription('Atılacak kullanıcı').setRequired(true))
  .addStringOption(opt => opt.setName('reason').setDescription('Sebep'))
  .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const reason = interaction.options.getString('reason') || 'Sebep belirtilmedi';
  const member = interaction.guild.members.cache.get(target.id);
  try {
    await member.kick(reason);
    await interaction.reply(`${target.tag} atıldı. (${reason})`);
  } catch (e) {
    console.error(e);
    await interaction.reply('Kick başarısız oldu.');
  }
}
