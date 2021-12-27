// BOT EXCLUSIVO PARA WHATSAPP
// CRIADO E MELHORADO POR RISKY MODZ
// COPIA NÃO COMÉDIA

const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const fs = require('fs')
const encodeUrl = require('encodeurl')
const crypto = require('crypto')
const qrcode = require('qrcode');
const imgbb = require('imgbb-uploader')
const request = require('request')
const requests = require("node-fetch")
const toMs = require('ms')
const ms = require("parse-ms");
const FormData = require('form-data')
const yts = require( 'yt-search')
const axios = require("axios")
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const lolis = require('lolis.life')
const loli = new lolis()

//******************** 》Stick WM《 ********************\\
const Exif = require('./lib/exif');
const exif = new Exif();

//******************** 》Function《 ********************\\
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, kyun } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { validmove, setGame } = require("./lib/tictactoe");
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')
const { yta, ytv } = require("./lib/ytdl");
const { fbdl } = require("./lib/fbdl");
const { uploadimg } = require('./lib/uploadimg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const _prem = require("./lib/premium");
const { consultas } = require('./lib/consultas')
const { addSticker, delCommand, listCommand } = require('./lib/stickcmd.js')
const game = require("./lib/game");
const { smsg } = require('./lib/simple')
const { menufigu } = require('./lib/menus/menufigu')
const { outros } = require('./lib/menus/outros')
const { ajuda } = require('./lib/menus/outros')
const { gerador } = require('./lib/geradores')
const { fun } = require('./lib/menus/fun')
const { grupomenu } = require('./lib/menus/grupomenu')
const { livro } = require('./lib/menus/grupomenu')
const { livro1 } = require('./lib/menus/grupomenu')
const { livro2 } = require('./lib/menus/grupomenu')
const { livro3 } = require('./lib/menus/grupomenu')
const { livro4 } = require('./lib/menus/grupomenu')
const { livro5 } = require('./lib/menus/grupomenu')
const _Bv = JSON.parse(fs.readFileSync('./database/group/Bv.json'))
const { help1 } = require('./lib/menus/help1')
const { simih } = require('./database/functions')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const voting = JSON.parse(fs.readFileSync('./database/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const setGelud = require('./lib/gameGelud.js')
const timeWib = moment.tz('America/Fortaleza').format('DD/MM HH:mm:ss')
const timeWit= moment().tz('America/Fortaleza').format('HH:mm:ss')
const timeWita = moment().tz('America/Fortaleza').format('DD/MM')
const level = require("./lib/level");

//******************** 》Database《 ********************\\
const anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _claim = JSON.parse(fs.readFileSync('./database/user/claim.json'))
const _verify = JSON.parse(fs.readFileSync('./database/user/verify.json'))
const antinota = JSON.parse(fs.readFileSync('./database/antinota.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const key = JSON.parse(fs.readFileSync('./database/key.json'))
const _antivirtual = JSON.parse(fs.readFileSync('./database/group/antivirtual.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const _bye = JSON.parse(fs.readFileSync('./database/group/bye.json'))
const left = JSON.parse(fs.readFileSync('./database/left.json'))	
const _user = JSON.parse(fs.readFileSync('./database/bot/verify.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
const setting = JSON.parse(fs.readFileSync('./database/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _adv = JSON.parse(fs.readFileSync('./database/user/advertencia.json'))
const stcmd = JSON.parse(fs.readFileSync('./database/stickcmd.json'))
const stickerdb = JSON.parse(fs.readFileSync("./database/stickerdb.json"))
const reg = JSON.parse(fs.readFileSync('./database/register.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const atm = require("./lib/atm");
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');
//******************** 》Src《 ********************\\
const pendaftar = JSON.parse(fs.readFileSync('./src/user.json'))
const tmp_hit = JSON.parse(fs.readFileSync('./src/hit.json'))
const samih = JSON.parse(fs.readFileSync('./src/json/simi.json'))
const tmphit = JSON.parse(fs.readFileSync('./src/today.json'))
//******************** 》Setting《 ********************\\
menusimpel = false
grupomc = "https://chat.whatsapp.com/CDlnQbUxHUuEYwWFioXVJI"
owner = "558896926980@s.whatsapp.net"
ownerN = "558896926980"
setgrup = "558591221977-1624681186@g.us"
wa = '0@s.whatsapp.net'
blocked = []
public = true
picdetec = false
shp = '⬡'
shiit = '108'
botname = 'Risky Bot'
nama = 'Risky Bot'
fake = '@Riskyzin'
baterai = {
battery: "" || "Não detectado",
isCharge: "" || false
}
antidel = false
antical = true
aread = false
ngetik = false
vn = true

//******************** 》Prefix《 ********************\\
let multi = true
let nopref = false
let single = false
let prefa = '!'

//******************** 》Path Image《 ********************\\
erro = fs.readFileSync('./pathImage/erro.jpg')
gambar = fs.readFileSync('./pathImage/riskyz.png')
gambar1 = fs.readFileSync('./pathImage/emror.jpg')
gambar2 = fs.readFileSync('./pathImage/risky.jpeg')
gambar3 = fs.readFileSync('./pathImage/risky.jpg')
gambar4 = fs.readFileSync('./pathImage/risky2.jpeg')
gambar5 = fs.readFileSync('./pathImage/risky3.jpeg')
fakeg = fs.readFileSync('./pathImage/fake.jpg')
minecraft = fs.readFileSync('./pathImage/mcpe.jpg')
/*
Note :
▪︎ Gambar1 : Pict Error
▪︎ Gambar2 : Pict Anime Witch
▪︎ Gambar3 : Pict Anime 
▪︎ Gambar4 : Pict Kayess
▪︎ Gambar5 : Pict Cute <3
*/


//******************** 》Game《 ********************\\
let tebakgambar = [];
let family100 = [];
let mtk = [];
let ckl = [];
//******************** 》Apikey《 ********************\\
let {
    hard,
    zeks,
    xtem,
    lol,
    tbz,
    ai
} = require('./database/key')
    
let {    
    gamewaktu,
    limitCount
} = require('./database/settings')

//******************** 》Vcard《 ********************\\
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:ᬊ͜͡❥𝐑𝐈𝐒͜𝐊𝐘•𝐌𝚯͢𝐃𝐙𝅦\n'
            + 'ORG:Dono do Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=558896926980:+55 88 9692 6980\n'
            + 'END:VCARD'

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//>> mensaje 
const contador = JSON.parse(fs.readFileSync('./database/group/contador.json'))
const _msg = JSON.parse(fs.readFileSync('./database/user/mensaje.json'))

//anti spam by: os gringo indonésio
const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3 * 1000)
}
module.exports = client = async (client, sen) => {
try {
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const { convrt , donld , gem , sess , gc } = require('./lib/tutorial')
const { help } = require('./lib/menu')
const { menus } = require('./lib/menuSimpel')
if (!sen.hasNewMessage) return
sen = sen.messages.all()[0]
//smsg(client, sen)
if (!sen.message) return
if (sen.key && sen.key.remoteJid == 'status@broadcast') return
sen.message = (Object.keys(sen.message)[0] === 'ephemeralMessage') ? sen.message.ephemeralMessage.message : sen.message

m = smsg(client, sen)
global.prefix
global.blocked

const content = JSON.stringify(sen.message)
const from = sen.key.remoteJid
const type = Object.keys(sen.message)[0]

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const mentionByTag = type == "extendedTextMessage" && sen.message.extendedTextMessage.contextInfo != null ? sen.message.extendedTextMessage.contextInfo.mentionedJid : []

//******************** 》Date & Time《 ********************\\
const time = moment.tz('America/Fortaleza').format('DD/MM HH:mm:ss')
const datre = new Date().toLocaleDateString()
const wib = moment.tz('America/Fortaleza').format('HH : mm : ss')
const wita = moment.tz('America/Fortaleza').format('HH : mm : ss')
const wit = moment.tz('America/Fortaleza').format('HH : mm :ss')

var dates = moment().tz('America/Fortaleza').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Domingo"; break;
case 1: hari = "Segunda-feira"; break;
case 2: hari = "Terça-feira"; break;
case 3: hari = "Quarta-feira"; break;
case 4: hari = "Quinta-feira"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sábado"; break;
}
switch(bulan1) {
case 0: bulan1 = "Janeiro"; break;
case 1: bulan1 = "Fevereiro"; break;
case 2: bulan1 = "Março"; break;
case 3: bulan1 = "Abril"; break;
case 4: bulan1 = "Maio"; break;
case 5: bulan1 = "Junho"; break;
case 6: bulan1 = "Julho"; break;
case 7: bulan1 = "Agosto"; break;
case 8: bulan1 = "Setembro"; break;
case 9: bulan1 = "Outubro"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Dezembro"; break;
}
switch(waktoo){
case 0: waktoo = "Madrugada 🌃"; break;
case 1: waktoo = "Madrugada 🌃"; break;
case 2: waktoo = "Madrugada 🌃"; break;
case 3: waktoo = "Madrugada 🌃"; break;
case 4: waktoo = "Manhã  🏙️"; break;
case 5: waktoo = "Manhã  🏙️"; break;
case 6: waktoo = "Manhã  🏙️"; break;
case 7: waktoo = "Manhã  🏙️"; break;
case 8: waktoo = "Manhã  🏙️"; break;
case 9: waktoo = "Manhã  🏙️"; break;
case 10: waktoo = "Manhã  🏙️"; break;
case 11: waktoo = "Almoço 🏙️"; break;
case 12: waktoo = "Almoço 🏙️"; break;
case 13: waktoo = "Almoço 🏙️"; break;
case 14: waktoo = "Almoço 🏙️"; break;
case 15: waktoo = "Tarde 🌆"; break;
case 16: waktoo = "Tarde 🌆"; break;
case 17: waktoo = "Tarde 🌆"; break;
case 18: waktoo = "Fim de Tarde 🌆"; break;
case 19: waktoo = "Noite 🌃"; break;
case 20: waktoo = "Noite 🌃"; break;
case 21: waktoo = "Noite 🌃"; break;
case 22: waktoo = "Noite 🌃"; break;
case 23: waktoo = "Noite 🌃"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var Hari= "" + waktoo;
  

const mentionByReply = type == "extendedTextMessage" && sen.message.extendedTextMessage.contextInfo != null ? sen.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const cmd = (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()


//BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//******************* 》Prefix《 *******************\\
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa
}
}
}


body = (type === 'listResponseMessage' && sen.message.listResponseMessage.title) ? sen.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && sen.message.buttonsResponseMessage.selectedButtonId) ? sen.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && sen.message.conversation.startsWith(prefix)) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption.startsWith(prefix) ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption.startsWith(prefix) ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text.startsWith(prefix) ? sen.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) : ""

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolher Comando","footerText": "\n_Selecione e Envie!_\n• By: Risky Modz\nhttps://youtube.com/c/Risky傳說","listType": "SINGLE_SELECT","sections": list}}, {})
            return client.relayWAMessage(po, {waitForAck: true})
        }

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia(s), " : " Dia(s), ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto(s), " : " Minuto(s), ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo(s)" : " Segundo(s)") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

var pes = (type === 'conversation' && sen.message.conversation) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text ? sen.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim()
budy = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
tmplt = (type === 'listResponseMessage' && sen.message.listResponseMessage.title) ? sen.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && sen.message.buttonsResponseMessage.selectedButtonId) ? sen.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && sen.message.conversation.startsWith(prefix)) ? sen.message.conversation : (type == 'imageMessage') && sen.message.imageMessage.caption.startsWith(prefix) ? sen.message.imageMessage.caption : (type == 'videoMessage') && sen.message.videoMessage.caption.startsWith(prefix) ? sen.message.videoMessage.caption : (type == 'extendedTextMessage') && sen.message.extendedTextMessage.text.startsWith(prefix) ? sen.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(sen.message.stickerMessage.fileSha256.toString('base64')) : ""
q2 = Object.keys(sen.message)[0] == "listResponseMessage" ? sen.message.listResponseMessage.singleSelectReply.selectedRowId: ""
q3 = Object.keys(sen.message)[0] == "buttonsResponseMessage" ? sen.message.buttonsResponseMessage.selectedButtonId : ""
butresx = (type === 'buttonsResponseMessage') ? sen.message.buttonsResponseMessage.selectedDisplayText : ''

const hentai3 = [
"https://i.ibb.co/KVKb3q6/pack-imagem-gyaru-01.jpg",
"https://i.ibb.co/C8rHHhj/pack-imagem-gyaru-02.jpg",
"https://i.ibb.co/WPYxwRH/pack-imagem-gyaru-03.jpg",
"https://i.ibb.co/W3FQw3p/pack-imagem-gyaru-04.jpg",
"https://i.ibb.co/9G2HhQw/pack-imagem-gyaru-05.jpg",
"https://i.ibb.co/bggTvsq/pack-imagem-gyaru-06.jpg",
"https://i.ibb.co/smqnBCx/pack-imagem-gyaru-07.jpg",
"https://i.ibb.co/cYrgmZ1/pack-imagem-gyaru-08.jpg",
"https://i.ibb.co/xLdD1QD/pack-imagem-gyaru-09.jpg",
"https://i.ibb.co/SJYjgMm/pack-arknights-01.jpg",
"https://i.ibb.co/SncG5gZ/pack-arknights-02.jpg",
"https://i.ibb.co/P9tCdrB/pack-arknights-03.jpg",
"https://i.ibb.co/s91Kd0k/pack-arknights-04.jpg",
"https://i.ibb.co/tMdBj6b/pack-arknights-05.jpg",
"https://i.ibb.co/x2ZnpMr/pack-arknights-06.jpg",
"https://i.ibb.co/gFgnsPJ/pack-arknights-07.jpg",
"https://i.ibb.co/ynHMF7j/pack-arknights-08.jpg",
"https://i.ibb.co/7tM38ss/pack-arknights-09.jpg",
"https://i.ibb.co/FDCvRdZ/pack-arknights-10.jpg",
"https://i.ibb.co/b1HXXFc/pack-arknights-11.jpg",
"https://i.ibb.co/q0gSz17/pack-arknights-12.jpg",
"https://i.ibb.co/pr9gsgh/pack-arknights-13.jpg",
"https://i.ibb.co/54KN3d3/pack-arknights-14.jpg",
"https://i.ibb.co/MBpN3Bd/pack-arknights-15.jpg",
"https://i.ibb.co/dky8HwD/pack-arknights-16.jpg",
"https://i.ibb.co/xjHRJHS/pack-arknights-17.jpg",
"https://i.ibb.co/nkdr5Py/pack-arknights-18.jpg",
"https://i.ibb.co/wy7TRdy/pack-arknights-19.jpg",
"https://i.ibb.co/fprY0G2/pack-arknights-20.jpg",
"https://i.ibb.co/d4K4DRW/pack-arknights-21.jpg",
"https://i.ibb.co/RSw95Vm/pack-arknights-22.jpg",
"https://i.ibb.co/6RJVBzJ/pack-arknights-23.jpg",
"https://i.ibb.co/PZpPPks/pack-arknights-24.jpg",
"https://i.ibb.co/RNNsQsT/pack-arknights-25.jpg",
"https://i.ibb.co/rvjJP6W/pack-arknights-26.jpg",
"https://i.ibb.co/HHNKdN1/pack-arknights-27.jpg",
"https://i.ibb.co/51LFMzB/pack-arknights-28.jpg",
"https://i.ibb.co/xqb2gGV/pack-arknights-29.jpg",
"https://i.ibb.co/1qwZp7f/pack-arknights-30.jpg",
"https://i.ibb.co/cyvcxdC/pack-arknights-31.jpg",
"https://i.ibb.co/m60v6kP/pack-arknights-32.jpg",
"https://i.ibb.co/2S9gQ2X/pack-arknights-33.jpg",
"https://i.ibb.co/Vv9Q5vk/pack-arknights-34.jpg",
"https://i.ibb.co/fFfzyhd/pack-arknights-35.jpg",
"https://i.ibb.co/9H393nf/pack-arknights-36.jpg",
"https://i.ibb.co/3SKCqpR/pack-arknights-37.jpg",
"https://i.ibb.co/S6RswBS/pack-arknights-38.jpg",
"https://i.ibb.co/YXkjCvB/pack-arknights-39.jpg",
"https://i.ibb.co/mbM67Tm/pack-arknights-40.jpg",
"https://i.ibb.co/wNX0P9Y/pack-arknights-41.jpg",
"https://i.ibb.co/KFcTwZQ/pack-arknights-42.jpg",
"https://i.ibb.co/3zMrbJr/pack-arknights-43.jpg",
"https://i.ibb.co/HV89h5b/pack-arknights-44.jpg",
"https://i.ibb.co/fF2ZxyY/pack-arknights-45.jpg",
"https://i.ibb.co/mG4zwsx/pack-arknights-46.jpg",
"https://i.ibb.co/rHyjftg/pack-arknights-47.jpg",
"https://i.ibb.co/PZLTdGv/pack-arknights-48.jpg",
"https://i.ibb.co/8bYYKMD/pack-arknights-49.jpg",
"https://i.ibb.co/W3jypRC/pack-arknights-50.jpg",
"https://i.ibb.co/D8DjJwK/pack-imagem-gyaru-10.jpg",
"https://i.ibb.co/FxQt1Vt/pack-imagem-gyaru-11.jpg",
"https://i.ibb.co/4fLt74K/pack-imagem-gyaru-12.jpg",
"https://i.ibb.co/smJYnGm/pack-imagem-gyaru-13.jpg",
"https://i.ibb.co/TRtp5fC/pack-imagem-gyaru-14.jpg",
"https://i.ibb.co/ZXp8Djf/pack-imagem-gyaru-15.jpg",
"https://i.ibb.co/c6Vdssg/pack-halloween-2k21-01.jpg",
"https://i.ibb.co/QdwbvgY/pack-halloween-2k21-02.jpg",
"https://i.ibb.co/gWhzznb/pack-halloween-2k21-03.jpg",
"https://i.ibb.co/bJjmJff/pack-halloween-2k21-04.jpg",
"https://i.ibb.co/BHhrnJs/pack-halloween-2k21-05.jpg",
"https://i.ibb.co/gT8pTt1/pack-halloween-2k21-06.jpg",
"https://i.ibb.co/8d0c43R/pack-halloween-2k21-07.jpg",
"https://i.ibb.co/R7CNbh9/pack-halloween-2k21-08.jpg",
"https://i.ibb.co/X2J6P4C/pack-halloween-2k21-09.jpg",
"https://i.ibb.co/tzxTY1z/pack-halloween-2k21-10.jpg",
"https://i.ibb.co/PcXSKdS/pack-halloween-2k21-11.jpg",
"https://i.ibb.co/jbXWHvz/pack-halloween-2k21-12.jpg",
"https://i.ibb.co/RDKw7DC/pack-halloween-2k21-13.jpg",
"https://i.ibb.co/vJTcsvC/pack-halloween-2k21-14.jpg",
"https://i.ibb.co/Xy3f2zh/pack-halloween-2k21-15.jpg",
"https://i.ibb.co/VLtvxjq/pack-halloween-2k21-16.jpg",
"https://i.ibb.co/4R4x9vT/pack-halloween-2k21-17.jpg",
"https://i.ibb.co/TrhjJWs/pack-halloween-2k21-18.jpg",
"https://i.ibb.co/5rVd6BC/pack-halloween-2k21-19.jpg",
"https://i.ibb.co/qBTm8np/pack-halloween-2k21-20.jpg",
"https://i.ibb.co/6shssHn/pack-halloween-2k21-21.jpg",
"https://i.ibb.co/M5kmL4R/pack-halloween-2k21-22.jpg",
"https://i.ibb.co/pnFy11q/pack-halloween-2k21-23.jpg",
"https://i.ibb.co/SyG7ZR7/pack-halloween-2k21-24.jpg",
"https://i.ibb.co/tpCgXwz/pack-halloween-2k21-25.jpg",
"https://i.ibb.co/WgbHwHZ/pack-halloween-2k21-26.jpg",
"https://i.ibb.co/p15FRQs/pack-halloween-2k21-27.jpg",
"https://i.ibb.co/GQNshyY/pack-halloween-2k21-28.jpg",
"https://i.ibb.co/k9bpdjP/pack-halloween-2k21-29.jpg",
"https://i.ibb.co/v4KfXP1/pack-halloween-2k21-30.jpg",
"https://i.ibb.co/7jGYpfq/pack-halloween-2k21-31.jpg",
"https://i.ibb.co/3FhGw18/pack-halloween-2k21-32.jpg",
"https://i.ibb.co/yX4xXyH/pack-halloween-2k21-33.jpg",
"https://i.ibb.co/yVvFb7z/pack-halloween-2k21-34.jpg",
"https://i.ibb.co/DCSncKf/pack-halloween-2k21-35.jpg",
"https://i.ibb.co/2gSbvJm/pack-halloween-2k21-36.jpg",
"https://i.ibb.co/4dpdBnk/pack-halloween-2k21-37.jpg",
"https://i.ibb.co/Z6TdhDF/pack-halloween-2k21-38.jpg",
"https://i.ibb.co/bHydNq8/pack-halloween-2k21-39.jpg",
"https://i.ibb.co/bJ5zvt5/pack-halloween-2k21-40.jpg",
"https://i.ibb.co/1TxWWXS/pack-halloween-2k21-41.jpg",
"https://i.ibb.co/RhZsmck/pack-halloween-2k21-42.jpg",
"https://i.ibb.co/yFWV7nn/pack-halloween-2k21-43.jpg",
"https://i.ibb.co/frfBrpH/pack-halloween-2k21-44.jpg",
"https://i.ibb.co/Zm1wCbX/pack-halloween-2k21-45.jpg",
"https://i.ibb.co/BZ2qRPC/pack-halloween-2k21-46.jpg",
"https://i.ibb.co/wgp5Pj3/pack-halloween-2k21-47.jpg",
"https://i.ibb.co/9s9qY8d/pack-halloween-2k21-48.jpg",
"https://i.ibb.co/8B8Dd2M/pack-halloween-2k21-49.jpg",
"https://i.ibb.co/wSyW6TF/pack-halloween-2k21-50.jpg",
"https://i.ibb.co/YfVqS9Z/pack-imagem-gyaru-16.jpg",
"https://i.ibb.co/yXXzXfR/pack-imagem-gyaru-17.jpg",
"https://i.ibb.co/jTScDK0/pack-imagem-gyaru-18.jpg",
"https://i.ibb.co/Wcxqyjb/pack-imagem-gyaru-19.jpg",
"https://i.ibb.co/Ksrs11q/pack-imagem-gyaru-20.jpg",
"https://i.ibb.co/j4YjfbV/pack-imagem-gyaru-21.jpg",
"https://i.ibb.co/M8VkT4N/pack-imagem-gyaru-22.jpg",
"https://i.ibb.co/bbLs2Zk/pack-imagem-gyaru-23.jpg",
"https://i.ibb.co/rfBd2yd/pack-imagem-gyaru-24.jpg",
"https://i.ibb.co/jLYBbZB/pack-imagem-gyaru-25.jpg",
"https://i.ibb.co/8dZzbFj/pack-imagem-gyaru-26.jpg",
"https://i.ibb.co/9q42xcq/pack-imagem-gyaru-27.jpg",
"https://i.ibb.co/YX396zx/pack-imagem-gyaru-28.jpg",
"https://i.ibb.co/R7YFc3z/pack-imagem-gyaru-29.jpg",
"https://i.ibb.co/KhS8Y2W/pack-imagem-gyaru-30.jpg",
"https://i.ibb.co/hgpPJZP/pack-imagem-gyaru-31.jpg",
"https://i.ibb.co/6Bw959K/pack-imagem-gyaru-32.jpg",
"https://i.ibb.co/j5YqPCh/pack-imagem-gyaru-33.jpg",
"https://i.ibb.co/6RzZZsh/pack-imagem-gyaru-34.jpg",
"https://i.ibb.co/dprWBn9/pack-imagem-gyaru-35.jpg",
"https://i.ibb.co/FBByqht/pack-imagem-gyaru-36.jpg",
"https://i.ibb.co/gM5sGSP/pack-imagem-gyaru-37.jpg",
"https://i.ibb.co/rZxwMt4/pack-imagem-gyaru-38.jpg",
"https://i.ibb.co/VL6spPL/pack-imagem-gyaru-39.jpg",
"https://i.ibb.co/VvjsF05/pack-imagem-gyaru-40.jpg",
"https://i.ibb.co/1vSBfP7/pack-imagem-gyaru-41.jpg",
"https://i.ibb.co/qR77rtc/pack-imagem-gyaru-42.jpg",
"https://i.ibb.co/yf5k79y/pack-imagem-gyaru-43.jpg",
"https://i.ibb.co/rww0C85/pack-imagem-gyaru-44.jpg",
"https://i.ibb.co/6RfpZWJ/pack-imagem-gyaru-45.jpg",
"https://i.ibb.co/QJZdNRp/pack-imagem-gyaru-46.jpg",
"https://i.ibb.co/NyGXhx9/pack-imagem-gyaru-47.jpg",
"https://i.ibb.co/48WqCB2/pack-imagem-gyaru-48.jpg",
"https://i.ibb.co/yd976dD/pack-imagem-gyaru-49.jpg"
]

const pack = [
"https://i.ibb.co/9Vn69wS/novinha-de-sainha-sentando-na-pica-10-jpg.webp",
"https://i.ibb.co/f94zBsD/novinha-de-sainha-sentando-na-pica-8-jpg.webp",
"https://i.ibb.co/sH0V53L/fotos-de-bucetas-42.jpg",
"https://i.ibb.co/MhFy97C/fotos-de-bucetas-25.jpg",
"https://i.ibb.co/LP3H2Tf/fotos-de-bucetas-41.jpg",
"https://i.ibb.co/n1dgtkZ/fotos-de-bucetas-15.jpg",
"https://i.ibb.co/gyy8Dmv/fotos-de-bucetas-13.jpg",
"https://i.ibb.co/Wvk6KDF/fotos-de-bucetas-14.jpg",
"https://i.ibb.co/12KZPDZ/fotos-de-bucetas-9.jpg",
"https://i.ibb.co/8M1gQ8F/fotos-de-bucetas-8.jpg",
"https://i.ibb.co/X7wyzYY/fotos-de-bucetas-6.jpg","https://i.ibb.co/9Vn69wS/novinha-de-sainha-sentando-na-pica-10-jpg.webp",
"https://i.ibb.co/f94zBsD/novinha-de-sainha-sentando-na-pica-8-jpg.webp",
"https://i.ibb.co/sH0V53L/fotos-de-bucetas-42.jpg",
"https://i.ibb.co/1b3bWSM/200-fotos-de-bucetas-2.jpg",
"https://i.ibb.co/VpBNV6F/200-fotos-de-bucetas-14.webp",
"https://i.ibb.co/QntzcX2/200-fotos-de-bucetas-20.webp",
"https://i.ibb.co/QFHW5G9/200-fotos-de-bucetas-31.jpg",
"https://i.ibb.co/H4Z0bX9/200-fotos-de-bucetas-32.jpg",
"https://i.ibb.co/SXfnBwM/200-fotos-de-bucetas-80.webp",
"https://i.ibb.co/L6myRRV/200-fotos-de-bucetas-48.webp",
"https://i.ibb.co/37CPn2Y/200-fotos-de-bucetas-10.jpg",
"https://i.ibb.co/s6MJz9g/200-fotos-de-bucetas-13.jpg",
"https://i.ibb.co/NxFfGBS/200-fotos-de-bucetas-8.webp",
"https://i.ibb.co/jRtG3Th/345IoIl.jpg",
"https://i.ibb.co/vYN3MVz/DjiLEGT.jpg",
"https://i.ibb.co/MkJxX3H/hOXROOp.jpg",
"https://i.ibb.co/WVtpY4Z/hf3Kjv9.jpg",
"https://i.ibb.co/VgBPYW5/10-Ugw-HEZs.jpg",
"https://i.ibb.co/ypdYDmN/11-J4-Vip85.jpg",
"https://i.ibb.co/bQX9T1T/200-fotos-de-bucetas-55.jpg",
"https://i.ibb.co/tC7Mmj9/200-fotos-de-bucetas-89.jpg",
"https://i.ibb.co/1KntTCS/200-fotos-de-bucetas-104.webp",
"https://i.ibb.co/MhFy97C/fotos-de-bucetas-25.jpg",
"https://i.ibb.co/LP3H2Tf/fotos-de-bucetas-41.jpg",
"https://i.ibb.co/n1dgtkZ/fotos-de-bucetas-15.jpg",
"https://i.ibb.co/gyy8Dmv/fotos-de-bucetas-13.jpg",
"https://i.ibb.co/Wvk6KDF/fotos-de-bucetas-14.jpg",
"https://i.ibb.co/12KZPDZ/fotos-de-bucetas-9.jpg",
"https://i.ibb.co/8M1gQ8F/fotos-de-bucetas-8.jpg",
"https://i.ibb.co/X7wyzYY/fotos-de-bucetas-6.jpg"
]
//=> Juego slot
const zootoy = ['🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇','🍊 : 🥑 : 🍐','🍒 : 🥝 : 🍊','🍇 : 🥥 : 🍐','🍊 : 🥑 : 🔔','🍉 : 🍒 : 🍓','🔔 : 🍒 : 🍊','🍑 : 🍋 : 🍉','🍐 : 🍒 : 🍋','🍎 : 🍐 : 🍎','🍊 : 🥥 : 🍓','🍑 : 🔔 : 🍑','🍌 : 🍒 : 🔔','🥝 : 🔔 : 🥝','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🍍 : 🔔 : 🍍','🥥 : 🍐 : 🥥']
const zotoy = ['🍓 : 🍒 : 🍐','🍎 : 🍎 : 🍎','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🥝','🔔 : 🍑 : 🥑','🔔 : 🍒 : 🥝','🍊 : 🍍 : 🔔','🥥 : 🍒 : 🥥','🍉 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🍍 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥥','🍊 : 🍑 : 🍒','🍍 : 🍑 : 🥥','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🥑 : 🥑 : 🥑','🍉 : 🍉 : 🍉','🍓 : 🍓 : 🍓','🍍 : 🍍 : 🍍','🥝 : 🥝 : 🥝','🍑 : 🍑 : 🍑','🥥 : 🥥 : 🥥','🍋 : 🍋 : 🍋','🍐 : 🍐 : 🍐','🍌 : 🍌 : 🍌','🍒 : 🍒 : 🍒','🔔 : 🔔 : 🔔','🍊 : 🍊 : 🍊','🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇']
const zoootoy = ['🍊 : 🥑 : 🍐','🍒 : 🥝 : 🍊','🍇 : 🥥 : 🍐','🍊 : 🥑 : 🔔','🍉 : 🍒 : 🍓','🔔 : 🍒 : 🍊','🍑 : 🍋 : 🍉','🍐 : 🍒 : 🍋','🍎 : 🍐 : 🍎','🍊 : 🥥 : 🍓','🍑 : 🔔 : 🍑','🍌 : 🍒 : 🔔','🥝 : 🔔 : 🥝','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🍍 : 🔔 : 🍍','🥥 : 🍐 : 🥥','🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇']

const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const antispamcmd = JSON.parse(fs.readFileSync('./src/json/antispamcmd.json'))
const isCmd = body.startsWith(prefix)
chats = (type === 'conversation') ? sen.message.conversation : (type === 'extendedTextMessage') ? sen.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const argss = body.split(/ +/g)

mess = {
	wait: '⏱️ - _Aguarde no máximo *dois minutos*, depois tente novamente!_',
	limit: `_⚖️ Seu Limite Acabou! Digite *${prefix}Perfil* para mais informações!_\n_Você pode receber *BotCoin* jogando os jogos do bot!_`,
	leveloff: `_❗ • Recurso de *Nível* não está ativado!_`,
	eror: '_Error_',
	success: '✔️ Sucesso ️',
	error: {
		stick: '_Repete, mano_',
		Iv: '_Link inválido!_ '
	},
	only: {
	prem: `*_Você não está registrado no banco de dados premium !!_*\n_Digite *${prefix}owner* ou *${prefix}tervip* para aluguel premium ou testar gratuitamente_`,
	group: '*_O recurso pode ser usado apenas ​​em Grupos!_*',
	ownerG: '*_O recurso pode ser usado apenas ​​pelo proprietário do Grupo!_*',
	ownerB: '*_O recurso pode ser usado apenas ​​pelo Risky!_*',
	admin: '_👨‍💻 Só pode ser utilizado por *Administradores* do grupo!_',
	Badmin: '_🔮 Só pode ser utilizado se o *Bot* for um *Administrador*_'
	}
}

const totalchat = await client.chats.all()
const botNumber = client.user.jid
const botN = botNumber.replace('@s.whatsapp.net', '')
const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = sen.key.fromMe ? client.user.jid : isGroup ? sen.participant : sen.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const isOwner = ownerNumber.includes(sender)
const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
const isNsfw = isGroup ? nsfw.includes(from) : true
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const itsMe = sen.key.fromMe ? true : false
const isVerify = _verify.includes(sender)
const isBv = isGroup ? _Bv.includes(from) : false
const isBye = isGroup ? _bye.includes(from) : false
const isAntiFake = isGroup ? antifake.includes(from) : false
const isAntilink = isGroup ? anlink.includes(from) : false
const isAntinota = isGroup ? antinota.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false
const isContador = isGroup ? contador.includes(from) : false
const isAntivirtual = isGroup ? _antivirtual.includes(from) : false
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAutofigu = isGroup ? autostick.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isLeft = isGroup ? left.includes(from) : false
const isBanchat = isGroup ? bancht.includes(from) : false
const q = args.join(' ')  
const isAntiSpamcmd = antispamcmd.includes('Ativado')
const isVote = isGroup ? voting.includes(from) : false
conts = sen.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sen.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
const gcounti = setting.gcount
const isClaimOn = _claim.includes(sender)
const gcount = isPremium ? gcounti.prem : gcounti.user

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await client.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			client.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
		
		const value = text.split(' ').splice(1).join(' ')
		
		//====================================================================================================//
//>> Funcion de contador de mensajes beta

const addMsgId = (sender) => {
	const amsg = { id: sender, mensaje: 1, imagen: 0, video: 0, archivo: 0, sticker: 0, audio: 0 }
	_msg.push(amsg)
	fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
}

//>> mensaje
  const addMsg = (sender, msg) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].mensaje += msg
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsg = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].mensaje
	}
}

const getMsgId = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].id
	}
}

//>> imagen
  const addMsgimg = (sender, img) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].imagen += img
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsgimg = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].imagen
	}
}

//>> video
  const addMsgvideo = (sender, vd) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].video += vd
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsgvideo = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].video
	}
}

//>> archivo
  const addMsgarchivo = (sender, archv) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].archivo += archv
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsgarchivo = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].archivo
	}
}

//>> sticker
  const addMsgsticker = (sender, stk) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].sticker += stk
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsgsticker = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].sticker
	}
}

//>> audio
  const addMsgaudio = (sender, ado) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_msg[position].audio += ado
		fs.writeFileSync('./database/user/mensaje.json', JSON.stringify(_msg))
	}
}

const getMsgaudio = (sender) => {
	let position = false
	Object.keys(_msg).forEach((i) => {
		if (_msg[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _msg[position].audio
	}
}
//
/////

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

//>> Usuario no Verificado
const isUser = () => { 
  sendButMessage(from, `╭◪ Olá, *@${sender.split("@")[0]}*\n╰───────────────────╮  \n╭───────────────────╯\n├❏ Você não está verificado \n├❏ Verifique para utilizar meus comandos \n╰───────────────────╯`, `Pressione botão ou digite *${prefix}verify*`, [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `✅ Verificar`,
            },
            type: 1,
          },
        ], {contextInfo: { mentionedJid: [sender]} } );
}
// ******************** 》Fake《 ******************** \\
finvite = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": setgrup,
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": groupName,
"caption": fake,
"height": 6080,
"width": 6000
}
}
}
risky = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "558896926980-1629534273@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `𝖱𝗂𝗌𝗄𝗒 𝖱𝗈𝖻𝖻𝗈𝗍 - 𝖮𝖿𝖼`,
"caption": `𝖱𝗂𝗌𝗄𝗒 𝖱𝗈𝖻𝖻𝗈𝗍 𝖢𝗋𝖾𝖺𝗍𝗈𝗋 𝖨𝗇𝖿𝗈 - 🌟`,
"height": 6080,
"width": 6000
}
}
}
riskyz = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },
message: { 
"imageMessage": 
{ "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", 
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
"fileLength": "28777", 
"height": 1280, 
"width": 1280, 
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", 
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
"mediaKeyTimestamp": "1610993486", 
"jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')
}
}
} 
const fstick = {
"key": {
"participant": `0@s.whatsapp.net`,
"remoteJid": "6289643739077-1613049930@g.us",
"fromMe": false,
"id": "3B64558B07848BD81108C1D14712018E"
},
"message": {
"stickerMessage": {
"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
"pngThumbnail": gambar,
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
"fileLength": "60206",
"firstFrameLength": 3626,
"isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
const fvoz = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "558896926980-1633218955@g.us" } : {}) 
},
 message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "99999",
