const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  description: "Get your economy info",
  category: "economy",
  usage: "!balance, !balance <member>",
  run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let bal = db.fetch(`money_${message.guild.id}_${user.id}`);
  
    if (bal === null) bal = 0;
  
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);
    if (bank === null) bank = 0;
  
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**${user}'s Balance**\n\n💷Pocket: ${bal}\n💰Bank: ${bank}`);
    message.channel.send(moneyEmbed);
  }
}
