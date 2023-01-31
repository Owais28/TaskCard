var mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,

  // name 
  name: {
    type: String,
    required: true
  },

  // username
  username: {
    type: String,
    required: true,
    unique: true
  },

  // email
  email: {
    type: String,
    required: true,
    unique: true
  },

  // password
  password: {
    type: String,
    required: true
  },

  // date of birth
  dob: {
    typeof: Schema.Types.Date,
  },

  // phone number
  phone: {
    type: Number,
    required: true,
    unique: true
  },

  // profile image (reference -> Image)
  profile_img: { type: Schema.Types.ObjectId, ref: 'Image' },

  // tasks (reference -> Task)
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],

  // projects (reference -> Project)
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('User', UserSchema)