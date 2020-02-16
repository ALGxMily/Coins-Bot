const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, tools) => {


    let embed = new Discord.RichEmbed()
    .setTitle('COINS BOT HELP!')
    .setDescription('To start collect your daily with `]daily` so u can have some coins in your bank!\nYou can use `]bal` to check your balance!\nThere are other ways how you can ear some money:\n`]work-prost` you work as a prostitute and earn money for having sex!\n`]work-code` you work as a programmer and earn money with coding!\n`]work-construc` you work as a constructor and build cities!\nOr else you can rob other users with the following command: `]rob <@user>`.\nThere are also minigames you can play like:\n`coinflip(]cf <heads/tails> <bet amount>)`\nEveryone is free to dm <@!453247992946884610> and suggest anything.')
    .setThumbnail("https://i.imgur.com/NkG1Kgm.png")
    .setFooter('Proxy', "https://i.imgur.com/2LFEhwg.png")
    .setColor("GREEN");
message.channel.sendEmbed(embed);
}
module.exports.help = {
    name: "help"
}