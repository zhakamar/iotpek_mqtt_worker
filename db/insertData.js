const { pool } = require('./db');

async function insertData(data) {
    const res = await pool.query(
        'INSERT INTO raw_data(deveui, data_hex, payload) VALUES ($1, $2, $3)',
        [data.devEUI, data.data, data]
    );
    console.log('SQL RESULT:', res);
}

module.exports = { insertData };