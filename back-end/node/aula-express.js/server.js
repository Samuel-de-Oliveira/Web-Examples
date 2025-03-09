import express from 'express';

const app  = express();
const port = 3000;

// Root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

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
  res.send(`Name: ${req.params.name}`)
});
// ----------------- //

// Run Server
app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});
