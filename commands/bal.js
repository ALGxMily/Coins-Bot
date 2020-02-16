const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args, tools) => {
      
    let user = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`money_${user.id}`);
    if(balance === null) balance = 0;
 
    let embed = new Discord.RichEmbed()
    .setTitle("Balance")
    .setDescription(`${user.username} has: $${balance}`)
    .setColor('RED')
    message.channel.sendEmbed(embed);
    
}

module.exports.help = {
    name: "bal"
}