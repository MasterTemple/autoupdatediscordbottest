module.exports = {
    execute(original_username, original_user_pfp, thumbnail) {
        const {inviteLink, iconURL, footer} = require('./../config.json');


        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            //.setTitle(title)
            //.setURL(url)
            .setAuthor(original_username, original_user_pfp)
            //.setThumbnail(thumbnail)
            //.addFields(
            //    { name: 'Display Name', value: displayName, inline: true },
            //    { name: 'Internal Notes', value: internalNotes, inline: true },
            //    { name: 'Brick Name', value: title, inline: true },
            //)

            .setImage(thumbnail)
            //.setTimestamp()
            //.setFooter(footer, iconURL);

        return embed
    }
}
