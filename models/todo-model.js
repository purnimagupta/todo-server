const mongoose = require('mongoose');

/**
 
  Todo's  Schema.
 
 */


 let todoSchema = new mongoose.Schema({
   todo: { type: String, required: true, trim: true },
   bucket: { type: String, default: null},
   status: { type: String, default:"todo"},
   createdAt: { type: Date, default: Date.now, required: true }
 })

module.exports = mongoose.model('Todo', todoSchema);
