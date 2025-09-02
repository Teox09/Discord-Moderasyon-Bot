const { SlashCommandBuilder } = require('discord.js');

module.exports.data = new SlashCommandBuilder()
  .setName('poll')
  .setDescription('Basit anket oluştur')
  .addStringOption(opt => opt.setName('question').setDescription('Soru').setRequired(true))
  .addStringOption(opt => opt.setName('option1').setDescription('Seçenek 1').setRequired(true))
  .addStringOption(opt => opt.setName('option2').setDescription('Seçenek 2').setRequired(true));

module.exports.execute = async function(interaction) {
  const question = interaction.options.getString('question');
  const opt1 = interaction.options.getString('option1');
  const opt2 = interaction.options.getString('option2');
  const msg = await interaction.reply({ content: `📊 ${question}\n1️⃣ ${opt1}\n2️⃣ ${opt2}`, fetchReply: true });
  await msg.react('1️⃣');
  await msg.react('2️⃣');
}
