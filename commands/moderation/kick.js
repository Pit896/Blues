const discord = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kick a member",
    usage: "!kick <member>",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("you don't have permissions to use kick command!");
        }

        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("i don't have permission to kick!");
        }

        const target = message.mentions.members.first();

        if(!target) {
            return message.reply("you don't have mentioned the member to kick!");
        }

        if(target.id === message.author.id) {
            return message.reply("you can't kick yourself :/!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Action : Kick")
        .setColor('RANDOM')
        .setFooter(`Kicked by ${message.author.username}`)  
        .setDescription(`Kicked ${target} (${target.id})🏹\n**Reason:** ${args[1]}`)
        .setThumbnail(target.avatarURL);

        message.channel.send(embed);
        target.kick();
    }
}