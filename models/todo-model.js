const mongoose = require('mongoose');

/**
 
  Todo's  Schema.
 
 */


 let todoSchema = new mongoose.Schema({
   item: { type: String, required: true, trim: true },
   createdAt: { type: Date, default: Date.now, required: true },
   bucket: { type: String, default: null},
   status: { type: String, default:"todo"}
 })

module.exports = mongoose.model('Todo', todoSchema);
