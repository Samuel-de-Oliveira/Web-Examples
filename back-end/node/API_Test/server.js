import express from 'express'

const app   = express(); // Get the app object
const Port  = 3000;

let Values = {
  home: '/',
  counter: 0,
};

// Home
app.get('/', (req, res) => {
  console.log(Values.counter + " " + req);
  Values.counter++; 
  res.send('<h1>Hello, world!</h1>');
});

// Users
app.get('/users', (req, res) => {
  res.json(Values);
});

app.listen(Port); // Turn on the server
