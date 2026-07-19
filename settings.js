
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "LuckyM2-H4sIAAAAAAAAA5WUW5OqOBSF/0tetY7cRau6auQmN2+gok7NQ4SAaREwCSKe8r9P0X369HmYOdPzFpJi7y9rrZ3voCgxRR5qwfg7qAi+QYa6JWsrBMZAq9MUEdAHCWQQjEHjE6cispEI9HqelcFKC9KgmNPRbDU9SM5xR07efBP6hbl/Ac8+qOpjjuPfFOwl59c5JxAjPiqqITpUmRGbBcyvqinVpUM7rHMnIuiRNS/g2VWEmOAiM6sTuiACcw+1S4jJ1/Aznd+nohqeh8bOm+YhaqC32LJjTMp77IleE/PqJhOMjTX7Gv7M5A474bA+DuEG35fUj5Gwf4WkOS3W5WDh7u1It1bJcLQu3/EpzgqUOAkqGGbtl3XPjJzbWJ7vnbjoftOarR9OehMqBj3hVVjf1o46Mo7lirn25mvgt9X6OD27TJ/TeamS9e40dQOVTTX5OhlEIit5jG7FFR849VfwJfnIyvn/6D71B5oplqJvX3vOSCzr24zHr/qsVDnvwhEhGNWzfa2Ixrn5Gv7mvDtvF47lSIFXJq/iMd2lMceqbThrm2DSGukgVDkJy4/sEx+ymvyOsnUDA1/m3tyv6zXascFloVA5CA5UZBcnUJZTqZGGGbnsHr3laagv5QeVcrenXSdn2VrHtuYWRMJrxYvcSHl1WR3ALHt5u9EZtU4CxvyzDwjKMGUEMlwW3Z7AD/sAJrcQxQSxN3lBbPrHQ2AthNA5CiNtG+nWMTh5drhqSm8QyES6O6FaEb6YvYA+qEgZI0pRYmPKStLOEKUwQxSM//yrDwp0Z+/Gde1Evg9STCjbFHWVlzD5cPXjEMZxWRcsbItY7xaIgDH3uY0Yw0VGOx3rApL4hG9IP0FGwTiFOUU/b4gISsCYkRr9nFq9TDrhLS3k917kgz64vBmCEzAGgiiNeEUYyUNZkccS/wf91nR1YVV9KxDrVPzB0P2SIAZxTsEY6A6KBnJsmzMxUUfOdDoxs4meTcAn84f57+La2rUnKo4sVU4g3uxKpTEiQWSXS43359HA4LcFxq9ZGJgv/1AEjIGZR9fRoHcKHsUsLrmNMXEHGvO0wn6Us1RPNlHucvIiUUQjblg7nN70yrivBitz8LDXI8w3YrTyiYrNqO1ZhbFMVq2+eum6JeiGY/RrM48zz6112U1WOdzAx/AMLWTcPT9zbWj3pgd3JQjcPl/LLeq11tUdbKBiKUa6FQLeMvX7pBdsR9t1ll7knbTpqQ96GmXNeyzfxiL/8Rzht8B0bnSfKUZv013AzqP/dOeDvEsR9+z/UuTHg/EvQ6cFDbyxHl4gLzST4V1Jfdu+ctuTYjRJ+NjemtH2IJWlZJ4D8Hz+1QdVDllakgsYA1gkpMQJ6ANS1l0snSItf9NMn3COtsrC7uo5pGzyGfU1viDK4KUCY36oStJQFiXl+TdrUoivIAcAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "2349162957565",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "EMMANUEL✨",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
