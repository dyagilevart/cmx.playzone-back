import pool from '../dbconfig/dbconnector';

class AwardController {

    public async getTopByGameId(req, res) {
        try {
            if (req.params.id === undefined || req.params.id === null) {
                throw 'get game by id unreacheble with undefined id';
            }

            const client = await pool.connect();

            const sql = `SELECT winner, game, COUNT(*) FROM public.scores WHERE game = ${req.params.id} GROUP BY winner, game ORDER BY count DESC LIMIT 3`;
            const { rows } = await client.query(sql);

            const game = rows;

            client.release();

            res.send(game);
        } catch(error) {
        res.status(400).send(error);
    }
}
}

export default AwardController;