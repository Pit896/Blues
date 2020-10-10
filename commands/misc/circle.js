const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "circle",
    description: "circle your avatar!",
    usage: "!cyrcle <member>",
    category: "misc",
    run: async (client, message, args) => {


        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a meber!");
        }

        let triggered = await canva.circle(target.user.avatarURL({ format: "png", dynamic: false }));

        let attachament = new MessageAttachment(triggered, "blur.png");
        message.channel.send(attachament);
    }
}