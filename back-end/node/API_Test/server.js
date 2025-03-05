import express from 'express';

const app  = express(); // Get the app object
const Port = 3000;

var Values = {
  Visits_counter: 0, // Count visits
};

// Home
app.use(express.static('./assets/public')) // export public files to '/'
app.get('/', (req, res) => {
  console.log(Values.Visits_counter + " " + req);
  Values.Visits_counter++;
});
app.post('/', (req, res) => {
  console.log('Ceci n\'est pas un POST...');
  res.send('Ceci n\'est pas un POST...');
});

// Users
app.get('/users', (req, res) => {
  // Send a JSON file
  res.json(Values);
});

// Turn on the server
app.listen(Port, () => {
  console.log(`The server is runnign at: http://localhost:${Port}`);
});
