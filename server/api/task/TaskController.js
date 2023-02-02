const TaskModel = require('../../models/taskModel')

const TaskController = {
  // find all tasks
  all: async (req, res) => {
    const tasks = await TaskModel.find()
    res.json({ tasks })
  },

  // find all tasks from a specific project
  allInProject: async (req, res) => {
    const tasks = await TaskModel.findInProject(req.params.projectId)
    res.json({ tasks })
  },

  // find a specific task by <taskId>
  one: async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    res.json({ task })
  },

  // create a task
  create: async (req, res, next) => {
    const { title, dueDate, } = req.body
    try {
      const newTask = { title, dueDate, status: "TODO" }
      const task = await TaskModel.create(newTask)
      res.json({ task })

    } catch (error) {
      next(error)
    }
  },

  // create a task in a project
  createInProject: async (req, res, next) => {
    const { title, dueDate } = req.body
    const { projectId } = req.params

    try {
      const newTask = { title, dueDate, project: projectId }
      const task = await TaskModel.create(newTask)
      res.json({ message: "Task has been created successfully.", task })

    } catch (error) {
      next(error)
    }
  },

  // update a task 
  update: async (req, res, next) => {

    const { id } = req.params
    const { q } = req.query
    try {
      // if request is for title update
      if (q === "title") {
        const task = await TaskModel.updateTitle(id, req.body.title)
        if (!task)
          res.status(402).json({ message: 'task not exist, check your task id' })

        res.json({ message: "Task has been updated successfully.", task })
      }

      // if request is for due date update
      if (q === "date") {
        const task = await TaskModel.updateDueDate(id, req.body.dueDate)
        if (!task)
          res.status(402).json({ message: 'task not exist, check your task id' })

        res.json({ message: "Task has been updated successfully.", task })
      }

      // if request is for status update
      if (q === "status") {
        const task = await TaskModel.updateStatus(id, req.body.status)
        if (!task)
          res.status(402).json({ message: 'task not exist, check your task id' })

        res.json({ message: "Task has been updated successfully.", task })
      }
    } catch (err) {
      next(err)
    }

  },

  // update a task in a project
  updateInProject: async (req, res) => {

    const { projectId, taskId } = req.params
    const { q } = req.query // query specifies the update type

    // if request is for updating title of the task
    if (q === "title") {

      const filter = { _id: taskId, project: projectId }
      const update = { title: req.body.title }

      const task = await TaskModel.findOneAndUpdate(filter, update)
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating due date of the task
    if (q === "date") {

      const filter = { _id, taskId, project: projectId }
      const update = { dueDate: req.body.dueDate }

      const task = await TaskModel.findOneAndUpdate(filter, update).getUpdate()
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating status of the task
    if (q === "status") {

      const filter = { _id, taskId, project: projectId }
      const update = { status: req.body.status }

      const task = await TaskModel.findOneAndUpdate(filter, update).getUpdate()
      res.json({ message: "Task has been updated successfully.", task })
    }

    res.json({ message: "Please provide query with request." })
  },

  delete: async (req, res) => {
    const { id } = req.params
    await TaskModel.findByIdAndDelete(id)
    res.json({ message: "Task has been deleted successfully." })
  },

  deletInProject: async (req, res) => {

    const { projectId, taskId } = req.params
    const filter = { _id: taskId, project: projectId }

    await TaskModel.findOneAndDelete(filter)
    res.json({ message: "Task has been deleted successfully." })
  }
}



module.exports = TaskController

