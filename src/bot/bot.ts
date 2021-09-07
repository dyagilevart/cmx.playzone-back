import { Telegraf } from 'telegraf';
import { getGames } from './controlles/GamesController';

class Bot {

    private bot;

    constructor() {
        this.bot = new Telegraf(process.env.BOT_TOKEN);
        this.config();
        this.bot.launch()
    }

    private config() {
        this.bot.start((ctx) => ctx.reply('Welcome'))
        this.bot.command('games', async (ctx) =>  await getGames(ctx))
        this.bot.command('awards', async (ctx) =>  await getGames(ctx))
        // Enable graceful stop
        process.once('SIGINT', () => this.bot.stop('SIGINT'))
        process.once('SIGTERM', () => this.bot.stop('SIGTERM'))
    }

}

export default Bot;