"ptt": "true"
}
} 
}
ftok = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": gambar 
},
"title": `Olá, ${pushname}!`, 
"description": `${pushname}`, 
"currencyCode": "BRL",
"priceAmount1000": "4000",
"retailerId": `Risky Modz`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "558896926980-1633218955@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${Tanggal}.\nNome: ${pushname}`,
"h": `${Tanggal}, Nome  ${pushname}`,
'duration': '99999', 
'caption': `${Tanggal}\nNome: ${pushname}`,
'jpegThumbnail': gambar
}
}
}

//>> Ver características
let prem_ = '❎'
			if (isPremium) {
			prem_ = '✅'
			} 
			if (isOwner) {
			prem_ = 'VIP'
			}
let antidel_ = 'Desativado'
           if (antidel){
           antidel_ = 'Ativado'
          }
let Bv_ = 'Desativado'
			if (isBv) {
			Bv_ = 'Ativado'
			}
let Adios_ = 'Desativado'
			if (isBye) {
			Adios_ = 'Ativado'
			}
let AntiLink_ = 'Desativado'
			if (isAntilink) {
			AntiLink_ = 'Ativado'
			}
let Nsfw_ = 'Desativado'
			if (isNsfw) {
			Nsfw_ = 'Ativado'
			}
let Leveling_ = 'Desativado'
			if (isLevelingOn) {
			Leveling_ = 'Ativado'
			}
//====================[ FUNCIÓN DE NIVELACIÓN ]====================//
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}
//====================[ FIN FUNCIÓN DE NIVELACIÓN ]====================//
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
            }
            
            //registro
const adduserUser = (sender, pushname, timeWita, timeWit, seriTod) => {
  const obj = {
id: sender,
name: pushname,
fecha: timeWita,
time: timeWit,
serial: seriTod
  }
  _user.push(obj)
  fs.writeFileSync('./database/bot/verify.json', JSON.stringify(_user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
} 

const checkuserUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
  status = true
}
  })
  return status
}
//====================[ ECONOMÍA ]====================//
const { 
isLimit, 
limitAdd, 
getLimit, 
giveLimit, 
addBalance, 
kurangBalance, 
getBalance, 
isGame, 
gameAdd, 
givegame, 
cekGLimit 
} = require("./lib/economy");
//====================[ FIN DE ECONOMÍA ]====================/
//******************** 》Advance《 ********************\\

function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

const replyWithFakeLink = (teks) => {
client.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nBy; (@Riskyzin) • Instagram Photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJwXJCryGDneNmIIqyMQ8LJE74KKIplUUwQ&usqp=CAU.jpg",
                "thumbnail": gambar3,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : sen})
}
const replyWithFake = (teks) => {
client.sendMessage(from, teks, text,{quoted : finvite})
}
const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted:sen,thumbnail : gambar4})
}
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text,{contextInfo: { forwardingScore: 9999, isForwarded: true},thumbnail:gambar4})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: sen,thumbnail:gambar4, contextInfo: {"mentionedJid": memberr}})
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, { quoted: sen, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
fs.unlinkSync(filename)
});
}

 const uploadImages = (buffData, type) => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async (resolve, reject) => {
const { ext } = await fromBuffer(buffData)
const cmd = text.toLowerCase()
const filePath = 'utils/tmp.' + ext
const _buffData = type ? await resizeImage(buffData, false) : buffData
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
if (err) return reject(err)
console.log('Uploading image to telegra.ph server...')
const fileData = fs.readFileSync(filePath)
const form = new FormData()
form.append('file', fileData, 'tmp.' + ext)
fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.then(() => fs.unlinkSync(filePath))
.catch(err => reject(err))
})
})
}

		const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/Fortaleza').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					client.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('America/Fortaleza').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('America/Fortaleza').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
client.sendMessage(from, media, sticker, {quoted: sen})
console.log(color(time, 'magenta'), color(moment.tz('America/Fortaleza').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
       
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}

if (aread){
return client.chatRead(from)
}


// ******************** 》Self/Public《 ******************** \\
if (!public){
if (!isOwner && !itsMe) return
}

// ******************** 》Hit《 ******************** \\
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(pendaftar))
} 
        
if (isCmd && isGroup) {
tmp_hit.push(command)
fs.writeFileSync('./src/hit.json', JSON.stringify(tmp_hit))
tmphit.push(command)
fs.writeFileSync('./src/today.json', JSON.stringify(tmphit))
}

_prem.expiredCheck(premium)


// ******************** 》Register《 ******************** \\
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message');
// ******************** 》GAME《 ******************** \\

game.cekWaktuFam(client, family100)
game.cekWaktuTG(client, tebakgambar)
game.cekWaktuMtk(client, mtk)
game.cekWaktuCkl(client, ckl)

const htgm3 = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000)
game.cekWaktuMtk(client, mtk)
if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
addBalance(sender, 750, balance)
await reply(`*✅ Resposta correta!!!*\n\n+750 botcoins💰`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}
        
if (game.isCkl(from, ckl)){
if (chats.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
await reply(`*🎊 Parabéns sua resposta está correta!!!*\n*Pergunta:* ${game.getJawabanCkl(from, ckl)}\n*Prêmio:* $${htgm2}\n\n*Deseja ir novamente? digite: *${prefix}caklontong*`)
ckl.splice(game.getCklPosi(from, ckl), 1)
}
}
			        
if (game.isTebakGambar(from, tebakgambar)){
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(1000)
addBalance(sender, htgm, balance)
await reply(`*🎊 Parabéns sua resposta está correta!!!*\n*Pergunta:* ${game.getJawabanTG(from, tebakgambar)}\n*Prêmio:* $${htgm}\n\n*Deseja ir novamente? digite: *${prefix}tebakgambar*`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
}

if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`*Jawaban benar*\n*Pergunta:* ${i}\n*Prêmio:* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
client.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}

// *************** 》 Tictactoe BY MRHRTZ《 *************** \\
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "aceitar" ||
budy.toLowerCase() == "claro"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = `J O G O  D A  VELHA

INFO :
  Jogador ❎ : @${boardnow.X}
  Jogador ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Vez de @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Digite desistir para desistir!
Digite ${prefix}delttc para Excluir sessão de jogo!
`;
client.sendMessage(from, monospace(chatAccept), MessageType.text, {
quoted: sen,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
client.sendMessage(from,`Esta opção é apenas para @${boardnow.O} !`,
MessageType.text, {quoted: sen,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "rejeitar" ||
budy.toLowerCase() == "negativo"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
client.sendMessage(from,`Infelizmente o desafio de @${boardnow.X} foi recusado ❎😕`,
MessageType.text, {quoted: sen,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
client.sendMessage(from,`Esta opção é apenas para @${boardnow.O} !`,MessageType.text, {quoted: sen,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou / rejeitou o desafio.`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*_❄️ Jogo da Velha ❄️_*
          
Deu Velha, Empatou 😐
`;
reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
const winttt = Math.floor(Math.random() * 500) + 1000
giveLimit(`${winnerJID}@s.whatsapp.net`, 5, limit)
addBalance(`${winnerJID}@s.whatsapp.net`, winttt, balance)
const winttc = Math.floor(Math.random() * 5000) + 10000
addLevelingXp(`${winnerJID}@s.whatsapp.net`, winttc)


const chatWon = `*🎮 TICTACTOE - GAME 🎳*
          
🎉 O vencedor é @${winnerJID} 👑
💰Recebido: : *${winttt}* BotCoins
✨Recebido : *${winttc}* Exp
💎Recebido : *5* Diamantes`;
client.sendMessage(from, chatWon, MessageType.text, {quoted: sen,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `J O G O  D A  V E L H A

INFO:
  Jogador ❎ : @${moving.X}
  Jogador ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Vez de : @${moving.turn == "X" ? moving.X : moving.O}

Digite deisistir para desistir!
Digite ${prefix}delttc para Excluir a sessão!
`;
client.sendMessage(from, monospace(chatMove), MessageType.text, {quoted: sen,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

if ((senderNumber) && ["Nyerah", "nyerah", "desistir", "Desistir"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Desistiu do jogo\n_KKKKKK Fraco!_`
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
  } else {
reply(`Nenhuma sessão em andamento`);
  }
}
      

//********************* [ TESTE ] **************************\\
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'sim') {
		if (gelutSkuy.status) return reply(`O jogo já começou!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Jogo de luta 🤙🏻 

Entre @${gelutSkuy.Z} & @${gelutSkuy.Y}
• O vencedor é [ @${winR} ] `
	   client.sendMessage(from, starGame, text, {quoted: sen, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'nao') {
		client.sendMessage(from, `👑 Jogo de luta rejeitado 🤙🏻
• @${gelutSkuy.Y} Rejeitar🤙🏻`, text, {quoted: sen, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

const textImg = (teks) => {
           return client.sendMessage(from, teks, text, {quoted: sen, thumbnail: fs.readFileSync('./assets/figu.jpeg')})
        }
client.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })

//******************** 》AntiLink Gc《 ********************\\
if (isGroup && !sen.key.fromMe && isAntilink) {
	        if (budy.includes("https://")){
		if (!isGroup) return
		if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		//reply(`_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Peça permissão proxima vez")
		}, 0)
	}
	
	        if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		//reply(`_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Proxima vez peça permissão'")
		}, 0)
	}
	
	        if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
	    if (!isAntiRacismo) return
		if (isGroupAdmins) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		//reply(`_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar merda de tiktok em outro lugar")
		}, 0)
	}
	
	        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		//reply(`_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("adeus")
		}, 0)
	}
	
		        if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		//reply(`l_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar kwaii na casa do caralho seu mendigo")
		}, 0)
	}
	}

	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };	
if (isGroup && !sen.key.fromMe && isAntinota) {	
if (budy.includes("R$")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (isOwner) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`_Adeus, ${sender.split("@")[0]} você será expulso deste grupo em um instante!_`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("_Aqui neste grupo, *não é permitido* símbolos nota fake, que isso sirva de exemplo!_")
		}, 0)
	}				
	
	        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (isOwner) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			//reply(`_🔗 Link detectado na mensagem de ${sender.split("@")[0]}!_`)
		}, 0)
	}
	if (budy.includes("💸")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (isOwner) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`_Adeus, ${sender.split("@")[0]} você será expulso deste grupo em um instante!_`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não permitimos símbolos nota fake, que isso sirva de exemplo ")
		}, 0)
	}		
	        if (budy.includes("💠")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (isOwner) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`_Adeus, ${sender.split("@")[0]} você será expulso deste grupo em um instante!_ `)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("tchau nota fake")
		}, 0)
	}
if (budy.includes("🤑")){
		if (!isGroup) return
		if (isGroupAdmins) return
		if (isOwner) return
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`_Adeus, ${sender.split("@")[0]} você será expulso deste grupo em um instante!_`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, não permitimos símbolos nota fake, que isso sirva de exemplo ")
		}, 0)
	}
}	
if (vn) {
await client.updatePresence(from, Presence.recording)
} else if (ngetik) {
await client.updatePresence(from, Presence.composing)
}

//>> Función de balance
                if (isVerify && isGroup ) {
                        const checkATM = getBalance(sender, balance)
  try {
if (checkATM === undefined) addBalance(sender)
const uangsaku = Math.floor(Math.random() * 50) + 200
addBalance(sender, uangsaku, balance)
  } catch (err) {
console.error(err)
  }
}

//>> Funcion de advertencias
//Warns

const addWarn = (sender, advr) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_adv[position].adv += advr
		fs.writeFileSync('./database/user/advertencia.json', JSON.stringify(_adv))
	}
}

const getWarn = (sender) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _adv[position].adv
	}
}

const getWarnId = (sender) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _adv[position].id
	}
}

const chetwarnx = getWarn(sender)
var advertencia = 'primeira'
            if (chetwarnx === 0) {
                advertencia = 'primeira'
            } else if (chetwarnx === 1) {
                advertencia = 'segunda'
            } else if (chetwarnx === 2) {
                advertencia = 'terceira'
	        } else if (chetwarnx === 3) {
                advertencia = 'quarta'
            } else if (chetwarnx === 4) {
                advertencia = 'quinta'
            } else if (chetwarnx === 5) {
                advertencia = 'sexta'
            }
const addWarnId = (sender) => {
	const aadv = { id: sender, adv: 0, }
	_adv.push(aadv)
	fs.writeFileSync('./database/user/advertencia.json', JSON.stringify(_adv))
}
//====================================================================================================//
// function ANTI viewOnce
if (isGroup && sen.key.fromMe && m.mtype == 'viewOnceMessage'){
var msg = {...sen}
msg.message = sen.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('ViewOnce detectado!')
client.copyNForward(from, msg)
}


const levelRole = level.getLevelingLevel(sender, _level)
var role = 'Novato 1🍁'
        if (levelRole <= 2) {
            role = 'Novato 2✨'
        } else if (levelRole <= 4) {
            role = 'Série iniciante 1🌴'
        } else if (levelRole <= 6) {
            role = 'Série iniciante 2🌴'
        } else if (levelRole <= 8) {
            role = 'Série iniciante 3🌴'
        } else if (levelRole <= 10) {
            role = 'Série iniciante 4🌴'
        } else if (levelRole <= 12) {
            role = 'Privado Grau 1🌴'
        } else if (levelRole <= 14) {
            role = 'Privado Grau 2🌴'
        } else if (levelRole <= 16) {
            role = 'Privado Grau 3🌴'
        } else if (levelRole <= 18) {
            role = 'Privado Grau 4🌴'
        } else if (levelRole <= 20) {
            role = 'Privado Grau 5🌴'
        } else if (levelRole <= 22) {
            role = 'Corporal Grau 1🌴'
        } else if (levelRole <= 24) {
            role = 'Corporal Grau 2🌴 '
        } else if (levelRole <= 26) {
            role = 'Corporal Grau 3 愛'
        } else if (levelRole <= 28) {
            role = 'Corporal Grau 4 愛'
        } else if (levelRole <= 30) {
            role = 'Corporal Grau 5 愛'
        } else if (levelRole <= 32) {
            role = 'Sargento Grau 1 愛'
        } else if (levelRole <= 34) {
            role = 'Sargento Grau 2 愛'
        } else if (levelRole <= 36) {
            role = 'Sargento Grau 3 愛'
        } else if (levelRole <= 38) {
            role = 'Sargento Grau 4 愛'
        } else if (levelRole <= 40) {
            role = 'Sargento Grau 5 愛'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 愛'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 愛'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 愛'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 愛'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 愛'
        } else if (levelRole <= 52) {
            role = 'Sargento Grau 1 愛'
        } else if (levelRole <= 54) {
            role = 'Sargento Grau 2 愛'
        } else if (levelRole <= 56) {
            role = 'Sargento Grau 3 愛'
        } else if (levelRole <= 58) {
            role = 'Sargento Grau 4 愛'
        } else if (levelRole <= 60) {
            role = 'Sargento Grau 5 愛'
        } else if (levelRole <= 62) {
            role = '2º Tenente Grau 1 愛 '
        } else if (levelRole <= 64) {
            role = '2°Tenente Grau 2 愛'
        } else if (levelRole <= 66) {
            role = '2°Tenente Grau3 愛'
        } else if (levelRole <= 68) {
            role = '2°Tenente Grau 4 愛'
        } else if (levelRole <= 70) {
            role = '2°Tenente Grau 5 愛'
        } else if (levelRole <= 72) {
            role = '1ºTenente Grau 1 愛'
        } else if (levelRole <= 74) {
            role = 'ºTenente Grau 2 愛'
        } else if (levelRole <= 76) {
            role = 'ºTenente Grau 3 愛'
        } else if (levelRole <= 78) {
            role = 'ºTenente Grau 4 愛'
        } else if (levelRole <= 80) {
            role = 'ºTenente Grau 5 愛'
        } else if (levelRole <= 82) {
            role = 'Major Grau 1 愛'
        } else if (levelRole <= 84) {
            role = 'Major Grau 2 愛'
        } else if (levelRole <= 86) {
            role = 'Major Grau 3 愛'
        } else if (levelRole <= 88) {
            role = 'Major Grau 4 愛'
        } else if (levelRole <= 90) {
            role = 'Major Grau 5 愛'
        } else if (levelRole <= 92) {
            role = 'Coronel Grau 1 愛'
        } else if (levelRole <= 94) {
            role = 'Coronel Grau 2 愛'
        } else if (levelRole <= 96) {
            role = 'Coronel Grau 3 愛'
        } else if (levelRole <= 98) {
            role = 'Coronel Grau 4 愛'
        } else if (levelRole <= 100) {
            role = 'Coronel Grau 5 愛'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early 愛'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver 愛'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold 愛'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum 愛'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond 愛'
        } else if (levelRole <= 112) {
            role = 'Major General Early 愛'
        } else if (levelRole <= 114) {
            role = 'Major General Silver 愛'
        } else if (levelRole <= 116) {
            role = 'Major General gold 愛'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum 愛'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond 愛'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early 愛'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver 愛'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold 愛'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum 愛'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond 愛'
        } else if (levelRole <= 132) {
            role = 'General Early 愛'
        } else if (levelRole <= 134) {
            role = 'General Silver 愛'
        } else if (levelRole <= 136) {
            role = 'General gold 愛'
        } else if (levelRole <= 138) {
            role = 'General Platinum 愛'
        } else if (levelRole <= 140) {
            role = 'General Diamond 愛'
        } else if (levelRole <= 142) {
            role = 'Comandante Early 愛'
        } else if (levelRole <= 144) {
            role = 'Comandante Intermediário 愛'
        } else if (levelRole <= 146) {
            role = 'Comandante Elite 愛'
        } else if (levelRole <= 148) {
            role = 'O Herói Comandante 愛'
        } else if (levelRole <= 152) {
            role = 'Legends 愛'
        } else if (levelRole <= 154) {
            role = 'Legends 愛'
        } else if (levelRole <= 156) {
            role = 'Legends 愛'
        } else if (levelRole <= 158) {
            role = 'Legends 愛'
        } else if (levelRole <= 160) {
            role = 'Legends 愛'
        } else if (levelRole <= 162) {
            role = 'Legends 愛'
        } else if (levelRole <= 164) {
            role = 'Legends 愛'
        } else if (levelRole <= 166) {
            role = 'Legends 愛'
        } else if (levelRole <= 168) {
            role = 'Legends 愛'
        } else if (levelRole <= 170) {
            role = 'Legends 愛'
        } else if (levelRole <= 172) {
            role = 'Legends 愛'
        } else if (levelRole <= 174) {
            role = 'Legends 愛'
        } else if (levelRole <= 176) {
            role = 'Legends 愛'
        } else if (levelRole <= 178) {
            role = 'Legends 愛'
        } else if (levelRole <= 180) {
            role = 'Legends 愛'
        } else if (levelRole <= 182) {
            role = 'Legends 愛'
        } else if (levelRole <= 184) {
            role = 'Legends 愛'
        } else if (levelRole <= 186) {
            role = 'Legends 愛'
        } else if (levelRole <= 188) {
            role = 'Legends 愛'
        } else if (levelRole <= 190) {
            role = 'Legends 愛'
        } else if (levelRole <= 192) {
            role = 'Legends 愛'
        } else if (levelRole <= 194) {
            role = 'Legends 愛'
        } else if (levelRole <= 196) {
            role = 'Legends 愛'
        } else if (levelRole <= 198) {
            role = 'Legends 愛'
        } else if (levelRole <= 200) {
            role = 'Legends 愛'
        } else if (levelRole <= 210) {
            role = 'Legends 愛'
        } else if (levelRole <= 220) {
            role = 'Legends 愛'
        } else if (levelRole <= 230) {
            role = 'Legends 愛'
        } else if (levelRole <= 240) {
            role = 'Legends 愛'
        } else if (levelRole <= 250) {
            role = 'Legends 愛'
        } else if (levelRole <= 260) {
            role = 'Legends 愛'
        } else if (levelRole <= 270) {
            role = 'Legends 愛'
        } else if (levelRole <= 280) {
            role = 'Legends 愛'
        } else if (levelRole <= 290) {
            role = 'Legends 愛'
        } else if (levelRole <= 300) {
            role = 'Legends 愛'
        } else if (levelRole <= 310) {
            role = 'Legends 愛'
        } else if (levelRole <= 320) {
            role = 'Legends 愛'
        } else if (levelRole <= 330) {
            role = 'Legends 愛'
        } else if (levelRole <= 340) {
            role = 'Legends 愛'
        } else if (levelRole <= 350) {
            role = 'Legends 愛'
        } else if (levelRole <= 360) {
            role = 'Legends 愛'
        } else if (levelRole <= 370) {
            role = 'Legends 愛'
        } else if (levelRole <= 380) {
            role = 'Legends 愛'
        } else if (levelRole <= 390) {
            role = 'Legends 愛'
        } else if (levelRole <= 400) {
            role = 'Legends 愛'
        } else if (levelRole <= 410) {
            role = 'Legends 愛'
        } else if (levelRole <= 420) {
            role = 'Legends 愛'
        } else if (levelRole <= 430) {
            role = 'Legends 愛'
        } else if (levelRole <= 440) {
            role = 'Legends 愛'
        } else if (levelRole <= 450) {
            role = 'Legends 愛'
        } else if (levelRole <= 460) {
            role = 'Legends 愛'
        } else if (levelRole <= 470) {
            role = 'Legends 愛'
        } else if (levelRole <= 480) {
            role = 'Legends 愛'
        } else if (levelRole <= 490) {
            role = 'Legends 愛'
        } else if (levelRole <= 500) {
            role = 'Legends 愛'
        } else if (levelRole <= 600) {
            role = 'Legends 愛'
        } else if (levelRole <= 700) {
            role = 'Legends 愛'
        } else if (levelRole <= 800) {
            role = 'Legends 愛'
        } else if (levelRole <= 900) {
            role = 'Legends 愛'
        } else if (levelRole <= 1000) {
            role = 'Legends 愛'
        } else if (levelRole <= 2000) {
            role = 'Legends 愛'
        } else if (levelRole <= 3000) {
            role = 'Legends 愛'
        } else if (levelRole <= 4000) {
            role = 'Legends 愛'
        } else if (levelRole <= 5000) {
            role = 'Legends 愛'
        } else if (levelRole <= 6000) {
            role = 'Legends 愛'
        } else if (levelRole <= 7000) {
            role = 'Legends 愛'
        } else if (levelRole <= 8000) {
            role = 'Legends '
        } else if (levelRole <= 9000) {
            role = 'Legends 愛'
        } else if (levelRole <= 10000) {
            role = 'Legends 愛'
	}
        
        //>> Porsentaje del nivel
		var per = '□□□□□□□□□□ 0%'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `■□□□□□□□□□ ${resl}%`
			} else if (resl <= 20) {
				per = `■■□□□□□□□□ ${resl}%`
			} else if (resl <= 30) {
				per = `■■■□□□□□□□ ${resl}%`
			} else if (resl <= 40) {
				per = `■■■■□□□□□□ ${resl}%`
			} else if (resl <= 50) {
				per = `■■■■■□□□□□ ${resl}%`
			} else if (resl <= 60) {
				per = `■■■■■■□□□□ ${resl}%`
			} else if (resl <= 70) {
				per = `■■■■■■■□□□ ${resl}%`
			} else if (resl <= 80) {
				per = `■■■■■■■■□□ ${resl}%`
			} else if (resl <= 90) {
				per = `■■■■■■■■■□ ${resl}%`
			} else if (resl <= 100) {
				per = `■■■■■■■■■■ ${resl}%`
			}
//>> Nivelación
			if (isGroup && !sen.key.fromMe && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 50) + 1000
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						giveLimit(sender, 2, limit)
						console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"));
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Subiu de nivel", "yellow"))
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Numero: "), color(`${sender.split("@")[0]}`, "pink"))
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Nivel: "), color(`${getLevel} ➪ ${getLevelingLevel(sender)}`, "pink"))
levelup = `*🥳Aee!!! @${sender.split("@")[0]} subiu de nivel*
⎔ *✨Exp* : ${getLevelingXp(sender)}
⎔ *🆙Nivel* : ${getLevel} ➪ ${getLevelingLevel(sender)}
⎔ *🏅Rank* : ${role}
⎔ *💎Diamantes* : +2
*Felicidadeesss 🎉🎉*`
client.sendMessage(from, levelup, text, {quoted: sen, contextInfo: {"mentionedJid": [sender]}})
					}
				} catch (err) {
					console.error(err)
				}
			}

if (isCmd && isFiltered(from) && !isGroup) {
				console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
				if(isAntiSpamcmd) {
					return reply(`「 ❗ 」Spam detectado. Espere 3 segundos`)
				}
			}
			if (isCmd && isFiltered(from) && isGroup) {
				console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
				if(isAntiSpamcmd) {
					return reply(`「 ❗ 」Spam detectado. Espere 3 segundos`)
				}
			}

const kickMember = async(id, target = []) => {
           let group = await client.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let isOwner = ('558896926980@s.whatsapp.net')
           let me = client.user.jid
           for (i of target) {
           if (!i.includes(owner) && !i.includes(me) && !i.includes(isOwner)) {
           await client.groupRemove(from, [i])
        } else {
           await client.sendMessage(id, "_⚖️ Recurso *Premium* Ativado!_", "conversation")
           break
        }
    }
}
// *************** 》 Responder Sticker《 *************** \\
if (setiker.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./src/stick/${namastc}.webp`)
client.sendMessage(from, buffer, sticker, {quoted:sen })
}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
//>> Mensaje privado
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Privado: "), color(botname, "blue"))
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Data: "), color(timeWita, "aqua"))
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Hora: "), color(timeWit, "aqua"))
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(sender.split('@')[0], "aqua"))
if (!isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Cmd: "), color(command, "aqua"))

//>> Mensaje grupo
if (isGroup && isCmd) console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
if (isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Grupo: "), color(groupName, "blue"))
if (isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Data: "), color(timeWita, "aqua"))
if (isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Hora: "), color(timeWit, "aqua"))
if (isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(sender.split('@')[0], "aqua"))
if (isGroup && isCmd) console.log('\x1b[1;31m', color("➛ ", "red"), color("Cmd: "), color(command, "aqua"))

if (!isCmd && isGroup) console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
if (!isCmd && isGroup) console.log('\x1b[1;31m', color("➛ ", "yellow"), color('[ MENSAGEM GRUPO ]', 'yellow'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m', color("➛ ", "yellow"), color('[ MENSAGEM PRIVADO ]', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), 'DE:', color(pushname))

let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = pushname }	
			
function addMetadata(packname, author) {	
if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./database/stickers/${name}.exif`)) return `./database/stickers/${name}.exif`
const json = {	
	"sticker-pack-name": packname,
	"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./database/stickers/${name}.exif`, buffer, (err) => {	return `./database/stickers/${name}.exif`	
})	
}



if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./database/pvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '558898368395@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./database/pvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./database/pvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '558898368395@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./database/pvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

// Comandos de Texto Auto Reply
	        if (messagesC.includes("te amo bot") && !sen.key.fromMe){
            reply(`❤️`)
	}

	        if (messagesC.includes("cantaibot") && !sen.key.fromMe){
			client.updatePresence(from, Presence.composing)
			const mus = ["loli","cantai"]
            musi = mus[Math.floor(Math.random() * mus.length)]
            music = fs.readFileSync('./assets/Áudios/'+musi+'.mp3')
            client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})

	}
	
		        if (messagesC.includes("polozheniye") && !sen.key.fromMe){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Áudios/polozheniye.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: finvite, mimetype: 'audio/mp4', ptt:true})
	}
	
	        if (messagesC.includes(`bad`) && !sen.key.fromMe){
			client.updatePresence(from, Presence.composing)
			const mus = ["bad","bad1","bad2","bad3"]
            musi = mus[Math.floor(Math.random() * mus.length)]
            music = fs.readFileSync('./assets/Áudios/'+musi+'.mp3')
            client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})

}

//******************** 》listMessage《 ********************\\
try{
switch(tmplt){
case 'downloader':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=ItsMeVean`)
break
case 'geradores':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeVean`)
break
case 'consultas':
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=ItsMeVean`)
break
case 'MP3':
reply(mess.wait)
try{
downm = await yta(q2)
const { dl_link, thumb, title, filesizeF, filesize } = downm
if(Number(filesize) >= 50000){
short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Título: ${title}\n${shp} Tamanho : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
}
teks = `*▶️ TOCADOR DO YOUTUBE*\n\n📰 *Título :* ${title}\n\n🛡 *Tamanho :* Erro no Java\n\n🎶 *Tipo :* MP3\n\n_⏰ Aguarde um pouco, a música está sendo enviada!_`
sendMediaURL(from, thumb, teks)
sendMediaURL(from, dl_link)
}catch(e){
reply(`🦖 - _Não foi possível enviar a sua música!_\n_Tente novamente mais tarde!_`)
}
break
				
case 'MP4':
if (!isPremium && !isOwner && !itsMe) return reply(mess.only.prem)								
reply(mess.wait)
try{
downm = await ytv(q2)
const { dl_link, thumb, title, filesizeF, filesize } = downm
if(Number(filesize) >= 50000){
short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Título: ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
        }
teks = `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Título: ${title}\n${shp} Tamanho : ${filesizeF}\n${shp} Tipo : MP4\n\nAguarde um pouco\nO vídeo está sendo enviado!`
sendMediaURL(from, thumb, teks)
sendMediaURL(from, dl_link)
}catch(e){
reply(`🦖 - _Não foi possível enviar seu vídeo!_\n_Tente novamente mais tarde!_`)
}
break
}
}catch{
}



/***************[ LISTA ]***************
  case 'listazinha':
if(!q) return reply('O que você quer procurar no YouTube??')
reply(mess.wait)
({
"rows": [
{
"title": "MP3",
description: `Titulo}`,
"rowId": "1"
},
{
"title": "MP4",
description: `Titulo: }`,
"rowId": "1"
}
], title: num})
num += 1
po = client.prepareMessageFromContent(from, {
"listMessage":{
"title": "*YOUTUBE DOWNLOAD*",
"description": `Pedido por : ${pushname}\n*Buscar por: ${q}*\n*Para baixar, selecione e envie o resultado*`,
"buttonText": "Resultados",
"listType": "SINGLE_SELECT",
"sections": datai}}, {}) 
client.relayWAMessage(po, {waitForAck: true})
break
***************[ LISTA ]***************/

//BUTTON 
//UPDATE BAILEYS TO LAST VERSION SO THAT FEATURE CAN BE USED
switch(butresx){
case 'Promover Todos':
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins && !isOwner && !itsMe) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                client.groupMakeAdmin(from, members_id)
                break
case 'Rebaixar Todos':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins && !isOwner && !itsMe) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
client.groupDemoteAdmin(from, members_id)
break

case 'Remover Todos': // Anti Banned
              if (!isGroupAdmins && !itsMe && !isOwner)return reply('_☠️ Apenas para *Adminstradores* do grupo!_')
              if (!isBotGroupAdmins && !isOwner && !itsMe) return reply(mess.only.Badmin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
case 'Tente Novamente':
if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
					try{
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/femdom?apikey=brizaloka`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Yamete kudasai >,,<'})
					}catch{
	        sendButMessage(from, `🐤 - Ocorreu um erro ao *Puxar a Imagem*.\n_• Você deseja Tentar Novamente?_`, `© By: Risky Modz`, [
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `Meu Criador`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Tente Novamente`,
            },
            type: 1,
          },
        ])
}
					break

case 'Tentar Novamente':
if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
					try{
					buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`)
					cap ='Yamete kudasai >,,<'
await client.sendMessage(from, buffer, image, {quoted:sen})
}catch{
	        sendButMessage(from, `🐤 - Ocorreu um erro ao *Puxar a Imagem*.\n_• Você deseja Tentar Novamente?_`, `© By: Risky Modz`, [{
            buttonId: `Abrir`,
            buttonText: {
            displayText: `Meu Criador`,},
            type: 1,
          },{
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Tentar Novamente`,},type: 1,},])}
					break

case 'Página 2':
reply(`_Aguarde um instante..._`)
        sendButMessage(from,livro1(prefix) , `Esse comando é um teste!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Página 3`,
            },
            type: 1,
          },
        ])
break

case 'Página 3':
reply(`_Aguarde um instante..._`)
        sendButMessage(from,livro2(prefix) , `Esse comando é um teste!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Página 4`,
            },
            type: 1,
          },
        ])
break

case 'Página 4':
reply(`_Aguarde um instante..._`)
        sendButMessage(from,livro3(prefix) , `Esse comando é um teste!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Página 5`,
            },
            type: 1,
          },
        ])
break

case 'Página 5':
reply(`_Aguarde um instante..._`)
        sendButMessage(from,livro4(prefix) , `Esse comando é um teste!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Em Breve...`,
            },
            type: 1,
          },
        ])
break

case 'Apagar os Chats':
if (!itsMe && !isOwner)return mentions(`*Recurso especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
let chiit = await client.chats.all()
for (let i of chiit){
client.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply (`_🚮 Chats Apagados com Sucesso!_`)
  
break

case 'Sair dos Grupos':
if (!itsMe && !isOwner)return mentions(`*Recurso especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
let totalgroup = client.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of totalgroup) {
sendMess(id, '_Tchauzinho!_', null)
await sleep(3000)
client.groupLeave(id)
}
break

case 'Pegar Shit':
reply(mess.wait)
client.updatePresence(from, Presence.composing)
const shi = ["shit1","shit2","shit3","shit4","shit5","shit6","shit7","shit8","shit9","shit10","shit11","shit12","shit13","shit14","shit15","shit16","shit17","shit18","shit19","shit20","shit21","shit22","shit23","shit24","shit25","shit26","shit27","shit28","shit29","shit30","shit31","shit32","shit33","shit34","shit35","shit36","shit37","shit38","shit39","shit40","shit41","shit42","shit43","shit44","shit45","shit46","shit47","shit48","shit49","shit50","shit51","shit52","shit53","shit54","shit55","shit56","shit57","shit58","shit59","shit60","shit61","shit62","shit63","shit64","shit65","shit66","shit67","shit68","shit69","shit70","shit71","shit72","shit73","shit74","shit75","shit76","shit77","shit78","shit79","shit80","shit81","shit82","shit83","shit84","shit85","shit86","shit87","shit88","shit89","shit90","shit91","shit92","shit93","shit94","shit95","shit96","shit97","shit98","shit99","shit100","shit101","shit102","shit103","shit104","shit105","shit106","shit107","shit108"]
shit = shi[Math.floor(Math.random() * shi.length)]
shitp = fs.readFileSync('./assets/Shits/'+shit+'.mp4')
client.sendMessage(from, shitp, MessageType.video, {quoted: sen, mimetype: 'video/mp4', ptt:true})
break

case 'RANDOM':
reply(mess.wait)
shitp = await getBuffer('https://api.xteam.xyz/shitpost?APIKEY=9287183216dd1eb3')
client.sendMessage(from, shitp, video, {quoted: sen, mimetype: 'video/mp4', ptt:true})
break

case 'DONO': case 'Meu Criador':

client.sendMessage(from, {displayname: "Risky", vcard: vcard}, MessageType.contact ,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
                "title": `By: (@Riskyzin) • Instagram Stories`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C70KIkAbwUChUiTYqM7taxp2z2EBGXxDWQ&usqp=CAU.jpg",
                "thumbnail": gambar5,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : sen})
        stod = `${sender}`
       stst = await client.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_*Olá, ${pushname}🌹!*_\n\nO que você deseja?!`, "*_© Risky Modz_*", {jpegThumbnail:gambar3}, [{buttonId:`${prefix}dono`,buttonText:{displayText:'NOVIDADES'},type:1}], {contextInfo: { mentionedJid: [sender]}})


break

case 'AJUDA': case '🆘 AJUDA':
reply(`_⏰ Aguarde um instante..._`)
try{
buf = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurAHV8KZz38JIYN8etsIw-FPlGlO3L6t9Hg&usqp=CAU`)
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Risky Robbot • Ajuda`,
"description": ajuda(prefix),
"currencyCode": "BRL",
"priceAmount1000": "10000",
"productImageCount": 1
},
"businessOwnerJid": "558896926980@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:finvite, contextInfo:{}}) 

await client.relayWAMessage(res)
}catch(e){
wew = gambar
await client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: ajuda(prefix) })
}
break

case `❌OFF`: 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(anlink))
reply('_🔞 Modo desativado com sucesso!_')
break

case `✅ON`: 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(anlink))
reply('_🔞 Modo ativado com sucesso!_')
break

case 'ATIVAR':
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (isWelkom) return reply('Já esta ativo.')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Ativou com sucesso o recurso de boas-vindas neste grupo!️')
break

case 'DESATIVAR':		
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)	
welkom.splice(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Desativou com sucesso o recurso de boas-vindas neste grupo!️')
break

case '🇧🇷': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (isAntiFake) return reply('*✅ Esse recurso já foi ativado antes!*')
antifake.push(from)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
reply(`_*✅ Recurso Ativado com Sucesso!*_`)
break

case '🇮🇩': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
antifake.splice(from, 1)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
reply('*☑️ Recurso Desativado com Sucesso!*')
break
case '✅ Ativar':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
              if (isLevelingOn) return reply('_✅ O recurso de nivel já havia sido ativado anteriormente._')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('_✅ O recurso de Níveis foi ativado com sucesso._')
break
case '☑️ Desativar':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('_☑️ O recurso de Níveis foi desligado com sucesso._')
break

case '𝖠tivar': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
antinota.push(from)
fs.writeFileSync('./database/antinota.json', JSON.stringify(antinota))
reply('_🔰 Recurso *antinota fake* ativado com sucesso!_')
break

case '𝖣esativar': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
let anota = antinota.indexOf(from)
anlink.splice(anota, 1)
fs.writeFileSync('./database/antinota.json', JSON.stringify(antinota))
reply('_🔰 Recurso *antinota fake* desativado com sucesso!_')
break

case 'Fechar Grupo': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(monospace('🔰 Grupo fechado com sucesso!'))
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
break

case 'Abrir Grupo': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(monospace('🔰 Grupo aberto com sucesso!'))
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
break

case '💌': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (isAutofigu) return reply('_✅ Já está ativado!_')          
autostick.push(from)             
fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
reply(`✅ _Ativado com Sucesso!_`)  
reply(`🔰 _Agora todas as *fotos* ou *gifs* que forem enviadas, serão convertidas em *figurinha* automaticamente!_`)  
break

case '✉️': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
var ini = autostick.indexOf(from)
autostick.splice(ini, 1)                  
fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
reply(`☑️ _Desativado com Sucesso!_`)              
break

case 'ON': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
anlink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
reply('_🔰 Recurso antilink ativado com sucesso!_')
break

case 'OFF': 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
let off = anlink.indexOf(from)
anlink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
reply('_🔰 Recurso antilink desativado com sucesso!_')
break

case 'GRUPO': 
msg = `🔥 𝑮𝑹𝑼𝑷𝑶 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 𝑫𝑶 𝑩𝑶𝑻:
https://chat.whatsapp.com/HAGHjVtwd21KtqxGYjdtPZ`
client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: msg })
break

