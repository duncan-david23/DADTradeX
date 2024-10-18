import pg from 'pg';



const {DB_USER,DB_HOST,DB_DATABASE,DB_PASSWORD,DB_PORT} = process.env;
const db = new pg.Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT
})

export default db;