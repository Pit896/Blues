const { MessageEmbed } = require('discord.js');
const agent = require('superagent');


module.exports = {
    name: "woof",
    description: "Send a random dog image!",
    usage: "!woof",
    category: "misc",
    run: async (client, message, args) => {

        let { body } = await agent.get('https://random.dog/woof.json');

        let embed = new MessageEmbed()
        .setTitle("Doggo see you😨")
        .setAuthor("Dog")
        .setColor('#ff9900')
        .setImage(body.url);

        let m = await message.channel.send(embed);
        m.react('🐶')
    }
}