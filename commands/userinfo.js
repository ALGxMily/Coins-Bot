const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	
	let embed = new Discord.RichEmbed()
	.setTitle(message.author.username)
	.addField("Full username", `${message.author.username}#${message.author.discriminator}`)
	.setImage(message.author.displayAvatarURL)
	//.setThumbnail(message.author.displayAvatarURL)
	.setAuthor("User's Profile")
	.addField('This user joined discord on:  ' , message.author.createdAt, false)
	.setFooter('Proxy', "https://i.imgur.com/2LFEhwg.png")
	.setColor(0x04AB15)
	.addField("ID", message.author.id);
	message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo"
}