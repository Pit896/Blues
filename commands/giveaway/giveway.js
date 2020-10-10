const ms = require('ms');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: 'giveaway',
    description: 'Giveaway command for giveaway!',
    category: 'moderation',
    usage: '!giveaway <time> <prize>',
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply("you don't have permission to do giveaway command!");
        }

        if(!args[0]) return message.reply("please specify a time!")

        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")&&!args[0].endsWith("s")) return message.reply("you don't have used the correct formatting for the time!");
        if(isNaN(args[0][0])) return message.reply("this is not a number!")

        let prize = args[1];
        if(!prize) {
            return message.reply("please specify a prize!");
        }

        let color = db.get(`gcolor_${message.guild.id}`);

        let default_color = 'RANDOM';

        if(color === null) return color = default_color;

        let embed = new MessageEmbed()
        .setTitle(`Prize: ` + prize)
        .setAuthor(`🎉GIVEAWAY🎉`)
        .setDescription(`Hosted by: <@${message.author.id}>\n\nTime: **${args[0]}**\nPing: ||@everyone|| ||@here||`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(color);

        message.delete();
        let m = await message.channel.send(embed);
        m.react('🎉');
        setTimeout(() => {
            let winner = m.reactions.cache.get('🎉').users.cache.filter(u=>!u.bot).random();
            if(m.reactions.cache.size==1) {
                m.delete();
                return message.channel.send(`No one reacted❌`);
            }
            m.delete();
            message.channel.send(`🎉CONGRATULATIONS🎉\n${winner} win **${prize}**!`);

        }, ms(args[0]));
    }
}