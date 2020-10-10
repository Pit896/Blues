const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "youtube",
    description: "Youtube for you!",
    usage: "!youtube <text> <member>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = message.author;

        let arg = args.join(" ");

        if(!arg) {
            return message.reply("you need to specify a text!");
        }

        let triggered = await canva.youtube(target.avatarURL({ format: "png", dynamic: false }), target.username, arg);

        let attachament = new MessageAttachment(triggered, "yt.png");
        message.delete();
        message.channel.send(attachament);

    }
}