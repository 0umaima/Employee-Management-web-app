const express = require('express');
const router = express.Router();
const employeesCrud = require ('../controllers/employeesCrud.js');


router.get('/employees', employeesCrud.getAllEmployees);

router.post('/employees', employeesCrud.addEmployee);

router.delete('/employees/:id', employeesCrud.deleteEmployee);

router.put('/employees/:id', employeesCrud.updateEmployee);


module.exports = router;