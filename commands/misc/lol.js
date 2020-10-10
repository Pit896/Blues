const { MessageEmbed } = require('discord.js');

const api = require('imageapi.js');

module.exports = {
    name: "lol",
    category: "misc",
    description: "Send a random lol!",
    usage: "!lol",
    run: async (client, message, args) => {

        let surreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes"
        ]
        let subreddit = surreddits[Math.floor(Math.random()*(surreddits.length))];
        console.log(subreddit);
        let img = await api(subreddit);
        console.log(subreddit);
        let embed = new MessageEmbed()
        .setTitle(`A lol from r/${subreddit}`)
        .setImage(img)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor("RANDOM");
        message.channel.send(embed);

    }
}