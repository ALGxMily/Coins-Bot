const botSettings = require("./botsettings.json");
const token = process.env.TOKEN;
const Discord = require('discord.js');
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
const db = require('quick.db');
const fs = require("fs");
const moment = require('moment');
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
//Server
http.createServer().listen(port);


bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if(err) console.err(err);
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No command to load!");
		return;
	}
	console.log(`Loading ${jsfiles.length} commands!`);
	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${i + 1}: ${f} loaded!`)
		bot.commands.set(props.help.name, props);
	});
});

bot.on("message", async message => {
	
	//console.log(message.author.username + " sent a message with \"" + message.content + "\"" );

	if(message.author.bot) return;
	if(message.channel.type === "dm")
		return;
		let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
		

	if(!command.startsWith(prefix)) return;

	 let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
if(command === `${prefix}userinfo`) {
		}

    if(command === `${prefix}mute`) {   
	}
	

	if(command === `${prefix}unmute`) {   
}

    if(command === `${prefix}bal`){

	}
	if(command === `${prefix}add`){

	}
	if(command === `${prefix}rob`){

	}
	if(command === `${prefix}sub`){

	}
	if(command === `${prefix}suball`){

	}
	if(command === `${prefix}daily`){

	}
	if(command === `${prefix}clear`){

	}
	if(command === `${prefix}daily2`){

	}
	if(command === `${prefix}helptest`){

	}
	if(command === `${prefix}cf`){

	}
	if(command === `${prefix}leaderboard`){

	}
	bot.on('error', err => {
		console.log(err);
	})
});

bot.login(botSettings.token)