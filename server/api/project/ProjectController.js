const ProjectModel = require('../../models/projectModel')

const ProjectController = {
  // GET
  // find all tasks
  all: async (req, res) => {
    const projects = await ProjectModel.find()
    res.json({ projects })
  },

  // find a specific project by <ProjectID>
  one: async (req, res) => {
    const project = await ProjectModel.findById(req.params.id)
    res.json({ project })
  },

  // TODO: update this file from this line onwards, 
  // POST
  // create a project
  create: async (req, res, next) => {
    const { title, dueDate, } = req.body
    try {
      const task = await ProjectModel.create({ title, dueDate, status: "todo" })
    } catch (error) {
      next(error)
    }
  },

  // create a task in a project
  createInProject: async (req, res, next) => {
    const { title, dueDate } = req.body
    const { projectId } = req.params

    try {
      const task = await ProjectModel.create({ title, dueDate, project: projectId })
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
      const task = await ProjectModel.findByIdAndUpdate(id, { title: req.body.title })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if update request is for due date
    if (q === "date") {
      const task = await ProjectModel.findByIdAndUpdate(id, { dueDate: req.body.dueDate })
      res.json({ message: "Task has been updated successfully.", task })
    }

  },

  // update a task in a project
  updateInProject: async (req, res) => {

    const { projectId, taskId } = req.params
    const { q } = req.query // query specifies the update type

    // if request is for updating title of the task
    if (q === "title") {
      const task = await ProjectModel.findOneAndUpdate({ _id: taskId, project: projectId }, { title: req.body.title })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating due date of the task
    if (q === "date") {
      const task = await ProjectModel.findOneAndUpdate({ _id, taskId, project: projectId }, { dueDate: req.body.dueDate })
      res.json({ message: "Task has been updated successfully.", task })
    }

    // if request is for updating status of the task
    if (q === "status") {
      const task = await ProjectModel.findOneAndUpdate({ _id, taskId, project: projectId }, { status: req.body.status })
      res.json({ message: "Task has been updated successfully.", task })
    }
  },

  // DELETE
  delete: async (req, res) => {
    const { id } = req.params
    const result = await ProjectModel.findByIdAndDelete(id)
    res.json({ message: "Task has been deleted successfully." })
  },

  deletInProject: async (req, res) => {

    const { projectId, taskId } = req.params

    const result = await ProjectModel.findOneAndDelete({ _id: taskId, project: projectId })
    res.json({ message: "Task has been deleted successfully." })
  }
}

module.exports = ProjectController

