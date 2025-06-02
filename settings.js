const fs = require('fs-extra');
const version = require("baileys/package.json").version
global.language = "id"
const stringSimilarity = require("string-similarity");

// ≠========== CONNECTING ========== //
global.sessionName = "session"
global.pairingCode = true // true / false
global.pairingNumber = "6281374519589" // masukin nomor bot
global.runWith = "pterodactyl"


// ===≠======= SETOWNER ==========//
global.ownerName = "KayzuMD"
global.nomerOwner = ["6289673462138"]
global.ownerNumber = "6289673462138@s.whatsapp.net"



// ========= SOSMED ============//
global.syt = 'https://www.youtube.com/@rangelbot'
global.sgc = 'https://chat.whatsapp.com/LgClK7WdFVJ6SS4mzG38TZ'
global.sig = 'https://www.instagram.com/kayzuoffc'
global.stt = 'https://tiktok.com/@kayzumd'
global.sgh = ''
global.web = 'https://linktr.ee/kayzuno'


// ≠========= SETBOT ========== //
global.botName = "ɪsʟᴀ ᴄʜᴀɴ – ᴀsɪsᴛᴇɴ ᴋᴀʏ"
global.newsletterJid = ""
global.newsletterJid1 = "" // id untuk upch
global.newsletterName ="ɪsʟᴀ ᴄʜᴀɴ – ᴀsɪsᴛᴇɴ ᴋᴀʏ"
global.fake = botName
global.session = "session" 
global.copyright = `Bot WhatsApp`
global.baileysVersion = `Baileys ${version}`
global.Console = true
global.idGcBot = '120363373160601416@g.us'


// ======= SETSTICKER ======== //
global.packName = `Kay Ganz`
global.authorName = "Kayzu Hosting"
global.wm = "Kay x Isla"


// ======= GAME & PERINGATAN ========== //
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
global.multiplier = 38
global.maxwarn = '3' // Peringatan maksimum
global.gcounti = {
'prem' : 1000,
'user' : 5
} 


// ========== GAMBAR URL =========== //
// Buat Thumbnail Dan setReply Jika Kedaluarsa,Ganti Yah
global.fotoRandom = [
"https://file.btch.rf.gd/file/l02rizi43m3brg9mpkf5.png",
"https://file.btch.rf.gd/file/x425kphpj7e7xfsr7b1d.jpg",
"https://file.btch.rf.gd/file/p6hmqvp4fvfc2tjicz03.jpg"
]


// ========== APIKEY ============ //
global.betaboz = 'kayzuGanteng'
global.skizo = 'Rangelofficial'
global.elevanlabs = 'sk_22fa3961c1959b134a7b06fe01f64b10c9182510f640647e' // daftar di elevanlabs 
global.Botcahx = 'kayganteng'
global.Lolhuman = 'kayganteng'
global.Neoxr = 'Ehanz'
global.FilestackApi = 'ANT6qPZQ8S2GcWt03Njhkz'
global.fileStackApi ="ANT6qPZQ8S2GcWt03Njhkz" //daftar di filestack
global.Apiflash = "9b9e84dfc18746d4a19d3afe109e9ea4"; 
global.apiTermai = 'AIzalrvKNiz8ioAzJzQf'
global.tokenGithub = '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'
global.tokenGhDatabase = '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'
global.apiEmail = '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'


// =========== CPANEL ============ /
global.domain = 'https://kayprivate.alwayszakzz.my.id'
global.apiPlta = 'ptla_e02RADSr2DSeHyqN3cqEUx1yKOVyAM6BeSd8ICK8mcU' // Isi Apikey Plta Lu
global.apiPltc = 'ptlc_t44uphifgbsVeixbqJLBovnv3ExTRvP7TXvrYpwTdHz' // Isi Apikey Pltc Lu 
global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location

global.waktuPanel = {
    onegb: { waktu: 30, harga: "1k" },
    twogb: { waktu: 30, harga: "2k" },
    threegb: { waktu: 30, harga: "3k" },
    fourgb: { waktu: 30, harga: "4k" },
    fivegb: { waktu: 30, harga: "5k" },
    sixgb: { waktu: 30, harga: "6k" },
    sevengb: { waktu: 30, harga: "7k" },
    eightgb: { waktu: 30, harga: "8k" },
    unli: { waktu: 30, harga: "10k" }
};
// ======== TOPUP PAYMENT ========= //
global.payment = {
    dana: {
      nomer: "085274156161",
      atas_nama: "Afrizal"
    }
} // isi nomor dana lu
global.untung = "1"
  //Ini profit yg kamu dapat, 1 = 1% maka harga akan meningkat 1%
