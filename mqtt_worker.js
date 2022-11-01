const mqtt = require('mqtt');
const { insertData } = require('./db/insertData');

const client = mqtt.connect(
    'mqtt://localhost',
    {
        keepalive: 60,
        protocolVersion: 4,
        clean: true
    });

const TOPIC = 'application/+/device/+/event/up';

client.on('connect', () => console.log('Connected.'));

client.on('error', err => {
    console.log(`Error: ${err}`);
    client.end();
})

client.subscribe(TOPIC, { qos: 2 });

client.on('message', (topic, buf) => {
    console.log(topic);
    void insertData(JSON.parse(buf.toString()));
});