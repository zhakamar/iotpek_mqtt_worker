const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config({ path: __dirname + '/.env'});

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
}

console.log(config);

const pool = new Pool(config);

module.exports = { pool };