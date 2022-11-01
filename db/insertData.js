const { pool } = require('./db');

async function insertData(payload) {
    if (payload.fPort === 2) {
        await pool.query(
            'INSERT INTO raw_data(deveui, data_base64, payload) VALUES ($1, $2, $3)',
            [payload.devEUI, payload.data, payload]
        ).then(res => console.log(`Inserted ${res.rowCount} rows`));
    }
}

module.exports = { insertData };