import { Schema, model } from 'mongoose'

const todoScheme = new Schema({
  title: {
    type: String,
    required: [true, 'you must be provide title'],
    minLength: 6,
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

export default model('Todo', todoScheme)
