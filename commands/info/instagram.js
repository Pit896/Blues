const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

const fetch = require('node-fetch');

module.exports = {
    name: 'instagram',
    description: 'Search on instagram!',
    category: 'info',
    usage: '!instagram <name>',
    aliases: ['insta', 'ig', 'IG'],
    run: async (client, message, args) => {

        let name = args.join(" ");

        if(!name) return message.reply("please specify a instagram profile");

        let url = `https://instagram.com/${name}/?__a=1`;
        let res = await fetch(url).then(url => url.json());

        if(!res.graphql.user.username) return message.channel.send("Could not found this username.");

        let user = res.graphql.user;
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(user.full_name)
        .setThumbnail(user.profile_pic_url_hd)
        .setURL(user.external_url_linkshimmed)
        .addField("Profile Information", stripIndents`- Username: *${user.username}*\n- Full Name: *${user.full_name}*\n- Biography: *${user.biography.length == 0 ? "none": user.biography}*\n- Post(s): ${user.edge_owner_to_timeline_media.count}\n- Follower(s): *${user.edge_followed_by.count}*\n- Following: *${user.edge_follow.count}*\n- Private Account: *${user.is_private ? "Yes 🔐" : "No 🔓"}*\n`);

        message.channel.send(embed);
    }
}