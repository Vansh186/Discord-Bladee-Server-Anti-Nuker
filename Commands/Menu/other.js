const Discord = require('discord.js');
const { prefix, author } = require('../settings.json');

module.exports = {
    name: "other",
    description: "other command",

    async run(client, message, args) {

        const help = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Moderation `)
            .setDescription(` **<a:bf_minimod:840711651275833384> MODERATION <a:bf_minimod:840711651275833384>**
                \n **Banning:**
                \n **
<a:BTU_Tban:840710372292952104> Ban <a:BTU_Tban:840710372292952104>** | \`${prefix}ban [user]\` \n **<:unban:840711003833761804> Unban <:unban:840711003833761804>** | \`${prefix}unban [user] (reason)\` \n **<:unban:840711003833761804> Unban All <:unban:840711003833761804>** | \`${prefix}unbanall\`
                \n **Kicking:**
                \n **Kick** | \`${prefix}kick [user]\`
                \n **Messages:**
                \n **Purge** | \`${prefix}purge [Numb]\` *Max: 100 | 2 Weeks Old*
                `)
            .setFooter(`© ${client.user.username} | Prefix: ${prefix} | By: ${author}`)
            .setColor(0x36393E)
            .setTimestamp(Date.now());
        message.channel.send(help).catch(() => {
            console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS`));
        });
    }
}