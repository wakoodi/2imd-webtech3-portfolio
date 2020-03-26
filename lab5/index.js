const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('eenvoudige homepage')
})

//GET /api/v1/messages
app.get('/api/v1/messages', (req, res) => {
    res.send('GETTING messages')
})

//GET /api/v1/messages/:id
app.get('/api/v1/messages/:id', (req, res) => {
    res.send('GET messages' + req.params.id)
})

//POST /api/v1/messages
app.post('/api/v1/messages', (req, res) => {
    res.send('POST messages')
})

//PUT /api/v1/messages/:id
app.put('/api/v1/messages/:id', (req, res) => {
    res.send('PUT messages' + req.params.id)
})

//DELETE /api/v1/messages/:id
app.delete('/api/v1/messages/:id', (req, res) => {
    res.send('DELETE messages' + req.params.id)
})

//GET /api/v1/messages?user=username



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})