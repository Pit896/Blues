const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: "string",
    description: "Send a random string!",
    category: "misc",
    usage: "!string",
    run: async (client, message, args) => {

        let data = await random.getString(10);
        message.channel.send(`\`\`\`${data}\`\`\``);
    }
}  