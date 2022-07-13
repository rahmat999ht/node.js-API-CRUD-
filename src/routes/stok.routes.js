const express = require('express')
const router = express.Router()
const stok = require('../controllers/stok.controller');

// Retrieve all employees
router.get('/', stok.findAll);

// Create a new employee
router.post('/', stok.create);

// Retrieve a single employee with id
router.get('/:id', stok.findById);

// Update a employee with id
router.put('/:id', stok.update);

// Delete a employee with id
router.delete('/:id', stok.delete);

module.exports = router