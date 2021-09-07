import { Telegraf} from 'telegraf';
import { get as getGamesFromDB } from '../../core/Game';


const getGames = async (ctx) => {
    try {
        let games = await getGamesFromDB();
        games.forEach(element => {
            ctx.reply(
                element.title,
            );
        })
        
    } catch (error) {
    ctx.reply(
        'Sorry, something got wrong'
    );
}

}

export { getGames };