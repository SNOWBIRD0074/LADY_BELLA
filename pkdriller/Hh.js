'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
const newsletterContext = {
  'contextInfo': {
    'forwardingScore': 0x3e7,
    'isForwarded': true,
    'forwardedNewsletterMessageInfo': {
      'newsletterJid': "120363399707841760@newsletter",
      'newsletterName': "𝑺𝒑𝒚-𝑿",
      'serverMessageId': 0x1
    }
  }
};
zokou({
  'nomCom': "repo",
  'catégorie': "Général",
  'reaction': '🟢',
  'nomFichier': __filename
}, async (_0x3ebb47, _0xff3268, _0x48dbdb) => {
  try {
    const _0x1583f8 = await fetch("https://api.github.com/repos/SNOWBIRD0074/Spy-X");
    const _0x498987 = await _0x1583f8.json();
    if (_0x498987) {
      const _0x491941 = {
        'stars': _0x498987.stargazers_count,
        'forks': _0x498987.forks_count,
        'lastUpdate': _0x498987.updated_at,
        'owner': _0x498987.owner.login
      };
      const _0x1ffe6b = new Date(_0x498987.created_at).toLocaleDateString("en-GB");
      const _0x4ee1b4 = "*𝑺𝒑𝒚-𝑿*\n\n_________● *𝑺𝒑𝒚-𝑿* ●____________\n|💥 *ʀᴇᴘᴏsɪᴛᴏʀʏ:* " + _0x498987.html_url + "\n|🌟 *sᴛᴀʀs:* " + _0x491941.stars + "\n|🍽 *ғᴏʀᴋs:* " + _0x491941.forks + "\n|⌚️ *ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ:* " + _0x1ffe6b + "\n|🕐 *ᴜᴘᴅᴀᴛᴇ ᴏɴ:* " + _0x491941.lastUpdate + "\n|👨‍💻 *ᴏᴡɴᴇʀ:* *𝑺𝒑𝒚-𝑿*\n|💞 *ᴛʜᴇᴍᴇ:* *𝑺𝒑𝒚-𝑿*\n|🥰*ᴏɴʟʏ ɢᴏᴅ ᴄᴀɴ ᴊᴜᴅɢᴇ ᴍᴇ!👑*\n__________________________________\n            *ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɴᴏᴡʙɪʀᴅ*";
      await _0xff3268.sendMessage(_0x3ebb47, {
        'image': {
          'url': "https://files.catbox.moe/nm2a93.jpg"
        },
        'caption': _0x4ee1b4,
        ...newsletterContext
      });
      await _0xff3268.sendMessage(_0x3ebb47, {
        'audio': {
          'url': "https://files.catbox.moe/uhfull.mp3"
        },
        'mimetype': "audio/mp4",
        'ptt': false,
        ...newsletterContext
      });
    } else {
      console.log("Could not fetch data");
    }
  } catch (_0x475131) {
    console.log("Error fetching data:", _0x475131);
  }
});
