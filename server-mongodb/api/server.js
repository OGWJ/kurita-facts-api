const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const server = express();
server.use(cors());
server.use(bodyParser.json());

const { init } = require('./dbConfig');

//const factRoutes = require('./controllers/dogs')
//server.use('/facts', factRoutes)

// Root route
//server.get('/', (req, res) => res.send('Hello, client!'))
server.get('/', async (req, res) => {
    try {
        const db = await init();
        const dogsData = await db.collection('cohort').find().toArray()
        res.send(dogsData);
    } catch (err) {
        res.send(err);
    }
})

server.post('/', async (req, res) => {

    try {
        const db = await init();

        // This now recieves req.body
        console.log(`(POST) req.body:`);
        console.log(req.body);
        res.send(req.body);

    } catch (err) {
        res.send(err);
    }

})

module.exports = server