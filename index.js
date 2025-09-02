const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel]
});

client.commands = new Collection();
const commands = [];
const commandsDir = path.join(__dirname, 'commands');
const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const cmd = require(path.join(commandsDir, file));
  if (cmd.data && cmd.execute) {
    client.commands.set(cmd.data.name, cmd);
    commands.push(cmd.data.toJSON());
  }
}

async function deployCommands() {
  try {
    const rest = new REST({ version: '10' }).setToken(config.token);
    await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commands });
    console.log('Komutlar güncellendi.');
  } catch (e) {
    console.error(e);
  }
}

client.once('ready', async () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
  const type = ActivityType[config.statusType] || ActivityType.Playing;
  client.user.setActivity(config.status, { type });
  await deployCommands();
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  const cmd = client.commands.get(interaction.commandName);
  if (!cmd) return;
  try {
    await cmd.execute(interaction);
  } catch (e) {
    console.error(e);
    interaction.reply({ content: 'Komut çalışırken hata oluştu.', ephemeral: true });
  }
});

client.login(config.token);
