const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "add",
  description: "Add money from a member economy!",
  usage: "!add <member> <amount> <wallet/bank>",
  category: "economy",
  run: async (client, message, args) => {

  
    let user = message.mentions.members.first();
  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("you don't have permissions to add command!");
    }


    if(!user) {
      return message.reply("you don't have mentioned a member to give money!");
  }

    if(!args[1]) return message.reply("please specify a number!");

    if(!args[2]) return message.reply("please specify bank/wallet!");   
  
      if(args[2] == 'wallet') {
        if (isNaN(args[1])) return message.reply("please specify a **valid** amount");
        db.add(`money_${message.guild.id}_${user.id}`, args[1])
    
        let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔Added ${args[1]} money in **${args[2]}**`);
        message.channel.send(moneyEmbed)
      }
      
      if(args[2] == 'bank') { 
        if (isNaN(args[1])) return message.reply("please specify a **valid** amount");
        db.add(`bank_${message.guild.id}_${user.id}`, args[1])
    
        let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔Added ${args[1]} money in **${args[2]}**`);
        message.channel.send(moneyEmbed)
    }
  }
}


