const customerModel = require("./customers.model");

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
module.exports.createOne = create;
module.exports.putOne = putOne;
module.exports.removeOne = remove;

function getAll(req,res) {
    return customerModel.find()
        .then((customers) => res.json(customers))
        .catch((e) => res.status(500).json(e));
}

function getOneById(req, res) {
  const id = req.params.id;
    return customerModel
        .findById(id)
        .then((customer) => res.json(customer))
        .catch((e) => res.status(500).json(e));
}


function create(req, res) {
  return customerModel
    .create(req.body)
    .then((u) => res.json(u))
    .catch((e) => res.status(500).json(e));
}


async function putOne(req, res) {
  try {
    const id = req.params.id;
    const edited = await customerModel.findOneById(id).updateOne(req.body);
    return res.json(edited);
  } catch (e) {
    return res.status(500).json(e);
  }
}


function remove(req, res) {
  const id = req.params.id ;
    return customerModel
    .findByIdAndRemove(id)
    .then((u) => res.json(u))
    .catch((e) => res.status(500).json(e));
}
