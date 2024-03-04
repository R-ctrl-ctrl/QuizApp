const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes


app.use('/',authRoutes)



app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.get('/home', (req, res) => {
  res.send('Aur lawde');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
