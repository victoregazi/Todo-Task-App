const express = require('express');
const mongoose = require('mongoose')
const ejs = require('ejs');
const connectDB = require('./config/db');
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const server = express();


connectDB();

server.use(express.urlencoded({ extended: true })); //string encoded object
server.use(express.json()); //JSON object
server.use(express.static("public")) //static file like javascript, html and css


server.set("view engine", "ejs");


server.use(require('./router/routes/index.router'))
server.use(require('./router/routes/todos.routes'))

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server started on ${PORT}`))