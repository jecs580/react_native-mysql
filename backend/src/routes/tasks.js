import {Router} from 'express'
import {addTask, deleteTask, getTask, getTaskCount, getTasks, updateTask} from '../controllers/tasks'
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: task enpoint
 *   
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */
router.get('/tasks',getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total task couter
 *    tags: [Tasks]
 */
router.get('/tasks/count',getTaskCount)

/**
 * @swagger
 * /tasks/id:
 *  get:
 *    summary: Get a task
 *    tags: [Tasks]
 */
router.get('/tasks/:id',getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *     summary: Save a new task
 *     tags: [Tasks]
 */
router.post('/tasks', addTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *    sumary: delete a task by id
 *    tags: [Tasks]
 */
router.delete('/tasks/:id',deleteTask)

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *    sumary: Update a task by id
 *    tags: [Tasks]
 */
router.put('/tasks/:id',updateTask)

export default router;