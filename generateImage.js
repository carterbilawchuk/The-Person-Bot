const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://lh3.googleusercontent.com/WGA6BBv7mVVz3xCZV54O7zHYPXEOWse8y2gTJXbIdcf7Nq46_NqIDWtyIU7yBXuh7EtuOtnxFHAJZXU-4tiTHAR0kt9kGDTehGpQN3vCLyfuCO1Z31n6C3BgeszLigOO7TkOQ_BzTUacwrmtvKZaZXmvW6uK5pIk_w0Klp5MMrGgr-Z5rVwy4eu7_5ZrEW-yjABHYA6rgsprqXLAnVnL7OuQfrl3QrlY5O70t6nu8RRgIpawo6WfswmUvFgCQUgPC1Lho3BKaYzMmxSFUI3s4Xz1nFuDz3iZBcr7z4-lumMXNXzQUKEkb2TZ5VvoYxrlj1vWlJ-SeWvX0vORB9vrnHC_mwlAgdxnOiYxyp52GPkFgichKJo0NRfNlWAxFhg88mpLcVYfUqlcFKNRQG8Hnmeg1vbeYjR0tPFa4ZBPp8qbtFKbBgyrwnipiYPQKPoCfKfFVmrYb00trcbCHvQRjPiUYEsacuPvTRP-WEj4sp46BKWC3VwDBCF55-2JxRHEyqYYor0svPYLekYWzgqEsPELX1a-GaH8bEN74Ahq4v_837SLAJ25CYrTaMXNWT4W_Q9bICi8OSvG5j4nzl7_P_l4cLWekHpSmq45FEIS1Q3C2QryHj5osgBVompQsrymBhqY_p_DkeyxfFO1F9O5WRA2EZfwFY1q0XayAoqqPR4vDfylgyjRktiOWCxhNqd2gTj3AsoMPzoMN6UQa1qaWYWcQTqvFsF3MBxdH6I8GQu0Mc2r519myHsApcgFmXoiwyUSMKe6lo1701HCC9DytSubo9pECIaMQeUHpFXdSKoHrx759-yw3OlwZkwWovPfkWoN8b4=w1200-h675-no?authuser=0"

const dim = {
    height: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    // draw in the background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    // draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()
    
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // draw in Welcome
    ctx.font = "50px Roboto"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    // draw in the username
    ctx.font = "60px Roboto"
    ctx.fillText(username + discrim, dim.width/2, dim.height - dim.margin - 125)

    // draw in to the server
    ctx.font = "40px Roboto"
    ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 50)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage