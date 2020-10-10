const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "clyde",
    description: "clyde bro!",
    usage: "!clyde <text>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = args.join(" ");

        if(!target) {
            return message.reply("you need to provide a text!");
        }

        let triggered = await canva.clyde(target);

        let attachament = new MessageAttachment(triggered, "clyde.png");
        message.delete();
        message.channel.send(attachament);
    }
}