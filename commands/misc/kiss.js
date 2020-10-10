const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "kiss",
    description: "kiss!",
    usage: "!kiss <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        let me = message.author;

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.kiss(target.user.avatarURL({ format: "png", dynamic: false }), me.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "kiss.png");
        message.channel.send(attachament);
    }
}