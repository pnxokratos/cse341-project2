const express = require('express');
const router = express.Router();

const validator = require('../validate');

const tasksController = require('../controller/tasks');

router.get('/', tasksController.getAll);

router.get('/:id', tasksController.getSingle);

router.post('/', validator.validatedTask, tasksController.createTask);

router.put('/:id', validator.validatedTask, tasksController.updateTask);

router.delete('/:id', tasksController.deleteTask);



module.exports = router;