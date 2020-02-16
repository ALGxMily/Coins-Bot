const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, tools) => {




let amount = Math.floor(Math.random() * 900) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)


}
module.exports.help = {
    name: "work-code"
}