case 'WM' :
reply(mess.wait)
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lol}&url=${q3}`)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: sen, caption : monospace(`T I K T O K  W I T H  W M`)})
break

case 'VIDEO' :
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
try{
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=apivinz&url=${q3}`)
lagu = await getBuffer(anu.result.url_video)
msg = `*📽 Vídeo Baixado com Sucesso!*

🔰 By: @Riskyzin`
client.sendMessage(from, lagu, video, {quoted:sen, caption: msg})
	limitAdd(sender, limit)
	limitAdd(sender, limit)
}catch{
reply('Offline')
}
break

case 'MUSICA' :
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
try{
ttms = await fetchJson(`https://api.zeks.me/api/ytmp3?apikey=apivinz&url=${q3}`)
lagu = await getBuffer(ttms.result.url_audio)
//ttms = await fetchJson(`https://bx-hunter.herokuapp.com/api/download/ytmp3?url=${q3}&apikey=Ikyy69`)
//lagu = await getBuffer(ttms.mp3)
client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
}catch{
reply('Offline')
}
	limitAdd(sender, limit)
	limitAdd(sender, limit)

break

case 'NOWM' :
  reply(mess.wait)
anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=HafzzYourBaka&url=${q3}`, {method: 'get'})
if (anu.error) return reply(anu.error)
tt = `「 *TIKTOK NO WM* 」\n\n*Judul:* ${anu.result.title}\n*Keywords:* ${anu.result.keywords}\n*Desc:* ${anu.result.description}`
 buff = await getBuffer(anu.result.link)
 client.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: sen,caption : tt})
 break
 

case 'AUDIO': 
try {
reply('_Lagu yang anda cari Sedang DiProsess.._')
let yut = await yts(q3)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
  
}


//******************** 》CmdWithPrefix《 ********************\\
//const antibot = sen.isBaileys
// (antibot === true) return
switch(command) {
case 'delvote':
if(!sen.key.remoteJid) return
if(isVote) return reply('Tidak ada sesi Voting')
delVote(from)
reply('Sukses Menghapus sesi Voting Di Grup Ini')
break

case 'voting': case 'vote':
if(!isGroupAdmins && !itsMe) return 
if(!isGroup) return reply(mess.only.group)
if (isVote) return reply('Sessão de votação em andamento neste grupo')
if(!q) return reply(`*Votando*\n\n ${prefix + command} @tag alvo | razão  | 1 (1 = 1 minuto)`)
if (sen.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || sen.message.extendedTextMessage.contextInfo == null) {
let id = sen.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('|')
if(!Number(split[2])) return reply('insira o número na linha 3\nExemplo: 1-9999\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' No início' +'\n\n' + `vote = ✅\ndevote = ❌\n\nRazão: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break
 
case 'jadibot':
if(itsMe) return reply('Não pode ser um bot em um bot')
if (isGroup) return reply(`*Os recursos só podem ser usados ​​no bate-papo privado! => wa.me/${botN}?text=${prefix}jadibot*`)
jadibot(reply,client,from, sen)
break
    
case 'stopjadibot':
if(!itsMe && !isOwner)return reply('não consigo parar de ser bot, exceto o dono')
stopjadibot(reply)
break
    
case 'listbot':
let tekss = 'L I S T R I S K Y B O T\n\n'
let lbt = [];
for(let i of listjadibot) {
lbt.push(i.jid)
tekss += `N o m e : ${i.name}
T a g : @${i.jid.split('@')[0]}
S e r v i c e: ${i.phone.device_manufacturer}
M o d e l o: ${i.phone.device_model}\n\n`
}
mentions(monospace(tekss), lbt, true)
break

case 'tutorial':
if(args[0] == 'convert'){
conv = `${convrt(prefix , pushname)}`
reply(conv)
}else if(args[0] == 'download'){
don = `${donld(prefix , pushname)}`
reply(don)
}else if(args[0] == 'game'){
gm = `${gem(prefix , pushname)}`
reply(gm)
}else if(args[0] == 'session'){
sss = `${sess(prefix , pushname)}`
reply(sss)
}else if(args[0] == 'group'){
gp = `${gc(prefix , pushname)}`
reply(gp)
}else{
reply(monospace(`Formato errado!!\n\nExemplos: ${prefix + command} convert\n\nList Opinion\n  • convert\n  • download\n  • session\n  • game\n  • group`))
}
break
case 'menugrupo':
reply(mess.wait)
wew = fs.readFileSync('./assets/foto.png')
client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: grupomenu(prefix) })
break
case 'livro':
reply(`_Aguarde um instante..._`)
        sendButMessage(from,livro(prefix) , `Esse comando é um teste!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Página 2`,
            },
            type: 1,
          },
        ])
break

case 'menufigu':
case 'sticker':
case 'stickers':
case 'figurinhas':
if(!isVerify) return isUser()
reply('_⏱️ Aguarde no máximo *10s*, depois tente novamente!_')
try{
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKpuNZMnev_rSAP1K0YZbvgwjK-Cds3lgpA&usqp=CAU`)
await client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menufigu(prefix) })
music = fs.readFileSync('./assets/Áudios/figu.mp3')
client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})
}catch{
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKpuNZMnev_rSAP1K0YZbvgwjK-Cds3lgpA&usqp=CAU`)
await client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: menufigu(prefix) })
music = fs.readFileSync('./assets/Áudios/figu.mp3')
client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})
}
break
case 'setmenu':
if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if(args[0] == 'simpel'){
menusimpel = true
reply('Sucesso!')
}else if(args[0] == 'ori'){
menusimpel = false
reply('Sucesso!')
}else{
reply(`Cara Penggunaan : ${prefix + command} image\n\nTersedia\n •simpel\n •ori`)
}
break
          case 'msgdesban':
if (args.length < 1) return reply(`Uso: ${prefix}msgdesban (nome) | (número)`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `RISKYBOT`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `+5588XXXXXXXX`		        					
if(isNaN(dua)) return await reply('O número de telefone tem que haver apenas números!!!')
ccg=
`Olá, meu nome é ${satu}, eu comprei um número número para meu filho fazer os trabalhos da escola em qual ele estuda , porém quando fui tentar entrar , estava dizendo que o número foi banido e eu nem sequer entrei no número, não fiz nada eu ja comprei o número e ele ja estava assim , ele precisa urgentemente desse número para fazer os trabalhos da escola.
Verifiquem o maís rápido possível!
meu número é: ${dua}

Método privado by; Risky`
client.sendMessage(from, ccg, text, {quoted:sen})
      break
          case 'msgdeban':
if (args.length < 1) return reply(`Uso: ${prefix}msgdeban (numero)`)
anu = body.slice (9)
if(isNaN(anu)) return await reply('Apenas números!!!')
ccg=
`E-mail: support@support.whatsapp.com

Título: Pergunta sobre o WhatsApp para Android

Texto: made of my number inside my mobile so that person is still misusing Please deactivate my number: ${anu}

Método privado by; Risky`
client.sendMessage(from, ccg, text, {quoted:sen})
      break
case 'geradores':
reply(mess.wait)
wew = fs.readFileSync('./assets/foto.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: gerador(prefix) })
				  break
case 'caripesan': case 'searchmsg':
if(!isOwner && !itsMe)return
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n • ${prefix + command} bot|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `This Chat!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`*Pesan Yang Anda Cari Tidak DiTemukan!*`)
}
} else {
reply(`Error`)
}
break

/* CAN BE USED AFTER UPDATE LAST BAILEYS
case 'minu': case 'hilp':
tag = owner.split('@')[0]
mjid = owner
waa = wa.split('@')[0]
mjud = wa
const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
lcekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second`:'Not Premium'
UFree = `${pendaftar.length}`
UReg = `${reg.length}`
UPrem = `${premium.length}`
THit = `${tmp_hit.length}`
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`

//mhan1 = await client.prepareMessage(from, gambar1, image, {thumbnail: gambar4})
buffer = await client.prepareMessage(from,gambar1,image)
mhan1 = await client.prepareMessageFromContent(from,{
"imageMessage": {
	"url": buffer.message.imageMessage.url,
	"mimetype": buffer.message.imageMessage.mimetype,
	"caption": buffer.message.imageMessage.caption,
	"fileSha256": buffer.message.imageMessage.fileSha256.toString('base64'),
	"fileLength": 99999999999,
	"height": buffer.message.imageMessage.height,
	"width": buffer.message.imageMessage.width,
	"mediaKey": buffer.message.imageMessage.mediaKey.low,
	"jpegThumbnail": buffer.message.imageMessage.jpegThumbnail
}
}, {quoted:sen,thumbnail : gambar4})

gbutsan = [
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}
]
gbuttonan = {
imageMessage: mhan1.message.imageMessage,
contentText: `${help(prefix,waktoo,tag,waa,UFree,UReg,UPrem,THit,wib,Tanggal,njing,pushname,usrr,premm,premi,limm,glimm,blan)}`,
footerText: 'S E N K U  B O T 椮 岁 与',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
                "title": `I'm Senku-BOT👋`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJwXJCryGDneNmIIqyMQ8LJE74KKIplUUwQ&usqp=CAU.jpg",
                "thumbnail": fakeg,
                "sourceUrl": ``
},mentionedJid:[mjid,sender,mjud]},quoted:sen})
break*/
			case 'outros':
reply(mess.wait)
wew = fs.readFileSync('./assets/foto.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: outros(prefix) })

break

			case 'divertidos':
				case 'divertido':
				case 'games':
					case 'fun':
reply(mess.wait)
try{
wew = fs.readFileSync('./assets/bye.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: fun(prefix) })
}catch{
reply("🔮 - _Ocorreu uma erro ao abrir o menu. Tente novamente!_")
}
break
//--- boas vindas on/off
case 'bv2':
  if(!isVerify) return isUser()
		if (!isGroup) return reply(group())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`▸ *BOAS VINDAS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
		if ((args[0]) === 'on') {
		if (isBv) return reply('⊱ As mensagens *Boas-Vindas (v2)* já esta ativada')
						_Bv.push(from)
						fs.writeFileSync('./database/group/Bv.json', JSON.stringify(_Bv))
						reply(`⎋ Função ativada no grupo *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isBv) return reply('⌤ Boas vindas (v2) já esta desativada')
						_Bv.splice(from, 1)
						fs.writeFileSync('./database/group/Bv.json', JSON.stringify(_Bv))
						reply(`⎋ Função desativada no grupo *${groupMetadata.subject}*`)
					} else {
						reply(`▸ *BOAS VINDAS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					}
		break

       //RISKY BOT OFC  
       case 'plaquinha4':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo... *')
					buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: '_🛐 Plaquinha criada com sucesso!_'})
					break
       case 'plaquinha3':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
					reply('ESPERE...')
					buffer = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: '_🛐 Plaquinha criada com sucesso!_'})
					break  
					                    case 'plaquinha2':
					if (args.length < 1) return reply(`Cadê o nome???`)
					teks = body.slice(11)
					if (teks.length > 10) return reply('⚠️ Texto muito grande, máximo 10 carácteres.')
					reply('*⏰ Fazendo sua plaquinha...*')
					buffer = await getBuffer(`https://ietostut.sirv.com/Screenshot_20210706-152232~3.png?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-35%25&text.0.size=24&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.background.opacity=100&text.0.outline.blur=100`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Te falta mulher...'})
					break
					                                      case 'plaquinha':
				if (args.length < 1) return reply(`Cadê o nome???`)
					teks = body.slice(10)
					if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
					reply('*⏰ Fazendo sua plaquinha...*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Falta de mulher pra pedir, é?'})
		//FIM RK MODZ			
case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIComponent(body.slice(5))}&lc=pt&cf=false`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
client.sendMessage(from, `${anu.success} 🐤`, text, {quoted: sen})
} catch {
reply(ptbr.erro)
}
break
case 'saida':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBv) return reply('✳️ Para usar este comando, deve ativar primero as *Boas vindas v2*')
if (args.length < 1) return reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
if ((args[0]) === 'on') {
	if (isBye) return reply('✳️ A mensagem de *Despedida* já esta ativada ')
	_bye.push(from)
	fs.writeFileSync('./database/group/bye.json', JSON.stringify(_bye))
	reply(`✅ A mensagem de *Despedida* foi ativada nesse grupo`)
} else if ((args[0]) === 'off') {
	if (!isBye) return reply('✳️ Já esta desativado')
	_bye.splice(from, 1)
	fs.writeFileSync('./database/group/bye.json', JSON.stringify(_bye))
reply(`✅ A mensagem de *Despedida* foi desativada neste grupo`)
} else {
reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
}
break
case 'contador':
case 'mensagens':
    if (!isGroup) return reply(mess.only.group) 
                if (!isContador) return reply('❎ O contador de mensagens não está ativado neste grupo')
                const currentMsgz = getMsg(sender)
                const currentMsgimgz = getMsgimg(sender)
                const currentMsgvideoz = getMsgvideo(sender)
                const currentMsgarchivoz = getMsgarchivo(sender)
                const currentMsgstickerz = getMsgsticker(sender)
                const currentMsgaudioz = getMsgaudio(sender)
				const checkIdMsgz = getMsgId(sender)
				if (currentMsgz === undefined && checkIdMsgz === undefined) return reply('✳️ seu Contador Tá Vazio')
                msgresul = `*▢ Nome:* @${sender.split("@")[0]}
╭──────────────────✾
├ *💬Mensagens enviados :* ${currentMsgz}
├ *🖼️Imagens enviados :* ${currentMsgimgz}
├ *🎥Videos enviados :* ${currentMsgvideoz}
├ *📂Arquivos enviados :* ${currentMsgarchivoz}
├ *👾Stickers enviados :* ${currentMsgstickerz}
├ *🔊Audios enviados :* ${currentMsgaudioz}
╰──────────────────✾`
               client.sendMessage(from, msgresul, text, { quoted: sen, contextInfo: {mentionedJid: [sender] }})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`❎ Ocorreu um Error!\n${err}`)
                    })
            break
				case 'contadormsg':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply(`✳️ *CONTADOR DE MENSAGENS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					if ((args[0]) === 'on') {
						if (isContador) return reply('✳️ Contador de mensagens já está ativado')
						contador.push(from)
						fs.writeFileSync('./database/group/contador.json', JSON.stringify(contador))
						reply(`✅ _Ativado *Contador de mensagens* neste grupo!_`)
					} else if ((args[0]) === 'off') {
						if (!isContador) return reply('✳️ Contador de mensagens já está desativado')
						contador.splice(from, 1)
						fs.writeFileSync('./database/group/contador.json', JSON.stringify(contador))
						reply(`✅ _Desativado *Contador de mensagens* neste grupo!_`)
					} else {
						reply(`✳️ *CONTADOR DE MENSAGENS*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					}
					break
			case 'rankgay':
if (!isGroup) return reply(mess.only.group)
member = []
top5 = args.join(' ')
const v1 = groupMembers
const v2 = groupMembers
const v3 = groupMembers
const v4 = groupMembers
const v5 = groupMembers
const v6 = groupMembers
const v7 = groupMembers
const v8 = groupMembers
const v9 = groupMembers
const v10 = groupMembers
const b1 = v1[Math.floor(Math.random() * v1.length)]
const b2 = v2[Math.floor(Math.random() * v2.length)]
const b3 = v3[Math.floor(Math.random() * v3.length)]
const b4 = v4[Math.floor(Math.random() * v4.length)]
const b5 = v5[Math.floor(Math.random() * v5.length)]
const b6 = v6[Math.floor(Math.random() * v6.length)]
const b7 = v7[Math.floor(Math.random() * v7.length)]
const b8 = v8[Math.floor(Math.random() * v8.length)]
const b9 = v9[Math.floor(Math.random() * v9.length)]
const b10 = v10[Math.floor(Math.random() * v10.length)]
teks = `≡ 🏳️‍🌈 *TOP 10 GAYS*
Essa é a lista dos mais gays do grupo
╭──────────────────✾
├╼ @${b1.jid.split('@')[0]}
├╼ @${b2.jid.split('@')[0]}
├╼ @${b3.jid.split('@')[0]}
├╼ @${b4.jid.split('@')[0]}
├╼ @${b5.jid.split('@')[0]}
├╼ @${b6.jid.split('@')[0]}
├╼ @${b7.jid.split('@')[0]}
├╼ @${b8.jid.split('@')[0]}
├╼ @${b9.jid.split('@')[0]}
├╼ @${b10.jid.split('@')[0]}
╰──────────────────✾` 
member.push(b1.jid)
member.push(b2.jid)
member.push(b3.jid)
member.push(b4.jid)
member.push(b5.jid)
member.push(b6.jid)
member.push(b7.jid)
member.push(b8.jid)
member.push(b9.jid)
member.push(b10.jid)
mentions(teks, member, true)
break
case 'antilink':
if(!isVerify) return isUser()
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
var a
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
try{
data = await  fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}`)
buff = fs.readFileSync('./assets/foto.png')
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: 'ON'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'OFF'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: 'Sem Links',
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
		      sendButMessage(from, 'Sem Links', `© By: Risky Modz`,[
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `ON`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `OFF`,
            },
            type: 1,
          },
        ])
}
break
		case 'md':	
		case 'down':			
		case 'downloader':						
		if(!isVerify) return isUser()
reply('_⏱️ Aguarde no máximo *10s*, depois tente novamente!_')
try{
		wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4pUQXzYlXdwSSTL3uOE2mjcUVvAkwBrt3w&usqp=CAU`)
                buffer = await getBuffer('https://i.ibb.co/bBFDSJs/IMG-20210413-WA0001.jpg')
                 ingfoo = await getGroup(totalchat)
                cpcp = await getpc(totalchat)
                msg =`⊰──────────────⊱
     *𝐑𝐈𝐒𝐊𝐘-𝐁𝐎𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*
⊰──────────────⊱
╭──────────────
│──🎊|᳡⃯𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎•᭄🎊──
│ Nome: ${pushname}
╰──────────────
╭──🔰|᳡⃯𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓•᭄🔰──
│ Chats: ${cpcp.length}
│ Grupos: ${ingfoo.length}
╰──────────────
╭─📁|᳡⃯𝐀𝐑𝐐𝐔𝐈𝐕𝐎𝐒 𝐎𝐍•᭄📁─
│ *${prefix}Mdfire (link)*
│ ᐳ _Para baixar arquivos_
│ *${prefix}Riskyapp (nome)*
│ ᐳ _Para baixar arquivos_
╰──────────────
╭─🔥|᳡⃯𝐌𝐄𝐋𝐇𝐎𝐑▪︎𝐏𝐋𝐀𝐘•᭄🔥─
│ *${prefix}Play (link ou titulo)*
│ ᐳ _Para baixar músicas/videos_
│ *${prefix}Playmp3 (link)*
│ ᐳ _Para baixar músicas_
│ *${prefix}Playmp4 (link)*
│ ᐳ _Para baixar vídeos_
╰──────────────
╭─✨|᳡⃯𝐘𝐎𝐔𝐓𝐔𝐁𝐄/𝐌𝐒𝐂•᭄✨─
│ *${prefix}playzao (titulo)*
│ ᐳ _Para baixar músicas_
│ *${prefix}playrisky (titulo)*
│ ᐳ _Para baixar músicas_
│ *${prefix}playgod (titulo)*
│ ᐳ _Para baixar músicas_
│ *${prefix}playvip (titulo)*
│ ᐳ _Para baixar músicas_
│ *${prefix}play2 (link)*
│ ᐳ _Para baixar músicas_
│ *${prefix}playmp42 (link)*
│ ᐳ _Para baixar vídeos_
│ ${prefix}ytsearch
│ ᐳ _Para buscar vídeos_
╰──────────────
╭─📽|᳡⃯𝐕𝐈𝐃𝐄𝐎𝐒 𝐈𝐍𝐒𝐓𝐀•᭄📽─
│ *${prefix}Ig (link)*
│ ᐳ _Para baixar do insta_
╰──────────────
╭─📽|᳡⃯𝐕𝐈𝐃𝐄𝐎𝐒 𝐓𝐈𝐊 𝐓𝐎𝐊•᭄📽─
│ *${prefix}tiktok*
│ ᐳ _Para baixar do ttk_
│ *${prefix}tiktokwm*
│ ᐳ _Para baixar do ttk com wm_
│ *${prefix}tiktoknowm*
│ ᐳ _Para baixar do ttk sem wm_
╰──────────────
╭─🎼|᳡⃯𝐋𝐄𝐓𝐑𝐀 𝐃𝐀 𝐌𝐒𝐂•᭄🎼─
│ *${prefix}letra (titulo)*
│ ᐳ _Envia letra da música_
╰──────────────`
    await client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: msg })
}catch{
reply('🐤 - Ocorreu um erro ao *Puxar a Imagem*.\n_• Você deseja Tentar Novamente')
}
break
case 'adulto':
if(!isVerify) return isUser()
reply(mess.wait)
		wew = fs.readFileSync('./assets/foto.png')
                buffer = await getBuffer('https://i.ibb.co/bBFDSJs/IMG-20210413-WA0001.jpg')
                 ingfoo = await getGroup(totalchat)
                cpcp = await getpc(totalchat)
                msg = `⊰──────────────⊱
   *𝐑𝐈𝐒𝐊𝐘-𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 𝐀𝐃𝐔𝐋𝐓𝐎*
⊰──────────────⊱
╭──────────────
│──🎊|᳡⃯𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎•᭄🎊──
│ Nome: *${pushname}*
│ *${prefix}Pinterest (nome)*
│ ᐳ _Para baixar fotos_
╰──────────────
╭──🔰|᳡⃯𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓•᭄🔰──
│ Chats: ${cpcp.length}
│ Grupo: ${ingfoo.length}
╰──────────────
╭─🔞|᳡⃯𝐏𝐎𝐑𝐍𝐎𝐆𝐑𝐀𝐅𝐈𝐀𝐒•᭄🔞─
│ *${prefix}Hentai*
│ ᐳ _Manda foto hentai_
│ *${prefix}Hentai2*
│ ᐳ _Manda foto hentai_
│ *${prefix}Xvideos (titulo)*
│ ᐳ _Para buscar videos_
│ *${prefix}Xvideosdw (link)*
│ ᐳ _Para baixar videos_
│ *${prefix}Xnxx (link)*
│ ᐳ _Para baixar videos_
╰──────────────
╭─🚨 |᳡⃯𝐀𝐍𝐈𝐌𝐄 𝐇𝐄𝐍𝐓𝐀𝐈•᭄🚨─
│ *${prefix}Foot*
│ ᐳ _Para baixar foto_
│ *${prefix}Pussy*
│ ᐳ _Para baixar foto_
│ *${prefix}Cum*
│ ᐳ _Para baixar foto_
│ *${prefix}Ass*
│ ᐳ _Para baixar foto_
│ *${prefix}Blowjob*
│ ᐳ _Para baixar foto_
│ *${prefix}Ero*
│ ᐳ _Para baixar foto_
│ *${prefix}Kiss*
│ ᐳ _Para baixar foto_
│ *${prefix}Gangbang*
│ ᐳ _Para baixar foto_
╰──────────────
╭─🛡|᳡⃯𝐂𝐎𝐍𝐓𝐀𝐓𝐎 𝐃𝐎𝐍𝐎•᭄🛡─
│  *${prefix}dono*
│  *${prefix}owner*
│───────────────
╰──🎊️|᳡⃯𝐑𝐈𝐒𝐊𝐘 𝐑𝐎𝐁𝐁𝐎𝐓•᭄🎊️─`
		        client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: msg })
		break
		
	case 'help': case 'menu2':
	if(!isVerify) return isUser()
	reply(mess.wait)
const premm = `${isOwner ? 'Dono' : isPremium ? 'Premium' : 'Grátis'}`
limm = `${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`
try{
wew = fs.readFileSync('./assets/foto.png')
ingfoo = await getGroup(totalchat)
cpcp = await getpc(totalchat)
covid = await fetchJson('http://brizas-api.herokuapp.com/covidbrasil?apikey=brizaloka')
msg = `⊰━━━━━━━━━━━━━━⊱
     *𝐑𝐈𝐒𝐊𝐘-𝐁𝐎𝐓 𝐑𝐄𝐕𝐎𝐋𝐔𝐓𝐈𝐎𝐍*
⊰━━━━━━━━━━━━━━⊱
┏━━━━━━━━━━━━━━
┣━━🎊|᳡⃯𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎•᭄🎊━━
┣⊱ Nome: ${pushname}
┣⊱ Status: ${premm}    
┣⊱ Limite: ${limm} 
┣⊱ Jogo: ${glimm} 
┣⊱ Dinheiro: ${blan} 
┗━━━━━━━━━━━━━━
┏━━🕗|᳡⃯𝐃𝐀𝐓𝐀/𝐇𝐎𝐑𝐀•᭄🕗━━
┣⊱ Hora: ${timeWit}
┣⊱ Data: ${timeWita}
┣⊱ Turno: ${waktoo}
┣━━✅|᳡⃯𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓•᭄✅━━
┣⊱ Chats: ${cpcp.length}
┣⊱ Grupo: ${ingfoo.length}
┣━━🦠|᳡⃯𝐂𝐎𝐕𝐈𝐃-𝐃𝐙𝟗•᭄🦠━━
┣⊱ Casos: ${covid.resultado.casos}
┣⊱ Mortes: ${covid.resultado.mortes}
┗━━━━━━━━━━━━━━
┏━🔥|᳡⃯𝐌𝐄𝐍𝐔 𝐑𝐀𝐏𝐈𝐃𝐎•᭄🔥━
┣⊱ *${prefix}menu2*
┣⊱ Para abrir o menu
┣⊱ *${prefix}menuzin*
┣⊱ Para abrir o menu
┣⊱ *${prefix}gerador*
┣⊱ Para abrir o menu
┗━━━━━━━━━━━━━━
┏━✨|᳡⃯𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎𝐒•᭄✨━
┣⊱ *${prefix}menugrupo*
┣⊱ Para abrir o menu
┣━━━━━━━━━━━━━━
┣💖|᳡⃯𝐌𝐄𝐍𝐔 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐃𝐎•᭄💖━
┣⊱ *${prefix}divertidos*
┣⊱ Para abrir o menu
┗━━━━━━━━━━━━━━
┏💌|᳡⃯𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀•᭄💌━
┣⊱ *${prefix}figurinhas*
┣⊱ Para abrir o menu
┣━━━━━━━━━━━━━━
┣━🖌|᳡⃯𝐌𝐄𝐍𝐔 𝐌𝐀𝐊𝐄𝐑•᭄🖌━━
┣⊱ *${prefix}menumaker*
┣⊱ Para abrir o menu
┗━━━━━━━━━━━━━━
┏━━⚙|᳡⃯𝐆𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒•᭄⚙━━
┣⊱ *${prefix}geradores*
┣⊱ Para abrir o menu
┣━━━━━━━━━━━━━━
┣━━━🎁|᳡⃯𝐎𝐔𝐓𝐑𝐎𝐒•᭄🎁━━━
┣⊱ *${prefix}outros*
┣⊱ Para abrir o menu
┗━━━━━━━━━━━━━━
┏━📌|᳡⃯𝐂𝐎𝐍𝐓𝐀𝐓𝐎 𝐃𝐎𝐍𝐎•᭄📌━
┣⊱  *${prefix}dono*
┣⊱  *${prefix}owner*
┣━━━━━━━━━━━━━━━
┗⚜️|᳡⃯𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋•᭄⚜️━`
await client.sendMessage(from, wew, image, {quoted:fvideo,caption})
}catch{
reply(msg)
}
break

case 'bm':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*SUPPORT RUIN FF*',
 description: `*Hai ${pushname} 🌹*`,
 sections: [
                     {
                      "title": `${waktoo}`,
 rows: [
                          {
                              "title": "DONO",
                              "rowId": ""
                           },
                           {
                              "title": "STORE 🛒\n\n _SUBSCRIBE RUIN FF_",
                              "rowId": ""
                              },
                           {
                              "title": "SEWA 🏷️\n\n _SUBSCRIBE RUIN FF_",
                              "rowId": ""
                           },
                           {
                              "title": "DONASI ♨️\n\n _SUBSCRIBE RUIN FF_",
                              "rowId": ""
                           },
                           {
                              "title": "OWNER 👨‍💻 \n\n _SUBSCRIBE RUIN FF_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
 }
client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:finvite})
break

case 'menu':
if(!isVerify) return isUser()
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
var a
const preim = `${isOwner ? 'Dono' : isPremium ? 'Premium' : 'Grátis'}`
limm = `${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`
let userLevell = level.getLevelingLevel(sender, _level)
let userXxp = level.getLevelingXp(sender, _level)
let requireXp = 10 * Math.pow(userLevell, 2) + 50 * userLevell + 100
let userRankk = level.getUserRank(sender, _level)
const timestaamp = speed();
const latensii = speed() - timestaamp 
try{
buff = fs.readFileSync('./assets/menuu.jpeg')
ingfoo = await getGroup(totalchat)
cpcp = await getpc(totalchat)
/*covid = await fetchJson('https://api-yuzzu.herokuapp.com/api/covidworld?apikey=Yuzzu')*/

/*╭──「 COVID NO MUNDO 🗺 ️」
│
│ 😷 Casos: ${covid.result.totalCases}
│
│ 😃 Recuperados ${covid.result.recovered}
│
│ 😵 Mortes: ${covid.result.deaths}
│
│ 📡 Última Atualização: 
│ ${covid.result.lastUpdate}
│
╰───────────────────*/
cap =
`╭───「 👤 INFORMAÇÕES 」
│
│ 👋 _Olá -_ _*${pushname}*_
│
│ 🔮 _Exp : ${userXxp} / ${requireXp}_
│
│ 🏆 _Rank: ${userRankk}_
│
│ 🔰 _Status: ${preim}_
│
│ 🔧 _Limite: ${limm}_
│
│ 🎮 _Jogo: ${glimm}_
│
│ 💰 _Dinheiro: ${blan}_
│
╰──────────────────

╭───「 🕑 HORÁRIOS 」
│
│ ⏰ _Hora: ${timeWit}_
│
│ 📅 _Data: ${timeWita}_
│
│ 🏮 _Turno: ${waktoo}_
│
╰──────────────────

╭───「 🔥 NOVIDADES 🔥」
│
│ 🎞️ - *1° → ${prefix}Shitpost*
│ ᐳ _Envia menu de shit._
│
│ 🛠 - *2° → ${prefix}About*
│ ᐳ _Saiba mais da BOT e seu programador._
│
│ 📖️ - *3° → ${prefix}Livro*
│ ᐳ _Um livro em beta._
│
│ 🆘 - *4° → ${prefix}Ajuda (Mensagem)*
│ ᐳ _Informe os erros que encontrar._
│
│ 📋 - *5° → ${prefix}Sugestão*
│ ᐳ _O que você gostaria no bot?_
│
│ ❗ - *6° → ${prefix}Novidades*
│ ᐳ _Veja tudo que há de novo!_
│
╰───────────────────

╭───「 🛠 COMANDOS 💫 」
│
│ ⚠️ - *Não floode ou os comandos podem cair!*
│
│ ⚠️ - *Se falhar, o servidor caiu temporariamente.*
│
│ 🏖️ - *1° → ${prefix}Stickers*
│ ᐳ _Comandos que usam stickers._
│
│ 🌐 - *2° → ${prefix}Down*
│ ᐳ _Comandos de Downloads._
│
│ 🔐 - *3° → ${prefix}Dono*
│ ᐳ _Comandos que só meu dono pode usar._
│
│ 🧑🏼‍💻 - *4° → ${prefix}Admin*
│ ᐳ _Comandos para administradores._
│
│ 💰 - *5° → ${prefix}Premium*
│ ᐳ _Comandos Premium!_
│
│ 🎰 - *6° → ${prefix}Games*
│ ᐳ _Mini-Jogos para jogar!_
│
│ 🔞 - *7° → ${prefix}Adulto*
│ ᐳ _Lista de comandos +18!_
│
│ 🖨️ - *8° → ${prefix}Maker*
│ ᐳ _Fabrica de imagens!_
│
│ ℹ️ - *9° → ${prefix}Dados*
│ ᐳ _Comandos Informativos!_
│
│ 🎬 - *10° → ${prefix}Midia*
│ ᐳ _Comandos de Mídia!_
│
│ 🚪 - *11° → ${prefix}Outros*
│ ᐳ _Outros comandos!_
│
╰───────────────────` 
listMsg = {
 buttonText: 'Ver Comandos',
 footerText: '\n© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
 description: `${Tanggal}\n_Olá, *${pushname}*!_

_Esse é o *menu* em lista feito para facilitar a sua vida!_

_Para o comando funcionar, *selecione e envie* o menu que quer abrir!_`,
 sections: [
                     {
                      "title": `${waktoo}`,
 rows: [
{
                          "title": "Livro",
description: `Leia um pequeno livro...`,
"rowId": ""
},      
{
                              "title": "Menumaker",
                              description: `Menu de edição de fotos!`,
                              "rowId": ""
                           },
                           {
                          "title": "Geradores",
description: `Menu de gerar dados!`,
"rowId": ""
},
                           {
                          "title": "Consultas",
description: `Menu de puxar dados!`,
"rowId": ""
},
                                              
  {
                          "title": "Figurinhas",
description: `Menu de criar figuras!`,
"rowId": ""
},                          
 {
                          "title": "Midia",
description: `Menu de midia!`,
"rowId": ""
},   
                        {
                          "title": "Adulto",
description: `Menu +18!`,
"rowId": ""
},
                           {
                          "title": "Downloader",
description: `Menu de downloads!`,
"rowId": ""
},
                           {
                          "title": "Shitpost",
description: `Vídeos para shitposter!`,
"rowId": ""
},
{
                              "title": "Admin",
                              description: `Comandos que só administradores podem usar!`,
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
 }
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: 'NOVIDADES'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'AJUDA'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
buttons: gbutsan,
headerType: 4
}
music = fs.readFileSync('./assets/Áudios/ohayo.mp3')
client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvideo})
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fvideo})
client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})
}catch{
client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvideo})
var buttons = [{buttonId: `NOVIDADES`, buttonText: {displayText: 'NOVIDADES'}, type: 1},{buttonId: `AJUDA`, buttonText: {displayText: 'AJUDA'}, type: 1}]
var buttonMessage = {
    contentText: cap,
    footerText: '© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: riskyz})
client.sendMessage(from, music, MessageType.audio, {quoted: sen, mimetype: 'audio/mp4', ptt:true})
}
break

case 'novidades':
if(!isVerify) return isUser()
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
/*covid = await fetchJson('https://api-yuzzu.herokuapp.com/api/covidworld?apikey=Yuzzu')*/

/*╭──「 COVID NO MUNDO 🗺 ️」
│
│ 😷 Casos: ${covid.result.totalCases}
│
│ 😃 Recuperados ${covid.result.recovered}
│
│ 😵 Mortes: ${covid.result.deaths}
│
│ 📡 Última Atualização: 
│ ${covid.result.lastUpdate}
│
╰───────────────────*/
cap =
`╭───「 🔥 NOVIDADES 🔥」
│
│ 🎞️ - *0° → ${prefix}Shitpost*
│ ᐳ _Envia menu de shit._
│
│ 🎞²️ - *1° → ${prefix}Shitpost2*
│ ᐳ _Envia menu de shit._
│
│ 🛠 - *2° → ${prefix}About*
│ ᐳ _Saiba mais da BOT e seu programador._
│
│ 📖️ - *3° → ${prefix}Livro*
│ ᐳ _Um livro em beta._
│
│ 🆘 - *4° → ${prefix}Ajuda (Mensagem)*
│ ᐳ _Informe os erros que encontrar._
│
│ 📋 - *5° → ${prefix}Sugestão*
│ ᐳ _O que você gostaria no bot?_
│
│ 🍓 - *6° → ${prefix}Metadinha*
│ ᐳ _Afim de uma metadinha?_
│
│ 📇️ - *7° → ${prefix}Kanekilogo*
│ ᐳ _Farei uma logo pra você!_
│
│ 🔥 - *8° → ${prefix}Plaquinha*
│ ᐳ _Farei uma plaquinha pra você!_
│
│ 🔥 - *9° → ${prefix}Plaquinha2*
│ ᐳ _Farei uma plaquinha pra você!_
│
│ 🔥 - *10° → ${prefix}Plaquinha3*
│ ᐳ _Farei uma plaquinha pra você!_
│
│ 🔥 - *11° → ${prefix}Plaquinha4*
│ ᐳ _Farei uma plaquinha pra você!_
│
│ 🖨️ - *12° → ${prefix}Riscado*
│ ᐳ _Farei uma edit pra você!_
│
│ 🎲 - *13° → ${prefix}Dado*
│ ᐳ _Jogar dado?_
│
│ 🎰 - *14° → ${prefix}Giro*
│ ᐳ _Fazer spin?_
│
│ 🔥 - *15° → ${prefix}Hentai3*
│ ᐳ _Mais de 90 fotos hentai!_
│
│ 🔥 - *16° → ${prefix}Buceta*
│ ᐳ _Mais de 10 fotos +18!_
╰───────────────────` 
var buttons = [{buttonId: `AJUDA`, buttonText: {displayText: 'AJUDA'}, type: 1}]
var buttonMessage = {
    contentText: cap,
    footerText: '© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: riskyz})
break

case 'metadinha':
if(!isVerify) return isUser()
try{
metade = await fetchJson('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=9287183216dd1eb3')
mas = await getBuffer(metade.result.male)
fem = fem = await getBuffer(metade.result.female)
reply(mess.wait)
await client.sendMessage(from, mas, image, {quoted: sen})
await client.sendMessage(from, fem, image, {quoted: sen})
}catch{
reply('Deu erro ao enviar...')
}
break
case 'wts':
                 const wtss = "0@s.whatsapp.net"
                 wts = `@${wtss.split("@s.whatsapp.net")[0]}`
                 client.sendMessage(from, wts, text, {quoted: sen, contextInfo: {"mentionedJid": [wtss]}})
                 break

case 'warn':
case 'penalizar':
case 'aviso':
if(!isVerify) return isUser()
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('*Marque uma mensagem!*')
			const warnuser = sen.message.extendedTextMessage.contextInfo.participant
			const currentWWarn = getWarn(warnuser)
			const checkIdWWarn = getWarnId(warnuser)
			
			var advertenciaa = 'primeira'
            if (currentWWarn === 0) {
                advertenciaa = 'primeira'
            } else if (currentWWarn === 1) {
                advertenciaa = 'segunda'
            } else if (currentWWarn === 2) {
                advertenciaa = 'terceira'
	        } else if (currentWWarn === 3) {
                advertenciaa = 'quarta'
            } else if (currentWWarn === 4) {
                advertenciaa = 'quinta'
            } else if (currentWWarn === 5) {
                advertenciaa = 'sexta'
            }

					if (currentWWarn === undefined && checkIdWWarn === undefined) addWarnId(warnuser)
					addWarn(warnuser, 1)
					client.sendMessage(from, `⚠️️ Você recebeu a *${advertenciaa}* advertencia a @${warnuser.split("@")[0]}\n\n*📌Nota:* 4 advertencias = ban`, text, {quoted: sen, contextInfo: {"mentionedJid": [warnuser]}})
		if (currentWWarn === 3) {
			client.sendMessage(from, `⚠️️ @${warnuser.split("@")[0]} você superou as 4 advertencias. Adeus!`, text, {quoted: sen, contextInfo: {"mentionedJid": [warnuser]}})
			setTimeout( () => {
			client.groupRemove(from, [warnuser]).catch((e)=>{reply('❎ Error, não pude kikar o usuario')})
			addWarn(`${warnuser}`, -4)
			}, 1000)
			}
break

case 'about':
if(!isVerify) return isUser()
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
try{
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2dA8aGnGxSBe_dO9E_k0mb8uCOQTgeFonQ&usqp=CAU`)
msg =
`╭───〔 SOBRE O DONO 〕
│
│🔰 Bot: 𝖱𝗂𝗌𝗄𝗒 𝖡𝗈𝗍 - 𝖮𝖿𝗂𝖼𝗂𝖺𝗅 🇧🇷
│ ᐳ _Erros? Contate-me!_
│
│🔰 Criador: 𝖱𝗂𝗌𝗄𝗒
│ ᐳ _17 anos!_
│ ᐳ _Cursando 2°ano de Informática!_
│
╰───────────────
╭───〔 𝖱𝖤𝖣𝖤𝖲 𝖲𝖮𝖢𝖨𝖠𝖨𝖲 〕
│ 
│👤 Insta: @𝖱𝗂𝗌𝗄𝗒𝗓𝗂𝗇
│
│👤 Whats: +558896926980
│
╰───────────────`
tta = await client.prepareMessage(from, wew, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: 'Grupo'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'YouTube'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: msg,
footerText: '© By: David Sousa (Risky)',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:risky})
}catch{
	        sendButMessage(from, msg, `© By: David Sousa (Risky)`,[
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `DONO`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `REGRAS`,
            },
            type: 1,
          },
        ])
        
}
break

