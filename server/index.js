const express = require('express');
const app = express();
const PORT = 8000


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.get('/home', (req, res) => {
  res.send('Aur lawde');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
