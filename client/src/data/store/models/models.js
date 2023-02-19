import { generateRandomId, generateEmtyProject } from "../../../utils"

// task manager
export const taskManager = {
  state: {
    tasks: [{
      task: "ProjectOne sdsd",
      id: 1
    },
    {
      task: "Task 2",
      id: 2
    },
    {
      task: "Kick Of meeting project",
      id: 3
    },
    {
      task: "Task 4",
      id: 4
    },
    {
      task: "Kick Of meeting project",
      id: 5
    },
    {
      task: "Kick Of meeting project",
      id: 6
    }, {
      task: "Task 7",
      id: 7
    }, {
      task: "Kick Of meeting project",
      id: 8
    }, {
      task: "Kick Of meeting project",
      id: 9
    }, {
      task: "Task 10",
      id: 10
    },
    ],
    totalTaszks: 10
  },
  reducers: {
    deleteTask(state, payload) {
      return {
        totalTasks: state.totalTasks - 1,
        tasks: state.tasks.filter(
          task => task.id !== payload
        )
      }
    },
    addTask(state, payload) {
      const oldTasks = state.tasks
      oldTasks.push({ task: payload.task, id: oldTasks[oldTasks.length - 1].id + 1 })
      return {
        totalTasks: state.totalTasks + 1,
        tasks: oldTasks
      }
    }
  }
}


// project model
export const project = {
  // Map for all projects
  state: new Map(),

  // reducers
  reducers: {
    // delete a specific project
    deleteProject: (state, id) => {
      state.delete(id)
      return state
    },

    // create a new project having only title of the project
    newProject: (state, payload) =>
      state.set(generateRandomId(), generateEmtyProject(payload))
    ,

    // update project name 
    updateProjectTitle: (state, payload) => {
      const previousState = state.get(payload.id)
      state.set(payload.id, { ...previousState, title: payload.title })
      return state
    },

    // set due date
    setDueDate: (state, payload) => {
      const previousState = state.get(payload.id)
      state.set(payload.id, { ...previousState, dueDate: payload.date })
      return state
    },

    // add new board
    addBoard: (state, payload) => {
      const previousState = state.get(payload.id)
      state.set(payload.id, { ...previousState, boards: [...previousState.boards, payload.board] })
    },

    // add cover
    addCover: (state, payload) => {

    },

    // Effects
    effects: (dispatch) => ({

      // add cover
      addCoverAsync: async (payload, rootState) => {
        const res = await (await fetch("").then(res => res.json()))

      }
    })

  }
}

// loading model
export const loading = {
  state: true,
  reducers: {
    setLoading: (state, payload) => {
      return state = payload
    }
  }
}