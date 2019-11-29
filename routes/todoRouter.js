var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo-controller');

router.post('/save', todoController.saveTodo);
router.get('/fetch', todoController.fetchTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.post('/label/create', todoController.createLabels);
router.get('/labels/fetch', todoController.fetchLabels);

module.exports = router;
