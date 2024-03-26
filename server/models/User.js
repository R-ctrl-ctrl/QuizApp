// server/models/user.js

const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  responses: [{
    quiz_id: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    rank: {
      type: Number,
      required: true
    }
  }]
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;