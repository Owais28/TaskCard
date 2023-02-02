var mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  dateOfBirth: {
    typeof: Schema.Types.Date,
  },

  phone: {
    type: Number,
    required: true,
    unique: true
  },

  profileImg: { type: Schema.Types.ObjectId, ref: 'Image' },

  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],

  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('User', UserSchema)