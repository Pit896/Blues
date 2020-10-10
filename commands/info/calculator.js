const discord = require('discord.js');

const math = require('mathjs');

module.exports = {
    name: "math",
    category: "info",
    description: "Calc a expression",
    usage: "!math <expression>",
    aliases: ["calc", "calcu"],
    run: async (client, message, args) => {

        if(!args[0]) {
            return message.reply("pls provide a math question");
        }

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send("Pls provide a **valid** question!")
        }

        let embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter("Blues BIG BRAIN")
        .setTitle("Calculator")
        .addField("Question", `${args.join(" ")}`)
        .addField("Response", `${resp}`);

        message.channel.send(embed);

    }
}