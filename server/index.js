const express = require('express');
const app = express();
const PORT = 8000

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



// Define a route for handling POST requests
app.get('/home', (req, res) => {
  res.send('Aur lawde');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
