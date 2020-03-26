const getAll = (req, res) =>{
    let user = req.params.user

    if(user != undefined){
        res.json({
            "status" : "success",
            "data" : {
                "message": "GETTING messages for " + user
            }
        })
    }else{
        res.json({
            "status" : "success",
            "data" : {
                "message": "GETTING messages"
            }
        })
    }
    
}

const getOne = (req, res) =>{
    res.json({
        "status" : "success",
        "data" : {
            "message": "GETTING messages with ID " + req.params.id
        }
    })
}

const createOne =  (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "POSTING a new message for user Pikachu"
        }
    })
}

const updateOne = (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "UPDATING a message with ID " + req.params.id
        }
    })
}

const removeOne = (req, res) => {
    res.json({
        "status" : "success",
        "data" : {
            "message": "DELETING a message with ID " + req.params.id
        }
    })
}

module.exports.getAll = getAll
module.exports.getOne = getOne
module.exports.createOne = createOne
module.exports.updateOne = updateOne
module.exports.removeOne = removeOne