const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

const warnsPath = path.join(__dirname, '../warns.json');
if (!fs.existsSync(warnsPath)) fs.writeFileSync(warnsPath, '{}', 'utf8');

module.exports.data = new SlashCommandBuilder()
  .setName('warn')
  .setDescription('Kullanıcıya uyarı ver')
  .addUserOption(opt => opt.setName('target').setDescription('Uyarılacak kullanıcı').setRequired(true))
  .addStringOption(opt => opt.setName('reason').setDescription('Sebep'))
  .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const reason = interaction.options.getString('reason') || 'Sebep belirtilmedi';
  const warns = JSON.parse(fs.readFileSync(warnsPath, 'utf8'));
  if (!warns[target.id]) warns[target.id] = [];
  warns[target.id].push({ reason, date: new Date() });
  fs.writeFileSync(warnsPath, JSON.stringify(warns, null, 2), 'utf8');
  await interaction.reply(`${target.tag} uyarıldı. (${reason})`);
}
