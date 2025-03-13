import express from 'express';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const app       = express();
const router    = express.Router();
const port      = 3000;


// --- Root path --- //
// HTML file
app.get('/', (req, res) => {
  console.log('Ceci n\'est pas une website');
  res.sendFile(__dirname + '/Assets/index.html');
});

// CSS file
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/Assets/style.css');
});

// Javascript file
app.get('/app.js', (req, res) => {
  res.sendFile(__dirname + '/Assets/app.js');
});
// ----------------- //


// --- Users API --- //
app.get('/u', (req, res) => {
  console.log('Ceci n\'est pas un GET...');
  res.send(`Ceci n\'est pas un GET...`);
});

app.post('/u', (req, res) => {
  console.log('Ceci n\'est pas un POST...');
  res.send('Ceci n\'est pas un POST...');
});

app.delete('/u', (req, res) => {
  console.log('Ceci n\'est pas une DELETE...');
  res.send('Ceci n\'est pas une DELETE...');
});

app.get('/u/:name', (req, res) => {
  console.log(`Ceci n\'est pas le utilisateur ${req.params.name}...`);
  res.send(`Ceci n\'est pas le utilisateur ${req.params.name}...`);
});
// ----------------- //

// Run Server
app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR >>: ${err}.`);
  }
  console.log(`Server is working at http://localhost:${port}`);
});
