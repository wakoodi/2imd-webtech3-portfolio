const express = require('express')
const router = express.Router()
const messagesController = require('../../../controllers/api/v1/messages')
//GET /api/v1/messages
router.get('/', messagesController.getAll)

//GET /api/v1/messages/:id
router.get('/:id', messagesController.getOne)

//POST /api/v1/messages
router.post('/', messagesController.create)

//PUT /api/v1/messages/:id
router.put('/:id', messagesController.update)

//DELETE /api/v1/messages/:id
router.delete('/:id', messagesController.remove)

//GET /api/v1/messages?user=username
router.get('/?user=username', messagesController.getByUsername)

module.exports = router