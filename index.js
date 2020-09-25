const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.discord_token);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const textChannel = newMember.guild.channels.cache.find(channel => channel.name === 'железка-пишет-тут')

    if (oldMember.mute != newMember.mute || newMember.deaf != newMember.deaf) {
        return;
    }

    if (newMember.channel && newMember.channel.name) {
        var newUserChannel = newMember.channel.name;

        if (newUserChannel == 'Попизделочная') {
            textChannel.send(`<@${newMember.member.user.id}> has joined the channel`);
        }
    }
});