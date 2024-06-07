const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://umkyvjjzixkmewo5ooc6:MBhpE8j5ZWArKzAn2XD@btua0icnupqjwsqh4obp-mongodb.services.clever-cloud.com:2475/btua0icnupqjwsqh4obp"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb://umkyvjjzixkmewo5ooc6:MBhpE8j5ZWArKzAn2XD@btua0icnupqjwsqh4obp-mongodb.services.clever-cloud.com:2475/btua0icnupqjwsqh4obp"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50943471470";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50948710955";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,50943471470";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50943471470,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_52_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicENqUmZmK2VENG9BVVJ5czdoTlM1U3BKL0JUMEgzaEFoMjUvUkgvNUVhaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2p3UW9sXzRSRUswejcxYUJyNnhkQVwiLFxuICBcInBob25lSWRcIjogXCIzNDBiOTRjMC1mOGU5LTQ5YTgtYTBmYS04ODE1MTE3NjM0MGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyMCxcbiAgICAgIDE0NyxcbiAgICAgIDgxLFxuICAgICAgMTU0LFxuICAgICAgMTI3LFxuICAgICAgMjIsXG4gICAgICAxMTMsXG4gICAgICA3NixcbiAgICAgIDgyLFxuICAgICAgMTMsXG4gICAgICA3NSxcbiAgICAgIDIyNixcbiAgICAgIDE0NixcbiAgICAgIDExLFxuICAgICAgNjcsXG4gICAgICAxMjMsXG4gICAgICAyMTYsXG4gICAgICAyNTQsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNjUsXG4gICAgICAyMzYsXG4gICAgICAxODYsXG4gICAgICA1NCxcbiAgICAgIDIyMyxcbiAgICAgIDU4LFxuICAgICAgMTA1LFxuICAgICAgOTcsXG4gICAgICA0MyxcbiAgICAgIDIyNSxcbiAgICAgIDc1LFxuICAgICAgMTMyLFxuICAgICAgMjQsXG4gICAgICAyNDcsXG4gICAgICAyNTEsXG4gICAgICAyNTEsXG4gICAgICAxMzAsXG4gICAgICAzNixcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaS0s5OFNGN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDg3MTA5NTU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTdMOpcGhhbmUgQ2FsaXh0ZVwiLFxuICAgIFwibGlkXCI6IFwiMjgwMjk4MzczNzk5OTc2OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tibWdLY0hFT1hKamJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidC9HbnNGU00yWWFCa3pZNVArOGFxZXFjcEduSkdiME81bGFmQW5ackh5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPY3ZtdDVraVlwWmZIVld6Q2xSbHkydkdOYXZsMCtvQ2tWUFJWYXVQbm9sclU1M1gzY0JuN1R5OEpYcHJ4NXZHMHp4eGNUclNIRFFNZENhSGY2UDFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1N0NKOFRFVUVSV1FPSTBDMTJnVGk5OGpTL3V0eUYzbCsvTEhoQjY0T2VyNkdlYVpqelg5SmxVZnAzYUd1dHNTaUlIK0pnbWN6U1RWcWVEN3V1eXBEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0ODcxMDk1NToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzc4OTkyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQrNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRCs1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwid1NPSmdPc0dUamV4UTRyQklJNnZMS1p1UG45bVNWeWNYUms0ZDVVekx4ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTYwODUwMjEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "𝑺𝒕𝒆𝒆𝒇 𝑳𝒆 𝑴𝒆𝒈𝒂𝒍𝒐𝒅𝒐𝒏 ❟❛❟" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝑺𝒕𝒆𝒆𝒇 𝑳𝒆 𝑴𝒆𝒈𝒂𝒍𝒐𝒅𝒐𝒏 ❟❛❟",
  packname: process.env.PACK_NAME || "𝑺𝒕𝒆𝒆𝒇 𝑳𝒆 𝑴𝒆𝒈𝒂𝒍𝒐𝒅𝒐𝒏 ❟❛❟",
  botname : process.env.BOT_NAME  || "𝑺𝒕𝒆𝒆𝒇 𝑳𝒆 𝑴𝒆𝒈𝒂𝒍𝒐𝒅𝒐𝒏 ❟❛❟",
  ownername:process.env.OWNER_NAME|| "It's Steef",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
