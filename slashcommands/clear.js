const { Message } = require("discord.js")

const run = async (client, interaction) => {
    let amount = interaction.options.getInteger("amount")

	try {
		await interaction.channel.messages.fetch({limit: amount}).then(messages =>{
            interaction.channel.bulkDelete(messages)
        })
        interaction.reply(`Cleared ${amount} messages from the current channel.`)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`failed to clear messages`)
		}
	}
}

module.exports = {
	name: "clear",
	description: "Clear messages in a channel.",
    perms: "MANAGE_MESSAGES",
    options: [
		{ name: "amount", description: "The amount of messages to clear.", type: "INTEGER", required: true },
	],
	run,
}