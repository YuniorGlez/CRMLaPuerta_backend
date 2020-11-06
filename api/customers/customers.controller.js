const customerModel = require('./customers.model')

/**
 * GET     /customers              ->  getAll
 * GET     /customers/:id          ->  getOneById
 * POST    /customers              ->  createOne
 * put     /customers/:id          ->  putOne
 * patch     /customers/:id          ->  patchOne
 * delete     /customers/:id          ->  removeOne
 **/

module.exports.getAll = getAll;
module.exports.getOneById = getOneById;
module.exports.createOne = createOne;
module.exports.putOne = putOne;
module.exports.patchOne = patchOne;
module.exports.removeOne = removeOne;

function getAll(req, res) {
    return customerModel.find()
        .then(customers => { return res.json(customers) })
        .catch(error => res.status(500).json(error))
}
function getOneById ( req, res ) {
    return res.send('Todo salió bien, me hicise un getOneById')
}
function createOne ( req, res ) {
    return res.send('Todo salió bien, me hicise un createOne')
}
function putOne ( req, res ) {
    return res.send('Todo salió bien, me hicise un putOne')
}
function patchOne ( req, res ) {
    return res.send('Todo salió bien, me hicise un patchOne')
}
function removeOne ( req, res ) {
    return res.send('Todo salió bien, me hicise un removeOne')
}
