const { pool } = require('./db');

async function insertData(data) {
    if (data.fPort === 2) {
        await pool.query(
            'INSERT INTO raw_data(deveui, data_hex, payload) VALUES ($1, $2, $3)',
            [data.devEUI, data.data, data]
        ).then(res => console.log(`Inserted ${res.rowCount} rows`));
    }
}

module.exports = { insertData };