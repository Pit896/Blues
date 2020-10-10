const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const config = require('../json/beg.json');


module.exports = {
  name: "beg",
  description: "Give you a rewards from a beg!",
  category: "economy",
  usage: "!beg",
  run: async (client, message, args) => {

    let user = message.author;

    let timeout = config.timeout_beg;
    let amount = config.amount;
  
    let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
  
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
      let time = ms(timeout - (Date.now() - beg));
    
      let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`❌ You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s`);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You've begged and received ${amount} coins🤑`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
  
    }


  }
}