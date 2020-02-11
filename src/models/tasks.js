const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: String,
  end: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema, 'tasks');