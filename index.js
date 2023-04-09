require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, MessageEmbed } = require('discord.js')
const axios = require("axios");
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

initializeCommands(client);

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