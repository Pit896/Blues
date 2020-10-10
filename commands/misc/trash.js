const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "trash",
    description: "Trash you!",
    usage: "!trash <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        let i = message.author;

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.trash(i.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "trash.png");
        message.channel.send(attachament);
    }
}