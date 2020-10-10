const discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "s-goodbye",
    category: "moderation",
    usage: "!s-goodbye <#channel>",
    description: "Custom welcome message!",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("you don't have permissions to setleft command!");
        }    

        let channel = message.mentions.channels.first();

        if(!channel) {
            return message.reply("pls mention the channel first!");
        }

        db.set(`leavchannel_${message.guild.id}`, channel.id);

        message.channel.send(`Leave channel has been seted to ${channel}\n**ID CHANNEL:** (${channel.id})`);

    }
}