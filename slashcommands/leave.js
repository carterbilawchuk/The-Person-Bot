const { MessageEmbed } = require("discord.js")
const run = async (client, interaction) => {

	try {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.reply("There are no songs in the queue")

		queue.destroy()
        await interaction.reply("Bye!")
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to get info`)
		}
	}
}

module.exports = {
	name: "leave",
	description: "Stops the bot and clears the queue.",
	run,
}