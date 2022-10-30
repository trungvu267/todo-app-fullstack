import { Router } from 'express'
import {
  createTodo,
  delTodo,
  getTodo,
  getTodoList,
  updateTodo,
} from '../../controller/todos.controller.js'
const router = Router()

router.route('/').get(getTodoList).post(createTodo)
router.route('/:id').get(getTodo).put(updateTodo).delete(delTodo)
export default router
