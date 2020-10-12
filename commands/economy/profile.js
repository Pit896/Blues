const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "profile",
  description: "Show your economy profile!",
  category: "economy",
  usage: "!profile <member>",
  run: async (client, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'No VIP Bronze'
    if(vip === true) vip = '🥉Bronze Activeted'

  let vip2 = await db.fetch(`silver_${message.guild.id}_${user.id}`)
    if(vip2 === null) vip2 = 'No VIP Silver'
    if(vip2 === true) vip2 = '🥈Silver Activeted'

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profile**\n\n💷Pocket: ${money}\n💰Bank: ${bank}\n💎VIP Rank: \n**-${vip}**\n**-${vip2}**\n\n**Inventory**\n\n💸Nikes: ${shoes}\n🏎Cars: ${newcar}\n🏢Mansions: ${newhouse}`);
  message.channel.send(moneyEmbed)


  }
}
