const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, tools) => {







let amount = Math.floor(Math.random() * 600) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
}
module.exports.help = {
    name: "work-construc"
}