import express from 'express';
import exphps  from 'express-handlebars';
import path    from 'path';
import bodyParser from 'body-parser';

const __dirname = path.resolve(path.dirname(""));
const app = express();
const PORT = 3000;
const hbs  = exphps.create();

app.set('view engine', 'hbs');
app.engine('handlebars', hbs.engine);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is running at http://127.0.0.1:${PORT}/`);
});
