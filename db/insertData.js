const { pool } = require('./db');

async function insertData(payload) {
    const { devEUI, data } = payload;

    if (devEUI && data) {
        await pool.query(
            'INSERT INTO raw_data(deveui, data_base64, payload) VALUES ($1, $2, $3)',
            [devEUI, data, payload]
        ).then(res => console.log(`Inserted ${res.rowCount} rows`));
    } else {
        console.log('Some strange data received\n' + payload);
    }
}

module.exports = { insertData };