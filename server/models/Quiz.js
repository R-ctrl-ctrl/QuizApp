const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  owner_name: {
      type: String,
      required :true
  },
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  data: [{
      question: {
          type: String,
          required: true
      },
      options: {
          type: [String],
          required: true
      },
      correctOption: {
          type: String,
          required: true
      }
  }],
  disabled: {
      type: Boolean,
      default: false // Initial value will be false
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
