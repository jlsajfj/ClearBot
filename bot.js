const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.login(config.token);

const prefix = '!!'

client.once('ready', () => {
	console.log('Bot is online');
});

var author;
var content;
var channel;
var cmd;
var logs;

client.on('message', message => {
	author = message.author;
	content = message.content;
	channel = message.channel;
	
	if(content.startsWith(prefix)){
		cmd = content.substring(2).split(' ');
		logs = author.username+' sent the commnad \x1b[32m' + content +'\x1b[0m to the channel \x1b[32m'+ channel.name + '\x1b[0m in the server \x1b[32m' + channel.guild.name + '\x1b[0m';
		console.log(logs)
		if(cmd[0]==='clear'){
			if(cmd.length===1){
				channel.bulkDelete(100).then(messages => console.log(`Bulk deleted ${messages.size} message(s)`)).catch(console.error);
				return;
			}
			if(isNaN(cmd[1])){
				console.log('Not a valid clear command');
				return;
			}
			count = parseInt(cmd[1]);
			channel.bulkDelete(count+1).then(messages => console.log(`Bulk deleted ${messages.size} message(s)`)).catch(console.error);
			return;
		}
	}
	
});