//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "tohidkhan9050482152@gmail.com";
global.location = "haryana,India.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/tohidkhan6332/Venocyber-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu";
global.website = process.env.GURL || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "917849917350";
global.owner = process.env.OWNER_NUMBER || "917849917350";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBRT1pmYXJHZDhQcCtZM1BtckhzQU5QZWhEUWgrUzNXVUNacVVLUlhIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGVHZHlYQnZrSVhTR2p1NUtHYmxYWnIxVGE1TGVrYUVobGtUS2JLTDQzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QU1teGU1QS9GN2JvcUg5elFDWlhiQ0ZaSjdJNGJYaE9KWXJWY2JrWkVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxdlAwOUVNT3h6elBJc2VXQStZdThuNkRNMVFpTXBEWVJCTHVQRmxyU2pRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNYlBZUE0yQWRUUUtxM2w4WWpvaFpkS2dWL2F1MkY0VFllTGlYbDJVRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg2anFOdnZFN1JnT0NwZGIvZVlDR25VRnM4NGV6b3c0Q01jSDdITVN2RFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1A0d0RnaDFzRGt1N2U3R1ExbUt5Y2VnYVZMcTVBZXJJbCtlZXpPMkttaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHlZK0FwamErUWg4SCtOT0Q5SlR4RWd4azNGT1lLT3djNytLVERTK3luND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE2NEZxVVBBZ2lWS2s2aFIzajVkaDNYSmc3RWlXaHNSZ2hpNEIvNGEybjRsR0VrRENFUHJGWlZIY1A3TGh3QkR3dDJTa3Rpc0sxVUw2dzdHOENRdERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJnNHlzaHdzY3FCSW5HaVN5blEzU3ZJcmF4SmZvU2tmQllDS0NOVUFiajhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzg0OTkxNzM1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OUEyMUZDNUFCQTgxQURGNzIzNTJCRjRGMzI2NUZEQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTI3NjU2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJva2ZSai1HZ1I3Q2Ruc3NFemhyVnR3IiwicGhvbmVJZCI6IjJlNjBlMDBiLTk0NDUtNGU0Zi05MWY5LTI5ZTkwY2M5M2Q1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabURMR1k1Tk5pMlBveHBCejlhcXJFK0tBdEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUR0Qm9ndmlHMUtMZW5GMit2cnBXaDFSb0lJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNYWDJTU1dKIiwibWUiOnsiaWQiOiI5MTc4NDk5MTczNTA6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VhOKEnVxuXG5cbvCdlYtcblxuXG7wnZWGXG5cblxu4oSNXG5cblxu8J2VgFxuXG5cbvCdlLsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMejY4UUVFSmVVeDdVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQ5cytDVXh5c3Q1V2RGeWFUZ2VBUjFPS3BXYUZUZkg0OFRlc1RzQTAxVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZiVVQ0SWM2OHlGZzUyc0d0S2dGNHNjemZaaTZxUXZUUVdmYi9iU05lRkRKWElRcTN4eGRvOS82ckVBT29CbmR4MjYwMGs0UWVNQ3ZraTAxRFF4MERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCOTlIVXM4Qm9uNzdIckw0cnRYS0tlVFcyRzI4MTBQb2hmOFUweDcvd3hWNS9ncVU1Ny9JeDJQcHlJS1hZalUyazhhOTFndVh1QVB0c1pVM1hlVC9CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzg0OTkxNzM1MDoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZmJQZ2xNY3JMZVZuUmNtazRIZ0VkVGlxVm1oVTN4K1BFM3JFN0FOTlZFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTI3NjUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFHUiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "MR TOHID",
  packname: process.env.PACK_NAME || "MR TOHID",
  botname: process.env.BOT_NAME || "TOHID-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "TOHID KHAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
