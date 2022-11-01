const { pool } = require('./db');

async function insertData(data) {
    console.log(data);

    await pool.query(
        'INSERT INTO raw_data(deveui, data_hex, payload) VALUES ($1, $2, $3)',
        [data.devEUI, data.data, data]
    ).then(res => console.log('SQL result:', res));
}

module.exports = { insertData };