"use strict";
require("./settings.js")
const {
Browsers,
DisconnectReason,
makeInMemoryStore,
makeWASocket,
MessageRetryMap,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion,
  generateMessageTag
} = require("baileys")
const chalk = require('chalk')
const fs = require("fs");
const yargs = require('yargs')

const { readdirSync, readFileSync, existsSync,statSync,watch } = fs;
const logg = require('pino')
const chokidar = require('chokidar')
const qrcode = require('qrcode')
const simple = require('./lib/simple') 
const { connectionUpdate } = require("./message/connection");
const { notifGcStore,notifGcAlarm,notifPrivate,autoOpenCloseGc,autoNotifSholat,autoSholat,autoSendTugas,updateGempa} = require("./message/function");

const CFonts = require('cfonts')
const path = require('path')
const { join,dirname } = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const { fileURLToPath, pathToFileURL } = require('url')
const syntaxerror = require('syntax-error')
const { format } = require('util')
const axios = require ('axios')
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
if(runWith.includes("eplit")){
}
process.on('uncaughtException', console.error)
const { createRequire } = require('module');
const requireFromFile = createRequire(__filename);

global.__filename = function filename(pathURL = __filename, rmPrefix = process.platform !== 'win32') {
    return rmPrefix ? /file:\/\/\//.test(pathURL) ? 
        url.fileURLToPath(pathURL) : pathURL : url.pathToFileURL(pathURL).toString();
}; 
// Fungsi untuk mendapatkan require dari direktori yang diberikan
global.__require = function require(dir = __filename) {
    return createRequire(dir);
}

// Mengatur opsi dari yargs
global.opts = new Object(
    yargs(process.argv.slice(2))
    .exitProcess(false)
    .parse()
);

CFonts.say('「 AlisaMD - Asisten Kay 」', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
CFonts.say('Youtube : https://www.youtube.com/@rangelbot', {
   colors: ['white'],
   font: 'console',
   align: 'center'
})
const msgRetryCounterMap = MessageRetryMap || { }
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
 
const connectToWhatsApp = async () => {
//Function untuk update runtime di database
setInterval(() => {
let data = global.db.data.others['runtime']

if(data){
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60000)

const {Low} = (await import("lowdb"))
//const got = (await import("got"))
const chalk =  (await import("chalk"))

const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
blockcmd: [],
dashboard: [],
hittoday: [],
listerror: [],
antispam: [],
banned: [],
claim: [],
data: [],
sticker: {},
audio: {},
users: {},
chats: {},
settings : {},
kickon: {},
toxic: [],
others: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()

const { state, saveCreds } = await useMultiFileAuthState("session");

if (global.db.data) await global.db.write() 
      
const pluginFolder = path.join(__dirname, "./plugins");
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};

// Fungsi untuk menginisialisasi file
async function filesInit(folderPath) {
  const files = readdirSync(folderPath);
  for (let file of files) {
    const filePath = path.join(folderPath, file);
    const fileStat = statSync(filePath);
    if (fileStat.isDirectory()) {
      await filesInit(filePath);
    } else if (pluginFilter(file)) {
      try {
        const module = require(filePath);
        global.plugins[file] = module.default || module;
      } catch (e) {
        console.error(e);
        delete global.plugins[file];
       require(file) 
      }
    }
  }
}

filesInit(pluginFolder);

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    const dir = path.join(pluginFolder, filename);
    if (filename in global.plugins) {
      if (existsSync(dir)) {
        console.log(
          chalk.bgGreen(chalk.black("[ UPDATE ]")),
          chalk.white(`${filename}`)
        );
          require(filename) 
      } else {
        console.warn(`deleted plugin '${filename}'`);
        return delete global.plugins[filename];
      require(filename)      }
    } else {
      console.log(
        color("[ UPDATE ]"),'file telah di perbarui'),
        console.log(
        color(`${filename}`,'greenyellow')
      );
        require(filename) 
    }

    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: "module",
      allowAwaitOutsideFunction: true,
    });

    if (err) {
      console.error(`syntax error while loading '${filename}'\n${err}`);
    } else {
      try {
     delete require.cache[require.resolve(dir)];
         require(dir)
        const module = require(dir);
        global.plugins[filename] = module.default || module;
      } catch (e) {
        console.error(`error require plugin '${filename}\n${e}'`);
      } finally {
        global.plugins = Object.fromEntries(
          Object.entries(global.plugins).sort(([a], [b]) =>
            a.localeCompare(b)
          )
        );
      }
    }
  }
};

const watcher = chokidar.watch(pluginFolder, {
  ignored: /(^|[\/\\])\../, 
  persistent: true,
  depth: 99, 
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});
watcher.on("all", (event, filePath) => {
  if (event === "change" && filePath.endsWith(".js")) {
    const filename = path.basename(filePath); 
    global.reload(null, filename); 
  }
});

Object.freeze(global.reload);
watch(pluginFolder, global.reload)
    
  const store = makeInMemoryStore({
    logger: logg().child({ level: "fatal", stream: "store" }),
  });
  const { version } = await fetchLatestBaileysVersion();

  const auth = {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: "fatal", stream: "store" })),
  };
    
 
  
  //Funtion agar bisa pake button di bailey terbaru  
