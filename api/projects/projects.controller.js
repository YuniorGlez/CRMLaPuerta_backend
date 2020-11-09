const projectModel = require("./projects.model");

/**
 * GET     /projects              ->  getAll
 * GET     /projects/:id          ->  getOneById
 * POST    /projects              ->  createOne
 * put     /projects/:id          ->  putOne
 * patch     /projects/:id          ->  patchOne
 * delete     /projects/:id          ->  removeOne
 **/

module.exports.getAll = getAll;
module.exports.getOneById = getOneById;
module.exports.createOne = create;
module.exports.putOne = putOne;
module.exports.removeOne = remove;

function getAll(req, res) {
  if (req.query.populate) { 
      return projectModel.find()
      .populate('customer')
      .then((projects) => res.json(projects))
      .catch((e) => res.status(500).json(e));
    } else {
      return projectModel.find()
      .then((projects) => res.json(projects))
      .catch((e) => res.status(500).json(e));
  }
}

function getOneById(req, res) {
  const id = req.params.id;
  if (req.query.populate) {  
    return projectModel
      .findById(id)
      .populate('customer')
      .then((customer) => res.json(customer))
      .catch((e) => res.status(500).json(e));
    } else {
      return projectModel
        .findById(id)
        .then((customer) => res.json(customer))
        .catch((e) => res.status(500).json(e));
    
  }
}


function create(req, res) {
  return projectModel
    .create(req.body)
    .then((u) => res.json(u))
    .catch((e) => res.status(500).json(e));
}


async function putOne(req, res) {
  try {
    const id = req.params.id;
    const edited = await projectModel.findOneById(id).updateOne(req.body);
    return res.json(edited);
  } catch (e) {
    return res.status(500).json(e);
  }
}


function remove(req, res) {
  const id = req.params.id ;
    return projectModel
    .findByIdAndRemove(id)
    .then((u) => res.json(u))
    .catch((e) => res.status(500).json(e));
}
