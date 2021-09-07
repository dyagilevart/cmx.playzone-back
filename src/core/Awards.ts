import pool from '../dbconfig/dbconnector';

const get = async (id) => {
    try {
        if (id === undefined || id === null) {
            throw 'get awards by id unreacheble with undefined id';
        }

        const client = await pool.connect();
        const sql = `SELECT winner, game, COUNT(*) FROM public.scores WHERE game = ${id} GROUP BY winner, game ORDER BY count DESC LIMIT 3`;
        const { rows } = await client.query(sql);
        return rows;
    } catch (err) {
        throw err;
    }
}

export { get };