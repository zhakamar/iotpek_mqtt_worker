const { pool } = require('./db');

async function insertData(data) {
    const res = await pool.query(
        'INSERT INTO raw_data(deveui, data_hex, payload) VALUES ($1, $2, $3)',
        ...data
    );
    console.log(res);
}

module.exports = { insertData };