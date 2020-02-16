const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args, tools) => {

if(!message.member.hasPermission('ADMINISTRATOR')){

    return message.channel.send('You are not an admin!').then(msg => {
        setTimeout(()=> {
            msg.delete()
        }, 2000);
    })
}
let user = message.mentions.members.first() || message.author
db.set(`money_${user.id}`, 0)
let bal = await db.fetch(`money_${user.id}`)
let embed = new Discord.RichEmbed()
.setAuthor(`Removed Money!`, message.author.displauAvatarURL)
.addField(`Balance Updated`, `$${bal}`)
.setColor("BLUE")
message.channel.send(embed)
}
module.exports.help = {
    name: "reset"
}