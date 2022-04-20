const { MessageEmbed } = require("discord.js")
const { QueryType } = require("discord-player")
const run = async (client, interaction) => {

	try {

        if (!interaction.member.voice.channel) return interaction.reply("You need to be in a VC to use this command")

        const queue = await client.player.createQueue(interaction.guild)
		if (!queue.connection) await queue.connect(interaction.member.voice.channel)

		let embed = new MessageEmbed()

		if (interaction.options.getSubcommand() === "song") {
            let url = interaction.options.getString("url")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO
            })
            if (result.tracks.length === 0)
                return interaction.reply("No results")
            
            const song = result.tracks[0]
            await queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** has been added to the Queue`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duration: ${song.duration}`})

		} else if (interaction.options.getSubcommand() === "playlist") {
            let url = interaction.options.getString("url")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_PLAYLIST
            })

            if (result.tracks.length === 0)
                return interaction.reply("No results")
            
            const playlist = result.playlist
            await queue.addTracks(result.tracks)
            embed
                .setDescription(`**${result.tracks.length} songs from [${playlist.title}](${playlist.url})** have been added to the Queue`)
                .setThumbnail(playlist.thumbnail)
		} else if (interaction.options.getSubcommand() === "search") {
            let url = interaction.options.getString("searchterms")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.AUTO
            })

            if (result.tracks.length === 0)
                return interaction.reply("No results")
            
            const song = result.tracks[0]
            await queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** has been added to the Queue`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duration: ${song.duration}`})
		}
        if (!queue.playing) await queue.play()
        await interaction.reply({
            embeds: [embed]
        })

	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`failed to get info`)
		}
	}
}

module.exports = {
	name: "play",
	description: "Play some music in your VC.",
    options: [
        {
            "name": "song",
            "description": "Loads a single song from a url",
            "type": 1,
            "options": [
                {
                    "name": "url",
                    "description": "the song's url",
                    "type": 3,
                    "required": true,
                }
            ]
        },
        {
            "name": "playlist",
            "description": "Loads a playlist of songs from a url",
            "type": 1,
            "options": [
                {
                    "name": "url",
                    "description": "the playlist's url",
                    "type": 3,
                    "required": true,
                }
            ]
        },
        {
            "name": "search",
            "description": "Searches for song based on provided keywords",
            "type": 1,
            "options": [
                {
                    "name": "searchterms",
                    "description": "the search keywords",
                    "type": 3,
                    "required": true,
                }
            ]
        }
    ],
	run,
}