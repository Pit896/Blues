const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "cmym",
    description: "cmym!",
    usage: "!cmym <text>",
    category: "misc",
    run: async (client, message, args) => {

        if(!args.join(" ")) {
            return message.reply("pls provide a text");
        }

        let triggered = await canva.changemymind(args.join(" "));

        let attachament = new MessageAttachment(triggered, "blur.png");
        message.delete();
        message.channel.send(attachament);
    }
}