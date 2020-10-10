const discord = require('discord.js');
const search = require('youtube-search');

const opts = {
    maxResults: 25,
    key: "AIzaSyCyjLpayOoaBG7gRrrBNUChf1ICRjrx-fk",
    type: 'video'
};

module.exports = {
    name: "video",
    category: "info",
    description: "Search your YT video",
    usage: "!video, in query, <video name>",
    aliases: ["vidoe", "vid"],
    run: async (client, message, args) => {

        let embed = new discord.MessageEmbed()
        .setColor("#73ffdc")
        .setDescription("Please enter a search query. Remember to narrow down your search.")
        .setThumbnail("https://ahrefs.com/blog/wp-content/uploads/2020/01/blog-top-youtube-searches-400x200.png")
        .setTitle("YouTube Search API");
    let embedMsg = await message.channel.send(embed);
    let filter = m => m.author.id === message.author.id;
    let query = await message.channel.awaitMessages(filter, { max: 1 });
    let results = await search(query.first().content, opts).catch(err => console.log(err));
    if(results) {
        let youtubeResults = results.results;
        let i  =0;
        let titles = youtubeResults.map(result => {
            i++;
            return i + ") " + result.title;
        });
        console.log(titles);
        message.channel.send({
            embed: {
                title: 'Write in query a number 1 to 25 for get more info to video selected!',
                description: titles.join("\n"),
                color: "RANDOM"
            }
        }).catch(err => console.log(err));
        
        filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
        let collected = await message.channel.awaitMessages(filter, { max: 1 });
        let selected = youtubeResults[collected.first().content - 1];

        let embedMsg2 = new discord.MessageEmbed()
            .setTitle(`${selected.title}`)
            .setColor("RANDOM")
            .setURL(`${selected.link}`)
            .addField('Published at', selected.publishedAt, true)
            .setDescription(`${selected.description}`)
            .setThumbnail(`${selected.thumbnails.default.url}`);

        message.channel.send(embedMsg2);
    }

    }
}