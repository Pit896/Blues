const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "hitler",
    description: "Hitler for you!",
    usage: "!hitler <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.hitler(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "hitler.png");
        message.channel.send(attachament);

    }
}