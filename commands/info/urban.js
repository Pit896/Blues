const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "urban",
    description: "Search your word definition on urban disctionary!",
    usage: "!urban <word>",
    category: "misc",
    run: async (client, message, args) => {

        if(!args[0]) {
            return message.reply("please provide a word to search!");
        }

        let res = await urban(args.join(" ")).catch(e => {
            return message.reply("This word doesn't exist!");
        });

        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(res.word)
        .setURL(res.urbanURL)
        .setDescription(`**Definition:**\n${res.definition}\n\n **Example:**\n${res.example}`)
        .addField('Author', res.author, true)
        .addField('Ratings', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`, true);

        message.channel.send(embed);

    }
}