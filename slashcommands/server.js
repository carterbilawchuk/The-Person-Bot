const run = async (client, interaction) => {

	try {
		return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`failed to get info`)
		}
	}
}

module.exports = {
	name: "server",
	description: "Get some info about this amazing server",
    perms: "",
	run,
}