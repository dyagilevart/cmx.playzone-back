import pool from '../dbconfig/dbconnector';

class GameController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM players";
            const { rows } = await client.query(sql);
            const games = rows;

            client.release();

            res.send(games);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getById(req, res) {
        try {
            if (req.params.id === undefined || req.params.id === null) {
                throw 'get player by id unreacheble with undefined id';
            }

            const client = await pool.connect();

            const sql = "SELECT * FROM players WHERE id = " + req.params.id;
            const { rows } = await client.query(sql);


            if (rows.length === 1) {
                const game = rows[0];

                client.release();

                res.send(game);
            } else {
                throw `player with id=${req.params.id} not found`;
            }
        } catch (error) {
            res.status(400).send(error);
        }
    }
}


export default GameController;