import express from 'express';
import mongodb from 'mongodb';
import exphbs  from 'express-handlebars';
import path    from 'path';

// Constants
const __dirname = path.resolve(path.dirname(''));
const app  = express();
const PORT = 3000;
const hbs  = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
});

// Sets
app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

/// Root path ///
app.get('/', (req, res) => {
  res.redirect(301, '/home');
});

app.use('/static', express.static(__dirname + '/static'));
////////////////

/// Home ///
app.get('/home', (req, res) => {
  res.render('homePage', {
    title: 'Colégio alfa',
    stylePath:  '/static/website-style.css',
    pageInfo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  });
});
////////////

/// Users ///
app.get('/u', (req, res) => {
  res.send('No user especified!');
});

app.get('/u/:username', (req, res) => {
  let username = req.params.username;
  if (username) {
    res.send(`Hello from ${username}`);
  }
});
////////////


/// Run Server ///
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is running at http://localhost:${PORT}`);
});
