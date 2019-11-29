const mongoose = require('mongoose');

/**
 
  Bucket's  Schema.
 
 */

// var BucketFieldsObj = new Schema({ 
//   value: String,
//   label: String,
//   isNew: Boolean 
// });
let BucketSchema = new mongoose.Schema({
    value: String,
    label: String,
    createdAt: { type: Date, default: Date.now, required: true },
})

module.exports = mongoose.model('Bucket', BucketSchema);
