const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config({ path: '.env' });

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
});

module.exports = { pool };