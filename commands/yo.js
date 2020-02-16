const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, tools) => {
var sender = message.author.username;



    message.channel.send(`Yo ${sender} how you doing? :robot:`)
}
    module.exports.help = {
        name: "yo"
    }