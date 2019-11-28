var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo-controller');

router.post('/save', todoController.saveTodo);
router.get('/fetch', todoController.fetchTodo);

module.exports = router;
