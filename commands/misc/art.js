const ascii = require('ascii-art');


module.exports = {
    name: 'art',
    description: 'Bot send you the text provided but...',
    category: 'misc',
    usage: '!art <text>',
    run: async (client, message, args) => {

        let text = args.join(" ");

        if(!text) return message.reply("please provide a text");

        ascii.font(text, 'Doom', async txt => {
            message.channel.send(txt, {
                code: 'md'
            });
        });
    }
}