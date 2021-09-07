import { Pool } from 'pg';

const pool = new Pool({
    max: 20,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'cmx.playzone',
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    idleTimeoutMillis: 30000
});

export default pool;