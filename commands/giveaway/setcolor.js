const db = require('quick.db');


module.exports = {
    name: 'g-color',
    description: 'Set color of Giveaway Embed!',
    usage: '!g-color <color>',
    category: 'moderation',
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply("you don't have permission to do g-color command!");
        }

        let color = args.join(" ");

        if(!color) return message.reply('please provide a color!');

        if(color === 'blue') {
            db.set(`gcolor_${message.guild.id}`, '#2107e6');
            message.channel.send('Embed Giveaway color seted to `blue`🟦');
        } else {
            if(color === 'red') {
                db.set(`gcolor_${message.guild.id}`, '#ed0e0e');
                message.channel.send('Embed Giveaway color seted to `red`🟥');
            }
        } 
        if(color === 'yellow') {
            db.set(`gcolor_${message.guild.id}`, '#eded13');
            message.channel.send('Embed Giveaway color seted to `yellow`🟨'); 
        } else {
            if(color === 'green') {
                db.set(`gcolor_${message.guild.id}`, '#11d121');
                message.channel.send('Embed Giveaway color seted to `green`🟩');           
            }
        }
        if(color === 'aqua') {
            db.set(`gcolor_${message.guild.id}`, '#0ee8e4');
            message.channel.send('Embed Giveaway color seted to `aqua`🟦');   
        } else {
            if(color === 'reset') {
                db.set(`gcolor_${message.guild.id}`, 'RANDOM');
                message.channel.send('Reseted Embed Giveaway color✅'); 
            }
        }
        if(color === 'fucsia') {
            db.set(`gcolor_${message.guild.id}`, '#f70cd4');
            message.channel.send('Embed Giveaway color seted to `fucsia`🟪');
        } else {
            if(color === 'violet') {
                db.set(`gcolor_${message.guild.id}`, '#8709db');
                message.channel.send('Embed Giveaway color seted to `violet`🟪');
            }
        }
    }
}