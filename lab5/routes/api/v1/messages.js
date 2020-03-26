const express = require('express')
const router = express.Router()
const apiV1MessagesController  = require('../../../controllers/api/v1/messages')

// /api/v1/messages
router.get('/', apiV1MessagesController.getAll)

router.get('/:id', apiV1MessagesController.getOne)

router.post('/', apiV1MessagesController.createOne)

router.put('/:id', apiV1MessagesController.updateOne)

router.delete('/:id', apiV1MessagesController.removeOne)

/*router.get('?user=username', (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "GETTING message for username " + req.params.username
        }
    })
})*/


module.exports = router