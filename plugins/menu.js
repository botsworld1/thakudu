const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://wallpaperaccess.com/full/1371433.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💞Jojit💞━━━━━⛦

𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐛𝐨𝐭.
            *T H A K U D U*
_________________________________
𝗠𝗘𝗗𝗜𝗔  𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ⚠️
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
⭕𝙐𝙨𝙚➜ Downloads song for you.
⚠️.song  baby love
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
⭕𝙐𝙨𝙚➜ Downloads video from YouTube link.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
⭕𝙐𝙨𝙚➜   Downloads content from instagram.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
⭕𝙐𝙨𝙚➜   Gives you YT links.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
⭕𝙐𝙨𝙚➜   Get info related to tv series and shows.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
⭕𝙐𝙨𝙚➜ Converts video to gif.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
⭕𝙐𝙨𝙚➜ Converts video into audio.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
⭕𝙐𝙨𝙚➜ Converts text into voice.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
⭕𝙐𝙨𝙚➜ It sends image from google.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
⭕𝙐𝙨𝙚➜ Translate the text you tag.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
⭕𝙐𝙨𝙚➜ It sends Wikipedia result.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
⭕𝙐𝙨𝙚➜ Finds the lyrics of the song.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
⭕𝙐𝙨𝙚➜ Send the covid stats of your country.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
⭕𝙐𝙨𝙚➜ Tells you about the weather of your place.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
⭕𝙐𝙨𝙚➜ Removes the background of tge image.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
⭕𝙐𝙨𝙚➜ Finds the text written on the image.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
⭕𝙐𝙨𝙚➜ It sends you random wallpaper.
■□■□■□■□■□Thakudu■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
⭕𝙐𝙨𝙚➜ It sends a random joke.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
⭕𝙐𝙨𝙚➜ Cations the image into a meme.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
⭕𝙐𝙨𝙚➜ It sends a random quote.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
⭕𝙐𝙨𝙚➜ It sends the screenshot of the website.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
⭕𝙐𝙨𝙚➜ Converts text into changesay meme image.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
⭕𝙐𝙨𝙚➜ Convert text into Trump's tweet.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
⭕𝙐𝙨𝙚➜ Gives you a compliment.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
⭕𝙐𝙨𝙚➜   Shorten your link.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
⭕𝙐𝙨𝙚➜   Dictionary [-dict en;anime]
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
⭕𝙐𝙨𝙚➜   Tells you about your horoscope.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
⭕𝙐𝙨𝙚➜   Converts text into qr code.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
⭕𝙐𝙨𝙚➜  Gives you info about movie.
⚠️movie master
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
⭕𝙐𝙨𝙚➜  Gives you info about anime.
⚠️anime pikachu
____________________
𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ⚠️
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
⭕𝙐𝙨𝙚➜ Converts img/gif into a sticker.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
⭕𝙐𝙨𝙚➜ Converts sticker into image.
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
⭕𝙐𝙨𝙚➜ Converts text into glowing sticker.
⚠️ex  attp pikachu

═════💢Thakudu💢═════
▣▣▣▣▣▣▣▣▣Jojit▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
