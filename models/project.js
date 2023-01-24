var mongoose = require('mongoose')
const { Schema } = mongoose

// Project Schema
const projectSchema = new Schema({

  _id: Schema.Types.ObjectId,
  // title
  title: {
    type: String,
    required: true,
  },

  // description
  desc: String,

  // status (enum['todo' | 'in-progress' | 'done'])
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo'
  },

  // due date (Date)
  dueDate: Schema.Types.Date,

  // cover image (reference -> Image)
  cover: { type: Schema.Types.ObjectId, ref: 'Image' },

  // boards {todo, inProgress, done}
  boards: {
    todo: {
      type: Schema.Types.ObjectId, ref: "Task" || "GroupedTask"
    },
    inProgress: {
      type: Schema.Types.ObjectId, ref: "Task" || "GroupedTask"
    },
    done: {
      type: Schema.Types.ObjectId, ref: "Task" || "GroupedTask"
    }
  },
})

export default mongoose.model('Project', projectSchema)