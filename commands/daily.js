const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports.run = async (bot, message, args, tools) => {
/*let embed3 = new Discord.RichEmbed()
.setTitle('DAILY COMMAND NOT WORKING')
.setColor("WHITE")
.setDescription("I'm sorry but this command is not working. <@!453247992946884610> is working on it :slight_smile: !");

message.channel.sendEmbed(embed3)*/
let timeout = 86400000 // 24 hours in milliseconds
    let amount = 650
    


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`You already collected ur daily reward, you can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Daily Reward**`)
    .addField(`Collected `, `$` + amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
}
}
module.exports.help = {
    name: "daily"
}