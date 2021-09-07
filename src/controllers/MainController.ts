import pool from '../dbconfig/dbconnector';

class GameController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM games";
            const { rows } = await client.query(sql);
            const games = rows;

            client.release();

            res.send(games);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getPopular(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM games LIMIT 2";
            const { rows } = await client.query(sql);
            const games = rows;

            client.release();

            res.send(games);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default GameController;