case 'antispamcmd':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiSpamcmd) return reply('Ja esta ativo')
						antispamcmd.push('Ativado')
						fs.writeFileSync('./src/json/antispamcmd.json', JSON.stringify(antispamcmd))
						reply('Ativou com sucesso o recurso de anti spam de comando no bot✔️')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/json/antispamcmd.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de anti spam de comando no bot✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro :/')
					}
                break

case 'premium':
if (!isPremium && !isOwner && !itsMe) return reply(mess.only.prem)								
reply(`_💎 • Enviando o Menu Premium!_`)
const pream = `${isOwner ? 'Dono' : isPremium ? 'Premium' : 'Grátis'}`
limm = `${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`
try{
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzTNpHhjt5pWWtM7MQbF8ZpgckgUKwxtDhQ&usqp=CAU`)
ingfoo = await getGroup(totalchat)
cpcp = await getpc(totalchat)
covid = await fetchJson('http://brizas-api.herokuapp.com/covidbrasil?apikey=brizaloka')
msg =
`╭───「 𝖲𝖤𝖴 𝖯𝖤𝖱𝖥𝖨𝖫 」
│ _Olá -_ _*${pushname}*_
│ _Status: ${pream}_
│ _Limite: ${limm}_
│ _Jogo: ${glimm}_
│ _Dinheiro: ${blan}_
╰───────────────
╭───「 𝖣𝖠𝖳𝖠 𝖤 𝖧𝖮𝖱𝖠 」
│ _Hora: ${timeWit}_ 
│ _Data: ${timeWita}_
╰───────────────

╭───〔 𝖢𝖮𝖬𝖠𝖭𝖣𝖮𝖲 〕
│
│ ⚠️ - *Não floode ou os comandos podem cair!*
│
│ ⚠️ - *Se falhar, o servidor caiu temporariamente.*
│
│ 🏖️ - 𝖥𝖨𝖦𝖴𝖱𝖨𝖭𝖧𝖠𝖲:
│ ᐳ ${prefix}Swm
│ ➾ _Faz figurinha com o nome!_
│ ᐳ ${prefix}𝖳𝗈𝗀𝗂𝖿
│ ➾ _Converte figurinha em gif!_
│ ᐳ ${prefix}Roubar
│ ➾ _Altera dados da fogurinha!_
│ ᐳ ${prefix}Stickmeme
│ ➾ _Coloca legenda na figirinha!_
│ ᐳ ${prefix}Stickmeme2
│ ➾ _Coloca legenda na figirinha!_
│ ᐳ ${prefix}Stickmeme3
│ ➾ _Coloca legenda na figirinha!_
│
│ 🌐 - 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖲
│ ᐳ ${prefix}Ig
│ ➾ _Para baixar videos!_
│ ᐳ ${prefix}Mdfire
│ ➾ _Para baixar arquivos!_
│ ᐳ ${prefix}Riskyapp
│ ➾ _Para baixar arquivos!_
│ ᐳ ${prefix}Xvideosdw
│ ➾ _Para baixar videos!_
│ ᐳ ${prefix}Xnxx
│ ➾ _Para baixar videos!_
│ ᐳ ${prefix}Img
│ ➾ _Foto para web!_
│
│ ᐳ ${prefix}Procurargp
│ ➾ _Procura grupos do wpp!_
│ ᐳ ${prefix}Moddroid
│ ➾ _Apps modificados!_
│
│ 🌟 - ESPECIAIS
│ ᐳ ${prefix}Fakeloc
│ ➾ _Cria uma loc. pra você!_
│ ᐳ ${prefix}Alladmin
│ ➾ _Tira todos Admins!_
│ ᐳ ${prefix}Kickall
│ ➾ _Expulsa todos!_
│
│ ☄ - 𝖣𝖤𝖲𝖠𝖲𝖳𝖱𝖤/𝖡𝖱𝖤𝖵𝖤
│ ᐳ ${prefix}Hacked
│ ➾ _Hackeia o grupo!_
│ ᐳ ${prefix}Detonate
│ ➾ _Crasha o Grupo!_
│
╰──────────────`
wiw = fs.readFileSync('./assets/v.jpeg')
await client.sendMessage(from, wiw, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1280, "width": 1280, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: msg })
}catch(e){
buf = wew = fs.readFileSync('./assets/bye.png')
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Risky Robbot ~ Oficial`,
"description": msg,
"currencyCode": "BRL",
"priceAmount1000": "10000",
"productImageCount": 1
},
"businessOwnerJid": "558896926980@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:finvite, contextInfo:{}}) 

await client.relayWAMessage(res)
}
break

case 'admin':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
reply('*👨‍💻 Enviando o Menu dos Administradores!*')
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0ZznRsWO3mN6TUWzq81tg2GzDjoGwHWcZQ&usqp=CAU`)
msg= `╭──────────────────
│ 👨‍💻 - *1°* → *${prefix}Modos*
│ ᐳ _Modos do Grupo!_
╰──────────────────
╭──────────────────
│
│ 👨‍💻 - *1°* → *${prefix}Warn*
│ ᐳ _Penalizar membro!_
│ 
│ 👨‍💻 - *1°* → *${prefix}Antifake2*
│ ᐳ _Proibe número fake!_
│ 
│ 👨‍💻 - *1°* → *${prefix}Contador*
│ ᐳ _Contador!_
│ 
│ 👨‍💻 - *1°* → *${prefix}Adminall*
│ ᐳ _Adiciona todos mo cargo adm!_
│
│ 👨‍💻 - *1°* → *${prefix}Alladmin*
│ ᐳ _Remove todos do cargo adm!_
│
│ 👨‍💻 - *1°* → *${prefix}Kickall*
│ ᐳ _Remove todos do grupo!_
│
│ 👨‍💻 - *1°* → *${prefix}Ban*
│ ᐳ _Banir marcando mensagem!_
│
│ 👨‍💻 - *1°* → *${prefix}Kikar*
│ ᐳ _Banir marcando participantes!_
│
│ 👨‍💻 - *1°* → *${prefix}Pm*
│ ᐳ _Promove um membro!_
│
│ 👨‍💻 - *1°* → *${prefix}Dm*
│ ᐳ _Rebaixa um membro!_
│
│ 👨‍💻 - *1°* → *${prefix}D*
│ ᐳ _Deleta mensagem do bot!_
│
│ 👨‍💻 - *1°* → *${prefix}H*
│ ᐳ _Marcação invisível!_
│
│ 👨‍💻 - *1°* → *${prefix}Deathnote*
│ ᐳ _Marque um participante pra ele morrer!_
│
│ 👨‍💻 - *1°* → *${prefix}Listaonline*
│ ᐳ _Ver todos os Onlines!_
│
│ 👨‍💻 - *1°* → *${prefix}Setdesc*
│ ᐳ _Mude a descrição do grupo!_
│
│ 👨‍💻 - *1°* → *${prefix}Setnome*
│ ᐳ _Mude o nome do grupo!_
│
│ 👨‍💻 - *1°* → *${prefix}Linkgc*
│ ᐳ _Envia o link do grupo!_
│
│ 👨‍💻 - *1°* → *${prefix}Resetar*
│ ᐳ _Reseta o link do grupo!_
│
│ 👨‍💻 - *1°* → *${prefix}Infoall*
│ ᐳ _Informe uma memsagem a todos!_
│
│ 👨‍💻 - *1°* → *${prefix}Tempogp1*
│ ᐳ _Fechar grupo por tempo!_
│
│ 👨‍💻 - *1°* → *${prefix}Tempogp2*
│ ᐳ Abrir grupo por tempo!_
│
│ 👨‍💻 - *1°* → *${prefix}Sair*
│ ᐳ _Bot se despede do grupo!_
╰──────────────────`
        sendButMessage(from, msg, `Esse comando é apenas para administradores.`, [
          {
            buttonId: `Abrir Grupo`,
            buttonText: {
              displayText: `Abrir Grupo`,
            },
            type: 1,
          },
                    {
            buttonId: `Fechar Grupo`,
            buttonText: {
              displayText: `Fechar Grupo`,
            },
            type: 1,
          },
        ])
await client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftok})
        break
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Responda com uma mensagem!')
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Pedido recebido, emitido: @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
break
case 'modos':
if(!isVerify) return isUser()
 listMsg = {
 buttonText: 'Ver Comandos',
 footerText: 'By Risky Modz!',
 description: `_Olá, *${pushname}* Aqui você pode ver os modos do Risky Robbot!_`,
 sections: [
                     {
                      "title": `🔰 Modos do Grupo`,
 rows: [
{
    "title": "RiskyBot 1",
description: `Bot cria vida!`,
"rowId": ""
},
                           {
                               "title": "RiskyBot 0",
description: `Desativa a vida!`,
"rowId": ""
},
                           {
                          "title": "Antilink Mode",
description: `Anti-links https!`,
"rowId": ""
},      
{
                              "title": "Antinota Mode",
                              description: `Proibir notas fakes!`,
                              "rowId": ""
                           },
                           {
                          "title": "Antifake Mode",
description: `Apenas +55 entra!`,
"rowId": ""
},
                           {
                          "title": "Autofigu Mode",
description: `Figurinhas automáticas!`,
"rowId": ""
},
                                              
  {
                          "title": "Bemvindo Mode",
description: `Recurso de boas vindas!`,
"rowId": ""
},                          
 {
                          "title": "Levelling Mode",
description: `Recurso de níveis!`,
"rowId": ""
                           }
                        ]
                     }],
 listType: 1
 }
 client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvideo})
break

case 'midia':
if(!isVerify) return isUser()
reply(mess.wait)
try{
wew = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqCFfBeuV_OFe7DgmLY2_VoEIwdc4G4ALEQ&usqp=CAU`)
msg =
`╭───「 🎼 Comandos 🎶 」
│
│ 🎵 - *1° → ${prefix}Grande*
│ ᐳ _Deixa o áudio grande!_
│
│ 🤖 - *2° → ${prefix}Robô*
│ ᐳ _Deixa o áudio como robô!_
│
│ 🎛 - *3° → ${prefix}Bass*
│ ᐳ _Deixa o áudio com grave!_
│
│ 🎚 - *4° → ${prefix}Estourar*
│ ᐳ _Deixa o áudio estourado!_
│
│ ⏩ - *5° → ${prefix}Fast*
│ ᐳ _Deixa o áudio rápido!_
│
│ ⏩ - *6° → ${prefix}Nightcore*
│ ᐳ _Deixa o áudio fino!_
│
│ ⏮ - *7° → ${prefix}Inverter*
│ ᐳ _Deixa o áudio invertido!_
│
╰───────────────────`
tta = await client.prepareMessage(from, wew, image)
gbutsan = [
{buttonId: `menu`, buttonText: {displayText: '⬅️ VOLTAR'}, type: 1},
{buttonId: `🆘 AJUDA`, buttonText: {displayText: '🆘 AJUDA'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: msg,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:ftok})
}catch{
var buttons = [{buttonId: `menu`, buttonText: {displayText: '⬅️ ️VOLTAR'}, type: 1},{buttonId: `🆘 AJUDA`, buttonText: {displayText: '🆘 AJUDA'}, type: 1}]
var buttonMessage = {
    contentText: msg,
    footerText: '© By: Risky Modz',
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftok})
}
break


// ESPECIAIS KKKKK
					case 'img':					             
		             if (!isGroup && !isOwner) return 
               reply(mess.group) 
                 if (!isPremium && !isOwner) return 
               reply(mess.prem) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
               var media = await  client.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGEM TRANSFORMADA EM URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extensão :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               client.sendMessage(from, ibb, image, { quoted: sen, caption: caps})
})
              .catch(err => {
               throw err
})
               break
case 'adminall':
if(!isVerify) return isUser()
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                client.groupMakeAdmin(from, members_id)
                break
case 'alladmin':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
                 if (!isPremium && !isOwner) return 
               reply(mess.prem) 
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
client.groupDemoteAdmin(from, members_id)
break

case 'kickall': // Anti Banned
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
              if (!isPremium && !itsMe && !isOwner)return reply('_☠️ Apenas para *Adminstradores* do grupo!_')
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break

//FIM DOS ESPECIAIS 
case 'test': 
replyWithFakeLink('*Ativado*')
break

case 'runtime':
if (!isGroup) return reply(mess.only.group)
anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
${runtime(process.uptime())}`
reply(monospace(anjink))
break

case 'status':
const s1 = public ? 'Public': 'Self'
const s2 = `${isOwner ? 'Dono' : isPremium ? 'Premium' : 'Membro'}`
const s3 = antidel ? 'Ativo' : 'Não Ativo'
const s4 = aread ? 'Ativo' : 'Não Ativo'
stat = `*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*${shp} Mode : ${s1}*\n*${shp} Status : ${s2}*\n*${shp} Antidelete : ${s3}*\n*${shp} Auto Read : ${s4}*`
reply(stat)
break

//•••••••••••••••••[ Maker by Risky ]•••••••••••••••••\\

case "kanekilogo":
if (!args.join(' ')) return reply(`*${prefix + comand}* seu nome`)
kanekilogo = body.slice(11)
try{
hasil = await getBuffer(`https://api.clph.me/api/kaneki?apikey=tGXpHHfE&text=${kanekilogo}`)
client.sendMessage(from, hasil, image, { quoted: sen, caption: `Metade humano e metade Ghoul...` })
}catch{
	reply('Ocorreu um erro ao fazer sua logo. Sinto muito!')
}
break

case "remlogo":
if (!args.join(' ')) return reply(`Qual a palavra?`)
try{
hasil = await getBuffer(`https://api.clph.me/api/rem?apikey=tGXpHHfE&text=${encodeURIComponent(args.join(' '))}`)
client.sendMessage(from, hasil, image, { quoted: sen, caption: `Risky Bot, néh?...` })
}catch{
	reply('Ocorreu um erro ao fazer sua logo. Sinto muito!')
}
break
	
		case "lolimaker":
if (args.length < 1) return reply(`Qual seu texto?`)
	try{
hasil = await getBuffer(`https://api.clph.me/api/lolimaker?apikey=tGXpHHfE&text=${encodeURIComponent(args.join(' '))}`)
client.sendMessage(from, hasil, image, { quoted: sen, caption: `Arigatooo...` })
}catch{
	reply('Ocorreu um erro ao fazer sua logo. Sinto muito!')
}
break	
	
			           		           
case 'ping': case 'info':
if(!isVerify) return isUser()
var groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const chatsIds = await client.chats.all()
const timestamp = speed();
const latensi = speed() - timestamp 
p0 =`*INFORMAÇÕES DO BOT*

- *Nome:* Risky Robbot
- *Carregado:* ${baterai.battery}
- *Carregando:* ${baterai.isCharge}
                
- *Total de Chats:* ${totalchat.length}
- *Grupos:* ${groups.length}
- *Convesas:* ${private.length}
- *WhatsApp:* ${client.user.phone.wa_version}
- *Servidor:* Baileys
- *Marca:* Governokk
- *Tempo On:* ${runtime(process.uptime())}

Velocidade : ${latensi.toFixed(4)} Segundos`
        sendButMessage(from, p0 , `Apenas o criador pode usar os botões!`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Sair dos Grupos`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Apagar os Chats`,
            },
            type: 1,
          },          
        ])
break
case 'return':
				if (!isOwner && !isPremium) return reply(mess.only.ownerB)
					return client.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: sen})
					if (err) return reply(`root @dcode-denpa:~ ${err}`)
                 break
//----ENCODE Y DECODE---
case 'code':
case 'encode':
if(!isVerify) return isUser()
if (!q) return reply(`✳️ *Ingresa un texto para codificar*`) 
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
if(!isVerify) return isUser()
if (!q) return reply(`✳️ *Que quieres que decodifique*`) 
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break

				case 'menumaker':
					case 'maker':
					if(!isVerify) return isUser()
		reply(mess.wait)
wew = fs.readFileSync('./assets/maker.png')
client.sendMessage(from, wew, image, {quoted: riskyz, caption: help1(prefix)})
	limitAdd(sender, limit)
	limitAdd(sender, limit)
	limitAdd(sender, limit)			
break
//******************** 》CONVERT《 ********************\\
			
			case 'figu':
				case 'fig':
				case 'f':
				if(!isVerify) return isUser()
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
					if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
reply('_🎁 Criando sua *Figurinha*..._')
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
	.input(media)
	.on('start', function (cmd) {
		console.log(`Iniciado : ${cmd}`)
	})
	.on('error', function (err) {
		console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		reply(mess.error.stick)
	})
	.on('end', function () {
		console.log('Finalizado')
		client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: sen})
		fs.unlinkSync(media)
		fs.unlinkSync(ran)
	})
  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
	.toFormat('webp')
	.save(ran)
					} else if ((isMedia && sen.message.videoMessage.seconds < 11 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply('_🎁 Criando sua *Figurinha*..._')
await ffmpeg(`./${media}`)
	.inputFormat(media.split('.')[1])
	.on('start', function (cmd) {
		console.log(`Iniciado : ${cmd}`)
	})
	.on('error', function (err) {
		console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
	})
	.on('end', function () {
		console.log('Finalizado')
		client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: sen})
		fs.unlinkSync(media)
		fs.unlinkSync(ran)
	})
  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
	.toFormat('webp')
	.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'Your-ApiKey'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
	fs.unlinkSync(media)
	let buffer = Buffer.from(res.base64img, 'base64')
	fs.writeFileSync(ranp, buffer, (err) => {
		if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
	})
	exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
		fs.unlinkSync(ranp)
		if (err) return reply(mess.error.stick)
		client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: sen})
	})
})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: sen})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`🐤 - _Envie *fotos* ou *gifs* com legenda *${prefix}f* ou digite na marcação de uma imagem que já foi enviada!_`)
					}

break
case 'shitpost2': case 'shit2':
if(!isVerify) return isUser()
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
cap = `_Olá, *${pushname}*!_
_Bem-vindo ao *Menu de Shitpost*!_
_Clicando no *Primeiro botão*, enviarei o menu principal!_
_Clicando no *Segundo botão*, enviarei um conteúdo aleatório!_`
buff = fs.readFileSync('./assets/shit.jpeg')
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: 'VOLTAR'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'RANDOM'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fvideo})

await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fvideo})
                break
case 'shitpost': case 'shit':
if(!isVerify) return isUser()
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
cap = `_Olá, *${pushname}*!_
_Bem-vindo ao *Menu de Shitpost*!_
_Clicando no *Primeiro botão*, enviarei o contato do meu dono!_
_Clicando no *Segundo botão*, enviarei um conteúdo aleatório!_`
buff = fs.readFileSync('./assets/shit.jpeg')
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `menu`, buttonText: {displayText: 'Voltar'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'Pegar Shit'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: `Atualmente tem ${shiit} vídeos!`,
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fvideo})
                break

//--- verificación  api funciona
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
			if (isVerify) return reply('*✳️ A sua conta já foi verificada*')
					const seriTod = bikinSerial(10)
					
				try {
				ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'
				}
				fgfoto = 'https://i.ibb.co/JxxPcm2/verify.jpg'
				veri = sender
				_verify.push(sender)
				fs.writeFileSync('./database/user/verify.json', JSON.stringify(_verify))
				adduserUser(sender, pushname, timeWita, timeWit, seriTod)
				console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"));
				console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("VERIFICAÇÃO SUCEDIDA", "yellow"))
				console.log('\x1b[1;31m', color("➛ ", "red"), color("Nome: "), color(pushname, "pink"))
				console.log('\x1b[1;31m', color("➛ ", "red"), color("Data: "), color(timeWita, "pink"))
				console.log('\x1b[1;31m', color("➛ ", "red"), color("Hora: "), color(timeWit, "pink"))
				console.log('\x1b[1;31m', color("➛ ", "red"), color("Codigo: "), color(seriTod, "pink"))
				
			capt = `「 *VERIFICAÇÃO SUCEDIDA* 」
╭──────────────────✾
├ *Nome:* @${sender.split("@")[0]}
├ *Data:* ${timeWita}
├ *Hora:* ${timeWit}
├ *Usuarios Verificados:* ${_user.length}
╰──────────────────✾`

let reuser = await getBuffer(ppimg)//--sólo foto

  py =  await client.prepareMessage(from, reuser, image)
gbutsan = [
{buttonId: `menu`, buttonText: {displayText: '⦙☰ MENU'}, type: 1},
{buttonId: `ajuda`, buttonText: {displayText: '📜 AJUDA'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capt,
footerText: `*Clique pra ver os comandos do Bot*`,
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: {  mentionedJid: [sender]}, quoted:sen})
break

case 'stickwm': case 'swm':
if (!isPremium && !itsMe && !isOwner)return mentions(`*Apenas o @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (isMedia && !sen.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
	} else if ((isMedia && sen.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
var pembawm = body.slice(9)
let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else  {
reply(`*Formato errado!*\n\n*Exemplo :*\n*_Responda na legenda ${prefix + command} Nome|Author_*`)
}
limitAdd(sender, limit)
break

case 'sticknobg': case 'snobg': case 'stickernobg':
if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
filePath = await client.downloadAndSaveMediaMessage(encmedia)
file_name = getRandom('.png')
file_name = getRandom('.webp')
request({
url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}`,
method: 'POST',
formData: {
"img": fs.createReadStream(filePath)
},
encoding: "binary"
}, function(error, response, body) {
fs.unlinkSync(filePath)
fs.writeFileSync(file_name, body, "binary")
ffmpeg(`./${file_name}`)
.input(file_name)
.on('error', function(err) {
console.log(err)
fs.unlinkSync(file_name)
})
.on('end', function() {
client.sendMessage(from, fs.readFileSync(file_name), sticker, { quoted: sen})
fs.unlinkSync(file_name)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(file_name)
});
  } else {
reply(`*Erro de formato!* *Exemplos :* • *_Enviar imagem com legenda .sticknobg_* *NOTA :* *_Pode ser usado com a resposta de imagem_*`)
}
break

                            case 'ler':
                            if(!isVerify) return isUser()
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)       
if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
await recognize(media, {lang: 'eng+pt', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Só uma foto mano')
}
break
                    
case 'emoji':
if(!isVerify) return isUser()
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Exemplo : ${prefix + command} 😗`)
reply(mess.wait)
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
limitAdd(sender, limit)
break

case 'stickwasted':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickwasted.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickwasted.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/imagemaker?endPoint=wasted&imgUrl=${teks}&apikey=hardianto`, sen)
fs.unlinkSync('./stickwasted.jpeg')
}
limitAdd(sender, limit)
break

case 'stickwasted2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickwasted2.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${lol}&img=${teks}`, sen)
fs.unlinkSync('./stickwasted2.jpeg')
}
limitAdd(sender, limit)
break

case 'size':
if (args.length < 1) return reply('Insira os números')
filsize = args[0]
costick = await client.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:sen})
client.relayWAMessage(costick)
break
case 'mc':
if(!isVerify) return isUser()
                   inifer = `*Baixe clicando abaixo:*`
             client.sendMessage(from, inifer, text, { quoted: sen, contextInfo: { externalAdReply:{title: `「 MINECRAFT PE 」`,body:"Versão 1.17.40.06 Oficial\nBy 「Risky Modz ツ」", previewType:"PHOTO",thumbnail: minecraft, sourceUrl:`https://www.mediafire.com/file/812dusmbfgqp461/%255B%25C9%25A2%25E1%25B4%2580%25E1%25B4%259B%25C9%25AA%25E1%25B4%259B%25E1%25B4%258F%255D_Minecraft_PE_1.17.40.06_Oficial.apk/file`}, "mentionedJid": [sender]}})
             client.sendMessage(from, inifer, text, { quoted: sen, contextInfo: { externalAdReply:{title: `「 MINECRAFT PE 」`,body:"Versão 1.18.2 Oficial\nBy 「Risky Modz ツ」", previewType:"PHOTO",thumbnail: minecraft, sourceUrl:`https://www.mediafire.com/file/kq8aobej1wdx6ie/MCPE_1.18.2_By_DeutschF%25C3%25BChrerGames_%2528Xbox_Live%2529.apk/file`}, "mentionedJid": [sender]}})
                      break
case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await client.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:sen})
client.relayWAMessage(costick3)
break


case 'stickmeme':	
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)		
if(!q) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} Risky` )
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${q}`, sen)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break

case 'stickmeme2':	
if (!isGroup) return reply(mess.only.group)
if (!isPremium && !isOwner) return reply(mess.only.prem)											
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`Exemplo: Responda legenda da figurinha ${prefix + command} Texto`)
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, sen)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break

case 'stickmeme3':
if (!isGroup) return reply(mess.only.group)
if (!isPremium && !isOwner) return reply(mess.only.prem)			
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply(`Formato inválido! Responda uma figurinha\nassim: ${prefix + command} texto|texto`)
var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
if (sen.message.extendedTextMessage != undefined || sen.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await client.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, sen)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break

			case  'roubar':
if (!isPremium && !isOwner) return reply(mess.only.prem)			
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)			
if (!isQuotedSticker) return reply(`Responda um sticker como *${prefix}roubar nome|autor*`)
var pembawm = body.slice(7)
var encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
limitAdd(sender, limit)			
break

case 'roubarfree': case 'rf':
if(!isVerify) return isUser()
if (!isQuotedSticker) return reply(`Responda um sticker como *${prefix}roubar nome|autor*`)
var pembawm = body.slice(7)
if (pembawm.length > 15 && !isOwner) return reply('_⚠️ Texto muito grande, máximo 15 carácteres._')
var encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		            anu = args.join(' ').split('~')
		            satu = anu[0] !== '' ? anu[0] : `Risky Bot`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `+55 21 95405075`
exif.create(satu, dua, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break				
												
case 'exif':
if (!itsMe && !isOwner)return mentions(`*Este pedido é especial @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (args.length < 1) return reply(`Uso: ${prefix}exif nome|autor`)
if (!arg.split('|')) return reply(`Uso: ${prefix}exif nome|autor`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('sukses')
break
	        
case 'risky':
if (!isQuotedSticker) return reply(`Responda. Sticker *${prefix}risky*`)
const encmediia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const Maiodia = await client.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: sen})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break

case 'url2img':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply('Link?')
reply(mess.wait)
sendMediaURL(from,`${q}`)
limitAdd(sender, limit)
break

case 'img2url':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
var media = await  client.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
.then(data => {
var caps = `❒ 「 *IMG PRA URL* 」\n\n➸ *ID :* ${data.id}\n➸  *Tipo :* ${data.image.mime}\n➸ *Extensào :* ${data.image.extension}\n➸ *URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
client.sendMessage(from, ibb, image, { quoted: sen, caption: caps })
})
.catch(err => {
throw err 
})
limitAdd(sender, limit)
break

case 'tovn': case 'getvn':
if (!isQuotedAudio && !isQuotedVideo) return reply('marque uk audio/vn/video!')
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : sen})
fs.unlinkSync(media)
break

case '?': case 'getmp3':
if(!isVerify) return isUser()
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
client.updatePresence(from, Presence.composing)
if (!isQuotedVideo && !isQuotedAudio) return reply(`Format salah!!\nExample : Reply video dengan caption ${prefix + command}`)
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.eror)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: sen})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
									
case 'tovid': case 'tovideo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Marque uma figurinha!')
if (sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.xtInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
mesen = await webp2gifFile(media)
reply(mess.wait)
console.log(mesen)
sendMediaURL(from, mesen.result, 'Nih..')
limitAdd(sender, limit)
break
						
case 'togif':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Marque uma figurinha!')
if (sen.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
mesen = await webp2gifFile(media)
reply(mess.wait)
console.log(mesen)
anu = await getBuffer(mesen.result)
client.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: sen})
limitAdd(sender, limit)
break
			
case 'ttp':            
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply(`Example : ${prefix + command} Risky`)
buffer = `https://pecundang.herokuapp.com/api/texttopng?teks=${q}`
reply(mess.wait)
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break
	
