import { Router as ExpressRouter } from 'express'
import todos from './todos/todos.route.js'
const Router = ExpressRouter()

Router.get('/', (req, res) => {
  res.send('Hello From Server')
})
Router.use('/todos', todos)

export default Router
