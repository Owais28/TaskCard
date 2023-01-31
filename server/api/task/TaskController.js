const TaskModel = require('../../models/taskModel')

const TaskController = {
  // GET
  // find all tasks
  all: async (req, res) => {
    const tasks = await TaskModel.find()
    res.json({ tasks })
  },

  // find all tasks from a specific project
  allInProject: async (req, res) => {
    const { projectId } = req.params
    const tasks = await TaskModel.find({ project: projectId })
    res.json(tasks)
  },

  // find a specific task by <taskId>
  one: async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    res.json({ task })
  },


  // POST
  // create a task
  create: async (req, res, next) => {
    const { title, dueDate, } = req.body
    try {
      const task = await TaskModel.create({ title, dueDate, status: "todo" })
    } catch (error) {
      next(error)
    }
  },

  // create a task in a project
  createInProject: async (req, res, next) => {
    const { title, dueDate } = req.body
    const { projectId } = req.params

    try {
      const task = await TaskModel.create({ title, dueDate, project: projectId })
      res.json({ message: "Task has been created successfully.", task })
    } catch (error) {
      next(error)
    }
  },

  // PUT
  // update task 
  update: async (req, res) => {

    const { id } = req.body
    const { q } = req.query

    // if update request is for title
    if (q === "title") {
      const task = await TaskModel.findByIdAndUpdate(id, { title: req.body.title })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if update request is for due date
    if (q === "date") {
      const task = await TaskModel.findByIdAndUpdate(id, { dueDate: req.body.dueDate })
      res.json({ message: "Task has been updated successfully.", task })
    }

  },

  // update a task in a project
  updateInProject: async (req, res) => {

    const { projectId, taskId } = req.params
    const { q } = req.query // query specifies the update type

    // if request is for updating title of the task
    if (q === "title") {
      const task = await TaskModel.findOneAndUpdate({ _id: taskId, project: projectId }, { title: req.body.title })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating due date of the task
    if (q === "date") {
      const task = await TaskModel.findOneAndUpdate({ _id, taskId, project: projectId }, { dueDate: req.body.dueDate })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating status of the task
    if (q === "status") {
      const task = await TaskModel.findOneAndUpdate({ _id, taskId, project: projectId }, { status: req.body.status })
      res.json({ message: "Task has been updated successfully.", task })
    }
  },

  // DELETE
  delete: async (req, res) => {
    const { id } = req.params
    const result = await TaskModel.findByIdAndDelete(id)
    res.json({ message: "Task has been deleted successfully." })
  },

  deletInProject: async (req, res) => {

    const { projectId, taskId } = req.params

    const result = await TaskModel.findOneAndDelete({ _id: taskId, project: projectId })
    res.json({ message: "Task has been deleted successfully." })
  }
}

module.exports = TaskController

