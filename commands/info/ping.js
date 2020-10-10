const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Bot latency",
    usage: "!ping",
    run: async (client, message, args) => {

        message.channel.send('Calculating Latency...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            let embed = new MessageEmbed()
            .setDescription(`❤Bot Latency: ${ping}\n\n💙API Latency: ${client.ws.ping}`)
            .setColor('RANDOM');

            message.channel.send(embed);
        });
    }
}