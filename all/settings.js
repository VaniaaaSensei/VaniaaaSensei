require("./module")

global.owner = "212768821701"
global.ownerStore = "212768821701"
global.namabot = "Fizzx Offcial"
global.namaCreator = "Fizzx Offcial"
global.namaStore = "Fizzx Offcial"
global.autoJoin = false
global.antilink = false
global.themeemoji = '🪀'
global.versisc = '8.4.0'
global.namasc = 'V8 Campuran
global.codeInvite = "-"
global.apitokendo = '-'
global.domain = 'https://raaaxridhohosting.amaliasyva-private.tech/' // Isi Domain Lu
global.apikey = 'ptla_A8FgxBsUqIKbgu584cFM17GzbQmSaWJi2GoeD53NEgb' // Isi Apikey Plta Lu
global.capikey = 'ptlc_NAmmxoY846DxiygWXkUgXOUaVbBeVHNwtfnyJ2X9O4K' // Isi Apikey Pltc Lu
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "6d41506dcd07ba53f172e31ceae2526d"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By Fizzx Oficial"
global.jumlah = "5"
global.youtube = "https://youtube.com"
global.grup = "https://chat.whatsapp.com/Em1YR2xQp1PFC"
global.telegram = "https://t.me/"
global.instagram = "*-*"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})