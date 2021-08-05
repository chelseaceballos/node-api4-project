require('dotenv').config()

const { PORT } = require('./config')

const express = require('express');
const cors = require('cors');
const helmet =require('helmet');

const server = express()

server.use(express.json()) 
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`
    <h1>HI HOMEPAGE </h1>
    `)
})

server.use('*', (req, res) => {
    res.json({
        message: "Our server couldn't find what you were looking for :( "
    })
});

server.listen(PORT, () => { // can't use 5000 as port because heroku will not accept it
    console.log(`listening on ${PORT}`);
})