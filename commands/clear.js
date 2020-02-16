const Discord = require('discord.js');

module.exports.run = async (bot, message, args, tools) => {
    message.channel.bulkDelete(100);
        message.channel.send('Chat successfully cleaned!:broom: ')
}
module.exports.help = {
    name: "clear"
}