const { get } = require("request-promise-native");

const discord = require('discord.js');

module.exports = {
    name: "anime",
    description: "Get your anime info",
    category: "info",
    usage: "!anime <anime name>",
    run: async (client, message, args) => {

        if(!args.length) {
            return message.channel.send("Please Give Anime Name")
        }

        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers: {
              'Content-Type': "application/vnd.api+json",
              'Accept': "application/vnd.api+json"
      
            },
            json: true
          }

        message.channel.send("Fetchings info to Kitsu API").then(msg => {
            get(option).then(body => {
                let embed = new discord.MessageEmbed()
                .setTitle(body.data[0].attributes.titles.en)
                .setColor("RED")
                .setDescription(body.data[0].attributes.synopsis)
                .setThumbnail(body.data[0].attributes.posterImage.original)
                .addField("Ratings", body.data[0].attributes.averageRating)
                .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount);

                message.channel.send(embed);
                msg.delete();      
            });
        });
    }
}  



