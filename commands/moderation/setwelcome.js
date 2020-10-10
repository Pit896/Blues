const discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "s-welcome",
    category: "moderation",
    usage: "!s-welcome <#channel>",
    description: "Custom welcome channel!",
    run: async (client, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("you don't have permissions to setwelcome command!");
    }

        let channel = message.mentions.channels.first();

        if(!channel) {
            return message.reply("pls mention the channel first!");
        }

        db.set(`welchannel_${message.guild.id}`, channel.id);

        message.channel.send(`Welcome channel has been seted to ${channel}\n**ID CHANNEL:** (${channel.id})`);

    }
}