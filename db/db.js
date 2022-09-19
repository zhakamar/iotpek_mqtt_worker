const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'pek',
    user: 'henaro',
    password: 'gjghfdbnm`1',
});

module.exports = { pool };