const Discord = require('discord.js');
const client = new Discord.Client();
console.log(process.env);
client.login('discord_token');
client.on('ready', () => {
console.log('The bot is ready');
});
client.on('message', (msg) => {
if (msg.content.includes('bot')) {
    msg.reply('Did you mention me?');
}
});