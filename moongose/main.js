import mongoose from "mongoose";
import express from "express";
import { Todo } from "./model/todo.js";


let a=await mongoose.connect("mongodb://localhost:27017/")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo=new Todo({"title": "Sample Todo", "author": "Author Name", "body": "This is a sample todo item.","hidden":false});
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
