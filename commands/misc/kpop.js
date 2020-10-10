const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: "kpop",
    description: "Send a random kpop!",
    category: "misc",
    usage: "!kpop",
    run: async (client, message, args) => {
        
        message.delete();
        let data = await random.getKpop();
        message.channel.send(data);

    }
}  