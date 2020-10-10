const canva = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: "qr",
    description: "qr a text!",
    usage: "!qr <text>",
    category: "misc",
    run: async (client, message, args) => {
        
        let target = args.join(" ");

        if(!target) {
            return message.reply("you need to provide a text!");
        }

        let triggered = await canva.createQRCode(target);

        let attachament = new MessageAttachment(triggered, "qr.png");
        message.delete();
        message.channel.send(attachament);
    }
}