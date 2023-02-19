const ProjectModel = require('../../models/projectModel')
const TaskModel = require('../../models/taskModel')

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
  // create a project
  create: async (req, res, next) => {
    const { title, dueDate, } = req.body

    try {
      const doc = { title, dueDate, status: "TODO" }
      const project = new ProjectModel(doc)
      await project.save()

      if (!project) res.status(402).json({ message: 'not created' })
      res.json({ message: "Project created successfully", project })

    } catch (error) {
      next(error)
    }
  },

  // create a task in a project
  createTaskInProject: async (req, res, next) => {
    const { title, dueDate } = req.body
    const { projectId } = req.params
    const { q } = req.query

    try {

      if (q === 't') {
        const task = new TaskModel({ title, dueDate, status: "TODO" })
        const project = await ProjectModel.findById(projectId)

        await task.save(function (err) {
          if (err) next(err)
          task.project = project._id
          project.tasks = task._id
          project.save()
        })
        res.json({ message: "Task has been created successfully.", project })
      }

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
