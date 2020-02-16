const Discord = require('discord.js')
const db = require('quick.db');
module.exports.run = async (bot, message, args, tools) => {
/*let userChoice = args[0];

  var rand = ['HEADS!','TAILS!'];
  
   rand = Math.floor(Math.random()*rand.length);
   if(userChoice === rand){
    message.channel.send("Congratulations you won!")
}else(userChoice !== rand)
  message.channel.send("You lost! :C");


  
  //if(choices === 1, ){

  //}
*/

let outcomes = ["heads", "tails"];
let outcomesIndex = Math.round(Math.random() * outcomes.length);
let user = message.mentions.users.first() || message.author;
//let balance = await db.fetch(`money_${user.id}`);

var targetuser = db.fetch(`money_${message.author.id}`);
let moneyAmount = args[1];
let amount = moneyAmount* 2;

//Won
let won = new Discord.RichEmbed()
    .setAuthor(`YOU WON!`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**You got**`)
    .addField(`Collected `, `$` + amount);
    //Lost
    let lost = new Discord.RichEmbed()
    .setAuthor(`YOU LOST`, message.author.displayAvatarURL)
    .setColor("RED")
    .setDescription(`**You got**`)
    .addField(`Lost `, `- $` + amount)

  


//let moneyAmount = args[1];


 
let userChoice1 = args[1]
    
    if(targetuser < 1){
      return message.channel.send(` :x: ${message.author.username} is broke af.`);
          }
    if(userChoice1 === outcomes[outcomesIndex]){
      message.channel.sendEmbed(won)
      if(isNaN(args[1])){
        return message.channel.send(` :x: ${message.author}, you need to input either heads or tails!`)
      }
      }
      if(isNaN(args[0])) {

        return message.channel.send(` :x: ${message.author}, you need to input a value to bet!`)}
    } 

     if(!!userChoice1 === outcomes[outcomesIndex]){
  message.channel.sendEmbed(lost)
  if(isNaN(args[1])){
    return message.channel.send(` :x: ${message.author}, you need to input either heads or tails!`)
  }
  if(isNaN(args[0])) {

      return message.channel.send(` :x: ${message.author}, you need to input a value to bet!`)}
}
    db.subtract(`money_${message.author.id}`, amount)
    

if(userChoice1 !== outcomes[outcomesIndex]){
  message.channel.sendEmbed(lost)
    db.subtract(`money_${message.author.id}`, amount)
}

  if(userChoice1 === outcomes[outcomesIndex]){
    db.add(`money_${message.author.id}`, amount);
  }
  
console.log(outcomes[outcomesIndex], userChoice1, moneyAmount)


module.exports.help = {
    name: "cf"
}