import express from 'express'

const allStudent = (req,res)=>{
    res.send("All student")
}

const addStudent = (req,res)=>{
    res.send("Add a new student")
}

const updateStudent = (reqq,res)=>{
    res.send("Update student")
}

const deleteStudent = (req,res)=>{
    res.send("delete student")
}

export {addStudent,allStudent,updateStudent,deleteStudent}