const express = require('express');
const router = express.Router();


const todosController = require('../controller/todos');

router.get('/', todosController.getAll);

router.get('/:id', todosController.getSingle);

router.post('/', todosController.createToDo);



module.exports = router;