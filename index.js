const Discord = require("discord.js");
require("dotenv").config()

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


client.login(process.env.token);