import express from 'express'

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Welcome to the Express JS server")
// })

// app.all('/about', (req,res)=>{
//     res.send("hello ")
// })

// app.get('/', (req,res)=>{
//     res.send("Welcome to the server")
// })

// String pattern
// app.get("/ab?cd", (req,res)=>{
//     res.send("this is running ")
// })

// app.get('/double-cb',(req,res,next)=>{
//     console.log("First Callback")
//     next();
// }, (req,res)=>{
//     res.send("This is The second callback")
// })

// Array of callback
// console.clear()
// const cb1 = (req,res,next)=>{
//     console.log("First Callback");
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log("second Callback");
//     next()
// }
// const cb3 = (req,res)=>{
//     console.log("third Callback");
//     res.send("this is the array of callbacks")
// }
// app.get('/array-cb', [cb1,cb2,cb3])


// const cb1 = (req,res,next)=>{
//     console.log("first callbackk");
//     next()
// }
// const cb2 = (req,res,next)=>{
//     console.log("second callbacl");
//     next()
// }

// app.get('/callback',[cb1,cb2],(req,res,next)=>{
//     console.log("third callback");
//     next()
// }, (req,res)=>{
//     res.send("array + nested callback are here")
// })

// refactor

app.route('/student')
.get( (req,res)=>res.send("Get All Student"))
.post( (req,res)=>res.send("Add A new Student"))
.put( (req,res)=>res.send("Update the current student by id"))
.delete((req,res)=>res.send("Delete the student by id"))

app.listen(4000, ()=>{
    console.log(`server is up baby!`);
    
})
