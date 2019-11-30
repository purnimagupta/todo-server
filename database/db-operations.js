const Todo = require('../models/todo-model');
const Bucket = require('../models/bucket-model');


exports.saveTodo = function(todo, bucket) {
  const newTodo = new Todo({
    todo,
    bucket,
  });
  return newTodo.save()
  .catch((err) => console.log("err occured in save todos ", err))

}

exports.fetchTodos = function() {
  return Todo.find({}).sort({ createdAt: -1})
  .exec()
  .catch((err) => console.log("err occured in fetchTodos", err))
}

exports.findTodoById = function(id) {
  return Todo.findById(id)
  .exec()
  .catch((err) => console.log("err occured in findTodoById", err))

}
exports.updateTodo = function(id, item) {
  return Todo.findByIdAndUpdate(
    id, 
    {todo: item.todo, status: item.status, bucket: item.bucket},
    {new: true},
  )
  .exec()
  .catch((err) => console.log("err occured inside in updateTodo ", err) )
}

exports.deleteTodo = function(_id) {
  return Todo.deleteOne({
    _id: _id
  })
  .catch((err) => console.log("err occured inside delteToDo", err))
}

exports.createLabels = function(label, value) {
  const selectLabels = new Bucket({
    label: label,
    value: value,
  });

  return selectLabels.save()
  .catch((err) => {throw new Error("error inside createLablels ")})
}


exports.fetchLabels = function() {
  return Bucket.find({})
  .exec()
  .catch((err) => console.log("err occured in fetchLabels", err))
}
