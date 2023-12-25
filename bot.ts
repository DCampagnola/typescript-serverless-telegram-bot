import { Telegraf } from "telegraf";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  throw new Error("Please provide a valid token!");
}
const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply("Welcome!"));

export default bot;