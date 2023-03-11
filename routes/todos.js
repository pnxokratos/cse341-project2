const express = require('express');
const router = express.Router();

const validator = require('../validate');

const todosController = require('../controller/todos');

router.get('/', todosController.getAll);

router.get('/:id', todosController.getSingle);

router.post('/', validator.validatedTask, todosController.createToDo);

router.put('/:id', validator.validatedTask, todosController.updateToDo);

router.delete('/:id', todosController.deleteToDo);



module.exports = router;