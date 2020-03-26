const express = require('express')
const router = express.Router()

// /api/v1/messages
router.get('/', (req, res) =>{
    res.json({
        "status" : "success",
        "data" : {
            "message": "GETTING messages"
        }
    })
})

router.get('/:id', (req, res) =>{
    res.json({
        "status" : "success",
        "data" : {
            "message": "GETTING messages with ID " + req.params.id
        }
    })
})

router.post('/', (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "POSTING a new message for user Pikachu"
        }
    })
})

router.put('/:id', (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "UPDATING a message with ID " + req.params.id
        }
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "DELETING a message with ID " + req.params.id
        }
    })
})

/*router.get('?user=username', (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "GETTING message for username " + req.params.username
        }
    })
})*/


module.exports = router