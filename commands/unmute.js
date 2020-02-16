const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Looks like you are just a member lol :neutral_face: ")

    let embedMute = new Discord.RichEmbed()
    .setTitle(":x: :x:")
    .setDescription('You did not specify a user to mention!\n Please use following command: ]mute <@user> . ')
   let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!toMute) return  message.channel.sendEmbed(embedMute);
   

    let role = message.guild.roles.find(r => r.name === "Muted ]");

      let embedMuted = new Discord.RichEmbed()
      .setTitle(":x: :x:")
    .setDescription('This user is not muted!')
    let embedMutedNow = new Discord.RichEmbed()
    .setTitle(":white_check_mark:")
    .setDescription('This user is able to talk again!')
if(!role || !toMute.roles.has(role.id)) return message.channel.sendEmbed(embedMuted);

await(toMute.removeRole(role));
message.channel.sendEmbed(embedMutedNow);
if(message.guild.member.role)
return;
}


module.exports.help = {
    name: "unmute"
}
