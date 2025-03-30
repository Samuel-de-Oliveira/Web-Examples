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
    schoolName: 'Colégio alfa',
    stylePath:  '/static/website-style.css',
  });
});
////////////

/// Run Server ///
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is running at http://localhost:${PORT}`);
});
