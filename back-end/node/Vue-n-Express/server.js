import express from 'express';
import path from 'path';
import { title } from 'process';

// Constants
const __dirname = path.resolve(path.dirname(''));
const app  = express();
const PORT = 3000;

// Sets
app.set('view engine', 'hbs');

//// Root ////
// Redirect to home
app.get('/', (req, res) => {
  res.redirect(301, '/home');
});

// Static files
app.use('/static', express.static(__dirname + '/static'))
//////////////

//// Home ////
app.get('/home', (req, res) => {
  res.render('index', {
    title: "HomePage",
    stylePath: "static/blue.css",
    scriptPath: "static/mainPage.js",
  });
});
//////////////

//// Users ////
app.get('/u', (req, res) => {
  res.send('Users!');
});

app.get('/u/:user', (req, res) => {
  res.send(`Username: ${req.params.user}`);
});
///////////////

// Run server //
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is running at http://localhost:${PORT}`);
});
