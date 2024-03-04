const mongoose = require('mongoose');
const uri = "mongodb+srv://Roshan:Roshan12@cluster0.6axdkax.mongodb.net/mainDB"

function connectMongoDB(req, res, next) {
  async function connectToMongoDB() {
    try {
      // Connect to MongoDB
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB successfully');
      next(); 
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      next(error); //
    }
  }
  connectToMongoDB();
}

module.exports = connectMongoDB;
