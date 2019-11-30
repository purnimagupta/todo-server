const dbOperations = require('../database/db-operations');
var ObjectId = require('mongodb').ObjectID;
const Bucket = require('../models/bucket-model');

exports.saveTodo= async function(req, res, next) {
  try {
      const todo_item = req.body.todo;
      const bucket = req.body.bucket

      const savedItem = await dbOperations.saveTodo(todo_item, bucket);
      // const getallTodos = await dbOperations.fetchTodos();
      res.status(200).json({
        todos: savedItem
      })
      
  } catch(error) {
    console.log("error is", error)
    next(error)
  };
}


exports.fetchTodo= async function(req, res, next) {
  try {
      const getallTodos = await dbOperations.fetchTodos();
      res.status(200).json({
        todos: getallTodos
      })
      
  } catch(error) {
    next(error)
  };
}


exports.updateTodo = async (req, res, next) => {
  try {
    if(ObjectId.isValid(req.params.id)) {
      const id = req.params.id;     
      
      if (req.body) {
        const item = await dbOperations.findTodoById(id);
        if(item) {
          const updatedTodo = await dbOperations.updateTodo(id, req.body);
          res.status(200).json({ todos: updatedTodo })
        }
        else {
          res.status(404).json({error: "todo is not found"})
        }
      }
      else {
        res.status(403).json({error: "Either item or id is empty"})
      }
      }
      else {
        res.status(404).json({error: "id is not correct"})
      }

  } catch(error) {
    next(error)
  } 
}

exports.createLabels = async (req, res, next) => {
  try {

    var label = req.body.label;
    var value = req.body.value;

    console.log("bucketOption ", label, value);
    if(label && value ) {
      const savedOption = await dbOperations.createLabels(label, value);
      // const options = await Bucket.find({});
      res.status(200).json({labels: savedOption});
    }
    else {
      res.status(403).json({error: "Options are empty"})
    }
  } catch(error) {
    next(error)
  } 
}

exports.fetchLabels = async (req, res, next) => {
  try {
    
    const fetchedLabels = await dbOperations.fetchLabels();
    res.status(200).json({labels: fetchedLabels});

  } catch(error) {
    next(error)
  } 
}

exports.deleteTodo = async (req, res, next) => {
  try {
   
      const id = req.params.id;
      
      const todo = await dbOperations.findTodoById(id);

      if(ObjectId.isValid(id) && todo){ 
        const todoToRemove = await dbOperations.deleteTodo(id);
        const fetchedTodos = await dbOperations.fetchTodos();

        res.status(200).json({
          todos: fetchedTodos
        })
      }else {
        res.status(404).json({ error: "Item doesn't exist"});
      }
  } catch(error){
      next(error)
  }
}