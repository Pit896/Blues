const discord = require('discord.js');

module.exports = {
    name: "poll",
    category: "misc",
    description: "Poll utils!",
    usage: "!poll <question>",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("you don't have permissions to use poll command!");
        }

        let question = args.join(" ");
        if(!question) {
            return message.reply("you need to provide a question!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle('📊Poll📊')
        .setDescription(question)
        .setFooter(`Poll by ${message.author.username}#${message.author.discriminator}`);

        let msg = await message.channel.send(embed);
        await msg.react("👍");
        await msg.react("👎");



    }
}