const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "invite",
    category: "info",
    description: "Invite link!",
    usage: "!invite",
    run: (client, message, args) => {

        let embed = new MessageEmbed()
        .setTitle(`INVITE ${clint.user.username} TO YOUR SERVER!`)
        .setFooter("Blues by Pit.js", `https://i.pinimg.com/originals/52/34/63/5234632e7e40c627035f42c3a064354f.jpg`)
        .setColor("#2518d9")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`I'm a cool bot, pls invite me, most API, moderation, custom join and leave message (Press Me)[https://discord.com/api/oauth2/authorize?client_id=755797708203229366&permissions=435547511&scope=bot]`);

        message.channel.send(embed);
    }
}
