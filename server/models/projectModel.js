var mongoose = require('mongoose')
const { Schema } = mongoose

// Project Schema
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,
  status: {
    type: String,
    enum: ['TODO', 'INPROGRESS', 'DONE'],
    default: 'TODO'
  },

  dueDate: Schema.Types.Date,

  coverImg: { type: Schema.Types.ObjectId, ref: 'Image' },

  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],

  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('Project', ProjectSchema)