const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "invite",
    category: "info",
    description: "Invite link!",
    usage: "!invite",
    run: (clint, message, args) => {

        let embed = new MessageEmbed()
        .setTitle(`INVITE ${clint.user.username} TO YOUR SERVER!`)
        .setFooter("Blues by Pit.js", `https://i.pinimg.com/originals/52/34/63/5234632e7e40c627035f42c3a064354f.jpg`)
        .setColor("#2518d9")
        .setThumbnail(`https://www.publicdomainpictures.net/pictures/290000/velka/blue-swirl-background-1547523279to7.jpg`)
        .setURL("https://discord.com/api/oauth2/authorize?client_id=755797708203229366&permissions=435547511&scope=bot")
        .setDescription(`I'm a cool bot, pls invite me, most API, moderation, custom join and leave message!`);

        message.channel.send(embed);
    }
}
