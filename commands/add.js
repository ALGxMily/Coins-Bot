const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args, tools) => {

if(!message.member.hasPermission('ADMINISTRATOR')){

    return message.channel.send('You are not an admin!').then(msg => {
        setTimeout(()=> {
            msg.delete()
        }, 5000);
    })
}
let user = message.mentions.members.first() || message.author

if(isNaN(args[1])) return message.channel.send(`${message.author}, you need to input a value to add`)
db.add(`money_${user.id}`, args[1])
let bal = await db.fetch(`money_${user.id}`)

let embed = new Discord.RichEmbed()
.setAuthor(`Added Money!`, message.author.displauAvatarURL)
.addField(`Amount`, `${args[1]}$`)
.addField(`Balance Updated`, `${bal}$`)
.setColor("BLUE")
message.channel.send(embed)
}
module.exports.help = {
    name: "add"
}