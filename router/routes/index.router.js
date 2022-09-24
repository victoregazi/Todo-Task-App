const express = require('express');
const Todo = require('../../models/Todo.js')


const todo = express.Router();

//Render the Todo task
todo.get('/Todo-Task' , async(req, res) => {
    const allTodo = await Todo.find();
    res.render('index', {todo: allTodo});
    
})




module.exports = todo;