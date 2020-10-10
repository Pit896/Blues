const discord = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Ban a member",
    usage: "!ban <member>",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("you don't have permissions to use ban command!");
        }

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("i don't have permission to ban!");
        }

        const target = message.mentions.members.first();

        if(!target) {
            return message.reply("you don't have mentioned the member to ban!");
        }

        if(target.id === message.author.id) {
            return message.reply("you can't ban yourself :/!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Action : Ban")
        .setColor('RANDOM')
        .setFooter(`Banned by ${message.author.username}`)  
        .setDescription(`Banned ${target} (${target.id})🏹\n**Reason:** ${args[1]}`)
        .setThumbnail(target.avatarURL);

        message.channel.send(embed);
        target.ban();
    }
}