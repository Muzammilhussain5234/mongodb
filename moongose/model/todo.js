import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String, 
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

export const Todo = mongoose.model('Todo', TodoSchema);