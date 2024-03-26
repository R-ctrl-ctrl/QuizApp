const mongoose = require('mongoose');
const cron = require('node-cron');

const quizrespSchema = new mongoose.Schema({
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId ,
    unique: true
  },
  results: [{
    username: {
      type: String
    },
    score: {
      type: Number,
      required: true
    },
    rank: {
      type: Number,
      default: 0 
    }
  }]
});

const Quizresp = mongoose.model('Quizresponse', quizrespSchema);

// Function to calculate ranks based on scores
// const calculateRanks = async () => {
//   try {
//     const quizResponses = await Quizresp.find();
//     for (const response of quizResponses) {
//       response.results.sort((a, b) => b.score - a.score);
//       response.results.forEach((result, index) => {
//         result.rank = index + 1;
//       });
//       await response.save();
//     }
//     console.log('Ranks updated successfully');
//   } catch (error) {
//     console.error('Error updating ranks:', error);
//   }
// };

// // Schedule the function to run every 3 minutes
// cron.schedule('*/3 * * * *', () => {
//   console.log('Updating ranks...');
//   calculateRanks();
// });

module.exports = Quizresp;
