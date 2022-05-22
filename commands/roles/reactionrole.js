const Discord = require("discord.js");

module.exports = {
	name: "reactionrole",
	catagory: "roles",
    run: async ({message, args, client})=>{
        const channel = "976533186660143114"
    
        const frisbeeRole = message.guild.roles.cache.find(role => role.name === "Plays Frisbee")
        const baseballRole = message.guild.roles.cache.find(role => role.name === "Plays Baseball")
        const basketballRole = message.guild.roles.cache.find(role => role.name === "Plays Basketball")
        const footballRole = message.guild.roles.cache.find(role => role.name === "Plays Football")
        const soccerRole = message.guild.roles.cache.find(role => role.name === "Plays Soccer")

        const descendersRole = message.guild.roles.cache.find(role => role.name === "Plays Descenders")
        const apexLegendsRole = message.guild.roles.cache.find(role => role.name === "Plays Apex Legends")
        const robloxRole = message.guild.roles.cache.find(role => role.name === "Plays Roblox")
        const forzaRole = message.guild.roles.cache.find(role => role.name === "Plays Forza")
        const recRoomRole = message.guild.roles.cache.find(role => role.name === "Plays Rec Room")
        const rocketLeagueRole = message.guild.roles.cache.find(role => role.name === "Plays Rocket League")
        const minecraftRole = message.guild.roles.cache.find(role => role.name === "Plays Minecraft")
        const valorantRole = message.guild.roles.cache.find(role => role.name === "Plays Valorant")
        const fortniteRole = message.guild.roles.cache.find(role => role.name === "Plays Fortnite")

        const frisbeeEmoji = '🥏';
        const baseballEmoji = '⚾';
        const basketballEmoji = '🏀';
        const footballEmoji = '🏈';
        const soccerEmoji = '⚽';

        const descendersEmoji = '🚴';
        const apexLegendsEmoji = '🅰️';
        const robloxEmoji = '🎮';
        const forzaEmoji = '🏎️';
        const recRoomEmoji = '🚩';
        const rocketLeagueEmoji = '🚀';
        const minecraftEmoji = '⛏️';
        const valorantEmoji = '🤼‍♂️';
        const fortniteEmoji = '🪂';


        let embed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('Choose the games and sports you play!')
            .setDescription('react with corisponding emojis to add the role to your profile!\n\n'
                + `${frisbeeEmoji}|Frisbee\n`
                + `${basketballEmoji}|Basketball\n`
                + `${baseballEmoji}|Baseball\n`
                + `${footballEmoji}|Football\n`
                + `${soccerEmoji}|Soccer\n\n`
                + `${descendersEmoji}|Descenders\n`
                + `${apexLegendsEmoji}|Apex Legends\n`
                + `${robloxEmoji}|Roblox\n`
                + `${forzaEmoji}|Forza\n`
                + `${recRoomEmoji}|Rec Room\n`
                + `${rocketLeagueEmoji}|Rocket League\n`
                + `${minecraftEmoji}|Minecraft\n`
                + `${valorantEmoji}|Valorant\n`
                + `${fortniteEmoji}|fortnite\n`);

        let messageEmbed = await message.channel.send({ embeds: [embed] })
        messageEmbed.react(frisbeeEmoji)
        messageEmbed.react(basketballEmoji)
        messageEmbed.react(baseballEmoji)
        messageEmbed.react(footballEmoji)
        messageEmbed.react(soccerEmoji)
        messageEmbed.react(descendersEmoji)
        messageEmbed.react(apexLegendsEmoji)
        messageEmbed.react(robloxEmoji)
        messageEmbed.react(forzaEmoji)
        messageEmbed.react(recRoomEmoji)
        messageEmbed.react(rocketLeagueEmoji)
        messageEmbed.react(minecraftEmoji)
        messageEmbed.react(valorantEmoji)
        messageEmbed.react(fortniteEmoji)

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === frisbeeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(frisbeeRole);
                }
                if (reaction.emoji.name === basketballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(basketballRole);
                }
                if (reaction.emoji.name === baseballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(baseballRole);
                }
                if (reaction.emoji.name === footballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(footballRole);
                }
                if (reaction.emoji.name === soccerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(soccerRole);
                }
                if (reaction.emoji.name === descendersEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(descendersRole);
                }
                if (reaction.emoji.name === apexLegendsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apexLegendsRole);
                }
                if (reaction.emoji.name === robloxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(robloxRole);
                }
                if (reaction.emoji.name === forzaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(forzaRole);
                }
                if (reaction.emoji.name === recRoomEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(recRoomRole);
                }
                if (reaction.emoji.name === rocketLeagueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rocketLeagueRole);
                }
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftRole);
                }
                if (reaction.emoji.name === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valorantRole);
                }
                if (reaction.emoji.name === fortniteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fortniteRole);
                }
            } else {
                return;
            }
 
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === frisbeeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(frisbeeRole);
                }
                if (reaction.emoji.name === basketballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(basketballRole);
                }
                if (reaction.emoji.name === baseballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(baseballRole);
                }
                if (reaction.emoji.name === footballEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(footballRole);
                }
                if (reaction.emoji.name === soccerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(soccerRole);
                }
                if (reaction.emoji.name === descendersEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(descendersRole);
                }
                if (reaction.emoji.name === apexLegendsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apexLegendsRole);
                }
                if (reaction.emoji.name === robloxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(robloxRole);
                }
                if (reaction.emoji.name === forzaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(forzaRole);
                }
                if (reaction.emoji.name === recRoomEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(recRoomRole);
                }
                if (reaction.emoji.name === rocketLeagueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rocketLeagueRole);
                }
                if (reaction.emoji.name === minecraftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftRole);
                }
                if (reaction.emoji.name === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valorantRole);
                }
                if (reaction.emoji.name === fortniteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fortniteRole);
                }
            } else {
                return;
            }
 
        });
    }
}