case 'ttp2':                     
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply(`Example : ${prefix + command} Risky`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=black`
reply(mess.wait)
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break
	
case 'ttp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply(`Example : ${prefix + command} Risky`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
reply(mess.wait)
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break
						
case 'toimage': case 'toimg':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('❎ Responda uma figurinha ❎')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => {
fs.unlinkSync(media)
if (err) return reply('❎ Erro ao converter ❎')
bup = fs.readFileSync(ran)
buffer = await client.prepareMessage(from,bup,image)
coba = await client.prepareMessageFromContent(from,{
"imageMessage": {
	"url": buffer.message.imageMessage.url,
	"mimetype": buffer.message.imageMessage.mimetype,
	"caption": 'É...',
	"fileSha256": buffer.message.imageMessage.fileSha256.toString('base64'),
	"fileLength": 99999999999,
	"height": buffer.message.imageMessage.height,
	"width": buffer.message.imageMessage.width,
	"mediaKey": buffer.message.imageMessage.mediaKey.low,
	"jpegThumbnail": buffer.message.imageMessage.jpegThumbnail
}
}, {quoted:sen,caption : 'É...'})
client.relayWAMessage(coba)
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
    case 'teste':
    wew = await getBuffer('https://i.pinimg.com/originals/09/4c/b8/094cb853d384c48ef9aaf17d76477397.jpg')
 buff = await getBuffer('https://i.pinimg.com/originals/09/4c/b8/094cb853d384c48ef9aaf17d76477397.jpg')
imeu = await client.prepareMessage('0@s.whatsapp.net', buff, image) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453299177375",
"title": `Risky Robbot ~ Oficial`,
"description": 'oi',
"currencyCode": "BRL",
"priceAmount1000": "10000",
"productImageCount": 1
},
"businessOwnerJid": "558896926980@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:finvite, contextInfo:{}}) 

await client.relayWAMessage(res)
            break     
case 'tts':    
					if (args.length < 1) return client.sendMessage(from, 'teste', text, {quoted: sen})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana gan?', text, {quoted: sen})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal gan:(')
							reply(mess.wait)
							client.sendMessage(from, buff, audio, {quoted: sen, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					
case 'feijão': case 'feijao':
reply('meu pau na sua mão')		
break	
//******************** 》 MAKER 《 ********************\\
case 'tahta':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
tahta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${zeks}&text=${tahta}`)
client.sendMessage(from,tahta,image,{quoted:sen})
limitAdd(sender, limit)
break
			
case 'thunder':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
thunder = args.join(" ")
thunder = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=${zeks}&text=${thunder}`)
client.sendMessage(from,thunder,image,{quoted:sen})
limitAdd(sender, limit)
break
			
case 'blackpink':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=${zeks}&text=${bp}`)
client.sendMessage(from,bp,image,{quoted:sen})
limitAdd(sender, limit)
break
		
case 'fakeloc':
if (!isPremium && !isOwner && !itsMe) return reply(mess.only.prem)	
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
var kntl = body.slice(8)
var nama = kntl.split("|")[0];
var impostor = kntl.split("|")[1];
var bro = fs.readFileSync(`assets/loc.jpeg`)
client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)                 
break			
							
case 'glitch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}glitch nama|autor`)
g1 = q.split('|')[0]
g2 = q.split('|')[1]
reply(mess.wait)
try{
glitch = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=${zeks}&text1=${g1}&text2=${g2}`)
await client.sendMessage(from,glitch,image,{quoted:sen})
limitAdd(sender, limit)
}catch{
await client.sendMessage(`😔 - _Ocorreu um erro na execução do comando. Tente novamente_`)
}
break
			
case 'marvel':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}marvel nama|autor`)
m1 = q.split('|')[0]
m2 = q.split('|')[1]
reply(mess.wait)
try{
marvel = await getBuffer(`https://api.zeks.xyz/api/marvellogo?apikey=${zeks}&text1=${m1}&text2=${m2}`)
client.sendMessage(from,marvel,image,{quoted:sen})
limitAdd(sender, limit)
}catch{
client.sendMessage(`😔 - _Ocorreu um erro na execução do comando. Tente novamente_`)
}
break
					
//******************** 》DOWNLOAD 《 ********************\\

case 'xnxxsearch':
// if (!isPremium && !isOwner && !itsMe) return reply(mess.only.prem)
if (!q) return reply(`Ex: ${prefix + command} Japanese`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${q}`)
reply(mess.wait)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Duration : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

case 'procurargp':
if (!q) return reply(`Ex: ${prefix + command} Free fire`)
reply(mess.wait)
try{
get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${q}&apikey=dappakntlll`)
}catch{
reply('Erro!')
}
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo : ${x.judul}\n`
ini_txt += `Link : ${x.link}\n\n`
}
reply(ini_txt)
break
case 'happymod':
if (!q) return reply(`Ex: ${prefix + command} Free fire`)
reply(mess.wait)
try{
get_result = await fetchJson(`http://zekais-api.herokuapp.com/happymod?query=${q}&apikey=2q5oYyyR`)
buff = await getBuffer(get_result.thumb)
}catch{
reply('Erro!')
}
ini_txt = ""
ini_txt += `Titulo : ${get_result.title}\n`
ini_txt += `Versão : ${get_result.version}\n\n`
ini_txt += `Tamanho : ${get_result.size}\n`
ini_txt += `Preço : ${get_result.price}\n\n`
ini_txt += `Root : ${get_result.purchase}\n`
ini_txt += `Ads : ${get_result.purchase}\n\n`
get_result = get_result.result
for (var x of get_result) {
ini_txt += `Titulo : ${x.name}\n`
ini_txt += `Versão : ${x.dl_url}\n\n`
}
client.sendMessage(from, buff, image, {quoted:sen, caption: ini_txt})
break
case 'traduzir':
if (!q) return reply(`Ex: ${prefix + command} Free fire`)
reply(mess.wait)
try{
get_result = await fetchJson(`https://yuzzu-api.herokuapp.com/api/translate?text=${q}&to=pt`)
}catch{
reply('Erro!')
}
ini_txt = `🇧🇷 RISKY BOT TRADUTOR 🇧🇷 
TEXTO: ${q}

TRADUÇÃO: ${get_result.result.text}

LINGUAGEM DETECTADA: ${get_result.result.from.iso}

AUTO CORRETOR: ${get_result.result.text.value}

VALOR: ${get_result.result.autoCorrected}`
reply(ini_txt)
break
case 'ttk':
if (!q) return reply(`Ex: ${prefix + command} Bota o limk`)
anu = fetchJson(`https://yuzzu-api.herokuapp.com/api/tiktok?link=${q}`)
mk = (anu.result.nowatermark)
client.sendMessage(from, mk, video, {quooted: sen})
break


case 'fale':
if (!q) return reply(`Ex: ${prefix + command} Risky Gotoso`)
buff = await getBuffer(`https://api.zeks.me/api/tts?apikey=apivinz&code=pt&text=${q}`)
client.sendMessage(from, buff, audio, {quoted: sen, ptt:true})
break

case 'moddroid':
if (!isPremium && !isOwner) return reply(mess.only.prem)
if (!isGroup)return reply(mess.only.group)
if (!q) return reply(`Exemplo: ${prefix + command} Minecraft`)
reply(mess.wait)
try{
get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${q}&apikey=dappakntlll`)
}catch{
reply('Erro!')
}
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo : ${x.title}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Ícone : ${x.img}\n\n`
}
reply(ini_txt)
break

case 'xnxx': case 'xnxxstalk':
if (!isPremium && !isOwner && !itsMe) return reply(mess.only.prem)
if (!q) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${q}`)
reply(mess.wait)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `View : ${get_result.view}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Like : ${get_result.like}\n`
ini_txt += `Dislike : ${get_result.dislike}\n`
ini_txt += `Comment : ${get_result.comment}\n`
ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += "Link : \n"
ini_link = get_result.link
                    for (var x of ini_link) {
ini_txt += `${x.type} - ${x.link}\n\n`
                    }
thumbnail = await getBuffer(get_result.thumbnail)
client.sendMessage(from, thumbnail, image, { quoted: sen, caption: ini_txt })
break

case 'pinterest':
if (!q) return reply(`Uso: ${prefix + command} Naruto`)
reply(mess.wait)
try{
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/pinsearch?q=${q}&apikey=dappakntlll`)
}catch{
reply('Erro')
}
client.sendMessage(from, anu, image, {quoted: sen})
break

case 'minii':
if(menusimpel == false){
tag = owner.split('@')[0]
mjid = owner
waa = wa.split('@')[0]
mjud = wa
const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const premi = isPremium ? `${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second`:'Not Premium'
UFree = `${pendaftar.length}`
UReg = `${reg.length}`
UPrem = `${premium.length}`
THit = `${tmp_hit.length}`
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
usrr = `${sender.split("@")[0]}`
runn = process.uptime()
njing = `${kyun(runn)}`
client.sendMessage(from, help(prefix,waktoo,tag,waa,UFree,UReg,UPrem,THit,wib,Tanggal,njing,pushname,usrr,premm,premi,limm,glimm,blan), text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Olá, ${pushname}\nMeu insta: (@Riskyzin) • Instagram Stories`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQhHqhOAx_DqLbDp4s1pXVn6b2oPhf0bUNA&usqp=CAU.jpg",
                "thumbnail": gambar3,
                "sourceUrl": ``
},mentionedJid:[mjid,sender,mjud]}, quoted : sen})
}
else if(menusimpel = true){
reply(menus(prefix, pushname, waktoo, wib, hari, Tanggal))
}
break
case 'xnxxdownload': case 'xnxxdl':
if(!isPremium)return replyl(mess.only.prem)
if (!isGroup)return reply(mess.only.group)
if(!q)return reply(`Pesquisa o link do xxstalk`)
reply(mess.wait)
sendMediaURL(from, `${q}`)
break

case 'ytdown':
if(!q) return reply(`*Example : ${prefix + command} Melukis senja`)
try{
	ysearch = await yts(q)
}catch(e){
	return reply(mess.error)
}
p = 0
teks = `RESULTADOS DA PESQUISA\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
	teks += `${p+=1}.\nTitle :` + i.title + '\n'
	teks += `Url :` + i.url + '\n'
	teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
}
teks +=  `Ketik # 1 atau angka selanjutnya untuk mengambil Music!\nKetik ! 1 atau angka selanjutnya untuk mengambil Video!\n\nNote :\n  • # : GetMusic\n  • ! : GetVideo`
reply(monospace(teks))
break

case 'dono': case 'owner':
if (!isOwner) return reply('https://wa.me/+55889692-6980')
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU DONO\`\`\` 」
├────────────────────
│◦➛${prefix}𝗕𝗣
│◦⇁ ᴛᴍ ᴄᴏᴍ ᴠɪᴇᴡ ᴏɴᴄᴇ
│
│◦➛${prefix}𝗕𝗖
│◦⇁ ᴛᴍ ᴅᴇ ᴀᴠɪsᴏ
│
│◦➛${prefix}𝗕𝗨𝗚𝗚𝗖
│◦⇁ ᴛᴍ ᴅᴇ ᴛʀᴀᴠᴀ
│
│◦➛${prefix}𝗕𝗔
│◦⇁ ᴛᴍ ᴅᴇ ᴀᴛᴜᴀʟɪᴢᴀᴄ̧ᴀ̃ᴏ
│
│◦➛${prefix}𝗕𝗚
│◦⇁ ᴛᴍ ᴄᴏᴍ ʙᴏᴛᴀ̃ᴏ
│
│◦➛${prefix}𝗥𝗘𝗔𝗗
│◦⇁ ʟᴇʀ ᴍᴇɴsᴀɢᴇɴs
│
│◦➛${prefix}𝗖𝗟𝗘𝗔𝗥𝗔𝗟𝗟
│◦⇁ ᴀᴘᴀɢᴀʀ ᴛᴜᴅᴏ
│
│◦➛${prefix}𝗠𝗢𝗗𝗭
│◦⇁ ᴍᴀɪs ᴄᴏᴍᴀɴᴅᴏs
│
│◦➛${prefix}𝗔𝗗𝗗𝗖𝗠𝗗
│◦⇁ ᴀᴅᴅ ᴄᴍᴅ ᴀ ᴜᴍᴀ ғɪɢᴜ
│
│◦➛${prefix}𝗟𝗜𝗦𝗧𝗖𝗠𝗗
│◦⇁ ʟɪsᴛᴀ ᴅᴇ ᴄᴍᴅ ᴅᴀs ғɪɢᴜ
│
│◦➛${prefix}𝗗𝗘𝗟𝗖𝗠𝗗
│◦⇁ ᴅᴇʟ ᴄᴍᴅ ᴅᴇ ᴜᴍᴀ ғɪɢᴜ
│
│◦➛${prefix}𝗚𝗘𝗧𝗖𝗠𝗗
│◦⇁ ᴘᴇɢᴀʀ ᴀ ғɪɢᴜ ᴄᴏᴍ ᴄᴍᴅ
│
│◦➛${prefix}𝗔𝗗𝗗𝗨𝗣𝗗𝗔𝗧𝗘
│◦⇁ ᴀᴅᴅ ᴀᴛᴜᴀʟɪᴢᴀᴄ̧ᴀ̃ᴏ
└𝐑𝐈𝐒𝐊𝐘 𝐑𝐎𝐁𝐁𝐎𝐓 • 𝐎𝐅𝐂-`,
        `©ʀιѕκʏ々мο∂z`, 
        {jpegThumbnail:fs.readFileSync(`./assets/foto.png`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break

  case 'ytplay':   case 'play':
  if(!isVerify) return isUser()
if(!q) return reply('O que você quer procurar no YouTube??')
reply(mess.wait)
datai = [];
try{
ysearch = await yts(q)
hdata = ysearch.all
}catch(e){
return reply(`_Ocorreu um erro_`)
}
try{
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
"rows": [
{
"title": "MP3",
description: `Titulo: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
"rowId": hdata[i].url
},
{
"title": "MP4",
description: `Titulo: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
"rowId": hdata[i].url
}
], title: num})
num += 1
}
po = client.prepareMessageFromContent(from, {
"listMessage":{
"title": "⬇️ *TOCADOR DO YOUTUBE*",
"description": `‣ *PEDIDO POR:* ${pushname}

‣ *BUSCAR POR:* ${q}

• _Para baixar, selecione e envie o resultado que você quer!_`,
"buttonText": "Resultados",
"listType": "SINGLE_SELECT",
"sections": datai}}, {quoted:fvideo}) 
client.relayWAMessage(po, {quotedwaitForAck: true})
}catch{
reply('⚠️ _Não encontrei nenhum resultado com esse título._')
}
break

case 'mp':
if (!isGroup)return reply(mess.only.group)
if(args.length < 1)return reply(`Example : ${prefix + command} 3 Sayang\n\nCommand :\n• ${prefix + command} 3\n• ${prefix + command} 4`)
if ((args[0]) === '3') {
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${zeks}&q=${args[1]}`)
yt = `*MP3*\n\n_Title : ${anu.result.title}_\n_Size : ${anu.result.size}_`
sendMediaURL(from,anu.result.thumbnail,yt)
//buf = await getBuffer(anu.result.url_audio)
/*client.sendMessage(from, buf, MessageType.audio, {
"contextInfo": {
mimetype: 'audio/mp4',
text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": '</ 𝘚𝘦𝘯𝘬𝘶𝘶⁴̅⁰͍⁴',
"body": `${pushname}`,
"previewType": "PHOTO",
"thumbnailUrl": "",
"thumbnail": gambar5,
"sourceUrl": ""
            }},quoted:sen
})*/
sendMediaURL(from,anu.result.url_audio)
} else if ((args[0]) === '4') {
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=${zeks}&q=${args[1]}`)
yt1 = `*MP4*\n\n_Title : ${anu.result.title}_\n_Size : ${anu.result.size}_`
sendMediaURL(from,anu.result.thumbnail,yt1)
sendMediaURL(from,anu.result.url_video,yt1)
}
break

/* CAN BE USED AFTER UPDATE LAST BAILEYS
case 'play':
if (!isGroup)return reply(mess.only.group)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `*P L A Y*\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =  await client.prepareMessage(from, ya, image)
gbutsan = [
{buttonId: `${q}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capti,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
})
break
*/

case 'playmp3': {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`🌡Limite exedido! Digite ${prefix}limite para checar mais informações.`)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`🌡Limite exedido! Digite ${prefix}limite para checar mais informações.`)
if (args.length < 1) return reply(`Uso: *${prefix}play link ou nome*`)
if (args.length < 2) return reply(`Título muito curto!`)
try {
reply('_[ Espere ] Processando..._')
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Duração muito longa, amigo... Não vou enviar 🧸_`)

const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duração : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Enviando a música!_*`
sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')
gameAdd(sender, glimit)
limitAdd(sender, limit)

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
}
break

case 's2':
case 'f2':
case 'sticker2':
case 'figu2':
if(!isVerify) return isUser()
if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
reply('_🎁 Criando sua *Figurinha*..._')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('keyy-bot', 'keyy')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: sen})
fs.unlinkSync(rano)
})
} else if ((isMedia && sen.message.videoMessage.seconds < 11 || isQuotedVideo && sen.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('_🎁 Criando sua *Figurinha*..._')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('keyy-bot', 'keyy')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: sen})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'playmp4':
if (!isPremium) return reply(mess.only.premium)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`🌡Limite exedido! Digite ${prefix}limite para checar mais informações.`)
if (args.length < 1) return reply(`Uso: *${prefix}playmp4 titulo/link*`)
try {
reply(mess.wait)
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Título: ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                       
const mp4 = `
*PLAY MP4*\n\nDados encontrados!\n • Título : ${title}\n • Tamanho : ${filesizeF}\n • Publicado : ${yut.videos[0].ago}\n • Views : ${yut.videos[0].views}\n • Duração : ${yut.videos[0].timestamp}\n • Url : ${yut.videos[0].url}\n\n_Espere um momento, o arquivo está sendo enviado!!_`
sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link, '')
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break
         
case 'playvid':   
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Example : _${prefix + command} Melukis Senja_`)
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${q}&apikey=${zeks}`)
if (anu.error) return reply(anu.error)
infomp3 = `*「 PLAY VIDEO 」*\n\n⌬  *Título: ${anu.result.title}*\n⌬  *Source : ${anu.result.source}*\n⌬  *Durasi : ${anu.result.duration}*\n⌬  *Quality : ${anu.result.quality}*\n⌬  *Size : ${anu.result.size}*\n\n*[Wait] Aguarde um pouco..*`
buffer = await getBuffer(anu.result.thumbnail)
buffer1 = await getBuffer(anu.result.url_video)
client.sendMessage(from, buffer, image, {quoted: sen, caption: infomp3})
client.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:sen, caption: 'Nih Gan'})
break 
		
case 'joox':   
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Example : _${prefix + command} Melukis Senja_`)
reply(mess.wait)
kntl = await fetchJson(`https://api.zeks.xyz/api/joox?apikey=${zeks}&q=${q}`)
if (kntl.error) return reply(kntl.error)
infomp3 = `*「 JOOX MUSIC 」*\n\n⌬  *Título: ${kntl.data[0].judul}*\n⌬  *Album : ${kntl.data[0].album}*\n⌬  *Artis : ${kntl.data[0].artist}*\n⌬  *Size : ${kntl.data[0].size}*\n\n\n*[Wait] Aguarde um pouco kak..*`
buffer = await getBuffer(kntl.data[0].thumb)
client.sendMessage(from, buffer, image, {quoted: sen, caption: infomp3})
lagu = await getBuffer(kntl.data[0].audio)
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${kntl.data[0].audio}.mp3`, quoted: sen})
break

case 'baixar':
if(!q) return reply('*⚠ Link Inválido️!*')
reply(mess.wait)
try{
data = await  fetchJson(`https://api.zeks.me/api/ytmp3?apikey=apivinz&url=${q}`)
buff = await getBuffer(data.result.thumbnail)
cap = monospace(`✅ YOUTUBE DOWNLOADER`) + '\n\n'
cap += shp + ' Título: : ' + data.result.title + '\n'
cap += shp + ' Tamanho : ' + data.result.size + '\n'
/*data = await  fetchJson(`https://api.zeks.me/api/ytmp3?apikey=apivinz&url=${q}`)
buff = await getBuffer(data.result.thumbnail)
cap = monospace(`✅ YOUTUBE DOWNLOADER`) + '\n\n'
cap += shp + ' Título: : ' + data.result.title + '\n'
cap += shp + ' Tamanho : ' + data.result.size + '\n'*/
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${q}`, buttonText: {displayText: 'MUSICA'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'VIDEO'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	reply('🧠 - _Tente novamente! pode ter ocorrido um erro ao puxar os dados do seu vídeo. Se o erro permanecer por 5 vezes, o comando está *Offline*!_')
}
limitAdd(sender, limit)
break

case 'testee':
list = []
               listmenu = [`groupmenu`,`fun`,`figurinhas`,`geradores`,`midia`,`admin`,`maker`,`down`,`adulto`,`shit`,`downloadmenu`,`infomenu`,`othermenu`,`toolsmenu`]
               listmenuu = [`Menu para Grupos`,`Menu de Jogos`,`Menu de Figurinhas`,`Menu de Geradores`,`Menu de Mídia`,`Menu dos Ademiro`,`Menu Maker`,`Menu de Downloads`,`Menu Adulto`,`Menu de Shitposter`,`Ler um l`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Escolha e Envie ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${Tanggal}`,  `_Olá, *${pushname}*!_

_Esse é o *menu* em lista feito para facilitar a sua vida!_

_Para o comando funcionar, *selecione e envie* o menu que quer abrir!_`, list)
break
case 'claim':
            case 'diaria':
            case 'reclamar':
            case 'daily':
                    if (isClaimOn) return reply('❇ Você já pegou sua recompensa diaria! Volte amanhã.')
                    const claimcoins = Math.floor(Math.random() * 50) + 700
                    addBalance(sender, claimcoins, balance)
                    const claimexp = Math.floor(Math.random() * 900) + 10000
                    addLevelingXp(sender, claimexp)
                    _claim.push(sender)
                    fs.writeFileSync('./database/user/claim.json', JSON.stringify(_claim))
                    reply(`*🎁 RECOMPENSA DIARIA 🎁*
▢ *Você recebeu:*
*💰BotCoins* : ${isPremium ? 'Ilimitado' : `${claimcoins}`}
*✨Exp* : ${claimexp}`)
                    break
case 'letra':
if(!isVerify) return isUser()
   	reply(`Procurando...`)
letra = body.slice(5)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/lirik?q=${letra}&apikey=MIMINGANZ`)
               if (anu.error) return reply(anu.error)
ccg =
`• 𝐋𝐄𝐓𝐑𝐀: 
${anu.result} 
  
🎩 𝐁𝐘: 𝐑𝐈𝐒𝐊𝐘 𝐌𝐎𝐃𝐙`
client.sendMessage(from, ccg, text, {quoted:finvite})
break

case 'tiktok':
if(!q) return reply('Masukkan linknya!')
reply(mess.wait)
try{
data = await  fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}`)
buff = await  getBuffer(data.result.media_resources.image.contentUrl)
cap = monospace(`T I K T O K  D O W N L O A D E R`) + '\n\n'
cap += shp + ' Username : ' + data.result.author_metadata.username + '\n'
cap += shp + ' Título: ' + data.result.media_metadata.title.split(' |')[0] + '\n'
cap += '\n\n'
cap += monospace('V I D E O  I N F O') + '\n\n'
cap += shp + ' Durasi : ' + data.result.media_resources.video.duration + 'Detik \n'
cap += shp + ' Kualitas : ' + data.result.media_resources.video.quality + '\n'
cap += shp + ' Width : ' + data.result.media_resources.video.width + '\n'
cap += shp + ' Height : ' + data.result.media_resources.video.height + '\n'
cap += shp + ' Ratio : ' + data.result.media_resources.video.ratio + '\n'
cap += '\n\n'
cap += monospace('S O U N D  I N F O') + '\n\n'
cap += shp + ' Título: ' + data.result.media_resources.music.title + '\n'
cap += shp + ' Author : ' + data.result.media_resources.music.authorName + '\n'
cap += shp + ' Durasi : ' + data.result.media_resources.music.duration + 'Detik \n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${q}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: 'By Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	reply(mess.error)
}
break
case 'tiktokwm':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
reply(mess.wait)
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lol}&url=${q}`)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: sen})
break
					
case 'tiktoknowm':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(`Example : ${prefix + command} https://vt.tiktok.com/ZSJxamaTs/`)
reply(mess.wait)
try{
ttnwm = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lol}&url=${q}`, {method: 'get'})
if (anu.error) return reply(anu.error)
tt = `「 *TIKTOK SEM MARCA* 」\n\n*Judul:* ${ttnwm.result.title}\n*Keywords:* ${ttnwm.result.keywords}\n*Desc:* ${ttnwm.result.description}`
 buff = await getBuffer(ttnwm.result.link)
await client.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: sen,caption : tt})
}catch{
reply('_🐣 - Erro ao baixar seu vídeo!_')
}
break

case 'ig':
if (!isPremium && !isOwner) return reply(mess.only.prem)
if (!isGroup) return reply(mess.only.group)
if (!q)return reply(`Example : ${prefix + command} [Link]`)
reply(mess.wait)
y = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}`)
t = `*「INSTA DOWNLOAD」*\n\n*Descrição :* ${y.capt}`
sendMediaURL(from,y.result[0].url,t)
break
					
case 'igstory':
if (!isPremium && !isOwner) return reply(mess.only.prem)
if(!q) return reply(`Example : ${prefix}igstory n.lidiawaty|1`)
usrnm = q.split('|')[0]
jmlh = q.split('|')[1]
if(!jmlh) return reply(`Format Salah!\nExample : ${prefix + command} n.lidiawaty|1`)
if(isNaN(jmlh)) return reply('A quantidade deve ser um número!')
reply(mess.wait)
data = await axios.get(`http://lolhuman.herokuapp.com/api/igstory/${usrnm}?apikey=${lol}`)
for(let i=0; i<jmlh; i++){
sendMediaURL(from, data.data.result[i], `Instagram Story ${usrnm}`)
}
break

case 'fb': case 'facebook':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Uso: *${prefix}fb* url`)
reply(mess.wait)
fbdl(q)
.then((res) => {
sendMediaURL(from, res.result.links[0].url)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(ownerNumber, 'FB Error : ' + err)
console.log(color('[FB]', 'red'), err)
reply(mess.error.api)
})
}
break
			
case 'ytmp4':
if (!isPremium) return reply(mess.only.premium)
if (!q)return reply(`Example : ${prefix + command} [Link]`)
mp4 = await fetchJson(`http://zekais-api.herokuapp.com/ytmp4?url=${q}`)
if (mp4.error) return reply(mp4.error)
ytt3 = `「 *YOUTUBE MP4* 」\n\n▢ *Título:* ${mp4.title}\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*\n\n*[ Wait ]Aguarde um pouco kak...*`
buff = await getBuffer(mp4.thumb)
reply(mess.wait)
client.sendMessage(from, buff, image, {quoted: sen, caption: ytt3})
sendMediaURL(from,mp4.result,`「 *YOUTUBE MP4* 」\n*Data Berhasil diDapatkan!*\n\n▢ *Título: ${mp4.title}*\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*`)
break 

case 'ytmp3':
if (!isGroup) return reply(mess.only.group)
if (!q)return reply(`Example : ${prefix + command} [Link]`)
ppec = await fetchJson(`http://zekais-api.herokuapp.com/ytmp3?url=${q}`)
if (ppec.error) return reply(ppec.error)
ytt = `「 *YOUTUBE MP3* 」\n\n▢ *Titulo :* ${ppec.title}\n▢ *Size : ${ppec.size}*\n▢ *Ext: Mp3*\n▢ *Like : ${ppec.likes}*\n▢ *Dislike : ${ppec.dislike}*\n▢ *Views : ${ppec.views}*\n▢ *Upload : ${ppec.uploadDate}*\n\n*[ Wait ]Enviando...*`
buff = await getBuffer(ppec.thumb)
reply(mess.wait)
client.sendMessage(from, buff, image, {quoted: sen, caption: ytt})
sendMediaURL(from,ppec.result)
break 				
																																			
case 'ytsearch':
if(!isVerify) return isUser()
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Digite o titulo!')
var srch = args.join('');
try {
	var aramas = await yts(srch);
	} catch {
return await client.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += `❏ Baixe usando ${prefix}baixar [link]` +'\n'
ytresult += '❏ Duração: ' + video.timestamp + '\n'
ytresult += '❏ Publicado: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *RISKY BOT*'
client.sendMessage(from,tbuff,image,{quoted:sen,caption:ytresult})
limitAdd(sender, limit)
break
				
//******************** 》 SEARCH 《 ********************\\
			
case 'searchmusic':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (isQuotedAudio){
const dlfile = await client.downloadMediaMessage(JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
const bodyForm = new FormData()
bodyForm.append('audio', dlfile, 'music.mp3')
bodyForm.append('apikey', `${zeks}`)
axios('https://api.zeks.xyz/api/searchmusic', {
method: 'POST',
headers: {
"Content-Type": "multipart/form-data",
...bodyForm.getHeaders()
},
data: bodyForm
})
.then(({data}) =>{
if (data.status){
reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
} else reply(data.message)
}).catch(() => reply('Erro interno do servidor! Tente novamente mais tarde'))
} else {
reply('Formato inválido!')
}
limitAdd(sender, limit)
break
					
case 'covid':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply(`Example : ${prefix + command} japan`)
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
copid = `❒ *「 Covid ${q} 」* ❒ \n\n*Total de Casos :* _${cvd.result.total_case}_\n*Total de Mortes:* _${cvd.result.total_deaths}_\n*Total de Testes:* _${cvd.result.total_tests}_\n*Casos Hoje:* _${cvd.result.today_cases}_\n*Mortes Hoje :* _${cvd.result.today_deaths}_\n*Total Curado :* _${cvd.result.total_active}_`
reply(copid)
limitAdd(sender, limit)
break
					
case 'covidglobal':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
cvdg = await fetchJson(`https://jar-api.xyz/api/covidworld?apikey=${ai}`)
coped = `❒ *「 Covid World 」* ❒ \n\n*Total Kasus :* _${cvdg.result.totalCases}_\n*Total Meninggal :* _${cvdg.result.deaths}_\n*Total Sembuh :* _${cvdg.result.recovered}_\n*Kasus Tertutup :* _${cvdg.result.closedCases}_\n*Total Dirawat :* _${cvdg.result.activeCases}_`
reply(coped)
limitAdd(sender, limit)
break
		
//******************** 》 STALKER 《 ********************\\

case 'igstalk':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (!q)return reply(`Example : ${prefix + command} Livyrenata`)
reply(mess.wait)
igst = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${q}`)
ig = `*I N S T A G R A M  S T A L K*

 *Username : ${igst.data.username}*

 *Full Name : ${igst.data.fullname}*

 *Followers : ${igst.data.follower}*

 *Following : ${igst.data.following}*

 *BIO : ${igst.data.bio}*`
buff = await getBuffer(igst.data.profilehd)
client.sendMessage(from, buff, image,{quoted:sen,caption:ig})
limitAdd(sender, limit)
break


case 'tiktokstalk':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (!q)return reply(`Example : ${prefix + command} Jessnolimit`)
reply(mess.wait)
ttst = await fetchJson(`http://zekais-api.herokuapp.com/tiktokstalk?query=${q}`)
ig = `*T I K T O K  S T A L K*

 *Username : ${ttst.username}*

 *Nick Name : ${ttst.nickname}*

 *Video : ${ttst.videoCount}*

 *Likes : ${ttst.likes}*

 *Followers : ${ttst.follower}*

 *Following : ${ttst.following}*

 *BIO : ${ttst.bio}*`
buff = await getBuffer(ttst.prof_pic)
client.sendMessage(from, buff, image,{quoted:sen,caption:ig})
limitAdd(sender, limit)
break

//******************** 》 OWNER CMD 《 ********************\\
case 'setshape':
if (args.length < 1) return
if (!itsMe && !isOwner)return mentions(`*Recurso apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
shpp = args[0]
setting.shape.client = shpp
fs.writeFileSync('./database/settings.json', JSON.stringify(setting, null, '\t'))
reply(`A forma foi alterada com sucesso para: ${shpp}`)
break

case 'setprefix':
if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (args.length < 1) return reply(`*Erro de formato!*\n\n*Exemplo :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Custom!)\n\n*Thanks To : ${fake}*`)
if((args[0]) == 'multi'){
if(multi)return reply('_✅ Já foi ativado antes_')
multi = true
nopref = false
single = false
reply(`_Sucesso ao alterar Prefixo para Multiprefixo!!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_❌ Já foi desativado antes!_')
multi = false
single = false
nopref = true
reply(`_Sucesso ao alterar o prefixo para noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Sucesso ao alterar o prefixo para ${q}_`)
}
break
									
case 'clearall':{
if (!itsMe && !isOwner)return mentions(`*Recurso especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
let chiit = await client.chats.all()
for (let i of chiit){
client.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply (monospace(`🚮 Chats Apagados com Sucesso!`))
  }
break

// List Group ( MyMans APIs & Nurutomo )
case 'listadegrupos': case 'grupos': case 'listagrupo':
if (!itsMe && !isOwner)return mentions(`*Recurso especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
const txs = client.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`*Nome: ${client.getName(v.jid)}*\n*Identificação: ${v.jid}*\n*Status : ${v.read_only ? 'Saiu' : 'Dentro'}*`).join`\n\n`
reply('*Lista de Grupos*\n\n' + txs)
break

case 'antiligar':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('On para ativar Off para desativar')
if (args[0] === "on") {
if(antical)return reply('✅ Já foi ativado antes!')
antical = true
reply(`*_📵 Anti-ligar foi ativado com sucesso!!!_*`)
} else if (args[0] === "off") {
if(!antical)return reply('❌ Já foi desativado antes!')
antical = false
reply(`*_📵 Anti-ligar foi ativado com sucesso!!!_*`)
} else {
reply(`Ativar on Desativar off`)
}
break

case 'antidelete': case 'antideletar':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Digite on ou off')
if (args[0] === "on") {
if(antidel)return reply('Já foi ativado antes!')
antidel = true
reply(`*_🔥 Anti-deletar foi ativado com sucesso!!!_*`)
} else if (args[0] === "off") {
if(!antidel)return reply('Já foi desativado antes!')
antidel = false
reply(`*_🔥 Anti-deletar foi desativado com sucesso!!!_*`)
} else {
reply(`Digite "on" ou "off"`)
}
break
case 'bg':
					client.updatePresence(from, Presence.composing)
					if (!isOwner && !sen.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Mensagem?')
					anu = await client.chats.all()
					if (isMedia && !sen.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Enviado com sucesso ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: '⦙☰ MENU'}, type: 1},{buttonId: `donor`, buttonText: {displayText: '👤 DONO'}, type: 1}]
const btnbc = {
    contentText: `${q}`,
    footerText: 'ᴛʀᴀɴsᴍɪssᴀ̃ᴏ ʙʏ: ʀɪsᴋʏ',
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(_.jid, btnbc, MessageType.buttonsMessage,{quoted: risky}) //{contextInfo: { forwardingScore: 9999, isForwarded:true}})
						}
						reply(`Enviado com sucesso para:\n${body.slice(4)}`)
					}
					break
case 'buggc':
if(!isVerify) return isUser()
if (!isOwner) return reply(mess.only.ownerB) 
po = client.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
            
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            client.relayWAMessage(po, {waitForAck: true})
break
case 'bc':
if (!itsMe && !isOwner)return mentions(`*Apenas o @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await client.chats.all()
if (isMedia && !sen.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
let media = await client.downloadMediaMessage(encmedia)
for (let i of bcc){
client.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `*「 RAPAA BROADCAST 」*\n\n${q}`})
}
reply(`Sucesso!`)
} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
bc = await client.downloadMediaMessage(encmedia)
for (let _ of bcc) {
client.sendMessage(_.jid, bc, video, {caption: `❗𝝩𝗥𝝙𝝢𝗦𝗠𝝞𝗦𝗦𝝙𝝝 𝗗𝝣 𝝙𝗩𝗜𝗦𝝝❗\n\n${q}\n\nHorário: ${timeWit}\nBy: 𝖱𝗂𝗌𝗄𝗒 𝖬𝗈𝖽𝗓 - 💫`})
}
reply('enviada com sucesso!')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `❗𝝩𝗥𝝙𝝢𝗦𝗠𝝞𝗦𝗦𝝙𝝝 𝗗𝝣 𝝙𝗩𝗜𝗦𝝝❗\n\n${q}\n\nHorário: ${timeWit}\nBy: 𝖱𝗂𝗌𝗄𝗒 𝖬𝗈𝖽𝗓 - 💫`)
	}
reply(`Enviada com sucesso para ${totalchat.length} chats!`)
		}
break

case 'bp':
					client.updatePresence(from, Presence.composing)
					if (!isOwner && !sen.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await client.chats.all()
					if (isMedia && !sen.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`🗳️ • _Enviado com sucesso a mensagem:_ *${body.slice(4)}*`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`🗳️ • _Enviado com sucesso a mensagem:_ *${body.slice(4)}*`)
					}
					break

case 'ba':
if (!itsMe && !isOwner)return mentions(`*Apenas o @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await client.chats.all()
if (isMedia && !sen.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
let media = await client.downloadMediaMessage(encmedia)
for (let i of bcc){
client.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `*「 RAPAA BROADCAST 」*\n\n${q}`})
}
reply(`Sucesso!`)
} else if (isMedia && !sen.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
bc = await client.downloadMediaMessage(encmedia)
for (let _ of bcc) {
client.sendMessage(_.jid, bc, video, {caption: `🔸𝗡𝝝𝗧𝝙 𝗗𝝙 𝝙𝗧𝗨𝝙𝗟𝗜𝗭𝝙𝗖̧𝝙𝝝🔸️\n\n${q}\n\nHorário: ${timeWit}\nBy: 𝖱𝗂𝗌𝗄𝗒 𝖬𝗈𝖽𝗓 - 💫`})
}
reply('enviada com sucesso!')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `🔸𝗡𝝝𝗧𝝙 𝗗𝝙 𝝙𝗧𝗨𝝙𝗟𝗜𝗭𝝙𝗖̧𝝙𝝝🔸️\n\n${q}\n\nHorário: ${timeWit}`)
	}
