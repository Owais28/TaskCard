// function that generate random alphanumeric 
export const generateRandomId = () => {
  return (Math.random().toString(15).substring(2))
}

// generate an empty project with a title
export const generateEmtyProject = (title) => (
  {
    title: title,
    description: "",
    cover: "",
    status: "",
    dueDate: null,
    boards: [],
    taskCount: 0
  }
)

// function to update document's title
export const setTitle = (title, options = { default: true }) => {
  if (options.default)
    document.title = "TaskCard → " + title;

  if (!options.default)
    document.title = title;
}