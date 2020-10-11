const discord = require('discord.js');
const request = require('node-superfetch');

module.exports = {
    name: 'channel',
    description: 'Search your youtube channel and send you the stats!',
    category: 'info',
    usage: '!channel <channel>',
    run: async (client, message, args) => {
        let name = args.join(" ");
        if(!name) return message.channel.send("Unknow name.")

        let channel = await request.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${process.env.YOUTUBE_API}&maxResults=1&type=channel`)
        .catch(() => message.channel.send("Unknow channel name."));

        if(!channel.body.items[0]) return message.channel.send("No channel result found. Try again.");

        let data = await request.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${config.youtube}`)
        .catch(() => message.channel.send("Unknow channel error."));

        let embed = new discord.MessageEmbed()
            .setColor(0x7289DA)
            .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
            .setTimestamp(new Date())
            .addField("Channel Name: ", channel.body.items[0].snippet.channelTitle, true)
            .addField("Channel Description: ", channel.body.items[0].snippet.description, true)
            .addField("Subs Count: ", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
            .addField("Total View: ", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
            .addField("Total Video(s): ", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
            .addField("Created at: ", channel.body.items[0].snippet.publishedAt, true)
            .addField("Link: ", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true);

            message.channel.send(embed);
    }
}
