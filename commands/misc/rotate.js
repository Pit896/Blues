const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "rotate",
    description: "Rotate image!",
    usage: "!rotate <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let random = Math.floor(Math.random() * Math.floor(359));

        let triggered = await canva.rotate(target.user.avatarURL({ format: "png", dynamic: false }), random);

        let attachament = new MessageAttachment(triggered, "rotate.png");
        message.channel.send(attachament);

    }
}