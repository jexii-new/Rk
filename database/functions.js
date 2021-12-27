const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Prontinho amigo(a). : " : ""
    	let ecch = () => is_adult ? "Iya" : "Não"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Título japonês : *${title}*
~> Ortografia do Título : *${title_romaji}*
~> Título inglês : *${title_english}*
~> Episódio : *${episode}*
~> Temporada  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Não sei que anime é este`)
	}
})

const simih = async (text) => {
try{
		const sami = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=pt&cf=false`, {method: 'get'})
		const res = await sami
		return res.success
		}catch{
		return 'Eu não entendi'
}
}

module.exports = { wait, simih, getBuffer }
