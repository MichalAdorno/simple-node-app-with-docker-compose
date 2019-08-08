const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

let visitsAtStart
client.get('visits', (e, v) => { visitsAtStart = v })
console.log('visits at start= ' + visitsAtStart)

if (!visitsAtStart) {
    client.set('visits', 0)
    client.get('visits', (e, v) => { visitsAtStart = v })
    console.log('visits in if = ' + visitsAtStart)
}

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});