import express from 'express'
import { addStudent, allStudent, deleteStudent, updateStudent } from '../controller/student.js';

const router = express.Router()
 
router.get('/all', allStudent)
router.post('/add', addStudent)
router.put('/update', updateStudent)
router.delete('/delete', deleteStudent)

// router.get('/all', (req,res)=>{
//     res.send("Get all student")
// })
// router.post('/add', (req,res)=>{
//     res.send("Add student")
// })
// router.put('/update', (req,res)=>{
//     res.send("update  student by id")
// })
// router.delete('/delete', (req,res)=>{
//     res.send("delete student by  id")
// })

export default router;

