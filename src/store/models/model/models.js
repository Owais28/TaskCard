export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};

export const taskManager = {
  state: {
    tasks: [{
      task: "Kick Of meeting project",
      id: 1
    },
    {
      task: "Kick Of meeting project",
      id: 2
    },
    {
      task: "Kick Of meeting project",
      id: 3
    },
    {
      task: "Kick Of meeting project",
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
      task: "Kick Of meeting project",
      id: 7
    }, {
      task: "Kick Of meeting project",
      id: 8
    }, {
      task: "Kick Of meeting project",
      id: 9
    }, {
      task: "Kick Of meeting project",
      id: 10
    },
    ],
    totalTaszks: 3
  },
  reducers: {
    deleteTask(state, payload) {
      return {
        totalTasks: state.totalTasks - 1,
        tasks: state.tasks.filter(
          task => task.id !== payload
        )
      }
    }
  }
}

/*
{
    "id": "",
    "title": "saa",
    "description": "",
    "status": "to-do",
    "dueDate": "2023-01-05T16:36:12.897Z",
    "boards": [
        {
            "id": "",
            "title": "saa",
            "description": "",
            "status": "to-do",
            "dueDate": "2023-01-05T16:36:12.897Z",
            "subTask": [
                {
                    "id": "",
                    "title": "",
                    "dueDate": "2023-01-05T16:36:12.897Z"
                }
            ]
        }
    ],
    "taskCount": 10
}
*/

// function that generate random alphanumeric 
const generateRandomId = () => {
  return (Math.random().toString(15).substring(2))
}

const generateEmtyProject = (title) => (
  {
    "id": "",
    "title": title,
    "description": "",
    "status": "",
    "dueDate": null,
    "boards": [
    ],
    "taskCount": 10
  }
)
export const project = {
  state: new Map(),
  reducers: {
    // reducer to delete a specific project
    deleteProject: (state, id) => {
      state.delete(id)
      return state
    },

    // reducer to create a new project having only title
    newProject: (state, payload) =>
      state.set(generateRandomId(), generateEmtyProject(payload))
    ,

    // update project name 
    updateProjectTitle: (state, payload) => {
      const previousState = state.get(payload.id)
      state.set(payload.id, { ...previousState, title: payload.title })
      return state
    }

  }
}