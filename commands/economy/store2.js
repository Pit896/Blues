const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "shop",
  description: "Shopping info",
  category: "economy",
  usage: "!shop",
  run: async (client, message, args) => {
  

    let embed = new Discord.MessageEmbed()
    .setTitle("Items avabile:")
    .setDescription("`nikes`, `car`, `mansion`");

    if(!args[0]) {
      return message.channel.send(embed);
    }
    if(args[0] == 'nikes') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'car') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  
  }
}
