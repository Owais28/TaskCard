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
    totalTasks: 3
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