const discord = require('discord.js');

module.exports = {
    name: "purge",
    category: "moderation",
    aliases: ["clear"],
    description: "Clear message!",
    usage: "!purge <amount>",
    run: (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("you don't have permissions to purge command!");
        }  

        if(isNaN(args[0])) return message.reply("please provide a **valid** amount!");
        if(args[0] > 100) return message.reply("please provide a number less than 100!");
        
        message.channel.bulkDelete(args[0]);
        let embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`I've dleted **${args[0]}** for you👍`);
        
        message.channel.send(embed);
    }
}
