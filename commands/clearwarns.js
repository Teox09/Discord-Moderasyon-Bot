const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

const warnsPath = path.join(__dirname, '../warns.json');
if (!fs.existsSync(warnsPath)) fs.writeFileSync(warnsPath, '{}', 'utf8');

module.exports.data = new SlashCommandBuilder()
  .setName('clearwarns')
  .setDescription('Kullanıcının uyarılarını temizle')
  .addUserOption(opt => opt.setName('target').setDescription('Kullanıcı').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);

module.exports.execute = async function(interaction) {
  const target = interaction.options.getUser('target');
  const warns = JSON.parse(fs.readFileSync(warnsPath, 'utf8'));
  warns[target.id] = [];
  fs.writeFileSync(warnsPath, JSON.stringify(warns, null, 2), 'utf8');
  await interaction.reply(`${target.tag} uyarıları temizlendi.`);
}
