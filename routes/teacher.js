import express from 'express'

const router = express.Router()

router.get('/all', (req,res)=>{
    res.send("Get all Teacher")
})
router.post('/add', (req,res)=>{
    res.send("Add teacher")
})
router.put('/update', (req,res)=>{
    res.send("update  teacher by id")
})
router.delete('/delete', (req,res)=>{
    res.send("delete teacher by")
})

export default router;

