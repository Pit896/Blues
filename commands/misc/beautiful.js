const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "beautiful",
    description: "Beautiful you?",
    usage: "!beautiful <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.beautiful(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "beau.png");
        message.channel.send(attachament);

    }
}