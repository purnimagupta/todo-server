const Todo = require('../models/todo-model');



exports.saveTodo = function(item, bucket) {
  const todo = new Todo({
    item: item,
    bucket: bucket
  });
  return todo.save()
  .catch((err) => console.log("err occured in save todos ", err))

}

exports.fetchTodos = function() {
  return Todo.find({}).sort({ createdAt: -1})
  .exec()
  .catch((err) => console.log("err occured in fetchTodos", err))
}