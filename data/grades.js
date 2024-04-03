const mongoose = require("mongoose");
const Grade = require("./models/Grade");

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

// Your grades data
const gradesData = [
  {
    gradeId: 1,
    subject: "Math",
    userId: 1,
    grade: 92,
  },
  {
    gradeId: 2,
    subject: "English",
    userId: 1,
    grade: 92,
  },
  {
    gradeId: 3,
    subject: "Physics",
    userId: 1,
    grade: 78,
  },
  {
    gradeId: 1,
    subject: "Math",
    userId: 2,
    grade: 84,
  },
  {
    gradeId: 2,
    subject: "English",
    userId: 2,
    grade: 96,
  },
];

// Insert grades into MongoDB
async function seedGrades() {
  try {
    // Clear existing data
    await Grade.deleteMany({});
    // Insert new data
    await Grade.insertMany(gradesData);
    console.log("Grades seeded successfully.");
  } catch (err) {
    console.error("Error seeding grades:", err.message);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Seed the grades data
seedGrades();
