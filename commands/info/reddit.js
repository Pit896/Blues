const { MessageEmbed } = require('discord.js');

const api = require('imageapi.js');

module.exports = {
    name: "reddit",
    category: "info",
    description: "Send reddit subreddit!",
    usage: "!reddit <subreddit>",
    run: async (client, message, args) => {
        let Subreddit = message.content.slice(8);
        if(!Subreddit) {
            return message.reply("pls provide a reddit!");
        }
        try {

            let img = await api(Subreddit);
            const embed = new MessageEmbed()
            .setTitle(`A random image from r/${Subreddit}`)
            .setColor('RANDOM')
            .setURL(`https://reddit.com/r/${Subreddit}`)
            .setImage(img);
            message.channel.send(embed);

        } catch (err) {
            return message.channel.send("This reddit doesn't exist!");
        }

    }
}