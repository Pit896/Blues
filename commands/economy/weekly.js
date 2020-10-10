const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const config = require('../json/weekly.json')


module.exports = {
  name: "weekly",
  description: "Weekly rewards",
  category: "economy",
  usage: "!weekly",
  run: async (client, message, args) => {

  let user = message.author;
  let timeout = config.timeout;
  let amount = config.amount;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`💰You've collected your weekly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())

  }
  }
}
