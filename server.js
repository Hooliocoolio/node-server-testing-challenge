const express = require('express')
const cors = require('cors')
const pr = require('./routes/peopleRouter')

const server = express()

server.use(cors())
server.use(express.json())

server.use('/people', pr)
server.get('/', (req, res) => {
    res.json({
        Message: "Welcome to our API"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        Message: "Something went wrong"
    })
})

module.exports = server 