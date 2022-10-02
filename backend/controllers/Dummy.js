/**
 * * This is where all the important stuff will happen.
 * * Controllers are the glue between the routes and the database.
 * * Controllers are just regular javascript functions and they are responsible for handling the logic of the application.
 */
const DummyModel = require('../models/Dummy');

module.exports.getAll = async (_req, res) => {
  const data = await DummyModel.findAll();
  res.json(data);
};

module.exports.getOne = async (req, res) => {
  const data = await DummyModel.findOne(req.params.id);
  res.json(data);
};

module.exports.createRecord = async (req, res) => {
  const data = await DummyModel.create(req.body.name, req.body.image);
  res.json(data);
};

module.exports.updateRecord = async (req, res) => {
  const data = await DummyModel.update(
    req.params.id,
    req.body.name,
    req.body.image
  );
  res.json(data);
};

module.exports.deleteRecord = async (req, res) => {
  const data = await DummyModel.delete(req.params.id);
  res.json(data);
};
