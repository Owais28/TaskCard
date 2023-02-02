var mongoose = require('mongoose')
const { Schema, Types } = mongoose

// Task Schema
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['TODO', 'IN_PROGRESS', 'DONE'],
    default: 'TODO'
  },

  dueDate: Schema.Types.Date,

  project: { type: Schema.Types.ObjectId, ref: "Project" },
})

// find a task from a project
TaskSchema.statics.findInProject = async function (projectId) {
  return this.find({ project: projectId })
}

// update title of the task
TaskSchema.statics.updateTitle = async function (id, title) {
  const task = await this.findById(id)
  // if task doesn't exist
  if (!task) return null

  task.title = title
  await task.save()
  return task
}

// update due date of the task
TaskSchema.statics.updateDueDate = async function (id, date) {
  const task = await this.findById(id)
  // if task doesn't exist
  if (!task) return null

  task.dueDate = date
  await task.save()
  return task
}

// update status of the task
TaskSchema.statics.updateStatus = async function (id, status) {
  const task = await this.findById(id)
  // if task doesn't exist
  if (!task) return null

  task.status = status
  await task.save()
  return task
}


module.exports = mongoose.model('Task', TaskSchema)