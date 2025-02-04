const Discord = require('discord.js');
const { prefix } = require('../settings.json');
const { red } = require('chalk');
const fs = require("fs");

module.exports = {
    name: "trusted",
    description: "trust command",

    async run(client, message, args) {
        const ID = message.guild.id;

        const path = `Commands/Database/Guilds/${ID}.json`;

        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                console.error(red('File: ' + path + ' does not exist'))

                const nothing = new Discord.MessageEmbed()
                    .setDescription(`<a:solar_incorrect:839832464083910707>: Cannot Fetch Data | Tip: use \`${prefix}set\` to create a database`)
                    .setColor(0x36393E)
                message.channel.send(nothing)
            } else {
                const Info = require(`../Database/Guilds/${ID}.json`)

                if (Info.Data.TrustListedUserIDs.length > 0) {
                    const List = new Discord.MessageEmbed()
                        .setTitle(`${message.guild.name} | Trusted Users: ${Info.Data.TrustListedUserIDs.length}`)
                        .setDescription(`${Info.Data.TrustListedUsers}`)
                        .setColor(0x36393E)
                    message.channel.send(List)
                } else {
                    const noList = new Discord.MessageEmbed()
                        .setTitle(`${message.guild.name} | Trusted Users: ${Info.Data.TrustListedUserIDs.length}`)
                        .setDescription(`No Currently Trusted Users.`)
                        .setColor(0x36393E)
                    message.channel.send(noList)
                }
            }
        })
    }

}