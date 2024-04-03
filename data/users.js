const mongoose = require("mongoose");
const User = require("./models/User");

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

// Your users data
const usersData = [
  {
    id: 1,
    name: "Michael",
    gender: "Male",
    email: "mikesternk@gmail.com",
  },
  {
    id: 2,
    name: "Peter",
    gender: "Male",
    email: "peterpeter2@gmail.com",
  },
  {
    id: 3,
    name: "Kate",
    gender: "Female",
    email: "murigik@gmail.com",
  },
];

// Insert users into MongoDB
async function seedUsers() {
  try {
    // Clear existing data
    await User.deleteMany({});
    // Insert new data
    await User.insertMany(usersData);
    console.log("Users seeded successfully.");
  } catch (err) {
    console.error("Error seeding users:", err.message);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Seed the users data
seedUsers();