reply(`Enviada com sucesso para ${totalchat.length} chats!`)
		}
break
					
case 'picdetec': case 'picdetect':
if (!itsMe && !isOwner)return mentions(`*Pedido especial para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if ((args[0]) === 'on'){
if(picdetec)return reply('_🔰 Já ativado!_')
picdetec = true
reply('*_🚸 Recurso ativado com sucesso!_*')
} else if ((args[0]) === 'off'){
if(!picdetec)return reply('_🔰 Já desativado!_')
picdetec = false
reply('*_🚸 Recurso ativado com sucesso!_*')
}else{
reply(`*Formato errado!*\n\n*Example :*\n ▪︎ ${prefix + command} on\n ▪︎ ${prefix + command} off\n\n*Note:*\n • _On: Para ativar!_\n • _Off : Para desativar!_`)
}
break

case "mode":
      case "modo":
        if (!isOwner)return reply(ownerB()) 
        sendButMessage(from, `🛡️ Bot MODO Privado/Publico`, `Escolha o modo`, [
          {
            buttonId: `privado`,
            buttonText: {
              displayText: `🛡️Privado`,
            },
            type: 1,
          },
          {
            buttonId: `publico`,
            buttonText: {
              displayText: `🌍 Publico`,
            },
            type: 1,
          },
        ]);
        break;

case 'privado':
if (!itsMe && !isOwner)return mentions(`*Pedido especial para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if(!public)return reply('*_O recurso foi desativado antes_*')
public = false
return reply(  `*Mode : Self*`, text)
break

case 'publico':
if (!itsMe && !isOwner)return mentions(`*Pedido especial para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if(public)return reply('*_O recurso foi ativado antes_*')
public = true
return reply(`*Mode : Public*`, text)
break

case 'autoread':
if (!itsMe && !isOwner)return mentions(`*Comando especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if ((args[0]) === 'on') {
if(aread)return reply('_✅ Já está ativado_')
aread = true
return reply(  `*Auto Read On!*`, text)
} else if ((args[0]) === 'off') {
if(!aread)return reply('_✅ Já está desativado_')
aread = false
return reply(`*Auto Read Off!*`, text)
} else {
reply('Ativar = On  Desativar = Off')
	}
break

case 'listblock':
if (!itsMe && !isOwner) return
let blocked = client.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != client.user.jid)
    client.sendMessage(from, `*List Block*` + `\n` + blocked.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n`, text,{ contextInfo: { mentionedJid: blocked } })
	break
//******************** 》 GROUP 《 ********************\\
case 'add':
//if (!itsMe && !isOwner)return mentions(`*Comando especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`🌡Limite exedido! Digite ${prefix}Perfil para checar mais informações.`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
orang = args[0] + '@s.whatsapp.net'
response = await client.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('A pessoa que você adicionou já está no grupo!')
else if(inv[0].code == 403){
client.sendMessage(from, `Enviando convites de grupo para @${q.split('@')[0]}`, MessageType.text, {quoted: sen, contextInfo: {mentionedJid: [orang]}})
client.sendGroupInvite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Um dos administradores o convida para entrar aqui, por favor, clique em participar para entrar`)
}
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)

break

case 'radd':
if (!itsMe && !isOwner)return mentions(`*Comando especial apenas para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Responda à mensagem que deseja adicionar!')
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Pedido recebido, adicionar: @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupAdd(from, mentioned)
break

case 'kikar':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`*Erro no formato!\n*Exemlo: ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
client.groupRemove(from, [y])
reply(`Membro kikado com sucesso!`)
break
	
case 'listadmin': case 'admins': case 'listadmins':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
	no = 0
	for (let admon of groupAdmins) {
	no += 1
teks += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
	}
mentions(teks, groupAdmins, true)
break
      case "listonline": case "listaonline":
      if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          client.reply(
            m.chat,
            "┌─〔 Lista Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
case 'deathnote':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`*Erro no formato!\n*Exemlo: ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
y = q.split('@')[1] + '@s.whatsapp.net'
								var a = fs.readFileSync(`./src/stick/Deathnote.webp`)
								client.sendMessage(from, a, sticker, {quoted:sen})
		setTimeout( () => {
client.groupRemove(from, [y]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 40000)
				setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("_💎 • O nome anotado foi eliminado com sucesso!_")
		}, 42000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("👹 - Que belo dia pra morrer de um *Ataque no Coração*...")
		}, 20000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			mentions(`Você, @${mentioned[0].split('@')[0]}! morrerá em 40 segundos!`, mentioned, true)
		}, 0)
	
	break
	
case 'getlink': case 'getgrupo':
if(!itsMe && !isOwner)return reply(`_⚠️ Meu limite de grupos foi atingido!_`)
if(!q)return reply('*Comando com ID de Grupo!!*')
linkgc = await client.groupInviteCode(`${q}`)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'entrar': case 'convite':
if (args.length < 1) return reply(`Uso: *${prefix + command}* link do grupo`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
client.acceptInvite(code)
.then((res) => {
var buttons = [{buttonId: `menu`, buttonText: {displayText: '🔰 Menu Principal'}, type: 1},{buttonId: `shit`, buttonText: {displayText: '🎞 ️Menu Shitposter'}, type: 1}]
var buttonMessage = {
    contentText: `*Olá! Sou 𝖳𝗁𝖾 𝖱𝗂𝗌𝗄𝗒 - 𝖱𝗈𝖻𝖻𝗈𝗍 ✨!*\n_Fui convidado por @${sender.split("@")[0]} para entrar no grupo!_\n_Digite ${prefix}menu para ver os recursos do bot!_`,
    footerText: '© By: Risky Modz',
    buttons: buttons,
    headerType: 1
}
client.sendMessage(res.gid, buttonMessage, MessageType.buttonsMessage, {quoted: ftok})

replyWithFake(`_Convidado com sucesso!_`)
})
.catch((err) => reply('🐤 - _O bot foi *Removido* ou link é *Inválido*!_'))
break

// Mudar descrição do grupo
case 'setdesc': case'setdescgc':
if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply('Para o que você deseja alterar a descrição do grupo??')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
client.groupUpdateDescription(from, `${q}`)
client.sendMessage(from, 'Descrição grupo foi alterada com sucesso', text, {quoted:sen})
break

// Risky Modz Grupos
case 'setnome': case 'setnomegc':
if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply('Quer que não temha nome, é?')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
client.groupUpdateSubject(from, `${q}`)
client.sendMessage(from, 'Nome alterado com sucesso!', text, {quoted:sen})
break

case 'linkgroup': case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'resetlink': case 'revokelink': case 'revoke': case 'resetar':
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply (mess.only.Badmin)
client.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await client.groupInviteCode(from)
reply('Resetado com sucesso!\n\nNovo Link do Grupo:\nhttps://chat.whatsapp.com/'+linkgc)
break

case 'sair':
if(!isGroup)return reply(mess.only.group)
if(!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
sendMess(from,`Tchauzinho, grupo ${groupName}`)
setTimeout(() => {
client.groupLeave(from)
}, 2000);
break
					
case 'infoall': case 'tagall': case 'informar':
if(!isVerify) return isUser()
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if(!q) return reply('Qual é a informação?')
if (!isGroup) return reply(mess.only.group)
var nom = sen.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *Por : @${sender.split("@")[0]}*\n┃ *Mensagem :  ${q}*\n┃ *Total de membros : ${groupMembers.length}*\n┃ *Grupo : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝘼𝘿𝙊𝙎\n┃`+teks+'┃\n┗⬣', members_id, false)
break

case 'antinota':
if(!isVerify) return isUser()
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
var a
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
try{
buff = fs.readFileSync('./assets/an.jpeg')
cap = monospace(`ANTI-NOTAS FAKES`) + '\n\n'
cap += 'Proibirá qualquer tipo de notas Fakes:' + '\n'
cap += shp + ' Clique em 𝖠tivar para ativar! ' + '\n'
cap += shp + ' Clique em 𝖣esativar para desativar! ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: '𝖠tivar'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: '𝖣esativar'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	reply(mess.error)
}
break

       case 'levels': case 'levelling':
       if(!isVerify) return isUser()
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
var a
reply(mess.wait)
try{
buff = fs.readFileSync('./assets/l.jpeg')
cap = monospace(`RECURSO DE LEVELS`) + '\n\n'
cap +='ATIVARÁ O RECURSO DE NÍVEIS: ' + '\n\n'
cap += shp + ' Clique em ✅ Ativar! ' + '\n\n'
cap += shp + ' Clique em ☑️ Desativar! ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: '✅ Ativar'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: '☑️ Desativar'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	        sendButMessage(from, cap, `Esse comando é apenas para administradores.`, [
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `✅ Ativar`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `☑️ Desativar`,
            },
            type: 1,
          },
        ])

}
              break
case 'antivirtual':
				case 'antifake2':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`✳️ ANTI NUMERO VIRTUAL\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desativar`)
					if ((args[0]) === 'on') {
						if (isAntivirtual) return reply('✳️ Anti-fake já está ativado!')
						_antivirtual.push(from)
						fs.writeFileSync('./database/group/antivirtual.json', JSON.stringify(_antivirtual))
						reply(`✅ _Anti-Fake foi *Habilitado* nesse grupo!_`)
					} else if ((args[0]) === 'off') {
						if (!isAntivirtual) return reply('✳️ Anti-fake já está desativado!')
						_antivirtual.splice(from, 1)
						fs.writeFileSync('./database/group/antivirtual.json', JSON.stringify(_antivirtual))
						reply(`✅ _Anti-Fake foi *Desabilitado* nesse grupo!_`)
					} else {
						reply(`✳️ ANTI NUMERO VIRTUAL\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desativar`)
					}
					break

case 'antifake':
if(!isVerify) return isUser()
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
var a
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
try{
buff = fs.readFileSync('./assets/a.jpeg')
cap = monospace(`RECURSO DE ANTI-FAKE`) + '\n\n'
cap +='Proibirá a entrada de qualquer tipo de número estrangeiro: ' + '\n\n'
cap += shp + ' Clique em 🇧🇷 para ativar! ' + '\n'
cap += shp + ' Clique em 🇮🇩 para desativar! ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: '🇧🇷'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: '🇮🇩'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	        sendButMessage(from, cap, `© By: Risky Modz`,[
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `🇧🇷`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `🇮🇩`,
            },
            type: 1,
          },
        ])
}
break	

case 'nada':
                    const weelcomeaa =["https://i.ibb.co/mFWgYHX/Parab-ns.webp", "https://i.ibb.co/7SGpfYH/Vergonha.webp", "https://i.ibb.co/sFqDkxg/Bv1.webp","https://i.ibb.co/0QJm24S/Bv2.webp"]
                    welcomexx = weelcomeaa[Math.floor(Math.random() * weelcomeaa.length)]
                    welcomezz = await getBuffer(welcomexx)
                    client.sendMessage(from, welcomezz, MessageType.sticker, {quoted: sen})
                    .catch((err) => {
                    	console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
                        console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Error al enviar el sticker de bienvenida", "red"))
                    })
                    break
case 'grupoinfo':
  if(!isVerify) return isUser()
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(group())
  try {
	ppUrl = await client.getProfilePicture(from)
		} catch {
	ppUrl = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'
  	}
  reply(wait())
  
infogp = `「 INFO DO GRUPO 」
╭──────────────────✾
│⎔ 🐱Nome : ${groupName}
│⎔ 🪀Criação: : ${moment(`${groupMetadata.creation}` * 1000).tz('America/La_Paz').format('DD/MM/YYYY HH:mm:ss')}
│⎔ 👥Membros : ${groupMembers.length}
│⎔ 🕵🏻‍♂️Admins : ${groupAdmins.length}
│⎔ 📮Boas-Vindas : ${Bv_}
│⎔ 🫂Despedida : ${Adios_}
│⎔ 🚨AntiLink : ${AntiLink_}
│⎔ 🔞Nsfw : ${Nsfw_}
│⎔ 🆙Níveis : ${Leveling_}
╰──────────────────✾
▢ 📌 Descrição do grupo :
${groupDesc}`
buffer = await getBuffer(ppUrl)
client.sendMessage(from, buffer, image, {quoted: sen, caption: infogp })
break
case 'bv':
if(!isVerify) return isUser()
if (!q) return reply(`✳️ Marque alguém\n\n*📌Exemplo:* ${prefix + command} @tag`)
const swelxx = sen.message.extendedTextMessage.contextInfo.mentionedJid
const swelzz = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
try {
	 pic = await client.getProfilePicture(swelxx[0])
	} catch {
	 pic = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'
	}
swell =`Oláaa 😙, @${swelzz.split("@")[0]}
───────────────────
*🎊Bem-vindo/a ao grupo:*
${groupName}
▢ Espero que já tenha lido as regras do grupo para não ter màs entendidos u.u`
swellz = await getBuffer(pic)
sendButLocation(from, `${swell}`, `*Copyright © ${botname}*`, {jpegThumbnail: swellz},

 [
{buttonId:`nada`,buttonText:{displayText:'🐱 OBRIGADO'},type:1}],

{contextInfo: { mentionedJid: [swelzz]}} )
break											
			case 'bemvindo': case 'bem-vindo':
			if(!isVerify) return isUser()
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
var a
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
shp = ('•')
try{
buff = fs.readFileSync('./assets/bv.png')
cap = monospace(`🔥 RECURSO BOAS VINDAS NO GRUPO`) + '\n\n'
cap += shp + ' Clique para ativar : ' + '\n'
cap += shp + ' Clique para desativar: ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: `ATIVAR`}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: `DESATIVAR`}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	        sendButMessage(from, cap, `Esse comando é apenas para administradores.`, [
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `ATIVAR`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `DESATIVAR`,
            },
            type: 1,
          },
        ])
}
break			

case 'autofigu':            
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
var a
reply(`_⏱️ Aguarde no máximo *10s*, depois tente novamente!_`)
shp = ('•')
try{
buff = fs.readFileSync('./assets/figu.jpeg')
cap = monospace(`🔥 RECURSO STICKER AUTOMÁTICO`) + '\n\n'
cap += shp + ' Clique 💌 para ativar : ' + '\n'
cap += shp + ' Clique ✉️ para desativar: ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: `💌`}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: `✉️`}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	                sendButMessage(from, cap, `Esse comando é apenas para administradores.`, [
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `💌`,
            },
            type: 1,
          },
                              {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `✉️`,
            },
            type: 1,
          },
        ])
}
break

case 'saida':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (args.length < 1) return reply(`*Input Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -ajuda*`)
if ((args[0]) === 'on') {
	if (isLeft) return reply('Recurso já ativo!')
	left.push(from)
	fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
	reply(`*_Succses Aktifkan Fitur!_*`)
} else if ((args[0]) === 'off') {
	if (!isLeft) return reply('Já está desativado!')
	left.splice(from, 1)
	fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
reply(`*_Succses NonAktifkan Fitur!_*`)
} else if ((args[0]) === '-ajuda') {
mentions(`*Pequeno tutorial: ${command}*\n*Exemplo :*\n*${prefix + command} on*\n*${prefix + command} off*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
} else {
reply(`*Erro de entrada (${args[0]})!*\n*Veja um pequeno tutorial!*\n\n*Exemplo* : \n*${prefix + command} -ajuda*`)
}
break
  case 'ajuda':
                if (args.length < 1) return reply(`Qual a dúvida/problema? Digite: ${prefix}ajuda (mensagem)`)
          				  cpcp = await getpc(totalchat)
          				const kontil = body.slice(6)
                      if (kontil.length > 300) return client.sendMessage(from, 'Maximo de caracteres são 300!', text, {quoted: finvite})
                        var tonmor = sen.participant
                       const buseh = `*🆘️「PEDIDO ENTREGUE」🆘️*\nNome: ${pushname}\nNúmero: @${sender.split("@")[0]}\nMensagem: ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    client.sendMessage('558896926980@s.whatsapp.net', options, text, {quoted: finvite})
                    reply('Mensagem enviada ao dono do bot!')
                                        break
  case 'sugestao': case 'sugerir':
  if(!isVerify) return isUser()
                if (args.length < 1) return reply(`Qual a dúvida/problema? Digite: ${prefix}ajuda (mensagem)`)
          				  cpcp = await getpc(totalchat)
          				const kontill = body.slice(9)
                      if (kontill.length > 300) return client.sendMessage(from, 'Maximo de caracteres são 300!', text, {quoted: finvite})
                        var tonmor = sen.participant
                       const buseeh = `*⚖️️「SUGESTÃO ENVIADA」⚖️️*\nNome: ${pushname}\nNúmero: @${sender.split("@")[0]}\nMensagem: ${kontill}`

                      var options = {
                         text: buseeh,
                         contextInfo: {mentionedJid: [tonmor], quoted: fvideo},
                     }
                    client.sendMessage('558896926980@s.whatsapp.net', options, text, {quoted: fvideo})
                    reply('Mensagem enviada ao dono do bot!')
                                        break
case 'nsfw':	case 'modonsfw':
if(!isVerify) return isUser()
if (!isGroup) return reply(mess.only.group)				
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var a
reply(mess.wait)
try{
buff = fs.readFileSync('./assets/nsfw.jpeg')
cap = monospace(`RECURSO MODO NSFW GRUPO`) + '\n\n'
cap += shp + ' Clique ✅ para ativar : ' + '\n'
cap += shp + ' Clique ❌ para desativar: ' + '\n'
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: `✅ON`}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: `❌OFF`}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	reply('Ocorreu um erro, tente novamente!')
}
break

//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('O recurso de nivelamento não foi ativado!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await client.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              resul = `*╭────〔 LEVEL 〕──*\n\n⚖️ *Nome :* ${pushname}\n🔮 *Exp :* _${userXp} / ${requiredXp}_\n🔥 *Nível :* _${userLevel}_\n🔰 *Patente*: _${role}_\n🌎 *Posição*: _${userRank} no raking do bot_\n\n*Nota: Colete XP se quiser subir de nível*\n*╰────〔 LEVEL 〕──*`
               client.sendMessage(from, resul, text,{ quoted: sen})
              break


       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
       case 'rank':
              if (!isLevelingOn) return await reply('O recurso de nivelamento não foi ativado!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----🏆[ *TOP RANKING* ]🌎----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
var roless = 'Novato ⺢'
              if (resp[i].level <= 5) {
              roless = 'Novato ⺟'
              } else if (resp[i].level <= 10) {
              roless = 'Novato ⺸'
              } else if (resp[i].level <= 15) {
              roless = 'Veterano ⻛'
              } else if (resp[i].level <= 20) {
              roless = 'Veterano ⻅'
              } else if (resp[i].level <= 21) { 
              roless = 'Veterano ⻉'
              } else if (resp[i].level <= 22) {
              roless = 'Capitão ⺞'
              } else if (resp[i].level <= 23) {
              roless = 'Capitão ⺙'
              } else if (resp[i].level <= 24) {
              roless = 'Capitão ⻋'
              } else if (resp[i].level <= 26) {
              roless = 'Comandante ⽲'
              } else if (resp[i].level <= 28) {
              roless = 'Comandante ⽮'
              } else if (resp[i].level <= 30) {
              roless = 'Comandante ⽾'
              } else if (resp[i].level <= 32) {
              roless = 'Mestre ⾽'
              } else if (resp[i].level <= 34) {
              roless = 'Mestre ⾗'
              } else if (resp[i].level <= 36) {
              roless = 'Mestre ⾤'
              } else if (resp[i].level <= 38) {
              roless = 'Mítico ⾦'
              } else if (resp[i].level <= 40) {
              roless = 'Mítico ⿇'
              } else if (resp[i].level <= 42) {
              roless = 'Mítico ⾛'
              } else if (resp[i].level <= 44) {
              roless = 'God ㇒'
              } else if (resp[i].level <= 46) {
              roless = 'God 㐱'
              } else if (resp[i].level >= 50) {
              roless = 'Lendário ⿉'
}

              leaderboard += `⚖️ ${i + 1}. @${_level[i].id.split("@")[0]}!\n🔮 *Exp :* ${_level[i].xp}\n🔥 *Level :* ${_level[i].level}\n🔰 *Patente :* ${roless}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Precisa de pelo menos 10 usuários que possuam um nível no banco de dados!_')
}
              break
              
case 'q': 
if (!m.quoted) return reply('Responde mensagem!')
let qse = client.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('a mensagem que você respondeu não contém uma resposta!!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Este pedido é especial para @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`O bot já está desativado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`🚸 Ban-Chat bem-sucedido neste grupo!`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!isBanchat) return reply(`O bot Já está ativado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`O bot foi desbanido neste grupo`)
break

case 'listbanchat': case 'listbc':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await client.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nome do grupo : ' + met.subject + '\n\n'
}
reply(teks)
break
case 'ativar':
if(!isGroupAdmins && !isOwner && !itsMe)return reply(mess.only.admin)
if(!isBotGroupAdmins)return reply(mess.only.Badmin)
if(!isGroup)return reply(mess.only.group)
if (args.length < 1) return reply(`*Formato inválido!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*Lista!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
if ((args[0]) === 'welcome') {
	if(isWelkom) return reply('Já está ativo')
	welkom.push(from)
	fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
	reply(`*_Succses Aktifkan Fitur Welcome!_*`)
}else if((args[0]) == 'antidelete'){
if (antidel === true) return
if(antidel)return reply('Já foi desativado!')
reply('*_✅ Ativado Recurso Antidelete com Sucesso!_*')
}else if((args[0]) === 'antilink'){
if (anlink.includes(from)) return reply('*_✅ Recurso já ativo!_*')
anlink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
reply('_🔰 Recurso antilink ativado com sucesso!_')
}else if((args[0]) === 'banchat'){
if (isBanchat) return reply(`Comando de Ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Ban-Chat bem-sucedido neste grupo!`)
} else {
reply(`*Formato inválido!*\n\n*Exemplo :*\n • ${prefix + command} welcome\n\n*Lista!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
}
break

case 'desativar':
if(!isGroupAdmins && !isOwner && !itsMe)return reply(mess.only.admin)
if(!isBotGroupAdmins)return reply(mess.only.Badmin)
if(!isGroup)return reply(mess.only.group)
if (args.length < 1) return reply(`*Formato inválido!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*Lista!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
if ((args[0]) === 'welcome') {
if (!isWelkom) return reply('Já está online!')
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply(`*_Succses NonAktifkan Fitur!_*`)
}else if((args[0]) == 'antidelete'){
if (antidel === false) return
if(!antidel)return reply('Já foi desativado antes!')
antidel = false
reply(`Ativado com sucesso!`)
}else if((args[0]) === 'antilink'){
let offf = anlink.indexOf(from)
anlink.splice(offf, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
reply('_🔰 Recurso antilink ativado com sucesso!_')
}else if((args[0]) === 'banchat'){
let ank = bancht.indexOf(from)
bancht.splice(ank, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`O bot foi desbanido neste grupo`)
} else {
reply(`*Formato inválido!*\n\n*Example :*\n • ${prefix + command} welcome\n\n*Lista!*\n • welcome\n • antilink\n • antidelete\n • banchat`)
}
break

case 'group': case 'grupo':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
        sendButMessage(from, `_🔰 Abra ou Feche seu Grupo de Maneira Semi-Automática!_`, `Esse comando é apenas para administradores.`, [
          {
            buttonId: `ABRIR`,
            buttonText: {
              displayText: `Abrir Grupo`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Fechar Grupo`,
            },
            type: 1,
          },
        ])
break
				
case 'infogc': case 'groupinfo':
case 'infogrup': case 'grupinfo':
if(!isVerify) return isUser()
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
  try {
	ppUrl = await client.getProfilePicture(from)
		} catch {
	ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  	}
y =`*Nome: ${groupName}*\n*Criado: ${moment(`${groupMetadata.creation}` * 1000).tz('America/Fortaleza').format('DD/MM/YYYY HH:mm:ss')}*\n*Dono: @${groupMetadata.owner.split('@')[0]}*\n*Total de membros: ${groupMembers.length}*\n*Total de Admin : ${groupAdmins.length}*\n\n*Bem-vindo: ${isWelkom ? 'Ativado':'Desativado'}*\n*Saída : ${isLeft ? 'Ativado':'Desativado'}*\n*Antilink : ${isAntilink? 'Ativado':'Desativado'}*\n\n*Discrição:*\n ${groupDesc}`
buffer = await getBuffer(ppUrl)
client.sendMessage(from, buffer, image, {quoted: sen,caption:y, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
			
case 'pm': case 'promote': case 'promover':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Promovido com sucesso! @${mentioned[0].split('@')[0]} Novo Admin do Grupo!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
break
					
case 'dm': case 'demote': case 'rebaixar':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Removido da administração: @${mentioned[0].split('@')[0]}!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
break
					
case 'casal':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
lope = 'https://i.ibb.co/2gXBp4B/9401b0c64ab7.jpg'
jds = []
ownerN = [`${ownerN}`]
const jdii = groupMembers
const li = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const lii = li[Math.floor(Math.random() * li.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `💒 *CASAL DO ANO* 💒

• Noivo(a);  @${diaa.jid.split('@')[0]}
• Noiva(o); @${akuu.jid.split('@')[0]} 

• Filho(a); @${lii.jid.split('@')[0]}

• Padre; @${ownerN}`
jds.push(akuu.jid)
jds.push(diaa.jid)
jds.push(lii.jid)
y = await getBuffer(lope)
mentions(teks, jds, true)
break

case 'pode':
if (!q) return reply(`Uso: ${prefix + command} (texto)`)
const bisa = ['Claro que eu posso! Você é a pessoa mais fofa', 'Não posso kkkjjl', 'Hmm, eu não sei, pergunte ao seu pai', 'Repita pq eu não entendi']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
reply('Pergunta:  ' + q + '\n\Resposta: ' + keh)
break

case 'quando':
if (!q) return reply(`Exemplo: ${prefix + command} vou me casar?`)
const kapan = ['Amanhã', 'Depois de amanhã', 'Ontem', 'Mais 4 dias', '5 Mais dias', '6 dias de novo', 'Mais 1 Domingo', 'Mais 2 Domingos', 'Mais 3 Domingos ',' 1 mês ',' 2 meses ',' 3 meses ',' 4 meses ',' 5 meses ',' 6 meses ',' 1 ano novamente ',' 2 anos novamente ',' 3 anos novamente ', '4 More Years', '5 Anos Novamente', '6 Anos Novamente', '1 Século de novo', '3 Dias Novamente']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
reply('Pergunta ' + q + '\n\nResposta : ' + koh)
break

case 'chance':
if (!q) return reply(`Use assim: ${prefix + command} + texto\n\nExemplo: ${prefix + command} bater uma hoje`)
const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const te = ra[Math.floor(Math.random() * ra.length)]
reply('A probabilidade: ' + q + '\n\nA chance disso acontecer : ' + te + '%')
break

					case 'gay':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(`🔰 _Aguarde no máximo 30 segundos, depois tente novamente!_`)                     
                        try{
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/lgbt?img=${teks}`)
                        abc = await getBuffer(anu8)
                      await  client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                                            }catch{
                    reply(`🐤 - _Ocorreu um erro na sua imagem. Tente novamente!_`)
                    }
                    } else {
                        reply('É necessário usar uma imagem')
}
                    break

case 'gayy':
if (!q) return reply(`Use assim: ${prefix + command} + texto\n\nExemplo: ${prefix + command} marque ou digite um nome`)
const ah = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const eh = ah[Math.floor(Math.random() * ah.length)]
reply('Como você é gay ' + q + '\n\nPorcentagem gay : ' + eh + '%')
break

case 'corno':
if (!q) return reply(`Use assim: ${prefix + command} + texto\n\nExemplo: ${prefix + command} marque ou digite um nome`)
const ri = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const ti = ri[Math.floor(Math.random() * ri.length)]
reply('Como você é corno ' + q + '\n\nPorcentagem corno : ' + ti + '%')
break

case 'hobby':
if (!q) return reply(`Uso: ${prefix + command} texto`)
const hob = ['suspiro no jogo', 'ngocokin doi', 'perseguição nas redes sociais', 'você não tem um hobby kkkkkj', 'cozinhar', 'ajudar atok', 'mabar', 'nobar', 'sosmedtan ',' ajudar os outros ',' Assistir Anime ',' Assistir drama ',' Andar de moto ',' Cantando ',' Dançar ',' Pular ',' Desenhar ',' As fotos estão borradas ',' Jogar jogos ', 'Falando por conta própria']
const by = hob[Math.floor(Math.random() * hob.length)]
reply(`Pergunta:` + q + '\n\nResposta : ' + by)
break

case 'recado': case 'getbio':
if (sen.message.extendedTextMessage != undefined){
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await client.getStatus(`${mentioned}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Recado não encontrado...")
  } 
} else {
reply('Marque um membro!')
}
break
				
case 'getpic':
if (sen.message.extendedTextMessage != undefined){
mentioned = sen.message.extendedTextMessage.contextInfo.mentionedJid
	try {
	pic = await client.getProfilePicture(mentioned[0])
	} catch {
	pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
	}
thumb = await getBuffer(pic)
client.sendMessage(from, thumb,image,{quoted : sen})
} else {
reply('Marque um membro!')
}
break

//mi perfil 
case 'profile':
case 'perfil':
case 'me':
					client.updatePresence(from, Presence.composing)
    				try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'

					}
					var userLlevel = level.getLevelingLevel(sender, _level)
					var cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                    var prmmm = isPremium ? `${cekprm.days} *_días_* ${cekprm.hours} *_horas_* ${cekprm.minutes} _*minutos*_ ${cekprm.seconds} *_segundos_* `:'Gratuito'
					infost = await client.getStatus(`${sender.split('@')[0]}@c.us`)
				    infost = infost.status == 401 ? '' : infost.status

					 profile = `「 *PERFIL* 」
╭──────────────────✾
│⎔ *🔖Nome* : ${pushname}
│⎔ *🔮Tag* : @${sender.split("@")[0]}
│⎔ *#️⃣Numero* : wa.me/${sender.split("@")[0]}
│⎔ *📇Info* : ${infost}
│⎔ *🥇Rank* : ${role}
│⎔ *⭐Premium* : ${prem_}
│⎔ *🕐Expira* : ${isPremium ? 'Ilimitado' : isOwner ? 'Ilimitado' : `${prmmm}`}
│⎔ *🆙Nivel* : ${userLlevel}
│⎔ *💎Diamantes* : ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
│⎔ *🎰GameCoins* : ${isPremium ? 'Ilimitado' : `${cekGLimit(sender, gcount, glimit)}/${gcount}`}
│⎔ *💰BotCoins* : ${isPremium ? 'Ilimitado' : `${getBalance(sender, balance)}`}
╰──────────────────✾`
					buffer = await getBuffer(ppimg)
					
					client.sendMessage(from, buffer, image, {contextInfo: {  mentionedJid: [sender]}, quoted: sen, caption: profile})
					.catch((err) => {
            reply(`❎ Error! tente novamente mais tarde`); 
            })
break
  				case 'delete':
				case 'del':
				case 'd':  
					if (!isGroupAdmins && !isPremium && !itsMe && !isOwner)return reply(mess.only.admin)
					client.deleteMessage(from, { id: sen.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'getsider':
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedMsg) return reply('Reply pesan botnya')      
infom = await client.messageInfo(from, sen.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 
//buat index bulan
var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
var myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `「 *Mensagem Lida* 」\n\n`
for (let i of hemm) {
teksx1 += ` ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Data* : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `「 *Mensagem não Lida* 」\n\n`
for (let i of hemms){
teksx1 += ` 📌 *Nome* : @${i.jid.split('@')[0]}\n`
teksx1 += ` ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Data* : ${toBulan(i.t, true)}\n\n`

}
client.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: sen, thumbnail: gambar3, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readdin }})
client.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: sen, thumbnail: gambar3, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readon }})
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break
						case 'dados':
						case 'consultas':
					case 'consulta':
					client.sendMessage(from, consultas(prefix) , text, { quoted: sen })
					break
case 'read': case 'sider':
if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isQuotedMsg)return reply('Reply pesan bot')
infom = await client.messageInfo(from, sen.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '⬡'+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ⬡ Tempo : ` + moment(`${i.t}` * 1000).tz('America/Fortaleza').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'hidetag': case 'h':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
if (!q)return reply('Qual é a informação?')
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: sen
}
client.sendMessage(from, options, text, {quoted: finvite})
break

case 'totag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.only.admin)
teks = sen.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: teks,
contextInfo: { mentionedJid: mem },
quoted: sen
}
client.sendMessage(from, options, text)
break

case 'tagme':
mentions(`@${sender.split("@")[0]}`, [sender], true)
break

case 'mention': case 'mencione':
if(!q)return reply('Quem?')
mentions(`@${q.split("@")[0]}`, [`${q}@s.whatsapp.net`], false)
break

//******************** 》 STORAGE 《 ********************\\
                     
case 'addcmd': case 'setcmd':
if (!isQuotedSticker) return reply('*Erro de formato! O comando deve ser acompanhado de um adesivo!*')
if(!q) return reply(`*Format salah!!*\n\n*Reply sticker dengan caption!..*\n\n*Example :*\n${prefix + command} help`)
if (q.includes(`#`)) return reply(`Tidak dapat disertai Prefix..`)
ceemd = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
scmd = await client.downloadMediaMessage(ceemd)
stcmd.push(`${q}`)
fs.writeFileSync(`./src/stickcmd/${q}.webp`, scmd)
tesnya = sen.quoted.fileSha256.toString("hex")
addSticker(tesnya, q, stickerdb)
reply(`Comando de figurinha criado com sucesso! Comando: ${q}`)
break

case 'listcmd':
case 'listcommand':
listCommand(stickerdb, reply, monospace)
break

case 'delcmd':
if (!isQuotedSticker) return reply('*Marque o adesivo de resposta que você deseja remover!!*')
tess = sen.quoted.fileSha256.toString("hex")
delCommand(tess, stickerdb)
reply('Deletado com sucesso!')
break

case 'getstik': case 'getstikcmd': case 'getcmd':
if(!q)return reply(`Example : ${prefix + command} menu`)
try {
ga = fs.readFileSync(`./src/stickcmd/${q}.webp`)
client.sendMessage(from, ga, sticker,{quoted:sen})
} catch {
reply('Comandos por sticks registrados!')
}
break
			
///_BY RISKY MODDER
					case 'attp' :
				case 'sttp' :
					if (args.length < 1) return reply(`ERROR: cadê o texto?? \nUso: ${prefix}attp (seu texto aqui)`)
					try {
					reply(`_🎁 Criando sua *Figurinha*..._`)
						var chollotxt = body.slice(5).trim()
						url = encodeURI(`https://api.xteam.xyz/attp?file&text=${chollotxt}`)
						textofigu = await getBuffer(url)
						client.sendMessage(from, textofigu, sticker, { quoted: sen })
					}
					catch (e) {
						reply("Error: Use apenas caracteres alfanuméricos")
					}
					break

case 'dellfigu': case 'delfigu':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply(mess.wrongFormat)
	try {
fs.unlinkSync(`./src/stick/${q}.webp`)
setiker.splice(q,1)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
reply(`Deletado a figurinha: ${q}!`)
	} catch (err) {
reply(`Erro ao deletar ${q}!`)
	}
break
					
		case 'pegarfigu':  
		        	if (args.length < 1) return reply('Coloque o nome da figurinha.')
		      		namastc = body.slice(11)
			     	result = fs.readFileSync(`./src/stick/${namastc}.webp`)
			    	client.sendMessage(from, result, sticker, {quoted: sen })
			    	break
			    	case 'addfigu':  
			    				if (!isOwner) return reply('Apenas o proprietário pode usar esse comando!!' ,text, { quoted: sen })
			    	if (!isQuotedSticker) return reply('Apenas figurinhas...')
			     	svst = body.slice(9)
			    	if (!svst) return reply('Nome da figurinha???')
			    	boij = JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await client.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/stick/${svst}.webp`, delb)
			     	fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
			    	client.sendMessage(from, `Figurinha adicionada com sucesso!\nPara ver a lista:\n${prefix}listafigu`, MessageType.text, { quoted: sen})
      				break
					case 'listafigu':  
		     		teks = '*Lista de figurinhas :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		client.sendMessage(from, teks.trim(), extendedText, {  quoted: sen})
		      		break

//******************** 》MUITOS TESTES《 ********************\\
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

//diversão
case 'chance':
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance d eu morrer`, text, {quoted: finvite})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: finvite, contextInfo: {mentionedJid: [sender]}})
break
     
