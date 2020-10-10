const discord = require('discord.js');
const imdb = require('imdb-api');

module.exports = {
    name: "movie",
    description: "Get information about series and movie",
    category: "info",
    usage: "!movie <name>",
    run: async (client, message, args, color) => {

        if(!args.length) {
            return message.reply("Incorrect usage: !imdb <name>");
        }

        try {
            const imob = new imdb.Client({ apiKey: process.env.IMDB });

            let movie = await imob.get({'name': args.join(" ")});

            let embed = new discord.MessageEmbed()
            .setTitle(movie.title)
            .setColor('RANDOM')
            .setThumbnail(movie.poster)
            .setDescription(movie.plot)
            .setFooter(`Searched by ${message.author.username}#${message.author.discriminator}`)
            .setURL(movie.imdburl)
            .addField('🎭Actor', movie.actors, true)
            .addField('🌈Country', movie.country, true)
            .addField('🎞Languages', movie.languages, true)
            .addField('🎉Awards', movie.awards, true)
            .addField('🎲Type', movie.type, true);

            message.channel.send(embed);
            } catch {
                return message.channel.send(`Somethings went wrong with title *${args.join(" ")}*, pls don't retry and change title of movie!`);
        } 
    }
}
