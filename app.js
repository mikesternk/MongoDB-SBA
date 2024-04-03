const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const gradesRouter = require("./routes/grades");
const teachersRouter = require("./routes/teachers");
const app = express();
const port = 5001;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mikesternk:Rockster2002!@michaelscluster.mgk38zl.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Views
app.set("views", "views");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const Grade = require("./models/grade");
const Teacher = require("./models/teacher");
const User = require("./models/user");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);

app.use("/users", usersRouter);
app.use("/grades", gradesRouter);
app.use("/teachers", teachersRouter);

// Lesson error handling middleware
app.use((req, res) => {
  res.status(404);
  res.json({ error: `Resource not found` });
});

// Listener
app.listen(port, () => {
  console.log(`Express is running on port: ${port}`);
});