//diversão     
case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média??'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço??'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break


case 'porncomen':
if (args.length == 0) return reply(`Example : ${prefix + command} Comentário`)
bufg = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=Alphabott&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${pushname}&msg=${body.slice(11)}`)
client.sendMessage(from, bufg, image, {quoted: sen})
break
//essas são para imagens
					case 'comunism':
	  case 'wanted':
	    case 'rotate':
	     case 'rip':
	       case 'fuse':
	      case 'dwlaauss':
	        case 'tobecontinue':
	          case 'thuglife':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`http://zekais-api.herokuapp.com/${command}?url=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'riscado':
var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
anu8 = (`https://api.zeks.me/api/sketch-image?apikey=apivinz&image=${teks}`)
abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
					break

					case 'figuc':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/circle?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'arma':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/gun?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'drip':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/dripp?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'borro':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/borro?img=${teks}&opacidade=2`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'hitler':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/hitler?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'iinverter':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/invert?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'shit':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/shit?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'lixo':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !sen.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sen
                        reply(mess.wait)                     
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/trash?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            quoted: sen
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break

case 'restart':
      case 'reiniciar':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node sen`)
             reply('_Reiniciando..._')
             break
case 'vazar':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = client.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Tchau', null)
             await sleep(3000)
             client.groupLeave(id)
}
             break
//******************** 》Owner Prem《 ********************\\

case 'addprem':
if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
if (!q)return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : segundo\n• m : minuto\n• h : hora\n• d : dia\n\n*WhatsApp : ${fake}*`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Usuário adicionado à lista premium!_`)
break

case 'delprem':
  if(!itsMe && !isOwner) return reply('Only Owner!')
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Premium removido com sucesso: @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listaprem':
case 'listavip':
if(!isVerify) return isUser()
client.updatePresence(from, Presence.composing)
let txt = `≡ *USUARIOS PREMIUM 💎*\n\n*Total* : ${premium.length}\n────⊷ *LISTA* ⊶\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `▢ *🏷️Nome :* @${i.id.split("@")[0]}\n*⏳Expira :* ${cekvip.days} *_días_* ${cekvip.hours} *_horas_* ${cekvip.minutes} *_minutos_* ${cekvip.seconds} *_segundos_*\n\n`
  }
mentions(txt, men, true)
break

case 'cekprem': case 'cekpremium':
if (!isPremium) return reply(`_Você não é um usuário premium!_`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `❒ *「 Usuário Premium 」* ❒ 
  
*Nome : ${pushname}*
 
*Tag : @${sender.split("@")[0]}*
 
*Tempo: ${premiumnya}*`
its = await getBuffer (ppimg)
client.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: sen, caption: teks
})
break

//_DESBUGA O ÁUDIO
case 'corrigir':                 
ass = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=0:width_type=o:width=0:g=0 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break


//******************** 》Limit《 ********************\\

case 'balance': case 'topbalance':
if(!isGroup)return reply(mess.only.group)
client.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break

case 'Limite':
if(!isVerify) return isUser()
bal = `❏ *Nome* : @${sender.split("@")[0]}
「 *BALANCE* 」
╭──────────────────✾
├ *💎Diamantes* : ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
├ *🎰GameCoins* : ${isPremium ? 'Ilimitado' : `${cekGLimit(sender, gcount, glimit)}/${gcount}`}
├ *💰BotCoins* : ${isPremium ? 'Ilimitado' : `${getBalance(sender, balance)}`}
╰──────────────────✾
*📌NOTA:* 
Pode comprar 💎Diamantes usando *${prefix}buy*
E para comprar 🎰GameCoins *${prefix}buygcoin*`
client.sendMessage(from, bal, text, { quoted: mek, contextInfo: {mentionedJid: [sender] }})
break

case 'buy':
case 'buydiamond':
if(!isVerify) return isUser()
{
if (!q) return reply(`✳️ Uso do comamdo *${prefix +  command}* quantidade\n📌Exemplo ${prefix + command} 4\n\n💰Preço\n 💎 1 Diamante = 300 💰`)
if (q.includes('-')) return reply(`❎ No use  -`)
if (isNaN(q)) return reply(`✳️ Tiene que ser un número`)
let ane = Number(nebal(q) * 300) //---precio diamante
if (getBalance(sender, balance) < ane) return reply(`❎ Desculpa, mas não tem Botcoins💰 suficientes para comprar *${q}* Diamantes💎`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)

diafg = `
「 *NOTA DE PAGAMENTO* 」
╭──────────────────✾
├ *🛒Compra nominal* : ${q}
├ *💰BotCoins restante* : ${getBalance(sender, balance)}
├ *💎Diamantes* : ${getLimit(sender, limitCount, limit)}/${limitCount}
╰──────────────────✾`
reply(diafg)
}
break

case 'buycoin':
if(!isVerify) return isUser()
{
if(!q)return reply(`📌 Exemplo : ${prefix + command} 10\n\n💰Preço\n 🎰1 glimit = 100💰`)
if (q.includes('-')) return reply(`❎ Não use  -`)
if (isNaN(q)) return reply(`✳️ Tem que ser um número`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`❎ Foi mal, mas, n tem: suficientes Coins💰 para comprar *${q}* 🎰GameCoins`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
gcoi = `「 *NOTA DE PAGAMENTO* 」
╭──────────────────✾
├ *🛒Compra nominal* : ${q}
├ *💰BotCoins restante* : ${getBalance(sender, balance)}
├ *🎰GameCoins* : ${cekGLimit(sender, gcount, glimit)}/${gcount}
╰──────────────────✾`
reply(gcoi)
  }
break

case 'giftlimit':
if(!itsMe && !isOwner)return
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('Sucesso')
break

case 'donor':
/*client.sendMessage(from, {displayname: "Risky", vcard: vcard}, MessageType.contact ,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
                "title": `By: (@Riskyzin) • Instagram Stories`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C70KIkAbwUChUiTYqM7taxp2z2EBGXxDWQ&usqp=CAU.jpg",
                "thumbnail": gambar5,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : sen})
*/
                   inifer = `Tire suas dúvidas`
             client.sendMessage(from, inifer, text, { quoted: sen, contextInfo: { externalAdReply:{title: `「 Risky Modz 」`,body:"Dono do Risky Robbot", previewType:"PHOTO",thumbnail: gambar3, sourceUrl:`https://wa.me/558896926980`}, "mentionedJid": [sender]}})

break

case 'tervip':
               if (!isGroup) return reply(mess.only.group)
        //       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: finvite})
						var nomorr = sen.participant
        sendButtonLocation(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, 
        `❏ 「 \`\`\`USUÁRIO PREMIUM\`\`\` 」
Olá, seja muito bem-vindo!

No *Menu Premium* há mais de 15 comandos, fora que alguns você poderá usar sem ser administrador do grupo!

Caso esteja interessado, fale com o meu dono onde enviarei o contado ao clicar no botão abaixo.

💰 Os preços:

💧 Teste de 50 minutos: Grátis

🔥 3 Dias: R$ 2,00

🔥 7 Dias : R$ 5,00

🔥 30 Dias : R$ 20,00

💎 O limite ao usar os comandos serão retirados para usuários premium.`,
        `©ʀιѕκʏ々мο∂z`, 
        {jpegThumbnail:fs.readFileSync(`./assets/foto.png`)}, 

[{ buttonId: `menu`, buttonText: { displayText: 'OK' }, type: 1 }])
					setTimeout( () => {
                  client.modifyChat(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, ChatModification.delete)
                  }, 10000)
					reply('✅ Mensagem enviada no seu privado!')
					break

case 'gpbot':
               if (!isGroup) return reply(mess.only.group)
						var nomorr = sen.participant
					teks3 = `✳️ Não responda esta mensagem ou então será bloqueado automáticamente!\n\n${grupomc}`
					client.sendMessage(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, options, text, {quoted: sen})
					setTimeout( () => {
                  client.modifyChat(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, ChatModification.delete)
                  }, 10000)
					reply('✅ Mensagem enviada no seu privado!')
					break

case 'calc':
case 'calculadora':
case 'cal':
case 'calcu':
if (game.isMtk(from, mtk)) return reply(`❎ Sem trapacear -_-`)
if (args.length < 1) return reply(`✳️ Insira a equação \n\ nsímbolos compatíveis -, +, *, /, ×, ÷, π, e, (, )`)
global.math = global.math ? global.math : {}
let ed = from
if (ed in global.math) {
clearTimeout(global.math[ed][3])
delete global.math[ed]
reply(`✳️ Insira a equação\n\nsímbolos compatíveis -, +, *, /, ×, ÷, π, e, (, )`)
}
let val = q
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(` 「 *CALCULADORA* 」
╭━━━━━━━━━━━━━━━━━━╮
│ ${format} =
├──────────────────┤
│ ${result}
╰━━━━━━━━━━━━━━━━━━╯`)

} catch (e) {
if (e == undefined) throw '?'
throw 'Formato incorrecto, solo 0-9 e símbolo -, +, *, /, ×, ÷, π, e, (, ) são compatíveis'
}

break

case 'encurtador':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el link para acortar`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
limitAdd(sender, limit)
break

case 'tempogp1':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("Use assim:\ns: segundos\nm: minutos\nh: horas\nex: +closetime 30 s")}
				    reply(`✅ O grupo será fechado em ${q}`)
				    setTimeout( () => {
					var nomor = sen.participant
					const close = {
					text: `✳️ Grupo fechado a pedido do Administrador: @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				    }, timer)
				    break
case 'tempogp2':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("*Use assim:\ns: segundos\nm: minutos\nh: horas\nex: +opentime 30 s")}
				    reply(`✅ O grupo será aberto em ${q}`)
				    setTimeout( () => {
					var nomor = sen.participant
					const open = {
					text: `✳️ Grupo aberto a pedido do Administrador: @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				    }, timer)
				    break
//******************** 》 GAME 《 ********************\\
case 'luta':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Seu limite de jogo acabou, se quiser jogar sem ter limites digite ${prefix}Limite`)
               if (!isGroup) return reply(mess.only.group)
               if (sen.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Só com 1 pessoa')
               if (!sen.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Identifique o oponente com o qual deseja jogar`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`As sessões estão em andamento, não podem ser executadas simultaneamente\nModelo *${prefix}delsesigelud*, apagar uma sessão`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Iniciando um jogo de luta 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Rolagem desafiadora
[ ${args[0]} ] Digite sim / não para aceitar ou rejeitar o jogo`

               client.sendMessage(from, starGame, text, {quoted: sen, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               gameAdd(sender, glimit)
               gameAdd(sender, glimit)
               break

case 'delsesigelud': case 'delluta':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Eliminar com sucesso a sessão Gelud')
               } else {
               reply('Nenhuma sessão em andamento')
}
               break
//---Verdad o reto
case 'verdadedesafio':
  if (!isGroup) return reply('_O Recurso só funciona em gruposkk_')
      sendButMessage(from, `Brincadeira do *Verdade* ou *Desafio*!

Regras: ᴇɴᴛʀᴏᴜ ɴᴀ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴛᴇᴍ ϙᴜᴇ ᴄᴜᴍᴘʀɪʀ ᴀ ᴢᴜᴇʀᴀ ᴏᴜ ᴠᴀᴢᴀ sᴇ ɴ ᴠᴀɪ ғɪᴄᴀʀ ᴄʜᴀᴛᴏ!`, `Escolha um e aperte no botão!`, [
          {
            buttonId: `verdade`,
            buttonText: {
              displayText: `🔹Verdade`,
            },
            type: 1,
          },
          {
            buttonId: `desafio`,
            buttonText: {
              displayText: `🔸Desafio`,
            },
            type: 1,
          },
        ]);
        break;

//-- verdade e desafio
case 'verdade':
  if (!isGroup) return reply('_O Recurso só funciona em gruposkk_')
                const trut =["Qual a razão mais ridícula pela Qual você terminou com alguém?","Qual é a mania mais nojenta que você tem?","Qual site no seu histórico de navegação te deixaria constrangido se alguém visse?","Qual pessoa não famosa você tem inveja?","Qual a coisa mais embaraçosa que você já fez bêbado?","Qual foi a coisa mais embaraçosa que já fez?","Qual foi a pessoa mais aleatória que já stalkeou nas redes sociais?","Qual foi a última coisa que pesquisou no seu telefone?","Qual foi o pior presente que já deu para alguém?","Já traiu algum namorado ou namorada?","Qual é o apelido mais vergonhoso que alguém já lhe deu?","Qual foi o sonho mais assustador que já teve?","Qual é o seu medo mais sombrio?","Qual é a coisa mais estranha ou vergonhosa que já fez por dinheiro?","Qual é a maior mentira que já contou para alguém da sua família?","Qual foi a maior conquista que já teve?","Qual foi o momento mais inapropriado em que já soltou pum?","Qual a foto mais constrangedora que tem no seu telefone?","Marque a(o) mais gata(o)?","inicial do ranço","marque uma gostosa","talaricaria um amg?","oq vc mais odeia?","pior professor?","Você já gostou de alguém? Há quanto tempo? "," Qual é o seu maior medo? "," Você já gostou de alguém? "," Qual o nome da ex-namorada do seu amigo que gostava secretamente de você? "," Ele já gostou de você? roubou dinheiro de sua mãe ou pai? O motivo? "," O que te deixa feliz quando está triste? "," Você já se aventurou com outra pessoa? "," Do que você mais tem medo? "," Quem é o mais influente na sua vida? ? "," Quem é a pessoa que pode te fazer muito feliz? "," Quem te fez muito feliz? "," Com quem você gosta de brincar? "," Você já rejeitou alguém? Qual foi o motivo? "," Diga o nome de um incidente que o magoou e de que ainda se lembra "," O que você conquistou este ano? "," Qual era o seu pior hábito na escola? "]
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		client.sendMessage(from, `*🔹VERDADE*\n\n${ttrth}`, text, { quoted: sen})
		break
		
		case 'desafio':
  if (!isGroup) return reply('_O Recurso só funciona em gruposkk_')
		const dare =["Envie uma mensagem para o seu ex e diga 'Eu ainda gosto de você' ", "Diga 'come meu cu' para alguém do grupo", "Solte o emote '🦄' toda vez que você escrever no grupo por 5 horas" , "Enviar um memorando de voz dizendo' posso te ligar, baby? '", "Usar a foto de' kanna kamui 'por 1 dia", "Escreva no idioma local por uma hora", "mude seu nome para' Eu sou a child de lucinta luna 'por 7 horas "," Diga ao seu primeiro @' Eu te amo '"," zoe com seu ex e diga' Eu te amo, volte por favor... quero sua minhoquinha de volta'"," Envie um áudio gemendo 'risky me comeu de 4 ' "," Envie uma mensagem para seu @ dizendo 'Estou apaixonado por você, quer transar cmg?' "," Mencione que tipo de pessoa você gosta "," Envie uma foto de namorado / namorada "," grite incoerentemente e envie o áudio aqui "," Grite 'Risky me coma, Riskyyy' na frente de sua casa "," mude seu nome para 'BUCETUDA' por 24 horas "]
		const der = dare[Math.floor(Math.random() * dare.length)]
		client.sendMessage(from, `*🔸DESAFIO*\n\n${der}`, text, { quoted: sen})
		break
case 'girar':
case 'giro':
            if(!isVerify) return isUser()
               if (!isGroup) return reply(mess.only.group) 
                if (!isLevelingOn) return reply(mess.leveloff)
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
            const zomtoy = zotoy[Math.floor(Math.random() * (zotoy.length))]
            const zommtoy = zootoy[Math.floor(Math.random() * (zootoy.length))]
            const zommmtoy = zoootoy[Math.floor(Math.random() * (zoootoy.length))]
            const giroc = Math.floor(Math.random() * 88) + 99
            girob = `-${giroc}`
            ppg = Math.floor(Math.random() * (100000 - 50000 + 1) + 50000)
            if ((zomtoy == '🥑 : 🥑 : ??') || (zomtoy == '🍉 : 🍉 : 🍉') || (zomtoy == '🍓 : 🍓 : 🍓') || (zomtoy == '?? : 🍎 : 🍎') || (zomtoy == '🍍 : 🍍 : 🍍') || (zomtoy == '🥝 : 🥝 : 🥝') || (zomtoy == '🍑 : 🍑 : 🍑') || (zomtoy == '🥥 : 🥥 : 🥥') || (zomtoy == '🍋 : 🍋 : 🍋') || (zomtoy == '🍐 : 🍐 : 🍐') || (zomtoy == '🍌 : 🍌 : 🍌') || (zomtoy == '🍒 : ?? : 🍒') || (zomtoy == '🔔 : 🔔 : 🔔') || (zomtoy == '🍊 : 🍊 : 🍊') || (zomtoy == '🍇 : 🍇 : 🍇')) {
            var vitr = "Você ganhou!!!"
            } else {
            var vitr = "Você perdeu..."
            }
            const slott = `*Consiga uma sequência para ganhar*
[ ✨│GIRO│🎰 ]
━╾────╼━
${zommtoy}
${zomtoy} *<—*
${zommmtoy}
━╾────╼━
[ 🎰│GIRO│✨ ]
*${vitr}*`
            if (vitr == "Você ganhou!!!") {
                 setTimeout(() => {
                 reply(`Você ganhou ${ppg} de exp!!!`)
                 }, 1100)
            }
            client.sendMessage(from, slott, text, { quoted: sen })
            addBalance(sender, girob, balance)
            addLevelingXp(sender, ppg)
            gameAdd(sender, glimit)
            break


            case 'ppt':
            if(!isVerify) return isUser()
               if (!isGroup) return reply(mess.only.group)
                if (!isLevelingOn) return reply(mess.leveloff)
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
            if (args.length < 1) return reply(`✳️ Selecione pedra/papel/tesoura\n\nExemplo : *${prefix}ppt* papel`)
                    ppt = ["pedra", "papel", "tesoura"]
                    ppy = ppt[Math.floor(Math.random() * ppt.length)]
                    ppg = Math.floor(Math.random() * (100000 - 50000 + 1) + 50000)
                    addLevelingXp(sender, ppg)
                    pptb = ppy
                    pph = `*Você ganhou ${ppg} de Exp*`
                    if ((pptb == "pedra" && args == "papel") ||
                        (pptb == "papel" && args == "tesoura") ||
                        (pptb == "tesoura" && args == "pedra")) {
                        var vit = "vitoria"
                    } else if ((pptb == "pedra" && args == "tesoura") ||
                        (pptb == "papel" && args == "pedra") ||
                        (pptb == "tesoura" && args == "papel")) {
                        var vit = "derrota"
                    } else if ((pptb == "pedra" && args == "pedra") ||
                        (pptb == "papel" && args == "papel") ||
                        (pptb == "tesoura" && args == "tesoura")) {
                        var vit = "empate"
                    } else if (vit = "undefined") {
                        return reply(`✳️ Selecione pedra/papel/tesoura\n\nExemplo : *${prefix}ppt* papel`)
                    }
                    if (vit == "vitoria") {
                        var tes = "🥳 Vitória do Jogador"
                    }
                    if (vit == "derrota") {
                        var tes = "🐱 Vitória do Risky Robbot"
                    }
                    if (vit == "empate") {
                        var tes = "O jogo acabou em um empate"
                    }
                    reply(`*🤖${botname}:* ${pptb}\n*🏮Jogador:* ${args}\n\n${tes}`)
                    if (tes == "🥳 Vitória do Jogador") {
                        reply(pph)
                    }
                    gameAdd(sender, glimit)
            break
case  'jogodavelga': case 'ttc': case 'jogodavelha':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Seu limite de jogo acabou, verifique em *${prefix}Limite* ou *${prefix}Me* `)
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `J O G O  D A  V E L H A
     
Há uma sessão de jogo neste grupo!!

Info : 
  Jogador ❎ : @${boardnow.X}
  Jogador ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Vez de @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Digite desistir para desistir...
Digite ${prefix}delttc para Excluira sessão do jogo...`;
client.sendMessage(from, monospace(chatMove), MessageType.text, {
quoted: sen,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
  }
if (argss.length === 1)
return reply(`_Marque seu oponente!_\n\nEx : *${prefix + command} @RiskyModz*`
                         );
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
const strChat = `J O G O  D A  V E L H A

@${sender.replace("@s.whatsapp.net","")} Desafiou ${argss[1]} para se tornar oponente do jogo!!
     
${argss[1]}  Digite Aceitar/Rejeitar

Note : 
  • REJEITAR : Para negar o desafio...
  • ACEITAR : Para aceitar o desafio...`;
client.sendMessage(from, monospace(strChat), MessageType.text, {
quoted: sen,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
gameAdd(sender, glimit)
gameAdd(sender, glimit)
gameAdd(sender, glimit)
break
                    
case  'delttc':
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Sessão excluída com sucesso neste grupo!`);
  } else {
reply(`Nenhuma sessão em andamento, digite ${prefix}tictactoe`);
  }
break
                  
			
case 'caklontong':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let anih = anu.data.result.jawaban.toLowerCase()
game.addckl(from, anih, gamewaktu, ckl)
gameAdd(sender, glimit)
	}
break
						
//-----  𝗝𝘂𝗲𝗴𝗼𝘀 𝗽𝗮𝗿𝗮 𝗴𝗮𝗻𝗮𝗿 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀--         
case 'math':
case 'mate':
case 'mates':
case 'matemática':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`🌡Limite exedido! Digite ${prefix}limite para checar mais informações.`)
if (!isGroup && !sen.key.fromMe) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`❎ Ainda não respondeu a anterior`)
if (!q && !sen.key.fromMe) return reply(`*🧮 Dificuldades disponíveis :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Exemplo : ${prefix + command} normal_`)

const operators = ["+","×","÷","-"]
const opez = operators[Math.floor(Math.random() * operators.length)]
opex = opez

					if (args[0] === 'noob' ) {
const opy = ["+","*","-"]
const opez = opy[Math.floor(Math.random() * opy.length)]
const matec0 = `${Math.floor(Math.random() * 10)}`
const matec1 = `${Math.floor(Math.random() * 10)}`
const mated = `${matec0} ${opez} ${matec1}`
maat = mated
timeax = 12
Ganhoax = 170
let vall = maat
let resulat = (new Function('return ' + vall))()
if (!resulat) throw resulat
const resulaz = resulat

reply(`Quanto é o resultado de *${maat}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750  botcoins`)
game.addmtk(from, resulaz, timeax, mtk)
} else if (args[0] === 'fácil') {
const opyy = ["+","*","-","÷"]
const opezz = opyy[Math.floor(Math.random() * opyy.length)]
const matecc0 = `${Math.floor(Math.random() * 100)}`
const matecc1 = `${Math.floor(Math.random() * 100)}`
const mateed = `${matecc0} ${opezz} ${matecc1}`
maat = mateed
timeax = 32
Ganhoax = 170
let vaall = maat
let resulaat = (new Function('return ' + vaall))()
if (!resulaat) throw resulaat
const resulaaz = resulaat
reply(`Quanto é o resultado de *${maat}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resulaaz, timeax, mtk)
} else if (args[0] === 'facil') {
const opyyy = ["+","*","-","÷"]
const opezzz = opyyy[Math.floor(Math.random() * opyyy.length)]
const mateccc0 = `${Math.floor(Math.random() * 100)}`
const mateccc1 = `${Math.floor(Math.random() * 100)}`
const mateeed = `${mateccc0} ${opezzz} ${mateccc1}`
maaat = mateeed
timeax = 32
Ganhoax = 170
let vaaall = maaat
let resulaaat = (new Function('return ' + vaaall))()
if (!resulaaat) throw resulaaat
const resulaaaz = resulaaat
reply(`Quanto é o resultado de *${maaat}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resulaaaz, timeax, mtk)
					} else if (args[0] === 'normal') {
const opyyyy = ["+","*","-","÷"]
const opezzzz = opyyyy[Math.floor(Math.random() * opyyyy.length)]
const matecccc0 = `${Math.floor(Math.random() * 1000)}`
const matecccc1 = `${Math.floor(Math.random() * 1000)}`
const mateeeed = `${matecccc0} ${opezzzz} ${matecccc1}`
maaaat = mateeeed
timeax = 52
Ganhoax = 170
let vaaaall = maaaat
let resulaaaat = (new Function('return ' + vaaaall))()
if (!resulaaaat) throw resulaaaat
const resulaaaaz = resulaaaat
reply(`Quanto é o resultado de *${maaaat}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resulaaaaz, timeax, mtk)
					} else if (args[0] === 'difícil') {
const opyyyyy = ["+","*","-","÷"]
const opezzzzz = opyyyyy[Math.floor(Math.random() * opyyyyy.length)]
const mateccccc0 = `${Math.floor(Math.random() * 10000)}`
const mateccccc1 = `${Math.floor(Math.random() * 10000)}`
const mateeeeed = `${mateccccc0} ${opezzzzz} ${mateccccc1}`
maaaaat = mateeeeed
timeax = 60
Ganhoax = 170
let vaaaaall = maaaaat
let resulaaaaat = (new Function('return ' + vaaaaall))()
if (!resulaaaaat) throw resulaaaaat
const resulaaaaaz = resulaaaaat
reply(`Quanto é o resultado de *${maaaaat}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resulaaaaaz, timeax, mtk)
} else if (args[0] === 'dificil') {
const opqy = ["+","*","-","÷"]
const opeqz = opqy[Math.floor(Math.random() * opqy.length)]
const mateq0 = `${Math.floor(Math.random() * 10000)}`
const mateq1 = `${Math.floor(Math.random() * 10000)}`
const matqd = `${mateq0} ${opeqz} ${mateq1}`
mqt = matqd
timeax = 60
Ganhoax = 170
let vqll = mqt
let resulqt = (new Function('return ' + vqll))()
if (!resulqt) throw resulqt
const resulqz = resulqt
reply(`Quanto é o resultado de *${mqt}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resulqz, timeax, mtk)
} else if (args[0] === 'extremo') {
const opiy = ["+","*","-","÷"]
const opeiz = opiy[Math.floor(Math.random() * opiy.length)]
const matei0 = `${Math.floor(Math.random() * 1000000)}`
const matei1 = `${Math.floor(Math.random() * 1000000)}`
const matid = `${matei0} ${opeiz} ${matei1}`
mit = matid
timeax = 60
Ganhoax = 170
let vill = mit
let resulit = (new Function('return ' + vill))()
if (!resulit) throw resulit
const resuliz = resulit
reply(`Quanto é o resultado de *${mit}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resuliz, timeax, mtk)
} else if (args[0] === 'imposible') {
const opoy = ["+","*","-","÷"]
const opeoz = opoy[Math.floor(Math.random() * opoy.length)]
const mateo0 = `${Math.floor(Math.random() * 100000000)}`
const mateo1 = `${Math.floor(Math.random() * 100000000)}`
const matod = `${mateo0} ${opeoz} ${mateo1}`
mot = matod
timeax = 60
Ganhoax = 170
let voll = mot
let resulot = (new Function('return ' + voll))()
if (!resulot) throw resulot
const resuloz = resulot
reply(`Quanto é o resultado de *${mot}*?\n\n*⏰Tempo:* ${timeax} segundos\n*💰Ganho:* +750 botcoins`)
game.addmtk(from, resuloz, timeax, mtk)
					} else {
					  reply(`🗂️  *${args[0]}* Não disponível!\n\n*🧮 Dificuldades disponíveis :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Exemplo : ${prefix + command} normal_`)
					}
					gameAdd(sender, glimit)
					gameAdd(sender, glimit)
break

case 'family100':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lol}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Resultado :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
  }
game.addfam(from, rgfds, gamewaktu, family100)
gameAdd(sender, glimit)
  }
break

case 'hbd': case 'signo': case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorno",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pirarucu",      new Date(1970, 1, 19)],
    ["Áriesligena",       new Date(1970, 2, 21)],
    ["Chifrudo",      new Date(1970, 3, 21)],
    ["Gemedor",      new Date(1970, 4, 21)],
    ["Careca",      new Date(1970, 5, 22)],
    ["Leôncio",         new Date(1970, 6, 23)],
    ["Cabaço",       new Date(1970, 7, 23)],
    ["Mudo",       new Date(1970, 8, 23)],
    ["Scorpiao",     new Date(1970, 9, 23)],
    ["Sargitouro", new Date(1970, 10, 22)],
    ["Capricorno",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Aniversário : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Idade : ${cekusia}
Signo : ${zodiac}
`.trim()
reply(monospace(teksh))
break

case 'cassino2':
const cassino = ['ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 1 ━━━ 2 ━━━ 3*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 2 ━━━ 3 ━━━ 1*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 3 ━━━ 2 ━━━ 1*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 1 ━━━ 3 ━━━ 2*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 2 ━━━ 1 ━━━ 3*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 3 ━━━ 1 ━━━ 2*\n*┃*\n*┃*\n*┣* Não foi dessa vez mas\n*┃* continue tentando.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 1 ━━━ 1 ━━━ 1*\n*┃*\n*┃*\n*┣* PARABÉNS !!!\n*┣* VOCÊ GANHOU NO CASSINO.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 2 ━━━ 2 ━━━ 2*\n*┃*\n*┃*\n*┣* PARABÉNS !!!\n*┣* VOCÊ GANHOU NO CASSINO.\n*┃*\n*┗━━ CASSINO ━━━*','ㅤ\n*┏━━ CASSINO ━━━*\n*┃*\n*┃*\n*┣* ROLETA DOS TRÊS\n*┣* NÚMEROS\n*┃*\n*┣━━ 3 ━━━ 3 ━━━ 3*\n*┃*\n*┃*\n*┣* PARABÉNS !!!\n*┣* VOCÊ GANHOU NO CASSINO.\n*┃*\n*┗━━ CASSINO ━━━*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break
case 'cassino':
case 'cassinovip':
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break

case 'modz':
	if (!isOwner) return reply('Apenas o proprietário pode usar esse comando!!' ,text, { quoted: sen })
listMsg = {
 buttonText: 'Ver Comandos',
 footerText: '\n© By: Risky Modz\nhttps://youtube.com/c/Risky傳說',
 description: `${Tanggal}\n_Olá, *${pushname}*!_

_Esse é o *menu* em lista feito para facilitar a sua vida!_

_Para o comando funcionar, *selecione e envie* o menu que quer abrir!_`,
 sections: [
                     {
                      "title": `${waktoo}`,
 rows: [
{
                          "title": "Antidelete on",
description: `Leia um pequeno livro...`,
"rowId": ""
},      
{
                              "title": "Antidelete off",
                              description: `Menu de edição de fotos!`,
                              "rowId": ""
                           },
                           {
                          "title": "Self",
description: `Menu de gerar dados!`,
"rowId": ""
},
                           {
                          "title": "Public",
description: `Vídeos para shitposter!`,
"rowId": ""
},
{
                              "title": "Admin",
                              description: `Comandos que só administradores podem usar!`,
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
 }
client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:sen})
break
case 'dado':
                    if(!isVerify) return isUser()
               if (!isGroup) return reply(mess.only.group) 
                if (!isLevelingOn) return reply(mess.leveloff)
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.gCoinF)
                    const ui5 =['https://i.ibb.co/C1JWnBy/dado1.webp', 'https://i.ibb.co/0Df0nbC/dado2.webp', 'https://i.ibb.co/d6g2qqv/dado3.webp', 'https://i.ibb.co/N2xVTSh/dado4.webp', 'https://i.ibb.co/Jm0Lscc/05.webp', 'https://i.ibb.co/3YTt91V/dado6.webp']
                    xfjjs5 = ui5[Math.floor(Math.random() * ui5.length)]
                    dadoz = await getBuffer(xfjjs5)
                    client.sendMessage(from, dadoz, MessageType.sticker, {quoted: sen})
                    .catch((err) => {
                    	reply(`❎ Error, tente novamente mais tarde!`);
                    })
                    gameAdd(sender, glimit)
                    break
			case 'dado2':
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: sen})
break

    // CONSULTAS DO BOT BY; RISKY MODZ
case 'ddd':
var ddd = body.slice(5)
if (ddd.length < 1) return reply(`Uso: ${prefix + command} 85`)
if (ddd.length > 3) return reply(`*⚠️ DDD INVÁLIDO!*`)
	reply(`🔮 - _Buscando ddd *${ddd}*_`)
anu = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
msg =
`🔥 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗣 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 🔥
━━━━━━━━━━━━━━━━━

• *Estado:* ${anu.state}

• *Cidades:* ${anu.cities}

━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, msg, text, {quoted:sen})
break

case 'grafit':
reply(mess.wait)
grafit = body.slice(7)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api//textpro/gravity1?text=${grafit}&apikey=Ikyy69`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, {quoted:finvite})
break

case 'smurf':
reply(mess.wait)
smurf = body.slice(6)
anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/smurf?text=${smurf}&apikey=Ikyy69`)
client.sendMessage(from, anu, image, {quoted:finvite})
break

case 'bin':

          if (args.length < 1) return reply(`Uso: ${prefix + command} 441036`)
	reply(`*🔎 Buscando informações...*`)
	bin = body.slice(5)
anu = await fetchJson(`https://lookup.binlist.net/${bin}`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗣 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗧𝗜𝗣𝗢: ${anu.type} 
️‍• 𝗖𝗔𝗥𝗧𝗔𝗢: ${anu.scheme} 
️‍• 𝗣𝗥𝗘-𝗣𝗔𝗚𝗢: ${anu.prepaid} 

️‍• 𝗕𝗔𝗡𝗖𝗢: ${anu.bank.name} 
️‍• 𝗨𝗥𝗟: ${anu.bank.url} 
️‍• 𝗙𝗢𝗡𝗘: ${anu.bank.phone} 

️‍• 𝗣𝗔𝗜𝗦: ${anu.country.name} 
• 𝗦𝗜𝗚𝗟𝗔: ${anu.country.alpha2} 
️‍• 𝗕𝗔𝗡𝗗𝗘𝗜𝗥𝗔: ${anu.country.emoji} 
️‍• 𝗠𝗢𝗘𝗗𝗔: ${anu.country.currency} 
️‍• 𝗟𝗔𝗧𝗜𝗧𝗨𝗗𝗘: ${anu.country.latitude} 
️‍• 𝗟𝗢𝗡𝗚𝗜𝗧𝗨𝗗𝗘: ${anu.country.longitude} 

━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break
case 'cep':

if (args.length < 1) return reply('ex: cep 19380000')
	reply(`BUSCANDO INFORMAÇÕES...`)
