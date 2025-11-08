import express from 'express'
import students from './routes/student.js'
const app = express();

app.use('/student', students)

app.listen(4000, ()=>{
    console.log(`server is up baby!`);
    
})
