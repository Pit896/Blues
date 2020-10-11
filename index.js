//const { token, default_prefix } = require('./bot_config/config.json');
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();

const db = require('quick.db');

const discord = require('discord.js');
const client = new discord.Client({
    disableEveryone: true,
    partials: ['MESSAGE', 'REACTION']
});

//const config = require('./bot_config/config.json');
//client.config = config;



client.commands = new discord.Collection();
client.aliases = new discord.Collection();


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
});


client.on("ready", () => {
        console.log("Ready to self!");
        client.user.setActivity("PewDiePie", {
            type: "WATCHING"
        });
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == 'news') return;

    if(!message.guild) return;


    let prefix = db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = process.env.PREFIX;

    if(!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});


client.on("guildMemberAdd", async (member) => {
    let chx = db.get(`welchannel_${member.guild.id}`);

    if(chx === null) {
        return;
    }

    let data = await canva.welcome(member, { link: "https://images2.alphacoders.com/743/thumb-1920-743487.jpg" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    client.channels.cache.get(chx).send(`Welcome to server ${member.user.username}!`);
    client.channels.cache.get(chx).send(attachment);
   });


client.on("guildMemberRemove", async (member) => {
    let chx = db.get(`leavchannel_${member.guild.id}`);

    if(chx === null) {
        return;
    }

    let lembed = new discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("RANDOM")
    .setThumbnail(member.user.avatarURL())
   .setDescription(`☠Ops... **${member.user.username}#${member.user.discriminator}** has left the server. Goodbye😥`);

    client.channels.cache.get(chx).send(lembed);
});


client.usermodels = { user: require('./database/models/user') };
client.messagemodels = { message: require('./database/models/message') };
require('./database/connect');

client.login(process.env.TOKEN);
