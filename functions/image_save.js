module.exports = {
    execute(message, fs, picture_data){
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
                    let date_now = new Date();

                    picture_data.push({
                        id: a.id,
                        name: a.name,
                        url: a.url,
                        date: `${date_now.getUTCMonth()+1}/${date_now.getUTCDate()}/${date_now.getUTCFullYear()}`,
                        hour: date_now.getHours(),
                        minute:date_now.getMinutes(),
                        message_text: message.content,
                        message_author_tag: message.author.tag,
                        message_author_id: message.author.id,
                        message_id: message.id,
                        message_link: `https://discord.com/channels/${message.channel.guild.id}/${message.channel.id}/${message.id}`,
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
        if(message.embeds.length > 0) {
            try {
                // let imageFile = require('./commands/download_image.js')
                // let embedFile = require('./functions/embedTemplate.js')
                //message.channel.send(message.author.displayAvatarURL())
                message.embeds.forEach( async a => {
                    // imageFile.execute(a.url, `./images/${a.id}.png`)
                    // let embed = embedFile.execute(message.author.username, message.author.displayAvatarURL(), a.url)
                    //message.channel.send(embed)
                    // await client.channels.cache.get(cache_channel_id).send(embed).then( () => {
                    //     message.delete()
                    // })
                    //console.log(a)
                    let date_now = new Date();
                    //console.log(a)

                    picture_data.push({
                        id: a.id,
                        name: a.name,
                        url: a.url,
                        date: `${date_now.getUTCMonth()+1}/${date_now.getUTCDate()}/${date_now.getUTCFullYear()}`,
                        hour: date_now.getHours(),
                        minute:date_now.getMinutes(),
                        message_text: message.content,
                        message_author_tag: message.author.tag,
                        message_author_id: message.author.id,
                        message_id: message.id,
                        message_link: `https://discord.com/channels/${message.channel.guild.id}/${message.channel.id}/${message.id}`,
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
    }
}