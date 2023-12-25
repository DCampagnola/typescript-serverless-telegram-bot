import * as http from "serverless-http";
import bot from "./bot";

export const handler = http(bot.webhookCallback("/bot"));