require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require('discord.js')
const token = process.env.TOKEN;
const { initializeCommands, handleCommandExecution } = require('./commandHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping
    ]
});

client.commands = initializeCommands(client);

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    await handleCommandExecution(interaction);
});

client.on("error", (error) => {
    console.error(`Error occurred: ${error.message}`);
});

client.on("warn", (warning) => {
    console.warn(`Warning occurred: ${warning}`);
});

client.login(token);