const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('eenvoudige homepage')
})

//GET /api/v1/messages

//GET /api/v1/messages/:id

//POST /api/v1/messages

//PUT /api/v1/messages/:id

//DELETE /api/v1/messages/:id

//GET /api/v1/messages?user=username



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})