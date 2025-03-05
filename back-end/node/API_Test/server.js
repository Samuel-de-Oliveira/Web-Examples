import express from 'express';

const app  = express(); // Get the app object
const Port = 3000;

var Values = {
  Visits_counter: 0, // Count visits
};

// Home
app.use('/', express.static('./assets/public')); // export public files to '/'
app.get('/count', (req, res, next) => {
  // TODO: Make this part of code work
  console.log(Values.Visits_counter + " " + req.url);
  Values.Visits_counter++;
  res.send('Counted 1 visit to the system!');
});

// Users
app.get('/users', (req, res) => {
  // Send a JSON file
  res.json(Values);
});
app.get('/users/:name', (req, res) => {
  console.log(`Username: ${req.params.name}`);
  res.send(`Username: ${req.params.name}`);
});

// Turn on the server
app.listen(Port, () => {
  console.log(`The server is runnign at: http://localhost:${Port}`);
});
