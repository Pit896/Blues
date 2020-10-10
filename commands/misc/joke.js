const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: "joke",
    description: "Send a random joke!",
    category: "misc",
    usage: "!joke",
    run: async (client, message, args) => {

        let data = await random.getJoke();
        message.channel.send(data);

    }
}  