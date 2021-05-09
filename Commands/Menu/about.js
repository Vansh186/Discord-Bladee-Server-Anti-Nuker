const Discord = require('discord.js');
const { prefix, author, authorID, github, founder, founderId, sourceCode, SupportServer } = require('../settings.json');

module.exports = {
    name: "about",
    description: "about command",

    async run(client, message, args) {
        const userCount = client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c);
        const about = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | About`)
            .setDescription(`\n\n**HYPER PRIME One of the Most Advanced Discord Server Protection Bot** \n\n \<a:slr_discord:840707577906331668>Discord<a:slr_discord:840707577906331668>:\ <@${authorID}> | ${author} \n \<:githublogo:840706819209822238>Github<:githublogo:840706819209822238>:\ [Van.sh07 GitHub](${github}) \n \`Source Code:\` [Van.sh07](${sourceCode}) \n\n<a:solar_dev:839851154946392075>**Founder**<a:solar_dev:839851154946392075> \n\n\`Discord:\` <@${founderId}> | \`${founder}\`\n \<a:tenor:840708675773267998>Support Server<a:tenor:840708675773267998>:\ [Click Here](${SupportServer}) \n \n <a:solar_music:839832243212124181>**Stats:**<a:solar_music:839832243212124181>\n \`${userCount}\` __**Users Protected.**__ \n \`${client.guilds.cache.size}\` __**Servers Protected.**__   \n \n <a:slr_crown:840708164529422376>**Bot Description:**<a:slr_crown:840708164529422376> \n \`Creation Date:\` 05/01/2021 \n \`Language:\` JavaScript, Typescript \n \`Operating System:\` Windows`)
            .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
            .setFooter(`© ${client.user.username} | Prefix: ${prefix} | Author: ${author}`)
            .setColor(0x36393E)
            .setTimestamp(Date.now());
        message.channel.send(about).catch(() => {
            console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS`));
        });
    }
}