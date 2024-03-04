const express = require('express');
const app = express();
const PORT = 8000;
const connectDB = require('./config/mongodb'); // Import the function to connect to MongoDB
const cors = require('cors');
const User = require('./models/User'); // Assuming you have a User model defined
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Connect to MongoDB
app.use(connectDB);

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes

// Define your routes
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate user data here if needed
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds parameter

    // Create new user document
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.get('/home', (req, res) => {
  res.send('Aur lawde');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
