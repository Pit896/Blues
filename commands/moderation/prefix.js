const discord = require('discord.js');

const db = require('quick.db');
const { default_prefix } = require('../../bot_config/config.json');


module.exports = {
    name: "prefix",
    category: "moderation",
    usage: "!prefix <new prefix>",
    description: "Set your custom server Blues prefix",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("you don't have permission to do that!");
        }

        if(!args[0]) {
            return message.reply("you need to provide a prefix to run this command!");
        }

        if(args[1]) {
            return message.reply("you can't set double prefix!");
        }

        if(args[0].length > 3) {
            return message.reply("most characters used! use correctly: !prefix <new prefix(no 3 characters)>");
        }

        db.set(`prefix_${message.guild.id}`, args[0]);
      await message.channel.send(`Prefix changed to ${args[0]}`);

    }
}