const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const Quiz = require('./models/Quiz');
const connectMongoDB = require('./middlewares/connectMongoDB');
const Quizresp = require('./models/Quizresponse');
const User = require('./models/User');

app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes
app.use('/', authRoutes)

async function disableQuizAndPerformActions(quizId) {
  try {
    const quiz = await Quiz.findById(quizId);
    quiz.disabled = true;
    await quiz.save()
    
    const quizresp = await Quizresp.findOne({ quiz_id: quizId });
    quizresp.results.sort((a, b) => b.score - a.score);
    quizresp.results.forEach((result, index) => {
      result.rank = index + 1;
    });
    await quizresp.save()
    console.log(`Quiz with ID ${quizId} has been disabled and actions have been performed.`);

    const arr = quizresp.results
    for (const item of arr) {
      const { username, score, rank } = item;
      const user = await User.findOne({ name: username });
      if (user) {
          user.responses.push({
            quiz_id: quizId,
            score: score,
            rank: rank
          });
        await user.save();
      } else {
        console.log(`User with username ${username} not found.`);
      }
    }

  } catch (error) {
    console.error('Error disabling quiz:', error);
  }
}

function scheduleQuizDisabling(quizId) {
  setTimeout(() => {
    disableQuizAndPerformActions(quizId);
  }, 3 * 60 * 1000);
}

// storing quizes to database
app.post('/storequiz', connectMongoDB, async (req, res) => {
  const { owner_name, title, description, data } = req.body;
  for (let i = 0; i < data.length; i++) {
    data[i].options = JSON.parse(data[i].options)
  }
  try {
    const quiz = await Quiz.create({ owner_name, title, description, data });
    scheduleQuizDisabling(quiz._id);
    res.json({ message: 'ok' });
  } catch (err) {
    res.json({ message: err })
  }
  console.log(data)

});

app.get('/getquizdata', connectMongoDB, async (req, res) => {
  try {
    // Fetch data from MongoDB
    const data = await Quiz.find(); // Replace YourModel with your actual Mongoose model

    // Send data as JSON response
    res.json({ message: "ok", data });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/quiz/:id', connectMongoDB, async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// api for storing users responses
app.post('/quiz-response', connectMongoDB, async (req, res) => {
  const { quiz_id, username, score } = req.body;
  try {
    let quizResponse = await Quizresp.findOne({ quiz_id });

    if (!quizResponse) {
      quizResponse = new Quizresp({ quiz_id, results: [{ username, score }] });
    } else {
      quizResponse.results.push({ username, score });
    }
    await quizResponse.save();
    res.status(200).json({ message: 'Quiz response saved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


// API for leaderboard purpuse
app.get('/quiz/:quizId', connectMongoDB, async (req, res) => {
  const quizId = req.params.quizId;

  try {
    const quizResponse = await Quizresp.findOne({ quiz_id: quizId });
    if (!quizResponse) {
      return res.status(404).json({ message: 'Quiz response not found' });
    }
    res.status(200).json({ data: quizResponse });
  } catch (error) {
    console.error('Error fetching quiz response:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/api/users/:username',connectMongoDB, async (req, res) => {
  try {
    console.log("yess")
      const username = req.params.username;
      const user = await User.findOne({ name: username });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json({ responses: user.responses });
  } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/',(req,res)=>{
  res.json("hello")
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