cep = body.slice(4)
anu = await fetchJson(`http://brizas-api.herokuapp.com/consulta/cep?apikey=brizaloka&cep=${cep}`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗣 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗖𝗘𝗣: ${anu.resultado.cep} 
 
️‍• 𝗟𝗢𝗚𝗥𝗔.: ${anu.resultado.logradouro}
️‍• 𝗖𝗢𝗠𝗣.: ${anu.resultado.complemento} 
️‍• 𝗕𝗔𝗜𝗥𝗥𝗢: ${anu.resultado.bairro}
️‍• 𝗟𝗢𝗖𝗔𝗟: ${anu.resultado.localidade}

️‍• 𝗨𝗙: ${anu.resultado.uf}
️‍• 𝗜𝗕𝗚𝗘: ${anu.resultado.ibge}
️‍• 𝗚𝗜𝗔: ${anu.resultado.gia}
️‍• 𝗗𝗗𝗗: ${anu.resultado.ddd}

• 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ${pushname}
 
━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break 
  
   case 'placa':
placa = body.slice(7)
reply(`*OFFLINE...*`)
anu = await fetchJson(`https://apicarros.com/v1/consulta/${placa}/json`)
ccg = `Teste: ${anu.anoModelo} Teste: ${anu.ano} Teste: ${anu.data}`
client.sendMessage(from, ccg, text, {quoted:sen})
  break   
            case 'cpf':
if (cpf.length < 1) return reply(`ex: ${prefix + command} 06200403864`)
if (cpf.length > 19) return reply(`*⚠️ CPF INVÁLIDO!*`)
					reply(`*CONSULTANDO...*`)
cpf = body.slice(5)
try{
anu = await fetchJson(`http://api.trackear.com.br/basepv/cpf/${cpf}/noip`)
               if (anu.error) return reply(anu.error)
ccg =
`🔍 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗣𝗙 🔎

• 𝗖𝗣𝗙: ${anu.cpf}

• 𝗡𝗢𝗠𝗘: ${anu.nome}
• 𝗦𝗘𝗫𝗢: ${anu.sexo}/${anu.sexoSig}

• 𝗡𝗔𝗦𝗖𝗜𝗠𝗘𝗡𝗧𝗢: ${anu.dtNascimento}
• 𝗜𝗗𝗔𝗗𝗘: ${anu.idade}


• 𝗛𝗢𝗥𝗔: ${anu.dtConsulta}
• 𝗗𝗘𝗟𝗔𝗬: ${anu.delay}

🔛 𝗕𝗬: @Riskyzin`
await client.sendMessage(from, ccg, text, {quoted:sen})
}catch{
reply("⚠️ *CPF NÃO ENCONTRADO!*")
}
    break

case 'telefone':
if (args.length < 100) return reply(`OFFLINE`)
					reply(`*CONSULTANDO...*`)
telefone = body.slice(10)
anu = await fetchJson(`http://api.ifindconsultas.tk/?token=82d01fc1-81ed-4f77-b9e9-5beb9c606703&tel=${telefone}`)
               if (anu.error) return reply(anu.error)
ccg =`🔍 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘 🔎

• TEL: ${anu.telefone.telefone} 

• NOME: ${anu.telefone.nome} 
• CPF/CNPJ: ${anu.telefone.cpfcnpj}   
• SEXO: ${anu.telefone.sexo} 
• MAE: ${anu.telefone.mae}
• NASCIMENTO: ${anu.telefone.nasc}

• CIDADE: ${anu.telefone.cidade} 
• ENDEREÇO: ${anu.telefone.endereco} 
• NÚMERO: ${anu.telefone.numero} 
• BAIRRO: ${anu.telefone.bairro} 
• CEP: ${anu.telefone.cep} 

• EMAIL: ${anu.telefone.emails}
• UF: ${anu.telefone.uf}
• N° ELEITOR: ${anu.telefone.titulo_eleitor}

🔛 By: @Riskyzin`
client.sendMessage(from, ccg, text, {quoted:sen})
break

          case 'ip':

if (args.length < 1) return reply('ex: ip 45.237.248.18')
					reply(`*CONSULTANDO...*`)
ip = body.slice(4)
anu = await fetchJson(`http://brizas-api.herokuapp.com/consulta/ip?apikey=brizaloka&ip=${ip}`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗩𝗜𝗣 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 🔥
━━━━━━━━━━━━━━━━━

• 𝗜𝗣: ${anu.resultado.ip_informado}

• 𝗣𝗔𝗜𝗦: ${anu.resultado.pais}
• 𝗦𝗜𝗚𝗟𝗔:${anu.resultado.codigo_pais}

• 𝗥𝗘𝗚𝗜𝗔𝗢: ${anu.resultado.regiao}
• 𝗦𝗜𝗚𝗟𝗔: ${anu.resultado.codigo_regiao}

• 𝗖𝗜𝗗𝗔𝗗𝗘: ${anu.resultado.cidade}
• 𝗖𝗢𝗗𝗜𝗚𝗢: ${anu.resultado.codigo_postal}

• 𝗟𝗔𝗧𝗜𝗧𝗨𝗗𝗘: ${anu.resultado.latitude}
• 𝗟𝗢𝗡𝗚𝗜𝗧𝗨𝗗𝗘: ${anu.resultado.longitude}

• 𝗙𝗨𝗦𝗢 𝗛𝗢𝗥𝗔𝗥𝗜𝗢: ${anu.resultado.fuso_horario}

• 𝗣𝗥𝗢𝗩𝗘𝗗𝗢𝗥𝗔: ${anu.resultado.provedora}
• 𝗘𝗠𝗣𝗥𝗘𝗦𝗔: ${anu.resultado.empresa}

• 𝗔𝗦: ${anu.resultado.as}

• 𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ${pushname}

━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
    break

// FINAL DAS CONSULTAS
// GERADORES BY: RISKY MODZ
case 'gerador':
var a
reply(mess.wait)
try{
data = await  fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}`)
buff = fs.readFileSync('./assets/con.jpeg')
cap = `*⚙ GERADOR RÁPIDO*

*• GERAR PESSOA*

*• GERAR CEP*`
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${a}`, buttonText: {displayText: 'PESSOA'}, type: 1},
{buttonId: `${a}`, buttonText: {displayText: 'CEP'}, type: 1}
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: cap,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}catch{
	reply(mess.error)
}
limitAdd(sender, limit)
break

case 'gerarcpf':
          
	reply(`*🔨 Gerando, Aguarde...*`)
		await limitAdd(sender)							
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/cpf?apikey=brizaloka`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗚𝗘𝗥𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗖𝗣𝗙: ${anu.CPF} 
  
━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break

case 'gerarcep':
          
	reply(`*🔨 Gerando, Aguarde...*`)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/cep?apikey=brizaloka`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗚𝗘𝗥𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗖𝗘𝗣: ${anu.CEP} 
  
━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break

case 'gerarcertidão':
case 'gerarcertidao':
          
	reply(`*🔨 Gerando, Aguarde...*`)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/certidao?apikey=brizaloka`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗚𝗘𝗥𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗖𝗘𝗥𝗧𝗜𝗗𝗔𝗢: ${anu.certidao} 
  
━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break

case 'gerarpessoa':
          
	reply(`*🔨 Gerando, Aguarde...*`)
anu = await fetchJson(`http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka`)
               if (anu.error) return reply(anu.error)
ccg =
`🔥 𝗚𝗘𝗥𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🔥
━━━━━━━━━━━━━━━━━
 
️‍• 𝗡𝗢𝗠𝗘: ${anu.resultado.nome} 
️‍• 𝗠𝗔𝗘: ${anu.resultado.mae} 
️‍• 𝗣𝗔𝗜: ${anu.resultado.pai} 
️‍• 𝗥𝗚: ${anu.resultado.RG} 
️‍• 𝗖𝗣𝗙: ${anu.resultado.CPF} 
️‍• 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘: ${anu.resultado.telefone} 
️‍• 𝗡𝗔𝗦𝗖𝗜𝗠𝗘𝗡𝗧𝗢: ${anu.resultado.nascimento} 
️‍• 𝗦𝗜𝗚𝗡𝗢: ${anu.resultado.signo} 
️‍• 𝗔𝗟𝗧𝗨𝗥𝗔: ${anu.resultado.altura} 
️‍• 𝗣𝗘𝗦𝗢: ${anu.resultado.peso} 
️‍• 𝗦𝗔𝗡𝗚𝗨𝗘: ${anu.resultado.tipoSanguineo} 

• 𝗘𝗡𝗗𝗘𝗥𝗘𝗖̧𝗢 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢
️‍• 𝗖𝗘𝗣: ${anu.resultado.endereco.cep} 
️‍• 𝗟𝗢𝗚𝗥𝗔.: ${anu.resultado.endereco.logradouro} 
️‍• 𝗖𝗢𝗠𝗣𝗟.: ${anu.resultado.endereco.complemento} 
️‍• 𝗡𝗨𝗠𝗘𝗥𝗢: ${anu.resultado.endereco.numero} 
️‍• 𝗕𝗔𝗜𝗥𝗥𝗢: ${anu.resultado.endereco.bairro} 
️‍• 𝗖𝗜𝗗𝗔𝗗𝗘: ${anu.resultado.endereco.cidade} 
• 𝗘𝗦𝗧𝗔𝗗𝗢: ${anu.resultado.endereco.estado} 
• 𝗦𝗜𝗚𝗟𝗔: ${anu.resultado.endereco.estadoSigla} 
  
━━━━━━━━━━━━━━━━━
🔰 𝗕𝗢𝗧 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢: 𝗥𝗜𝗦𝗞𝗬 𝗕𝗢𝗧`
client.sendMessage(from, ccg, text, {quoted:sen})
break


    case 'nick':
                
if (args.length < 1) return reply('Ex: nick Risky Modz')
reply(`🧙‍♂️ Bruxo Risky está criando seu Nick...`)
teks = body.slice(5)
if (teks.length > 30) return reply('O texto é longo, até 30 caracteres')
	haha = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&&text=${teks}`)
if (haha.error) return reply(haha.error)
ccg =
`🔥 𝗚𝗘𝗥𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 🔥
━━━━━━━━━━━━━━━━━
 
️‍• Aleatório: ${haha.random_1}
• Aleatório: ${haha.random_2}
• Aleatório: ${haha.random_3}
• Aleatório: ${haha.random_4}
• Aleatório: ${haha.random_5}

• Quadrado1: ${haha.squares}
• Quadrado2: ${haha.inverted_squares}

• Invertido: ${haha.flip}
• Espelhar: ${haha.mirror}
• Não sei: ${haha.bent}

• Itálico: ${haha.italic}
• Bold:  ${haha.bold}
• Os 2: ${haha.bold_italic}

• Subscrito:  ${haha.subscript}
• Subscrito2:  ${haha.superscript}

• Fino: ${haha.tiny}
• Medieval: ${haha.medieval}

• Duas linhas: ${haha.double_struck}
• Cursiva: ${haha.cursive}
• Inglês: ${haha.old_english}
• Alien: ${haha.future_alien}

• Asiático1: ${haha.asian_1}
• Asiático2: ${haha.asian_2}

• Estranho1: ${haha.squiggle}
• Estranho2: ${haha.squiggle_2}
• Estranho3: ${haha.squiggle_3}
• Estranho4: ${haha.squiggle_4}

• Neon: ${haha.neon}
• Bolha: ${haha.bubbles}



• Zalgo: ${haha.creep}

• Usuário: ${pushname}
• Enviado: 𝐑𝐈𝐒𝐊𝐘 𝐁𝐎𝐓`
client.sendMessage(from, ccg, text, {quoted:sen})
break
// FIM GERADORES
// DOWNLOAD DE ARQUIVOS BY: RISKY
  case 'riskyapp':
  if (!isGroup) return reply(mess.only.group)
                    if (args.length == 0) return reply(`Example: ${prefix + command} (nome)`)
                  reply(`*🔎 Buscando Aplicativo...*`)
                      henid = body.slice(10)
                    anu = await fetchJson(`https://neoxr-api.herokuapp.com/api/download/apkmod?q=${henid}&apikey=yntkts`)
                    lagu = await getBuffer(anu.data.download)
                    msg = `🔰 𝗔𝗣𝗟𝗜𝗖𝗔𝗧𝗜𝗩𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢!

➵ 𝗧𝗶́𝘁𝘂𝗹𝗼: ${anu.data.name}

➵ 𝗗𝗲𝘀𝗲𝗻𝘃𝗼𝗹𝘃𝗲𝗱𝗼𝗿: ${anu.data.developer}

➵ 𝗧𝗮𝗺𝗮𝗻𝗵𝗼: ${anu.data.size}

⚠ *Renomeie o .pdf pelo tipo do arquivo!*

• 𝗕𝘆: 𝗥𝗶𝘀𝗸𝘆 𝗠𝗼𝗱𝘇️`
                    client.sendMessage(from, msg, text, {quoted:sen})                                     
                    client.sendMessage(from, lagu, document, { quoted: sen, mimetype: Mimetype.pdf, filename: `${anu.data.filename}` })
                            break
               case 'mdfire':
if (!isGroup) return reply(mess.only.group)               
                    if (args.length == 0) return reply(`Example: ${prefix + command} (link)`)
                                                 if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
                   reply(`*🕒 Aguarde...*`)
                       henid = body.slice(7)
                    anu = await fetchJson(`https://hujanapi.herokuapp.com/api/mediafire?url=${henid}&apikey=trial2k21`)
                    lagu = await getBuffer(anu.result.url)
                    msg = `📁 𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢!

➵ 𝗧𝗶́𝘁𝘂𝗹𝗼: ${anu.result.title}
➵ 𝗧𝗮𝗺𝗮𝗻𝗵𝗼: ${anu.result.size}
➵ 𝗧𝗶𝗽𝗼: ${anu.result.type}

⚠ 𝗤𝗨𝗔𝗡𝗗𝗢 𝗢 𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗙𝗢𝗥 𝗘𝗡𝗩𝗜𝗔𝗗𝗢, 𝗥𝗘𝗡𝗢𝗠𝗘𝗜𝗢 𝗢 .𝗣𝗗𝗙 𝗣𝗘𝗟𝗢 𝗧𝗜𝗣𝗢 𝗗𝗢 𝗔𝗥𝗤𝗨𝗜𝗩𝗢 ️⚠️`
                    client.sendMessage(from, msg, text, {quoted:sen})                                     
                    client.sendMessage(from, lagu, document, { quoted: sen, mimetype: Mimetype.pdf, filename: `riskybot.pdf` })
                            break
// FIM DOS APK
// BAIXAR DO YOUTUBE
    				case 'playgod':

				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Cadê o nome, hum?')
                reply(mess.wait)
                play = body.slice(7)
                anu = await fetchJson(`http://hadi-api.herokuapp.com/api/ytplay?q={play}`)
               if (anu.error) return reply(anu.error)
msg = `*⚜️ 𝐆𝐎𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ⚜️*

ギ *Título:* ${anu.result.title}
ギ *Duração:* ${anu.result.duration}
ギ *Views:* ${anu.result.viewer}
ギ *Likes:* ${anu.result.like}
ギ *Deslikes:* ${anu.result.dislike}
ギ *Publicado:* ${anu.result.published}
ギ *Descrição:* ${anu.result.desc}

*☕ BAIXANDO... AGUARDE!*`
                buffer = await getBuffer(anu.result.album)
                lagu = await getBuffer(anu.result.download_audio)
                client.sendMessage(from, buffer, image, {quoted: sen, caption: msg })>
                client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                   break
                   
                   				case 'playrisky':

				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Cadê o nome, hum?')
                reply(mess.wait)
                play = body.slice(9)
                try{
                anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/yt/playmp3?query=${play}&apikey=hardianto`)
               if (anu.error) return reply(anu.error)
                msg = `*🔥 MÚSICA ENCONTRADA 🔥*\nギ Título: ${anu.title}\nギ Canal: ${anu.channel}\nギ Views: ${anu.views}\nギ Publicado: ${anu.published}\n*❗ ENVIANDO SUA MÚSICA❗*`
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.url)
                await client.sendMessage(from, buffer, image, {quoted: sen, caption: msg })
              await client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                  }catch{
                  reply(`⚠️ - _Comandos *Offline*. Tente usando o *${prefix}Play* que é o mais difícil de cair._`)
                  }
                    break
                   
				case 'playvip':
						if (args.length < 1) return reply('Cadê o nome, hum?')
                reply(mess.wait)
                play = body.slice(7)
                try{
                anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${play}&apikey=MIMINGANZ`)
               if (anu.error) return reply(anu.error)
                msg = `*⚜️ MÚSICA ENCONTRADA ⚜️*\n~ Título: ${anu.result.title}\n~ Duração: ${anu.result.duration}\n~ Views: ${anu.result.view}\n~ Publicado: ${anu.result.published}\n*☕ BAIXANDO... AGUARDE!*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.audio)
                await client.sendMessage(from, buffer, image, {quoted: sen, caption: msg })
                await client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝚯𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝚯 🦄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                                   }catch{
                  reply(`⚠️ - _Comandos *Offline*. Tente usando o *${prefix}Play* que é o mais difícil de cair._`)
                  } 
                    break
                                           case 'ytmp42':
                    if (args.length == 0) return reply(`Example: ${prefix + command} (link)`)
                    if(!isUrl(args[0]) && !args[0].includes('youtube')) return reply(mess.error.Iv)
                    reply(`*🕒 Buscando Resultados...*`)
                    link = body.slice(7)
                    anu = await fetchJson(`https://janbot-api.herokuapp.com/api/download/ytmp4?url=${link}`)

                    lagu = await getBuffer(anu.result.url)
                    msg = `🎥 𝗩𝗜𝗗𝗘𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢!

➵ 𝗧𝗶́𝘁𝘂𝗹𝗼: ${anu.result.title}
➵ 𝗖𝗮𝗻𝗮𝗹: ${anu.result.channel}
➵ 𝗩𝗶𝗲𝘄𝘀: ${anu.result.views}
➵ 𝗗𝗮𝘁𝗮: ${anu.result.published}

🔥 𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗢 𝗩𝗜𝗗𝗘𝗢... `
                    client.sendMessage(from, fagu, image, {quoted:sen, caption: msg})                                     
                    client.sendMessage(from, lagu, video, {quoted:sen})                                     
                                     break
                     case 'playzao':
                            
if (args.length < 1) return reply('Digite o nome da música!')
	reply(`🔎 BUSCANDO SUA MÚSICA...`)
cnpj = body.slice(8)
try{
hoho = await fetchJson(`https://janbot-api.herokuapp.com/api/yt/playmp3?query=${cnpj}`)
if (hoho.error) return reply(hoho.error)
msg =
`🔥 𝗠𝗨𝗦𝗜𝗖𝗔 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔 🔥
 
𖥔 *TITULO:* ${hoho.title}

𖥔 *CANAL:* ${hoho.channel}

𖥔 *VIEWS:* ${hoho.views}

𖥔 *DATA:* ${hoho.published}

❗𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗦𝗨𝗔 𝗠𝗨𝗦𝗜𝗖𝗔❗

〃 *BY: RISKY BOT*`

buffer = await getBuffer(hoho.thumb)
lagu = await getBuffer(hoho.url)
await client.sendMessage(from, buffer, image, {quoted: sen, caption: msg })
await client.sendMessage(from, lagu, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🦄𝐁𝐎𝐓 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                  }catch{
                  reply(`⚠️ - _Comandos *Offline*. Tente usando o *${prefix}Play* que é o mais difícil de cair._`)
                  }
break
// FIM DO YOUTUBE

  case 'ss':
	reply(`Printando...`)
ss = body.slice(3)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${ss}&apikey=MIMINGANZ`)
               if (anu.error) return reply(anu.error)
client.sendMessage(from, anu, image, {quoted:sen})
break                                   
                                      case 'phub':
                reply(mess.wait)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `Risky`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Bot`    
		            try{            
 haha = await getBuffer(`https://pencarikode.xyz/api/textpro/phub?text=${satu}&text2=${dua}&apikey=APIKEY`)
await client.sendMessage(from, haha, image, {quoted: sen})
}catch{
buttons = [{buttonId: `menu`, buttonText: {displayText: 'Menu Principal'}, type: 1},{buttonId: `dono`, buttonText: {displayText: 'Meu Dono'}, type: 1},{buttonId: `Stickerr`, buttonText: {displayText: 'Figurinhas'}, type: 1}]
const btnbc = {
    contentText: `Ocorreu um erro ao tentar abrir o *Comando* 😓:`,
    footerText: `Para ajuda, aperte em *"Meu Dono"*.`,
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(from, btnbc, MessageType.buttonsMessage, {quoted: riskyz})
}
break


// SITES PORNÔ DOWNLOADER BY; RISKY MODZ
			
          case 'xnxxdw':
                
                 if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
                              if(!isUrl(args[0]) && !args[0].includes('xnxx')) return reply(mess.error.Iv)
               reply(`*🕒 Aguarde...*`)
                 teks = body.slice(8)
	haha = await fetchJson(`https://hujanapi.herokuapp.com/api/xnxxdl?url=${teks}&apikey=trial2k21`)
if (haha.error) return reply(haha.error)
ccg =
`🔥 𝑩𝑨𝑰𝑿𝑨𝑫𝑶 𝑪𝑶𝑴 𝑺𝑼𝑪𝑬𝑺𝑺𝑶 🔥
 
🌀 *Descrição:* ${haha.desc}

🌀 *Tamanho:* ${haha.size}

⚜️ *Usuário:* ${pushname}`
buffer = await getBuffer(haha.vid)
client.sendMessage(from, buffer, video, {quoted: sen, caption: ccg })
break				
          case 'xvideosdw':
if (!isGroup) return reply(mess.only.group)                
                 if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
                              if(!isUrl(args[0]) && !args[0].includes('xnxx')) return reply(mess.error.Iv)
               reply(`*🕒 Aguarde...*`)
                 teks = body.slice(11)
	haha = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideosdl?url=${teks}&apikey=trial2k21`)
if (haha.error) return reply(haha.error)
ccg =
`🔥 𝗕𝗔𝗜𝗫𝗔𝗡𝗗𝗢 𝗦𝗘𝗨 𝗣𝗢𝗥𝗡 🔥
 
🌀 *Titulo:* ${haha.judul}

🌀 *Tamanho:* ${haha.size}

⚜️ Usuário: ${pushname}`
buffer = await getBuffer(haha.vid)
client.sendMessage(from, buffer, video, {quoted: sen, caption: ccg })
break
        case 'xvideos':             
                 if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
                teks = body.slice(8)
                if (teks.length < 1) return reply('O texto é muito curto!')
if (teks.length > 30) return reply('O texto é longo, até 30 caracteres')
	reply(`*🕒 Aguarde...*`)
	haha = await fetchJson(`http://brizas-api.herokuapp.com/porn/xvideos?apikey=brizaloka&query=${teks}`)
if (haha.error) return reply(haha.error)
ccg =
`😈 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎
 
️‍• ID: ${haha.id}
️‍• Título: ${haha.titulo}

• Link: ${haha.link}

• Visualizações: ${haha.view}
• Curtidas: ${haha.likes}
• Deslikes: ${haha.deslikes}
• Comentários: ${haha.comentarios}

• Canal: ${haha.canal}
• Status: ${haha.status}

• Usuário: ${pushname}`
buffer = await getBuffer(haha.thumb)
client.sendMessage(from, buffer, image, {quoted: sen, caption: ccg })
break	

case 'lobo':	
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`🌡Limite exedido! Digite ${prefix}limite para checar mais informações.`)
reply(mess.wait)
teks = body.slice(5)
anu = await fetchJson(`https://zuxyapi.herokuapp.com/api/textpro/logo-wolf2?apikey=ZiyKey&text=Risky&text2=${teks}`)
lagu = await getBuffer(anu.result)
client.sendMessage(from, lagu, image, {quoted: finvite})
limitAdd(sender, limit)
break
			
case 'riskybot':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('🧠 - Já foi ativado antes.')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('🧠 - Ativado com sucesso!️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('🧠 - Desativado com sucesso!')
					} else {
						reply('1 para ativar 0 para desativar')
					}
					break
case 'inspetar':
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { idd, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await client.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${idd}
${owner ? `*Dono* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nome do Grupo* : ${subject}
*Total de Membros* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : Nada escrito'}
** : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             client.sendMessage(from,par,text,{quoted:sen,contextInfo:{mentionedJid:jids}})
             break
				case 'foot':
				case 'pussy':
				case 'cum':
				case 'ass':
				case 'blowjob':
				case 'ero':
				case 'kiss':
				case 'gangbang':
 if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
						reply(`⏱️ - _Aguarde no máximo *20s*, depois tente novamente!_`)
						try{
						anu = await fetchJson(`https://janbot-api.herokuapp.com/api/nsfw/${command}`)
						buffer = await getBuffer(anu.result)
					await client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Yamete kudasai >,,<'})
										}catch{										
buff = fs.readFileSync('./pathImage/erro.jpg')
tta = await client.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `pussy`, buttonText: {displayText: 'Buceta'}, type: 1},
{buttonId: `ass`, buttonText: {displayText: 'Bunda'}, type: 1},
{buttonId: `gangbang`, buttonText: {displayText: 'Gangbang'}, type: 1},
]
gbuttonan = {
imageMessage: tta.message.imageMessage,
contentText: `_Erro ao carregar a imagem!_\n_Você quer que envie:_`,
footerText: '© By: Risky Modz',
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:sen})
}
					break

					                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if(!isVerify) return isUser()
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
							reply(mess.aguarde)
                    if (args.length == 0) return reply(`Exemplo: Risky Modz`)
                    ini_txt = args.join(" ")
                    try{
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: sen})
                    limitAdd(sender, limit)   
                    					}catch{
					reply('_🐤 Deu Erro ao carregar imagem, tente novamente_')
					}
                                break
                          
								case 'hentai':
								if(!isVerify) return isUser()
								if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
					try{
					buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`)
await client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Yamete kudasai >,,<'})
}catch{
	        sendButMessage(from, `🐤 - Ocorreu um erro ao *Puxar a Imagem*.\n_• Você deseja Tentar Novamente?_`, `© By: Risky Modz`, [
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `Meu Criador`,
            },
            type: 1,
          },
                    {
            buttonId: `Tentar Novamente`,
            buttonText: {
              displayText: `Tentar Novamente`,
            },
            type: 1,
          },
        ])
}
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)

					break
												case 'hentai2':
													if(!isVerify) return isUser()
								if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
					try{
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/femdom?apikey=brizaloka`)
					client.sendMessage(from, buffer, image, {quoted: sen, caption: 'Yamete kudasai >,,<'})
					}catch{
	        sendButMessage(from, `🐤 - Ocorreu um erro ao *Puxar a Imagem*.\n_• Você deseja Tentar Novamente?_`, `© By: Risky Modz`, [
          {
            buttonId: `Abrir`,
            buttonText: {
              displayText: `Meu Criador`,
            },
            type: 1,
          },
                    {
            buttonId: `FECHAR`,
            buttonText: {
              displayText: `Tente Novamente`,
            },
            type: 1,
          },
        ])
}
limitAdd(sender, limit)
limitAdd(sender, limit)
limitAdd(sender, limit)
					break

case 'hentai3':
if(!isVerify) return isUser()
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limite)
  if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)

            reply(mess.wait) 
let loliz = hentai3[Math.floor(Math.random() * hentai3.length)]
      lolix = await getBuffer(loliz)
client.sendMessage(from, lolix, image, {quoted: sen, caption: `${isPremium ? '💎Não será descontado nenhum diamante!' : `💎-1 Diamante por utilizar essa função!`}\n\n✅ Aqui você tem, *Onii-chan*`, thumbnail: lolix})
.catch((err) => {
            reply(`❎ Error, tente novamente!`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
case 'buceta':
if(!isVerify) return isUser()
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limite)
  if (!isNsfw) return reply(`_🔰 Para segurança do grupo, ative o *modo nsfw* primeiro!_`)
            reply(mess.wait) 
let lolii = pack[Math.floor(Math.random() * pack.length)]
      lolix = await getBuffer(lolii)
client.sendMessage(from, lolix, image, {quoted: sen, caption: `${isPremium ? '💎Não será descontado nenhum diamante!' : `💎-1 Diamante por utilizar essa função!`}`, thumbnail: lolix})
.catch((err) => {
            reply(`❎ Error, tente novamente!`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
	// FINAL PORNOGRAFIA
					case 'robo': case 'robô':
encmedial = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
medial = await client.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break
case 'gemuk': case 'grande':
					encmediaz = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    reply(mess.wait)
					mediaz = await client.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:sen})
						fs.unlinkSync(ran)
					})
					break
	//INVETER O ÁUDIO
case 'invertido': case 'inverter':
	encmediau = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
	mediau = await client.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:sen})
fs.unlinkSync(ran)
	})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break

case 'nightcore':
encmedia = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':     
  ass = JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: sen})
fs.unlinkSync(ran)
})
break
default:
if (budy.startsWith('>')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(sen.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}


if (!isGroup && isCmd && !sen.key.fromMe){
client.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = client.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `Exclusivo`, "thumbnail": gambar3, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `𝖳𝗁𝖾 𝖱𝗂𝗌𝗄𝗒 𝖱𝗈𝖻𝖻𝗈𝗍 - ⚖️`,
    orderTitle: `Riskyzin`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             client.relayWAMessage(res)
        }
        babi(`👋 Olá, @${sender.split('@')[0]}! O comando utilizado: *"${prefix + command}"* não existe.
Abra o menu digitando *${prefix}menu* e veja os comandos corretos!`)
}

// Privado auto bloqueo y mas

/*
  if (isGroup && budy != undefined) {
    	if (!isOwner) return 
    } else {
    	if (isOwner) return 
    	console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
		console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Chat privado", "red"))
		console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(`${sender.split("@")[0]}`, "orange"))
      reply('❎ É proibido falar com o bot privado, você será bloqueado automaticamente')
      client.sendMessage("51940617554-1600359399@g.us", `✳️ Olá, *@${sender.split("@")[0]}* É proibido falar com o PV do bot, você pode ser eliminado do grupo.`, text, {contextInfo: {"mentionedJid": [sender]}})
      setTimeout( () => {
      	client.blockUser(sender, 'add') 
                  }, 1000)
                  //client..modifyChat(from, ChatModification.delete)
                  
    }
*/ 
//====================================================================================================//
//>> Contador de mensajes beta

//>> mensaje
			if (isContador && content.includes('Message')) {
				const currentMensaje = getMsg(sender)
				const checkIdMensaje = getMsgId(sender)
					if (currentMensaje === undefined && checkIdMensaje === undefined) addMsgId(sender)
					addMsg(sender, 1)
			}
			
//>> imagen
			if (isContador && content.includes("imageMessage")) {
				const currentImagen = getMsgimg(sender)
				const checkIdImagen = getMsgId(sender)
					if (currentImagen === undefined && checkIdImagen === undefined) addMsgId(sender)
					addMsgimg(sender, 1)
					if (isQuotedImage) return addMsgimg(sender, -1)
			}
			
//>> video
			if (isContador && content.includes("videoMessage")) {
				const currentVideo = getMsgvideo(sender)
				const checkIdVideo = getMsgId(sender)
					if (currentVideo === undefined && checkIdVideo === undefined) addMsgId(sender)
					addMsgvideo(sender, 1)
					if (isQuotedVideo) return addMsgvideo(sender, -1)
			}
			
//>> archivo
			if (isContador && content.includes("documentMessage")) {
				const currentArchivo = getMsgarchivo(sender)
				const checkIdArchivo = getMsgId(sender)
					if (currentArchivo === undefined && checkIdArchivo === undefined) addMsgId(sender)
					addMsgarchivo(sender, 1)
					if (isQuotedDocs) return addMsgarchivo(sender, -1)
			}
			
//>> sticker
			if (isContador && content.includes("stickerMessage")) {
				const currentSticker = getMsgsticker(sender)
				const checkIdSticker = getMsgId(sender)
					if (currentSticker === undefined && checkIdSticker === undefined) addMsgId(sender)
					addMsgsticker(sender, 1)
					if (isQuotedSticker) return addMsgsticker(sender, -1)
			}
			
//>> audio
			if (isContador && content.includes("audioMessage")) {
				const currentAudio = getMsgaudio(sender)
				const checkIdAudio = getMsgId(sender)
					if (currentAudio === undefined && checkIdAudio === undefined) addMsgId(sender)
					addMsgaudio(sender, 1)
					if (isQuotedAudio) return addMsgaudio(sender, -1)
			}
			
		//>> Anti número virtual
      if (sender.startsWith("994") || (sender.startsWith("48") || (sender.startsWith("1") || (sender.startsWith("92") || (sender.startsWith("91") || (sender.startsWith("44") || (sender.startsWith("96")))))))){
  	if (!isAntivirtual) return
    reply('🏃 - _Não é permitido números virtuais nesse grupo. Adeus!_')
    console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
	console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Numero virtual detectado", "red"))
	console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(`${sender.split("@")[0]}`, "orange"))
    setTimeout( () => {
                  var virtual = `${sender.split("@")[0]}@s.whatsapp.net`
                  client.groupRemove(from, [virtual]);
                  }, 10000)
  }
if (isGroup && !sen.key.fromMe && isAutofigu) {
		if (!isGroup) return
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sen).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sen
const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
reply('_🎁 Criando sua *Figurinha*..._')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('keyy-bot', 'keyy')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: sen})
fs.unlinkSync(rano)
})
}
	
if (chats.startsWith('$ ')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*Senku-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return client.sendMessage(from, ` ${err}`, text, { quoted: sen })
if (stdout) {
client.sendMessage(from, stdout, text, term)
}
})
}

if (isGroup && !sen.key.fromMe && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					}

if(chats.startsWith(`! `)){
if(!q) return reply('Digite o número de série!')
if(!m.quoted) return reply('Responder mensagem resultados de pesquisa do youtube!')
reply('_Aguarde um pouco Video Sedang di Kirim!_')
quee = 'Y T  D O W N'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 //return sendMediaURL(from, thumb, `*P L A Y V I D E O*\n\n${shp} Título: ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
 reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
 }
 teks = `*P L A Y  V I D E O*\n\n${shp} Título: ${title}\n${shp} Size : ${filesizeF}`
 //wa.sendFileFromUrl(from, thumb, tod, teks)
 sendMediaURL(from, dl_link, teks)
 }catch(e){
 reply(mess.error)
}
}
}

//>> Anti groseria
if (isGroup && !sen.key.fromMe && isOwner) {
	if (budy.includes("viado") || (budy.includes("vadia") || (budy.includes("goza") || (budy.includes("puta") || (budy.includes("Puta") || (budy.includes("preto") || (budy.includes("Preto") || (budy.includes("viadinho") || (budy.includes("Viado") || (budy.includes("mrd ") || (budy.includes("Mrd ")))))))))))){
		const currentWarn = getWarn(sender)
				const checkIdWarn = getWarnId(sender)
					if (currentWarn === undefined && checkIdWarn === undefined) addWarnId(sender)
					addWarn(sender, 1)
		console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
		console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Palavrão detectado", "red"))
		console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(`${sender.split("@")[0]}`, "orange"))
		client.sendMessage(from, `⚠️️ Neste grupo não é permitido palavrões, *${advertencia}* advertencia\n\n*📌Nota:* 4 advertencias = ban`, text, {quoted: sen, contextInfo: {"mentionedJid": [sender]}})
		if (!isBotGroupAdmins && !sen.key.fromMe) return reply('🤨 Sorte sua que não sou admin!')
		client.updatePresence(from, Presence.composing)
		if (currentWarn === 3) {
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.sendMessage(from, `⚠️️ @${kic.split("@")[0]} você superou as 4 advertencias. Adeus!`, text, {quoted: sen, contextInfo: {"mentionedJid": [kic]}})
			setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply('❎ Error, eu não pude expulsar o usuário')})
			addWarn(sender, -4)
			}, 1000)
			}
		}
		}
if(chats.startsWith(`+ `)){
if (!isOwner)return reply(`_👋 Olá, @${sender.split('@')[0]}! O comando utilizado: *"${prefix + command}"* não existe.
Abra o menu digitando *${prefix}menu* e veja os comandos corretos_`)
try {
reply('_[ 🔮 ] Procurando sua Música..._')
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*SUGESTÃO ENCONTRADA*\n\n${shp} Título: ${title}\n${shp} Tamanho : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duração : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_🎁 Enviando a sua música!_*`
sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')
limitAdd(sender, limit)
limitAdd(sender, limit)

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
}

if(chats.startsWith(`# `)){
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
if(!q) return reply('Masukkan nomo urutnya!')
reply('_Aguarde um pouco Music Sedang di Kirim!_')
quee = 'Y T  D O W N'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
 try{
 pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
 downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
 const { dl_link, thumb, title, filesizeF, filesize } = downm
 if(Number(filesize) >= 30000){
 short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
// return sendMediaURL(from, thumb, `*P L A Y M U S I C*\n\n${shp} Título: ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
reply(`*Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
 }
teks = `*P L A Y M U S I C*\n\n${shp} Título: ${title}\n${shp} Size : ${filesizeF}\n\nAguarde um pouco\nBaixando e enviando música!`
 //sendMediaURL(from,thumb,teks)
 sendMediaURL(from, dl_link)
 }catch(e){
 reply(mess.error)
}
} 
}

if(chats.startsWith('cekprefix')){
y = `*O prefix usado é: : ${single ? `${prefa}` : multi ? 'Multiprefix' : 'NoPrefix'}*`
reply(y)
}

if (chats.startsWith('=>')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(sen.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
e = String(err)
reply(e)
}
}
/*
if (chats.startsWith('x')){
try {
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: sen})
} catch(err) {
e = String(err)
reply(e)
}
}
*/

}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}
