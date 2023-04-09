const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scores')
        .setDescription('Provides scores for games'),
    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
};

// client.on("messageCreate", async (msg) => {
//     console.log(`Received message: ${msg.content}`)
//     // Check if the message starts with "!scores"
//     if (msg.content.startsWith("!scores")) {
//         try {
//             const response = await axios.get(`${apiURL}/games?year=2023&seasonType=regular`, {
//                 headers: { "Authorization": `Bearer ${apiKey}` },
//             });

//             const games = response.data;
//             const embed = new MessageEmbed()
//                 .setTitle("College Football Scores")
//                 .setColor(0x00ae86);

//             games.forEach((game) => {
//                 embed.addField(`${game.home_team} vs ${game.away_team}`, `${game.home_points} - ${game.away_points}`);
//             });

//             msg.channel.send({ embeds: [embed] });
//         } catch (error) {
//             console.error(`Error occurred while fetching scores: ${error.message}`)
//         }
//     }
//     // Add more commands for stats queries here

// });