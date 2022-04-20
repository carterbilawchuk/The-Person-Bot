const { MessageEmbed } = require("discord.js")
const run = async (client, interaction) => {

	try {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.reply("There are no songs in the queue")

		queue.setPaused(true)
        await interaction.reply("Music has been paused! Use `/resume` to resume the music")
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to get info`)
		}
	}
}

module.exports = {
	name: "pause",
	description: "Pauses the music.",
	run,
}