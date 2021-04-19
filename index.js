const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.mythranCommands = new Discord.Collection();
client.contributorCommands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const {prefix, token, startupStatus, botInfo, mythran, contributor} = require('./config.json');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    for(var i=0; i < command.name.length; i++) {
        client.commands.set(command.name[i], command);
    }
}


client.once('ready', () => {
    console.log(`${botInfo.name} ${parseFloat(botInfo.version).toFixed( 1)} reporting for duty!`);
    if(startupStatus != undefined) {
        client.user.setPresence({activity: {name: startupStatus}});
    }

})

client.on('message', message => {
    if(message.author.id === client.user.id){return}
    const args = message.content.slice(prefix.length).trim().split(/ +/); //each space is a new argument
    const commandName = args.shift().toLowerCase();
    //if (message.content[0] !== prefix){return}

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.execute(message);
    } catch (error) {
        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('The Maelstrom have broken this command!');
        }
    }

})

client.login(token);
