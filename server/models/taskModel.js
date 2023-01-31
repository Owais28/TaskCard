var mongoose = require('mongoose')
const { Schema, Types } = mongoose

// Task Schema
const TaskSchema = new Schema({

  // title
  title: {
    type: String,
    required: true,
  },

  // status (enum['todo' | 'in-progress' | 'done'])
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo'
  },

  // due date (Date)
  dueDate: Schema.Types.Date,
  project: { type: Schema.Types.ObjectId, ref: "Project" }
})

module.exports = mongoose.model('Task', TaskSchema)