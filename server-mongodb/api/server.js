const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const server = express();
server.use(cors());
server.use(express.json());
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
        // const dogsData = await db.collection('cohort').find().toArray()
        // const document = { name: req.body.name, fact: req.body.fact };
        // const collection = await db.collection('cohort');

        // await collection.insert(document, { w: 1 }, function (err, records) {
        //console.log("Record added as " + records[0]._id);
        // });

        const stuff = await req.body.text();
        console.log(`(POST) req.body:`);
        console.log(stuff);
        res.send(`(POST) req.body: ${stuff}`);
        // res.send(req);
        // res.send(req.body);

    } catch (err) {
        res.send(err);
    }

})

module.exports = server