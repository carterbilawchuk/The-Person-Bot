const Discord = require("discord.js");
require("dotenv").config()

const generateImage = require("./generateImage")

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
    ]
});

//ready log
client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
});

client.on("messageCreate", (message) => {
    if(message.content.toLowerCase() == "hi")
    {
        message.reply("Hello!");
    }
})

const welcomeChannelId = "958521046594625556";

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Hey, <@${member.id}> Welcome to The Place!`,
        files: [img]
    });
})


client.login(process.env.token);