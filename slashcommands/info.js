const { MessageEmbed } = require("discord.js")
const run = async (client, interaction) => {

	try {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.reply("There are no songs in the queue")

		let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		})

        const song = queue.current

		await interaction.reply({
			embeds: [new MessageEmbed()
            .setThumbnail(song.thumbnail)
            .setDescription(`Currently Playing [${song.title}](${song.url})\n\n` + bar)
        ],
		})
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to get info`)
		}
	}
}

module.exports = {
	name: "info",
	description: "Displays info about the currently playing song.",
	run,
}