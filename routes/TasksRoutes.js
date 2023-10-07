const express = require('express');
const router = express.Router();
const crud = require('../controllers/TasksCrud.js');

router.get('/', crud.getAllTasks);

router.post('/', crud.addTask);

router.delete('/:id', crud.deleteTask);

router.put('/:id', crud.updateTask);

module.exports = router;