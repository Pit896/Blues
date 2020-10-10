const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: "meme",
    description: "Send a random meme!",
    category: "misc",
    usage: "!meme",
    run: async (client, message, args) => {

        let data = await random.getMeme();
        message.channel.send(data);

    }
}  
