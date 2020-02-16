const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args, tools) => {

let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${user.id}`)
let author = await db.fetch(`money_${message.author.id}`)
    

    if(author < 100) {
        return message.channel.send('You need at least 100$ to rob someone!')
    }
    if(targetuser < 0){
return message.channel.send(` :x: ${user.user.username} is broke af.`)
    }


    let random = Math.floor(Math.random()* 300) + 1;
    let random2 = Math.floor(Math.random()* 200) + 1;

    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}$!`)
    .setColor(0x0336ff)
    .setTimestamp()
    let embed2 = new Discord.RichEmbed()
    .setDescription(`You failed to rob ${user}. ${random2} was taken from you! `)
    .setColor(0x0336ff)
    .setTimestamp()

    message.channel.sendEmbed(embed)
    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)

}
module.exports.help = {
    name: "rob"
}