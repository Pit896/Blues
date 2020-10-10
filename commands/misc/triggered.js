const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "triggered",
    description: "Trigger you!",
    usage: "!triggered <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.trigger(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "triggered.gif");
        message.channel.send(attachament);

    }
}