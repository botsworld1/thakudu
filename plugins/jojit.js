const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'jojit', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://wallpaperaccess.com/full/1371433.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💞Jojit💞━━━━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐛𝐨𝐭.
            *T H A K U D U*
_________________________________

▣▣▣▣▣▣▣JOJIT▣▣▣▣▣▣▣
`}) 

}));
