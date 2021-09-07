import { Telegraf} from 'telegraf';
import { get as getGamesFromDB } from '../../core/Game';
import { get as getAwardsFromDB } from '../../core/Awards';



const getAwards = async (ctx) => {
    try {
        let games = await getGamesFromDB();
        games.forEach(async element => {
            let awards = await getAwardsFromDB(element.id);

            ctx.reply(
                `${element.title}
                ${awards.map(item => item)}`,
            );
 
        })
        
    } catch (error) {
    ctx.reply(
        'Sorry, something got wrong'
    );
}

}



export { getAwards };