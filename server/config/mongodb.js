const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb+srv://Roshan:Roshan12@cluster0.6axdkax.mongodb.net/Users';

// Middleware function to connect to MongoDB

function connectToMongoDBMiddleware(req, res, next) {
  async function connectToMongoDB() {
    try {
      // Connect to MongoDB
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB successfully');
      // You can start using your MongoDB database here
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      next(error); // Pass the error to the error handling middleware
    }
  }

  // Call the function to connect to MongoDB
  connectToMongoDB();
}

module.exports = connectToMongoDBMiddleware;