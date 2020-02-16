const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.sendMessage("Looks like you are just a member lol :neutral_face: ")

    let embedMute = new Discord.RichEmbed()
    .setTitle(":x: :x:")
    .setDescription('You did not specify a user to mention!\n Please use following command: ]mute <@user> . ')
   let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!toMute) return  message.channel.sendEmbed(embedMute);
   let highRole = new Discord.RichEmbed()
   .setTitle(":joy:")
   .setDescription("Woah you really trying to mute someone superior than you xD")
   let muteYourself = new Discord.RichEmbed()
   .setTitle(":confused:")
   .setDescription("Why would you mute yourself..");
   if(toMute.id === message.author.id) return message.channel.sendEmbed(muteYourself)
   if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendEmbed(highRole);



    let role = message.guild.roles.find(r => r.name === "Muted ]");
if(!role) {try{
     role = await message.guild.createRole({
         name: "Muted ]",
         color: "#000000",
         permissions: []
     });

          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              })
          })

      } catch(e){
          console.log(e.stack);
      }}
      let embedMuted = new Discord.RichEmbed()
      .setTitle(":x: :x:")
    .setDescription('This user is already muted!')
    let embedMutedNow = new Discord.RichEmbed()
    .setTitle(":white_check_mark:")
    .setDescription('This user shut his mouth!')
if(toMute.roles.has(role.id)) return message.channel.sendEmbed(embedMuted);

await(toMute.addRole(role));
message.channel.sendEmbed(embedMutedNow);
if(message.guild.member.role)
return;


}
module.exports.help = {
    name: "mute"
}