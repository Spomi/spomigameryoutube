const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '469471231427477505').setName("W");
client.channels.find('id', '469471231427477505').setName("We");
client.channels.find('id', '469471231427477505').setName("Wel");
client.channels.find('id', '469471231427477505').setName("Welc");
client.channels.find('id', '469471231427477505').setName("Welco");
client.channels.find('id', '469471231427477505').setName("Welcom");
client.channels.find('id', '469471231427477505').setName("Welcome");
client.channels.find('id', '469471231427477505').setName("Welcome T");
client.channels.find('id', '469471231427477505').setName("Welcome To");
client.channels.find('id', '469471231427477505').setName("Welcome To M");
client.channels.find('id', '469336127254298625').setName("Welcome To MA");
client.channels.find('id', '469471231427477505').setName("Welcome To MAR");
client.channels.find('id', '469471231427477505').setName("Welcome To MARO");
client.channels.find('id', '469471231427477505').setName("Welcome To MAROC");
client.channels.find('id', '469471231427477505').setName("Welcome To MAROC GAM");
client.channels.find('id', '469471231427477505').setName("Welcome To MAROC GAMER");
}, 3000);
 
});







client.login(process.env.BOT_TOKEN);
