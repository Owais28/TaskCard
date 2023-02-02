const express = require('express')
const TaskController = require('./task/TaskController')
const ProjectController = require('./project/ProjectController')
const router = express.Router()

// get all tasks
router.get('/task', TaskController.all)
// get a specific task
router.get('/task/:id', TaskController.one)

// create a task
router.post('/task', TaskController.create)
// create a task in a project
router.post('/task/:projectId', TaskController.createInProject)

// delete a task
router.delete('/task/:id', TaskController.delete)
// delete a task from a project 
router.delete('/task/:taskId/project/:projectId/', TaskController.deletInProject)

// update a task
router.put('/task/:id', TaskController.update)
// update the task from the project
router.put('/task/:taskId/project/:projectId', TaskController.updateInProject)
router.put('/task/project/:projectId', ProjectController.createTaskInProject)
router.put('/project', ProjectController.create)

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
// update project name                                                -> /project/id?name
// update project image                                               -> /project/id?img
// update project description                                         -> /project/id?desc
// update project status                                              -> /project/id?status
// update project deadline                                            -> /project/id?deadline
// delete a project                                                   -> /project/id