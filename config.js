const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_34_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpjZ2ZiNTU5UkZKUWc3c095RHZiaENoc3VyR3RmTzJjVW05SlIybzVmY0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhmS29ES2tiUjMycEp4MThhdkdWY2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmMzOGY5YjYtNTNhMS00ZWY5LTg1MDMtMzYxMGIwZjk4NjJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE4NyxcbiAgICAgIDc4LFxuICAgICAgMjUxLFxuICAgICAgMTExLFxuICAgICAgNTMsXG4gICAgICAyMjUsXG4gICAgICAxMDYsXG4gICAgICAxNDcsXG4gICAgICAxMTksXG4gICAgICA1MCxcbiAgICAgIDUsXG4gICAgICA2MSxcbiAgICAgIDU2LFxuICAgICAgMTYwLFxuICAgICAgMzQsXG4gICAgICAyMTAsXG4gICAgICAxMjYsXG4gICAgICAyNDksXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDI1MyxcbiAgICAgIDI0OCxcbiAgICAgIDI0MCxcbiAgICAgIDQ4LFxuICAgICAgNjAsXG4gICAgICAyMTcsXG4gICAgICAxMDksXG4gICAgICA1MixcbiAgICAgIDE3MCxcbiAgICAgIDEwMixcbiAgICAgIDE5MCxcbiAgICAgIDE0NCxcbiAgICAgIDE4MCxcbiAgICAgIDMzLFxuICAgICAgNTcsXG4gICAgICAxMjUsXG4gICAgICA5MyxcbiAgICAgIDU2LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1ENENYRTJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIwOTIyOTA5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzYzNTE2MzQ0MjQwNDA6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSitqNHM0SEVMU3BtTG9HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3RDJoaVVxVzZHRVVsakhZTHJLRk1DYlZOa2FLYWV2d2d0dE9wNFB2ekFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhvalBSSk9YTGtNMmV3UzZaOE54L1BCTnNKaUZBNTNjR2NqbGFBbmFXdGdGRWxwWDlrWTRzTkpzMXJlWXpGeWVEWXpzcVNKTE85bHhFbGE5cFRMeEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIis2MTlUQmc3UHBoSHBIcTRsT0oxVy82Zm5TZ3lYdTVvOGxZcGJGNXdFcGdzbDA2dEJIREhUa1c4NWttVWkzZ0UybTMzM3VJVElZRFRXSWlmQys1V2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjA5MjI5MDk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY0NjA3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
