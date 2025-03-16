import express from 'express';
import path from 'path';

// Constants
const __dirname = path.resolve(path.dirname(''));
const app       = express();
const router    = express.Router();
const port      = 3000;

// Vars
var status = {
  visitsCounter: 0,
};


// --- Root path --- //
/// Home redirect
app.get('/', (req, res) => {
  console.log(`Redirect user to /home...`);
  res.redirect(301, '/home');
});

/// Node modules
app.use('/node_modules', express.static('node_modules'));
// ----------------- //


// --- Home path --- //
/// HTML file
app.get('/home', (req, res) => {
  console.log('Ceci n\'est pas une website');
  console.log(`Request: ${req.ip}`)
  res.sendFile(__dirname + '/Assets/Home/index.html');
});

/// CSS file
app.get('/home/style.css', (req, res) => {
  res.sendFile(__dirname + '/Assets/Home/style.css');
});

/// Javascript file
app.get('/home/app.js', (req, res) => {
  res.sendFile(__dirname + '/Assets/Home/app.js');
});
// ----------------- //


// --- Users API --- //
/// GET HTML
app.get('/u', (req, res) => {
  console.log('Ceci n\'est pas un GET...');
  status.visitsCounter++;
  res.sendFile(__dirname + '/Assets/users/index.html');
});

/// GET Javascript
app.get('/u/app.js', (req, res) => {
  res.sendFile(__dirname + '/Assets/users/app.js');
});

/// POST
app.post('/u', (req, res) => {
  console.log('Ceci n\'est pas un POST...');
  res.send('Ceci n\'est pas un POST...');
});

/// DELETE
app.delete('/u', (req, res) => {
  console.log('Ceci n\'est pas une DELETE...');
  res.send('Ceci n\'est pas une DELETE...');
});

/// Take a look in the user
app.get('/u/:name', (req, res) => {
  console.log(`Ceci n\'est pas le utilisateur ${req.params.name}...`);
  res.send(
    `Ceci n\'est pas le utilisateur ${req.params.name}... ${status.visitsCounter}`
  );
});
// ----------------- //


// Run Server
app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR >>: ${err}.`);
    process.exit();
  }
  console.log(`Server is working at http://localhost:${port}`);
});
