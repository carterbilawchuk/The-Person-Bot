const run = async (client, interaction) => {

	try {
		return interaction.reply(`My dad is Sam.`)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`failed to get info`)
		}
	}
}

module.exports = {
	name: "son",
	description: "you know exaclty what this command does.",
    perms: "",
	run,
}