const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: "tip",
    description: "Send a random life tip!",
    category: "misc",
    usage: "!tip",
    run: async (client, message, args) => {

        let data = await random.getAdvice();
        message.channel.send(data);

    }
}  