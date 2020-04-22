const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NzAyMTE3MTE0ODU2ODY1ODYz.XqCyNw.y2bvl_5pyonn5vMhudxi66kAVHE');
client.on('ready', () => {
console.log('The bot is ready');
});
client.on('message', (msg) => {
if (msg.content.includes('bot')) {
    msg.reply('Did you mention me?');
}
});