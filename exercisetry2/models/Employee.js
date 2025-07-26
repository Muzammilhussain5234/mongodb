const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  Name: String,
  salary: Number,
  Language: String,
  city: String,
  Ismanager: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
