// models/Teacher.js
const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Teacher", teacherSchema);
