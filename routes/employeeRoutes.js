const express = require('express');
const router = express.Router();
const employeesCrud = require('../controllers/employeesCrud.js');

router.get('/', employeesCrud.getAllEmployees);

router.post('/', employeesCrud.addEmployee);

router.delete('/:id', employeesCrud.deleteEmployee);

router.put('/:id', employeesCrud.updateEmployee);

module.exports = router;