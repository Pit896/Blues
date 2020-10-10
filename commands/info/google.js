const discord = require('discord.js');
const request = require('node-superfetch');
//const config = require('../../bot_config/API.json')


module.exports = {
    name: 'google',
    description: 'Search on google!',
    category: 'info',
    usage: '!google <search>',
    run: async (client, message, args) => {

        let gkey = process.env.GOOGLE;
        let csx = process.env.CSX;
        let query = args.join(" ");

        if(!query) return message.reply('please provide a query to search.');


        let href = await search(query);
        if(!href) return message.channel.send(`Unknow search. *${query}* result **not found**`);

        let embed = new discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setColor(0x7289DA)
        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
        .setURL(href.link)
        .setTimestamp()
        .setFooter("Powered by Google", 'https://banner2.cleanpng.com/20180324/sbe/kisspng-google-logo-g-suite-google-5ab6f1f0dbc9b7.1299911115219389289003.jpg');

        message.channel.send(embed);

        async function search (query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: gkey, cx: csx, safe: "off", q: query
            });

            if(!body.items) return null;
            return body.items[0];
        }
    }
}
