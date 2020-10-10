const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "invert-color",
    description: "Inver your color!",
    usage: "!invert-color <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.invert(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "invert.png");
        message.channel.send(attachament);

    }
}