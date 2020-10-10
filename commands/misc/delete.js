const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "delete",
    description: "delete!",
    usage: "!delete <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.delete(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "delete.png");
        message.channel.send(attachament);
    }
}