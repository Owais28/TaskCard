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
    const filter = { project: projectId } //filter object
    const tasks = await TaskModel.find(filter)
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

      // new task
      const newTask = { title, dueDate, status: "todo" }
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

  // PUT
  // update task 
  update: async (req, res, next) => {

    const { id } = req.params
    const { q } = req.query

    // if update request is for title
    if (q === "title") {
      try {

        const task = await TaskModel.findById(id)
        // if task == null
        if (!task) res.status(402).json({ message: "Task not found" })

        // update task title
        task.title = req.body.title
        await task.save()
        res.json({ message: "Task has been updated successfully.", task })

      } catch (error) {
        console.log(error)
        next(error)
      }
    }

    // if update request is for due date
    if (q === "date") {
      try {

        const task = await TaskModel.findById(id)
        // if task == null
        if (!task) res.status(402).json({ message: "Task not found" })

        // update due date
        task.dueDate = req.body.dueDate
        await task.save()
        res.json({ message: "Task has been updated successfully.", task })

      } catch (error) {
        console.log(error)
        next(error)
      }
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

  // DELETE
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
