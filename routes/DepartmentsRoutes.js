const express = require('express');
const router = express.Router();
const crud = require('../controllers/DepartmentsCRUD.js');

router.get('/', crud.getAllDepartements);

router.post('/', crud.addDepartement);

router.delete('/:id', crud.deleteDepartement);

router.put('/:id', crud.updateDepartement);

module.exports = router;