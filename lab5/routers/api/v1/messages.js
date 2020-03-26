const express = require('express')
const router = express.Router()

//GET /api/v1/messages
router.get('/', (req, res) => {
    res.send('GETTING messages')
})

//GET /api/v1/messages/:id
router.get('/:id', (req, res) => {
    res.send('GET messages' + req.params.id)
})

//POST /api/v1/messages
router.post('/', (req, res) => {
    res.send('POST messages')
})

//PUT /api/v1/messages/:id
router.put('/:id', (req, res) => {
    res.send('PUT messages' + req.params.id)
})

//DELETE /api/v1/messages/:id
router.delete('/:id', (req, res) => {
    res.send('DELETE messages' + req.params.id)
})

//GET /api/v1/messages?user=username
router.get('/?user=username', (req, res) => {
    res.send('GET messages' + req.params.username)
})

module.exports = router