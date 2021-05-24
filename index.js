const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.mythranCommands = new Discord.Collection();
client.contributorCommands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var picture_data = require('./src/picture_data.json')


const {prefix, token, startupStatus, botInfo, mythran, contributor, cache_channel_id, approved_channel_id} = require('./config.json');

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

client.on('messageReactionAdd', (reaction, user) => {
})

client.on('message', message => {
    if(message.channel.id === cache_channel_id && message.author.id === client.user.id){
        message.react("✅").then(() => {
            message.react("❌").then()
        })
    }

    if(message.author.id === client.user.id){return}
    const args = message.content.slice(prefix.length).trim().split(/ +/); //each space is a new argument
    const commandName = args.shift().toLowerCase();

    if(message.attachments.size > 0) {
        try {
            // let imageFile = require('./commands/download_image.js')
            // let embedFile = require('./functions/embedTemplate.js')
            //message.channel.send(message.author.displayAvatarURL())
            message.attachments.forEach( async a => {
                // imageFile.execute(a.url, `./images/${a.id}.png`)
                // let embed = embedFile.execute(message.author.username, message.author.displayAvatarURL(), a.url)
                //message.channel.send(embed)
                // await client.channels.cache.get(cache_channel_id).send(embed).then( () => {
                //     message.delete()
                // })
                //console.log(a)
                picture_data.push({
                    id: a.id,
                    name: a.name,
                    url: a.url
                })

            })
            fs.writeFile ("./src/picture_data.json", JSON.stringify(picture_data, null, 2), function(err) {
                    if (err) throw err;
                    console.log('data updated');
                }
            );



        } catch (e) {
            console.log(e)
        }
    }


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
