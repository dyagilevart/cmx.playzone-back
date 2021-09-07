import pool from '../dbconfig/dbconnector';

const get = async () => {
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM games";
        const { rows } = await client.query(sql);
        return rows;
    } catch (err) {
        throw err;
    }
}

export { get };