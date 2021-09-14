const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'jojit', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://textpro.me/images/user_image/2021/09/61408bce7c0a2.jpg-s1041-b1";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💞Jojit💞━━━━━⛦
   
    
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐛𝐨𝐭.\n
     *T H A K U D U*\n
         createdby:*Jojit*\n
 Whatsapp my boss:\n
 https://wa.link/v2d5vu
_________________________________
`}) 

}));
