const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'avatar',
    description: "Show members avatar!",
    usage: '!avatar <member>',
    category: "info",
    run: async (client, message, args) => {

        let target = message.mentions.members.first();

        if(!target) {
            return message.reply("you need to mention a member");
        }

        let embed = new MessageEmbed()
        .setAuthor(`Avatar of ${target.user.username}`)
        .setColor('#2fe80e')
        .setImage(target.user.avatarURL({ format: "png", dynamic: true }))
        .setThumbnail()
        .setFooter(`Requested by | ${message.author.username}`);

        message.channel.send(embed);
    }
}