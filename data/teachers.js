const mongoose = require("mongoose");
const Teacher = require("./models/Teacher");

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

// Your teachers data
const teachersData = [
  {
    name: "Ariel Stitt",
    gender: "Female",
    email: "arielstitt@gmail.com",
  },
  {
    name: "Kasper Kain",
    gender: "Male",
    email: "kainkasper@gmail.com",
  },
];

// Insert teachers into MongoDB
async function seedTeachers() {
  try {
    // Clear existing data
    await Teacher.deleteMany({});
    // Insert new data
    await Teacher.insertMany(teachersData);
    console.log("Teachers seeded successfully.");
  } catch (err) {
    console.error("Error seeding teachers:", err.message);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Seed the teachers data
seedTeachers();
