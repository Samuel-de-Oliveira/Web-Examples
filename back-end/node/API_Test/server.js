import express from 'express'

const app = express(); // Get the app object

// Home
app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});

// Users
app.get('/users', (req, res) => {
  res.send('<h1>There\'s no users for now!</h1>')
});

app.listen(3000); // Turn on the server
