import { StatusCodes } from 'http-status-codes'
import Todo from '../models/todo.model.js'
const getTodoList = async (req, res, next) => {
  const todoList = await Todo.find()
  res.status(StatusCodes.OK).json(todoList)
}
const createTodo = async (req, res, next) => {
  const { title, description } = req.body
  try {
    const todo = await Todo.create({ title, description })
    res.status(StatusCodes.OK).json(todo)
  } catch (error) {
    const { message } = error.errors.title.properties
    res.status(StatusCodes.BAD_REQUEST).json(message)
  }
}
const getTodo = async (req, res, next) => {
  const { id: todoId } = req.params
  try {
    const todo = await Todo.findOne({ _id: todoId })
    if (!todo) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: `Not found todo ` })
      return
    }
    res.status(StatusCodes.OK).json(todo)
  } catch (error) {
    console.log(error)
  }
}

const updateTodo = async (req, res, next) => {
  const { id: todoId } = req.params

  const { title, description } = req.body
  try {
    const todo = await Todo.findOneAndUpdate(todoId, { title, description })
    res.status(StatusCodes.OK).json(todo)
  } catch (error) {
    console.log(error)
  }
}
const delTodo = async (req, res, next) => {
  const { id: todoId } = req.params
  const todo = await Todo.findByIdAndRemove({ _id: todoId })
  res.status(StatusCodes.OK).json(todo)
}

export { getTodoList, createTodo, getTodo, updateTodo, delTodo }