const patchMessageBeforeSending = (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.listMessage || 
message.templateMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {   
deviceListMetadataVersion: 2,  
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
  }

  const connectionOptions = makeWASocket({
    logger: logg({ level: "silent" }),
    patchMessageBeforeSending,
    printQRInTerminal: true, // Pastikan QR Code ditampilkan jika pairingCode tidak ada
    auth,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
  
  });

  global.conn = simple.makeWASocket2(connectionOptions);
  store.bind(conn.ev);
conn.waVersion = version
  // Logika pairingCode
  if (pairingCode && !connectionOptions.authState.creds.registered) {
    await clearConsole();
      const chalk = require('chalk')
    console.log(
      chalk.bgCyan.black("[ INFO ]"),
      chalk.cyan.italic("Pastikan Anda telah mengisi nomor bot di file 'Setting.js' untuk melanjutkan!")
    );
    console.log(
      chalk.bgYellow.black("[ CONNECTING ]"),
      chalk.cyan.italic(`Sedang menyambungkan ke nomor bot Anda: ${pairingNumber}...`)
    );
    setTimeout(async () => {
      let code = await connectionOptions.requestPairingCode(pairingNumber);
      code = code?.match(/.{1,4}/g)?.join("-") || code;
      console.log(chalk.cyan(`PAIRING CODE ANDA: ${code.toUpperCase()}`));
    }, 3000);
  }
    
 async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}
    
//welcome
conn.ev.on('group-participants.update', async (anu) => {
require('./message/group.js')(conn, anu)
})


 conn.ev.on('call', async (json) => { 
    const anticall = db.data.settings['anticall']?.anticall || false; // Cek apakah anticall aktif
    const { id, from, status } = json[0]; 

    if (status === 'offer') {
        if (from === "62811316643491@s.whatsapp.net") return; // Abaikan nomor tertentu

        console.log(json);

        if (anticall) {
            try {
                await conn.rejectCall(id, from);
                await conn.sendMessage(from, { text: "I'm busy, don't talk to me." });
            } catch (error) {
                console.error("Failed to handle call:", error); 
            }
        } else {
            console.log("Anticall is disabled. Call not rejected.");
        }
    } 
});
    


conn.ev.on('messages.upsert', async (chatUpdate) => {
  try {
    if (global.db?.data) await global.db.write();
    if (!chatUpdate.messages) return;
    let m = chatUpdate.messages[0];
    if (m.message?.viewOnceMessageV2) m.message = m.message.viewOnceMessageV2.message;
    if (m.message?.documentWithCaptionMessage) m.message = m.message.documentWithCaptionMessage.message;
    if (m.message?.viewOnceMessageV2Extension) m.message = m.message.viewOnceMessageV2Extension.message;
    
    if (!m.message) return;
    if (m.key?.id?.startsWith('3EB0') && m.key.id.length === 22) return;
    m = await simple.smsg(conn, m, store);

    // === Hitung Total Pesan User ===
    if (!global.db.data.totalPesan) global.db.data.totalPesan = {};
    if (!global.db.data.totalPesan[m.sender]) global.db.data.totalPesan[m.sender] = 0;
    global.db.data.totalPesan[m.sender] += 1;
    // ===============================

    //delete require.cache[require.resolve('./handler.js')];
    const handler = require('./handler.js');

    if (typeof handler === 'function') {
      await handler(conn, m, chatUpdate, store);
    } else {
      console.warn('Handler bukan fungsi atau tidak valid.');
    }
  } catch (err) {
    console.error('Terjadi kesalahan saat memproses pesan:', err);
  }
});

    
    
 conn.ev.process(async (events) => {
    if (events["connection.update"]) {
      if (db.data == null) await loadDatabase();
      const update = events["connection.update"];

      const { connection, lastDisconnect } = update;
      if (connection === "close") {
        const shouldReconnect =
          lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log("Koneksi terputus: Mencoba Menyambung Kan Ulang");

        if (shouldReconnect) {
          connectToWhatsApp();
        }
      } else if (connection === "open") {
        console.log("Berhasil tersambung ke WhatsApp Web!");
      }
      await connectionUpdate(connectToWhatsApp, conn, update);
      await loadDatabase();
    }

if(events['creds.update']) { 
await saveCreds()
}



 

    

 

    // history received
if(events['messaging-history.set']) {
const { chats, contacts, messages, isLatest } = events['messaging-history.set']
console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`)
			}  
  });
// ===≠====≠ batas ===≠=≠=≠====//
   
 function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}
global.clockString = clockString
    
setInterval(() => {
  try {
    autoOpenCloseGc(conn); 
  } catch (error) {
    console.error("Error saat menjalankan autoOpenCloseGc:", error);
  }
}, 60000); 
    
setInterval(() => {
  notifGcAlarm(conn);
}, 60 * 1000);

setInterval(() => {
  notifPrivate(conn);
}, 60 * 1000);
    
setInterval(async () => {
  await autoSholat(conn); 
}, 60000); 
setInterval(async () => {
 autoNotifSholat(conn);
}, 60000); 

setInterval(() => {
   autoSendTugas(conn);
  }, 60000); 
updateGempa(conn)

notifGcStore(conn); 
    
  return conn;
};

connectToWhatsApp();


