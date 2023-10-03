const express = require('express');
const router = express.Router();
const addEmployees = require ('../controllers/addEmployees.js');



router.post('/employees', addEmployees.addEmployee);

module.exports = router;