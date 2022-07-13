const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller');

// Retrieve all employees
router.get('/', users.findAll);

// Create a new employee
router.post('/', users.create);

router.post('/login', users.login);

// Retrieve a single employee with id
router.get('/:id', users.findById);

// Update a employee with id
router.put('/:id', users.update);

// Delete a employee with id
router.delete('/:id', users.delete);

module.exports = router