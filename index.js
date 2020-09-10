const server = require('./server')

const port = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
})