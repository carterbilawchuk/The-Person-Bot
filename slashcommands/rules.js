const run = async (client, interaction) => {

	try {
		return interaction.reply(`Rules:\n\nBe respectful, civil, and welcoming.\nNo inappropriate or unsafe content.\nDo not misuse or spam in any of the channels.\nDo not join the server to promote your content.\nAny content that is NSFW is not allowed under any circumstances.\nDo not buy/sell/trade/give away anything.\nDo not use the server as a dating server.\nThe primary language of this server is English.\nDiscord names and avatars must be appropriate.\nSpamming in any form is not allowed.\nControversial topics such as religion or politics are not allowed.\nDo not attempt to bypass any blocked words.\nDon’t ping without legitimate reasoning behind them.\nAlternate accounts are not allowed under any circumstances.\nCatfishing and any sort of fake identities are forbidden.\nNo Discord server invite links or codes.\nDo not advertise without permission.\nDo not role-play within the server.\nRaiding is not allowed.\nAnything to target specific groups/individuals is prohibited.\nNo major spoilers from any anime, movie, tv-show, or games on public channels.\nPlease do not mic spam.\nDo not record voice channel conversations.\nAvoid topics regarding banned members.\nRemain on topic and use channels correctly.\nDo not discuss hacking or cheating.\nDo not link scam websites.\nSpoilers must use spoiler tags and be labeled.`)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`failed to get info`)
		}
	}
}

module.exports = {
	name: "rules",
	description: "This might help you not get banned.",
    perms: "",
	run,
}