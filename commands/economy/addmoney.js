const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "add",
  description: "Add money from a member economy!",
  usage: "!add <member> <amount>",
  category: "economy",
  run: async (client, message, args) => {

  
    let user = message.mentions.members.first();
  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("you don't have permissions to add command!");
    }


    if(!user) {
      return message.reply("you don't have mentioned a member to give money!");
  }
  
      if (isNaN(args[1])) return;
      db.add(`money_${message.guild.id}_${user.id}`, args[1])
  
      let moneyEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✔Added ${args[1]} coins`);
      message.channel.send(moneyEmbed)
  }
}

