require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '안녕하세요! 저는 TON Wallet Helper Bot 입니다.');
});

bot.on('message', (msg) => {
  if (msg.text === '/start') return;
  bot.sendMessage(msg.chat.id, `네가 보낸 말: ${msg.text}`);
});
