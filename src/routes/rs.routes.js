const express = require('express')
const router = express.Router()
const rs = require('../controllers/rs.controller');

// Retrieve all employees
router.get('/', rs.findAll);

// Create a new employee
router.post('/', rs.create);

// Retrieve a single employee with id
router.get('/:id', rs.findById);

// Update a employee with id
router.put('/:id', rs.update);

// Delete a employee with id
router.delete('/:id', rs.delete);

module.exports = router