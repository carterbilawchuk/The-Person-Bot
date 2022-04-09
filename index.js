const Discord = require("discord.js");
require("dotenv").config()
const generateImage = require("./generateImage")
const fs = require("fs")
const membercounter = require("./counters/membercounter")


//intents
const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,

    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_BANS",
    ]
});

let bot = {
    client,
    prefix: "-",
    owners: ["842180919229808691", "958818784490180638"]
}


const welcomeChannelId = "958521046594625556"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to The Place! \nThe best place you'll ever be.`,
        files: [img]
    })
    member.send("Hey, " + member.displayName + `. Welcome to this server! Make sure to follow the rules and enjoy your stay!\n\n\nRules:\n\nBe respectful, civil, and welcoming.\nNo inappropriate or unsafe content.\nDo not misuse or spam in any of the channels.\nDo not join the server to promote your content.\nAny content that is NSFW is not allowed under any circumstances.\nDo not buy/sell/trade/give away anything.\nDo not use the server as a dating server.\nThe primary language of this server is English.\nDiscord names and avatars must be appropriate.\nSpamming in any form is not allowed.\nControversial topics such as religion or politics are not allowed.\nDo not attempt to bypass any blocked words.\nDon’t ping without legitimate reasoning behind them.\nAlternate accounts are not allowed under any circumstances.\nCatfishing and any sort of fake identities are forbidden.\nNo Discord server invite links or codes.\nDo not advertise without permission.\nDo not role-play within the server.\nRaiding is not allowed.\nAnything to target specific groups/individuals is prohibited.\nNo major spoilers from any anime, movie, tv-show, or games on public channels.\nPlease do not mic spam.\nDo not record voice channel conversations.\nAvoid topics regarding banned members.\nRemain on topic and use channels correctly.\nDo not discuss hacking or cheating.\nDo not link scam websites.\nSpoilers must use spoiler tags and be labeled.`)
    member.roles.add(member.guild.roles.cache.get("956657142339891281"))
    member.roles.add(member.guild.roles.cache.get("956295115880669264"))
    member.roles.add(member.guild.roles.cache.get("954858501958680586"))
})

client.on("ready", () => {
    membercounter(client)
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return 
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply("You do not have permission for this command")

    slashcmd.run(client, interaction)
})

client.login(process.env.token);