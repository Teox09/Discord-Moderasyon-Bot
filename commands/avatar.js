const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('avatar')
  .setDescription('Kullanıcının avatarını göster')
  .addUserOption(opt => opt.setName('target').setDescription('Kullanıcı'));

module.exports.execute = async function(interaction) {
  const user = interaction.options.getUser('target') || interaction.user;
  await interaction.reply(user.displayAvatarURL({ dynamic: true, size: 1024 }));
}
