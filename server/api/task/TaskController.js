const TaskModel = require('../../models/taskModel')

const TaskController = {
  // find all tasks
  all: async (req, res) => {
    const tasks = await TaskModel.find()
    res.json({ tasks })
  },

  // find specific task by task id
  one: async (req, res) => {
    const task = await TaskModel.findById(req.params.id)
    res.json({ task })
  },

  // update task 
  update: async (req, res) => {
    if (req.params.query)
  }
}