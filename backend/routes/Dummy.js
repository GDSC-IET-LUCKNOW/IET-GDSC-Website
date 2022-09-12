// Importing Dependencies
const express = require('express');
const Dummy = require('../controllers/Dummy');

// Creating an Express Router
const router = express.Router();

// Registering Routes
// ? GET /api/dummy
router.get('/', Dummy.getAll);

// ? GET /api/dummy/:id
router.get('/:id', Dummy.getOne);

// ? POST /api/dummy
router.post('/', Dummy.createRecord);

// ? PUT /api/dummy/:id
router.put('/:id', Dummy.updateRecord);

// ? DELETE /api/dummy/:id
router.delete('/:id', Dummy.deleteRecord);

// Exporting the Router for using it in index.js file
module.exports = router;
