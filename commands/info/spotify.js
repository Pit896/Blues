const Discord = require('discord.js');

module.exports = {
    name: 'spotify',
    category: "info",
    description: "Shows stats of the person listening",
    usage: "!spotify or !spotify <member>",
    run: async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;

        let convert = require('parse-ms')
    
        let status = user.presence.activities[0];
        
        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("This user isn't listening the Spotify (Or have a status).");
        
        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
          let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
              url = `https://open.spotify.com/track/${status.syncID}`,
              name = status.details,
              artist = status.state,
              album = status.assets.largeText,
              timeStart = status.timestamps.start,
              timeEnd = status.timestamps.end,
              timeConvert = convert(timeEnd - timeStart);
          
          let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
          let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
          
          let time = `${minutes}:${seconds}`;
          
          const embed = new Discord.MessageEmbed()
          .setAuthor("Spotify Track Information", "https://assets.entrepreneur.com/content/3x2/2000/20150616163611-spotify.jpeg")
          .setColor(0x1ED768)
          .setThumbnail(image)
          .addField("Name:", name, true)
          .addField("Album:", album, true)
          .addField("Artist:", artist, true)
          .addField("Duration:", time, false)
          .addField("Listen now on Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
          message.channel.send(embed)
        }
      }
}