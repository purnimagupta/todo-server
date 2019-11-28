const dbOperations = require('../database/db-operations');

exports.saveTodo= async function(req, res, next) {
  try {
      const item = req.body.item;
      const bucket = req.body.bucket;

      const savedItem = await dbOperations.saveTodo(item, bucket);
      const getallTodos = await dbOperations.fetchTodos();
      res.status(200).json({
        todos: getallTodos
      })
      
  }
  catch(e) {
    console.log(e);
    res.status(500).send({msg: 'Server Error.'})
  };
}


exports.fetchTodo= async function(req, res, next) {
  try {
      const getallTodos = await dbOperations.fetchTodos();
      res.status(200).json({
        todos: getallTodos
      })
      
  }
  catch(e) {
    console.log(e);
    res.status(500).send({msg: 'Server Error.'})
  };
}


  