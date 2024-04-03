// models/Grade.js
const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  grade: { type: Number, required: true },
});

module.exports = mongoose.model("Grade", gradeSchema);
