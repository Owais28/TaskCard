var mongoose = require('mongoose')
const { Schema } = mongoose

// Task Schema
const TaskSchema = new Schema({

  _id: Schema.Types.ObjectId,

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