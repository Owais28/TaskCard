const express = require('express')
const router = express.Router()

// POST
// create a new task
router.post('/task', (req, res) => {

})

// DELETE
// delete a task
router.delete('/task/:id')

// PUT
// update a task
router.put('/task/:id', (req, res) => {

  if (req) {

    // update name
    if (req.query.name) {
      res.json({
        action: "Name updated.",
        name: req.body.name
      })
      console.log(req.body)
    }

    // update description
    if (req.query.desc) {
      res.json({
        action: "Desc updated."
      })
    }

    // update status
    if (req.query.status) {
      res.json({
        action: "Status updated."
      })
    }

    // update deadline
    if (req.query.deadline) {
      res.json({
        action: "Deadline updated."
      })
    }
  }
})

module.exports = router

// search prjects and tasks

// TASK
// get a task
// get all tasks
// create a new task                                                  -> /newtask
// delete a task                                                      -> /task/id
// update a task                                                      -> /task/id
// update task name                                                   -> /task/id?name
// update task deadline                                               -> /task/id?deadline
// update task status                                                 -> /task/id?status
// create a new task in a project                                     -> /task
// delete a specific task in a specific project                       -> /project/id/task/id
// update a specific task in a specific project                       -> /project/id/task/id
// update a name of a specific task in a specific project             -> /project/id/task/id?name
// update a status of a specific task in a specific project           -> /project/id/task/id?status
// update a deadline of a specific task in a specific project         -> /project/id/task/id?deadline

// PROJECT
// create a new project                                               -> /project
// delete a project                                                   -> /project/id
// update project name                                                -> /project/id?name
// update project image                                               -> /project/id?img
// update project description                                         -> /project/id?desc
// update project status                                              -> /project/id?status
// update project deadline                                            -> /project/id?deadline