global.apikeyAtlantic = "" 
// ======== STORE RANGEL- ==========//
global.nameToko = "Kayzu Hosting"
global.newsletterJidEhz = ""
global.fotoPakaian = [ 
"https://telegra.ph/file/a2df78368a21a3efc9f34.jpg",
"https://telegra.ph/file/7583097174a260eeffcaf.jpg"]
global.fotoHijab = [""]
global.fotoDistro = [""]
global.waktuOpenStore = '18:00'
global.waktuCloseStore = '12:00'
global.gcStore = 'https://chat.whatsapp.com/HvMo6WN8hZHLQwAbRrMtk8'
global.idGcStore = ''
// ========= HIASAN =========== //
global.gris = '`' // Jangan di ubah
global.gris1 = '```'

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: "📊",
      limit: "🎫",
      health: "❤️",
      stamina: "⚡",
      exp: "✨",
      atm: "💳",
      money: "💰",
      bank: "🏦",
      potion: "🥤",
      diamond: "💎",
      rawdiamond: "💠",
      common: "📦",
      uncommon: "🛍️",
      mythic: "🎁",
      legendary: "🗃️",
      superior: "💼",
      pet: "🔖",
      trash: "🗑",
      armor: "🥼",
      sword: "⚔️",
      pickaxe: "⛏️",
      axe: "🪓",
      fishingrod: "🎣",
      kondom: "🎴",
      coal: "⬛",
      wood: "🪵",
      rock: "🪨",
      string: "🕸️",
      horse: "🐴",
      cat: "🐱",
      dog: "🐶",
      fox: "🦊",
      robo: "🤖",
      dragon: "🐉",
      petfood: "🍖",
      iron: "⛓️",
      rawiron: "◽",
      gold: "🪙",
      rawgold: "🔸",
      emerald: "❇️",
      upgrader: "🧰",
      bibitanggur: "🌱",
      bibitjeruk: "🌿",
      bibitapel: "☘️",
      bibitmangga: "🍀",
      bibitpisang: "🌴",
      anggur: "🍇",
      jeruk: "🍊",
      apel: "🍎",
      mangga: "🥭",
      pisang: "🍌",
      botol: "🍾",
      kardus: "📦",
      kaleng: "🏮",
      plastik: "📜",
      gelas: "🧋",
      chip: "♋",
      umpan: "🪱",
      skata: "🧩",
      defense: "🛡️",
      strength: "💪🏻",
      speed: "🏃",
      tbox: "🗄️",
    };
      
      
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

function clockString(ms) {
        let months = isNaN(ms) ? "--" : Math.floor(ms / (86400000 * 30.44));
        let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
        let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
        let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
        let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
        let monthsDisplay = months > 0 ? months + " bulan, " : "";
        let dDisplay = d > 0 ? d + " hari, " : "";
        let hDisplay = h > 0 ? h + " jam, " : "";
        let mDisplay = m > 0 ? m + " menit, " : "";
        let sDisplay = s > 0 ? s + " detik" : "";
        let time = months > 0 ? monthsDisplay + dDisplay : d > 0 ? dDisplay + hDisplay : h > 0 ? hDisplay + mDisplay  : mDisplay + sDisplay
      
        return time;
      }
let d = new Date();
let locale = "id";
// Automatically adjust the reference year
let currentYear = d.getFullYear();
let gmt = new Date(0).getTime() - new Date(`1 Januari ${currentYear}`).getTime();
let week = d.toLocaleDateString(locale, { weekday: "long" });
const calender = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

async function totalCase(filePath, command) {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    let found = false;
    const lines = data.split('\n');
    lines.forEach((line) => {
      const caseMatch = line.match(/case\s+['"]([^'"]+)['"]/);
      if (caseMatch && caseMatch[1] === command) {
        found = true;
      }
    });

    return found;
  } catch (err) {
    throw err;
  }
}

const toFirstCase = (str) => {
  let first = str
  .split(" ") // Memenggal nama menggunakan spasi
  .map((nama) => nama.charAt(0).toUpperCase() + nama.slice(1)) // Ganti huruf besar kata-kata pertama
  .join(" ");
  
  return first;
  }
function Ehztext (text, style = 1){
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

function transformText(text) {
  const charMap = {
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
    'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
    'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
  };

  return text.toUpperCase().split('').map(char => {
    return charMap[char] || char;
  }).join('');
}

function makeid(length){
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
     
Array.prototype.getRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function getRandom(array) {
  return array.getRandom();
}

function getRandomFile (ext){
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const Log = (text) => {
      console.log(text);
      };
async function similarity(one,two) {
const treshold = stringSimilarity.compareTwoStrings(one, two)
return treshold.toFixed(2)
}

global.similarity = (one,two) => similarity(one,two);
global.clockString = clockString;
global.toFirstCase = toFirstCase;
global.totalCase = totalCase
global.getRandomFile = getRandomFile
global.getRandom = getRandom
global.calender = calender;
global.Ehztext = Ehztext;
global.transformText = transformText;
global.makeid = makeid;
global.calender = calender;
global.sleep = sleep;
global.week = week;
global.Log = Log;


const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)

fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






