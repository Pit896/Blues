const { MessageEmbed } = require('discord.js');

const axios = require('axios');
const { default: Axios } = require('axios');

module.exports = {
    name: "meow",
    description: "Send a random cat image!",
    usage: "!meow",
    category: "misc",
    run: async (client, message, args) => {

        Axios.get('https://api.thecatapi.com/v1/images/search')
        .then(async (res) => {
            let embed = new MessageEmbed()
            .setAuthor(`Cat`)
            .setTitle('MEEOOOW')
            .setImage(res.data[0].url);

            let m = await message.channel.send(embed);
            m.react('🐱');
            m.react('😺');
            m.react('😸');
            m.react('😹');
            m.react('😻');
            m.react('😼');
            m.react('😽');
            m.react('🙀');
            m.react('😿');
            m.react('😾');
        })
        .catch((err) => {
            console.log('ERR:', err)
        });
    }
}