import express from 'express'
import { getAllTasks,getTaskById,updateTask,creteTask,deleteTask } from '../controller/tasks.js';


const router=express.Router();



router.get('/',getAllTasks )

router.post('/', creteTask)

router.get('/:id',getTaskById )

router.delete('/:id',deleteTask )

router.put('/:id',updateTask )





export default router;
