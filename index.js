const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.discord_token);
client.on('ready', () => {
console.log('The bot is ready');
});
client.on('message', (msg) => {
if (msg.content.includes('bot')) {
    msg.reply('Did you mention me?');
}
});