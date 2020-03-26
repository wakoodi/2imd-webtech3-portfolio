const express = require('express')
const app = express()
const port = 3000
const apiV1MessagesRouter = require('./routers/api/v1/messages')

app.get('/', (req, res) => {
    res.send('eenvoudige homepage')
})

app.use('/api/v1/messages', apiV1MessagesRouter)


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})