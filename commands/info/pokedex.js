const discord = require('discord.js');
const { get } = require('request-promise-native');

module.exports = {
    name: "pokemon",
    category: "info",
    description: "Search your pokemon info",
    usage: "!pokemon <name>",
    aliases: ["pokedex"],
    run: async (client, message, args) => {

const opts = {
    url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
    json: true
};

message.channel.send("Fetching information with API Pokedex").then(msg => {
    get(opts).then(body => {

        let embed = new discord.MessageEmbed()
        .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
        .setColor('RANDOM')
        .setDescription(body.info.description)
        .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
        .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`);

        message.channel.send(embed);
        msg.delete();
    });
});




    }
}