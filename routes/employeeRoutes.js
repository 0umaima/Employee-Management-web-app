const express = require('express');
const router = express.Router();
const addEmployees = require ('../controllers/addEmployees.js');
const deleteEmployees = require ('../controllers/deleteEmployees.js')



router.post('/employees', addEmployees.addEmployee);

router.delete('/employees/:id', deleteEmployees.deleteEmployee)

module.exports = router;