import express from 'express'
import students from './routes/student.js'
import teachers from './routes/teacher.js'
const app = express();

app.use('/student', students)
// app.use('/teacher', teachers)

// Query string
app.get('/product', (req,res)=>{
    const {category,brand} = req.query
    res.send(`the categroy is ${category} and the brand is ${brand}`)
})

// params
app.delete('/student/delete/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/student/:id', (req, res) => {
    console.log("the student id is: ", req.params.id);
    res.send("Thank you")
})

// app.get('/product/iphone/:model',(req,res)=>{
//     res.send(req.params.model)
//     console.log(req.params.model);

// })

// destructure the params
app.get('/product/iphone/:model', (req, res) => {
    const { model } = req.params;
    res.send(`the available iphone model is ${model}`)
})

// app.get('/zoo/:id/:year', (req, res) => {
//     const { id, year } = req.params
//     res.send(`i have a ${id} of ${year} old`)
// })

app.get('/product/order/:day/:month/:year', (req, res) => {
    const { day, month, year } = req.params
    res.send(`Your order will be delivered till ${day}/${month}/${year}`)
})

app.param("id",(req,res,next,id)=>{
    console.log(`id is ${id}`);
    next()
} )

app.get('/user/:id',(req,res)=>{
    console.log("this is the user path");
    
    res.send(`${req.params.id}`)
})


app.listen(4000, () => {
    console.log(`server is up baby!`);

})
