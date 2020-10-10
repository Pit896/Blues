const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const config = require('../json/daily.json');


module.exports = {
  name: "daily",
  description: "Get the daily economy rewards",
  category: "economy",
  usage: "!daily",
  run: async (client, message, args) => {

    let user = message.author;

    let timeout = process.env.TIMEOUT_DAILY;
    let amount = process.env.DAILY;
  
    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
  
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
    
      let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`❌ You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You've collected your daily reward of ${amount} coins🤑`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now())

    }
  }
}
