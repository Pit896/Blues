const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "bed",
    description: "bed!",
    usage: "!bed <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        let i = message.author;

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.bed(i.avatarURL({ format: "png", dynamic: false }), target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "bed.png");
        message.channel.send(attachament);
    }
}