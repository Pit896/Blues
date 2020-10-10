const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "rescat",
  description: "Rescat a amount in your bank",
  category: "economy",
  usage: "!rescat <all or amount>",
  run: async (client, message, args) => {

    let user = message.author;

    let member = db.fetch(`bank_${message.guild.id}_${user.id}`)
  
    if (args[0] == 'all') {
      let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  
      let embedbank = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setDescription("You don't have any money to rescat")
  
      if(money === 0) return message.channel.send(embedbank)
  
      db.subtract(`bank_${message.guild.id}_${user.id}`, money)
      db.add(`money_${message.guild.id}_${user.id}`, money)
      let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`💰You have rescated all your coins from your bank`);
    message.channel.send(embed5)
    
    } else {
    
    let embed2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Specify an amount to rescat`);
    
    if (!args[0]) {
        return message.channel.send(embed2)
    }
    let embed3 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You can't rescat negative money`);
  
    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You don't have that much money`);
  
    if (member < args[0]) {
        return message.channel.send(embed4)
    }
  
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`💰You have rescated ${args[0]} coins from your bank`);
  
    message.channel.send(embed5)
    db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
    db.add(`money_${message.guild.id}_${user.id}`, args[0])
    }


  }
}