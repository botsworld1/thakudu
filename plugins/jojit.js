const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'jojit', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://img.favpng.com/16/1/6/the-boss-baby-big-boss-baby-baby-shower-animation-birthday-png-favpng-UQRMYYqEFcL9fh3hWFQKgVwVf.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💞Jojit💞━━━━━⛦
  Hello my name is jojit i am the 
  creator of this bot if you need 
  any help feel free to contact
  no calls🤙🏻 only whatsapp💫
  Here's Whatsapp :
 https://wa.link/v2d5vu
_________________________________
`}) 

}));
