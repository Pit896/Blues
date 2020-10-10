const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const config = require('../json/villan.json');


module.exports = {
  name: "villan",
  description: "Are you a villan?",
  category: "economy",
  usage: "!villan",
  run: async (client, message, args) => {

    let user = message.author;

    let timeout = config.timeout;

    let crime = db.get(`crime_${message.guild.id}_${user.id}`)
  
    let beg = await db.fetch(`villan_${message.guild.id}_${user.id}`);

    let amount = Math.floor(Math.random() * Math.floor(800))

    if(crime === 3) {
      return message.reply(`❌ | You have your crime status at level 3, you can't use command villan again!`);
    }
  
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
      let time = ms(timeout - (Date.now() - beg));
    
      let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`❌ You've already villan recently\n\nVillan again in ${time.minutes}m ${time.seconds}s`);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You've earn ${amount} coins🤑`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`villan_${message.guild.id}_${user.id}`, Date.now())
    db.set(`crime_${message.guild.id}_${user.id}`, 1)
  
    }




  }
}