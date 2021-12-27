const
{
	WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let client = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms");
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions')
const { color } = require('./lib/color')
fakenomor = '0@s.whatsapp.net'
shp = '⬡'
owner = "558896926980@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
riskyz = {
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
"caption": `𝖡𝗈𝖺𝗌-𝖵𝗂𝗇𝖽𝖺𝗌 🎊`,
"height": 6080,
"width": 6000
}
}
}
finvite = {
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
"caption": `𝖱𝗂𝗌𝗄𝗒 𝖱𝗈𝖻𝖻𝗈𝗍 - 𝖮𝖿𝖼`,
"height": 6080,
"width": 6000
}
}
}
require('./index.js')
nocache('./index.js', module => console.log(color(`Index.js foi Atualizado!`)))
require('./sen.js')
nocache('./sen.js', module => console.log(color(`Sen.js foi Atualizado!`)))
require('./lib/menu.js')
nocache('./lib/menu.js', module => console.log(color(`Menu.js foi Atualizado!`)))
require('./src/welkom.json')
nocache('./src/welkom.json', module => console.log(color(`Wlko.json foi Atualizado!`)))
require('./src/antifake.json')
nocache('./src/antifake.json', module => console.log(color(`Ahtifske.dom foi Atualizado!`)))

const time = moment.tz('America/Fortaleza').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const wib = moment.tz('America/Fortaleza').format('HH:mm:ss')
const wita = moment.tz('America/Fortaleza').format('HH:mm:ss')
const wit = moment.tz('America/Fortaleza').format('HH:mm:ss')

const starts = async (client = new WAConnection()) => {
client.version = [2, 2143, 3]
client.logger.level = 'warn'
console.log(color(figlet.textSync(`${spc1}Risky Robbot`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'red'))
console.log(color(`${spc2}[ • Criado por Risky Modz •]` ,'pink'))
console.log(color(`${spc4}< .•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•. >`, 'red'))
console.log(color(`${spc3}[ # ]`, 'red'), color(`Nome   :`,'orange'), color(`${fake}`,'white'))
console.log(color(`${spc3}[ # ]`, 'red'), color(`Versão   :`,'orange'), color('1.0','white'))
console.log(color(`${spc3}[ # ]`, 'red'), color(`Status   :`,'orange'), color('Online','white'))
console.log(color(`${spc3}[ # ]`, 'red'), color(`Dono    :`,'orange') ,color(`${ownerN}`,'white'))
console.log(color(`${spc4}<  .•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•..•°•.•°•.  >`, 'red'))

client.on('qr', () => {
console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Now This Qr!'))
})

fs.existsSync('./riskyyt.json') && client.loadAuthInfo('./riskyyt.json')
client.on('connecting', () => {
start('2', color('[ ❗ ] Conectando...','orange'))
})

client.on('open', () => {
success('2', color(`[ ✅ ] Conectado!`,'yellow'))
})
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./riskyyt.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
client.on('chat-update', async (message) => {
require('./index.js')(client, message)
})


client.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, `🇵🇹 - Olá, @${num.split('@')[0]}! É proibido esse tipo de número nesse grupo. Por favor, contate um administrador pra que ele permita sua entrada!\n\n🇪🇸 - ¡Hola @${num.split('@')[0]}! Este tipo de número está prohibido en este grupo. Póngase en contacto con un administrador para que le permita la entrada.\n\n🇺🇸 - Hello @${num.split('@')[0]}! This type of number is prohibited in this group. Please contact an administrator to allow you entry!\n\n🇮🇩️ - Halo @${num.split('@')[0]}! Jenis nomor ini dilarang di grup ini. Silakan hubungi administrator untuk mengizinkan Anda masuk!`, MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
			    }
			}
		}
		const mdata = await client.groupMetadata(anu.jid)
//𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗬 𝗗𝗘𝗦𝗣𝗘𝗗𝗜𝗗𝗔//
	const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))	
	const _bye = JSON.parse(fs.readFileSync('./database/group/bye.json'))
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0] 
				if (num.startsWith('9')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('1')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('2')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('3')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('4')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('91')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('62')) return client.groupRemove(mdata.id, [num])
				if (num.startsWith('88')) return client.groupRemove(mdata.id, [num])
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'
				}
				
				const thu = await client.getStatus(anu.participants[0], MessageType.text)
				const memgp = mdata.participants.length
				
				teks = `Olá 😙, *@${num.split('@')[0]}*
*🎊Seja muito bem-vindo(a) ao grupo:*
${mdata.subject}

       *INFORMAÇÕES*
*🌿Biografia :* ${thu.status}
*🌿Membros :* ${memgp}

_*❖* Espero que tenha lido as regras para não haver nenhum mal entendido_`
               
				let buff = await getBuffer(ppimg)			
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                welcomeBut = [{buttonId:`nada`,buttonText:{displayText:'💟 OBRIGADO'},type:1}]
                welcomeButt = { contentText: `${teks}`, footerText: `*Copyright © Risky Robbot*`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
                 


            //-----𝗦𝗔𝗟𝗜𝗗𝗔 
         } else if (anu.action == 'remove') {
         	if(!_bye.includes(anu.jid)) return 
            const byeaa =["https://i.ibb.co/jhZqMHx/KKKKKKKKKKK.png"]
            byexx = byeaa[Math.floor(Math.random() * byeaa.length)]
            byezz = await getBuffer(byexx)
            client.sendMessage(mdata.id, byezz, MessageType.sticker )		
} else if (anu.action == 'promote') {
//	const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
	//if(!gchange.includes(mdata.id)) return
var thu = await client.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T A D O*\n\n${shp} Usuário: @${num.split('@')[0]}\n\n${shp} Bio: ${thu.status}\n\n${shp} Horário : ${moment.tz('America/Fortaleza').format('DD/MM HH:mm:ss')}\n\n${shp} Grupo: ${mdata.subject}\n\Não quebre as regras!`
client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
} else if (anu.action == 'demote') {
//   const gchange = JSON.parse(fs.readFileSync('./database/gupdated.json'))
//	if(!gchange.includes(mdata.id)) return
thu = await client.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T A D O*\n\n${shp} Usuário: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Horário : ${moment.tz('America/Fortaleza').format('DD/MM HH:mm:ss')}\n\n${shp} Grupo: ${mdata.subject}`
client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'𝘙𝘪𝘴𝘬𝘺 𝘔𝘰𝘥𝘻̵〆⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:resku\nitem1.TEL;waid=558896926980:+55 88 9692-6980\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ 𝘎𝘙𝘜𝘗𝘖 𝘈𝘉𝘌𝘙𝘛𝘖 ] \n\n_Grupo Aberto! Membros comuns podem enviar mensagens!_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ GRUPO FECHADO ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ 𝘎𝘙𝘜𝘗𝘖 𝘍𝘌𝘊𝘏𝘈𝘋𝘖 ] \n\n_Grupo Fechado! Apenas Admins podem mandar mensagens!_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ GRUPO FECHADO ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ 𝘋𝘌𝘚𝘊𝘙𝘐𝘊̧𝘈̃𝘖 𝘔𝘖𝘋𝘐𝘍. ] \n\nDescrição alterada pelo administrador:  @${anu.descOwner.split('@')[0]}\n• Nova Descrição: : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ 𝘊𝘖𝘕𝘍𝘐𝘎. 𝘔𝘖𝘋𝘐𝘍𝘐𝘊𝘈𝘋𝘈 ] \n\n_Editar as informações do grupo foram abertas para os membros\nAgora todos os membros podem editar as informações deste grupo!_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ MUDANÇA NAS CONFIG. ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ 𝘊𝘖𝘕𝘍𝘐𝘎. 𝘔𝘖𝘋𝘐𝘍𝘐𝘊𝘈𝘋𝘈 ] -\n\n_Editar as informações do grupo foi fechado para membros \ nAgora, apenas os administradores do grupo podem editar as informações deste grupo!_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ MUDANÇA NAS CONFIG. ] - In ${metdata.subject}`)
}
})

antidel = true
client.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('America/Fortaleza').format('HH:mm:ss')
let d = new Date
let locale = 'pt-br'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
client.sendMessage(m.key.remoteJid, `━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝘼𝙍  ⬣━━━━

  *Nome: @${m.participant.split("@")[0]}*
  *Horário: ${jam} ${week} ${calender}*
  *Tipo: ${type}*

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝘼𝙍  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
client.copyNForward(m.key.remoteJid, m.message)
})

antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Desculpa, ${client.user.name}, mas eu não posso receber chamadas... Ligar = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})


client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
