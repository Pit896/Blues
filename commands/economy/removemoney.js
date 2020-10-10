const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "remove",
  description: "Remove money from a member economy!",
  usage: "!remove <member> <amount>",
  category: "economy",
  run: async (client, message, args) => {

    let ownerID = '723123419670904852'
    if(message.author.id !== ownerID) return message.reply("i can't remove money from my owner!");
  
    let user = message.mentions.members.first() || message.author;
  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("you don't have permissions to remove command!");
    }
  
      if (isNaN(args[1])) return;
      db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
      let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
  
      let moneyEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🏹Removed ${args[1]} coins\n\n🔰New Balance: ${bal}`);
      message.channel.send(moneyEmbed)

  }
}

