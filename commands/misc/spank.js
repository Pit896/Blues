const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "spank",
    description: "spank image!",
    usage: "!spank <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.mentions.members.first();

        let me = message.author;

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.spank(me.avatarURL({ format: "png", dynamic: false }), target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "spank.png");
        message.channel.send(attachament);
    }
}