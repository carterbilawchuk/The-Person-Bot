const { MessageEmbed } = require("discord.js")
const run = async (client, interaction) => {

	try {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.reply("There are no songs in the queue")

		queue.shuffle()
        await interaction.reply(`The queue of ${queue.tracks.length} songs have been shuffled!`)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to get info`)
		}
	}
}

module.exports = {
	name: "shuffle",
	description: "Shuffles the music.",
	run,
}