const getAll = (req, res) => {
    res.send('GETTING messages')
}

const getOne = (req, res) => {
    res.send('GET messages' + req.params.id)
}

const create =  (req, res) => {
    res.send('POST messages')
}

const update = (req, res) => {
    res.send('PUT messages' + req.params.id)
}

const remove = (req, res) => {
    res.send('DELETE messages' + req.params.id)
}

const getByUsername = (req, res) => {
    res.send('GET messages' + req.params.username)
}

module.exports.getAll = getAll
module.exports.getOne = getOne
module.exports.create = create
module.exports.update = update
module.exports.remove = remove
module.exports.getByUsername = getByUsername