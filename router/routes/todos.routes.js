const express = require('express');
const Todo = require('../../models/Todo.js')

const router = express.Router();

//Create a Todo Task
router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    console.log(todo);
    const newTodo = new Todo({todo})

    newTodo.save()
    .then(() => {
        console.log('Successfully')
        res.redirect("/Todo-Task")
    })
    .catch(err => {
        console.log(err);
    })
})


//Delete a Task
router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params
    Todo.deleteOne({_id})
    .then(() => {
        console.log('Successfully Deleted Todo')
        res.redirect("/Todo-Task")
    })
    .catch(err => {
        console.log(err);
    })
})

//Get All Todo Task
router.get('/GetallTask', async (req, res) => {
    try{
        const { todo } = await Todo.find();
        res.render("all.todo.ejs", { todo });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;